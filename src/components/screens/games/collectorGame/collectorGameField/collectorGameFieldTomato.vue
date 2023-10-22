<template>
  <div>
    <victoryBlockMiniGameTomato />
    <lossBlockMiniGameTomato />
    <div :class='[styles.blackScreen, {[styles.blackScreenNon]: isBlackScreenShow}]'></div>

    <div :class='styles.gameWrapper'>

      <div :class='styles.mobileScreen'>
        <div :class='styles.mobileLeft' id='mobileLeftTomato'></div>
        <div :class='styles.mobileRight' id='mobileRightTomato'></div>
      </div>

      <div :class='styles.border'>
        <div :class='styles.gameField'>
          <div :class='[styles.decorations, styles.leftTomato]'></div>

          <div :class='styles.cellWrapper'>
            <div v-for='cell in cells' :key='cell.id'>
              <div :class='[styles.cell]'>
                <div :class='[{[styles.isTomatoGreen]: cell.isTomatoGreen}]'></div>
                <div :class='[{[styles.isTomatoRed]: cell.isTomatoRed}]'></div>
                <div :class='[{[styles.isTomatoDarkGreen]: cell.isTomatoDarkGreen}]'></div>
                <div :class='[
                  {
                    [styles.isCollector]: cell.isCollector,
                    [styles.isCollectorMovedLeft]: isCollectorMovedLeft,
                    [styles.isCollectorMovedRight]: isCollectorMovedRight,
                  }
                ]'></div>
              </div>
            </div>
          </div>

          <div :class='[styles.decorations, styles.rightTomato]'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { EN_CollectorGameGetters } from '@/store/modules/collectorGame/getters'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import { 
  ICellTomato,
  getRandomNumberGenerator,
  generatorCellsTomato,
  generatorCollectorTomato,

  generatorCollectorMoveLeftTomato,
  generatorCollectorMoveRightTomato,
allColumns,
lastRow
} from '../helpers/helpers'
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'
import victoryBlockMiniGameTomato from '../victoryBlockGame/victoryBlockMiniGameTomato.vue'
import lossBlockMiniGameTomato from '../lossBlockGame/lossBlockMiniGameTomato.vue'
import { EN_CONFIG } from '../config/config'

export default Vue.extend({
  name: 'collectorGameFieldTomato',
  data: () => ({
    isBlackScreenShow: false,
    cells: generatorCellsTomato(),
    previousColumn: 0,

    // generateTomatoGreen: false,
    currentCellTomatoGreen: 0,
    currentIndexCellTomatoGreen: 0,
    previousColumnTomatoGreen: 0,

    // generateTomatoRed: false,
    currentCellTomatoRed: 0,
    currentIndexCellTomatoRed: 0,
    previousColumnTomatoRed: 0,
    
    // generateTomatoDarkGreen: false,
    currentCellTomatoDarkGreen: 0,
    currentIndexCellTomatoDarkGreen: 0,
    previousColumnTomatoDarkGreen: 0,

    // generateCollector: false,
    currentCellCollector: 117,
    currentIndexCellCollector: 0,
    isCollectorMovedLeft: false,
    isCollectorMovedRight: false,
    isMovingLeft: false,
    isMovingRight: false,
  }),
  components: {
    victoryBlockMiniGameTomato,
    lossBlockMiniGameTomato
  },
  created() {
    this.START_TOMATO_LEVEL_COL()
    this.START_FINISH_TIMER_TOMATO_COL()

    setTimeout(() => {
      this.isBlackScreenShow = true
    }, EN_CONFIG.TIMING_BLACK_SCREEN)
  },
  watch: {
    GET_TIMER_TOMATO_COL() {
      if (this.GET_TIMER_TOMATO_COL === 0 && this.GET_TOMATO_LEVEL_COL && this.GET_POINTS_TOMATO_COL > EN_CONFIG.MINIMAL_POINTS_TOMATO) {
        this.PLUS_POINTS_COL()
        
        this.FINISH_TOMATO_LEVEL_COL()
        this.START_FINISH_TIMER_TOMATO_COL()

        this.COMPLETE_TOMATO_LEVEL_COL()
        this.SHOW_VICTORY_BLOCK_TOMATO_COL()
      }

      if (this.GET_TIMER_TOMATO_COL === 0 && this.GET_TOMATO_LEVEL_COL && this.GET_POINTS_TOMATO_COL < EN_CONFIG.MINIMAL_POINTS_TOMATO) {
        this.FINISH_TOMATO_LEVEL_COL()
        this.START_FINISH_TIMER_TOMATO_COL()
        this.START_FINISH_ALL_TOMATOES_INTERVAL_COL()
        
        this.SHOW_LOSS_BLOCK_TOMATO_COL()
      }

      if (this.GET_TIMER_TOMATO_COL < 0) {
        this.FINISH_TOMATO_LEVEL_COL()
        this.START_FINISH_TIMER_TOMATO_COL()
        this.START_FINISH_ALL_TOMATOES_INTERVAL_COL()
        
        this.SHOW_LOSS_BLOCK_TOMATO_COL()
      }
    },
    GET_TOMATO_LEVEL_COL() {
      const mobileLeft = document.getElementById('mobileLeftTomato')
      const mobileRight = document.getElementById('mobileRightTomato')

      if (this.GET_TOMATO_LEVEL_COL) {
        this.GENERATE_COLLECTOR_TOMATO_COL()
        this.START_FINISH_ALL_TOMATOES_INTERVAL_COL()

        mobileLeft?.addEventListener('click', () => {
           if (!this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_TOMATO_LEVEL_COL) {
            console.log('left')
            this.isMovingLeft = true
            if (this.isMovingLeft) {
              this.currentCellCollector -= 1
              this.currentIndexCellCollector -= 1

              if (this.currentCellCollector > 116) {
                this.isCollectorMovedLeft = true
                this.moveCollectorLeft()
              } else {
                this.currentCellCollector = 129
                this.currentIndexCellCollector = 12
                this.isCollectorMovedLeft = true
                this.moveCollectorLeft()
              }
            }
          } 
        })

        mobileRight?.addEventListener('click', () => {
          if (!this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_TOMATO_LEVEL_COL) {
            console.log('right')
            this.isMovingRight = true
            if (this.isMovingRight) {
              this.currentCellCollector += 1
              this.currentIndexCellCollector += 1

              if (this.currentCellCollector < 130) {
                this.isCollectorMovedRight = true
                this.moveCollectorRight()
              } else {
                this.currentCellCollector = 117
                this.currentIndexCellCollector = 0
                this.isCollectorMovedRight = true
                this.moveCollectorRight()
              }
            } 
          }
        })

        document.addEventListener('keyup', (event) => {
          if (event.code == 'KeyA' && !this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_TOMATO_LEVEL_COL) {
            console.log('left')
            this.isMovingLeft = true
            if (this.isMovingLeft) {
              this.currentCellCollector -= 1
              this.currentIndexCellCollector -= 1

              if (this.currentCellCollector > 116) {
                this.isCollectorMovedLeft = true
                this.moveCollectorLeft()
              } else {
                this.currentCellCollector = 129
                this.currentIndexCellCollector = 12
                this.isCollectorMovedLeft = true
                this.moveCollectorLeft()
              }
            }
          } 

          if (event.code == 'KeyD' && !this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_TOMATO_LEVEL_COL) {
            console.log('right')
            this.isMovingRight = true
            if (this.isMovingRight) {
              this.currentCellCollector += 1
              this.currentIndexCellCollector += 1

              if (this.currentCellCollector < 130) {
                this.isCollectorMovedRight = true
                this.moveCollectorRight()
              } else {
                this.currentCellCollector = 117
                this.currentIndexCellCollector = 0
                this.isCollectorMovedRight = true
                this.moveCollectorRight()
              }
            } 
          }
        })
      }

      if (!this.GET_TOMATO_LEVEL_COL) {
        this.cells = generatorCellsTomato()

        this.START_FINISH_ALL_TOMATOES_INTERVAL_COL()

        this.NOT_GENERATE_TOMATO_GREEN_COL()
        this.NOT_GENERATE_TOMATO_RED_COL()
        this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        this.NOT_GENERATE_COLLECTOR_TOMATO_COL()

        mobileLeft?.removeEventListener('click', () => {
           if (!this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_TOMATO_LEVEL_COL) {
            console.log('left')
            this.isMovingLeft = true
            if (this.isMovingLeft) {
              this.currentCellCollector -= 1
              this.currentIndexCellCollector -= 1

              if (this.currentCellCollector > 116) {
                this.isCollectorMovedLeft = true
                this.moveCollectorLeft()
              } else {
                this.currentCellCollector = 129
                this.currentIndexCellCollector = 12
                this.isCollectorMovedLeft = true
                this.moveCollectorLeft()
              }
            }
          } 
        })

        mobileRight?.removeEventListener('click', () => {
          if (!this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_TOMATO_LEVEL_COL) {
            console.log('right')
            this.isMovingRight = true
            if (this.isMovingRight) {
              this.currentCellCollector += 1
              this.currentIndexCellCollector += 1

              if (this.currentCellCollector < 130) {
                this.isCollectorMovedRight = true
                this.moveCollectorRight()
              } else {
                this.currentCellCollector = 117
                this.currentIndexCellCollector = 0
                this.isCollectorMovedRight = true
                this.moveCollectorRight()
              }
            } 
          }
        })

        document.removeEventListener('keyup', (event) => {
          if (event.code == 'KeyA' && !this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_TOMATO_LEVEL_COL) {
            this.isMovingLeft = true
            if (this.isMovingLeft) {
              this.currentCellCollector -= 1
              this.currentIndexCellCollector -= 1

              if (this.currentCellCollector > 116) {
                this.isCollectorMovedLeft = true
                this.moveCollectorLeft()
              } else {
                this.currentCellCollector = 129
                this.currentIndexCellCollector = 12
                this.isCollectorMovedLeft = true
                this.moveCollectorLeft()
              }
            }
          } 

          if (event.code == 'KeyD' && !this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_TOMATO_LEVEL_COL) {
            this.isMovingRight = true
            if (this.isMovingRight) {
              this.currentCellCollector += 1
              this.currentIndexCellCollector += 1

              if (this.currentCellCollector < 130) {
                this.isCollectorMovedRight = true
                this.moveCollectorRight()
              } else {
                this.currentCellCollector = 117
                this.currentIndexCellCollector = 0
                this.isCollectorMovedRight = true
                this.moveCollectorRight()
              }
            } 
          }
        })
      }
    },
    currentCellTomatoGreen() {
      if (
          this.currentCellCollector - 13 === this.currentCellTomatoGreen || 
          this.currentCellCollector === this.currentCellTomatoGreen
        ) {
        this.PLUS_POINTS_TOMATO_GREEN_COL()
      }
    },
    currentCellTomatoRed() {
      if (this.currentCellCollector - 13 === this.currentCellTomatoRed ||
          this.currentCellCollector === this.currentCellTomatoRed
        ) {
        this.PLUS_POINTS_TOMATO_RED_COL()
      }
    },
    currentCellTomatoDarkGreen() {
      if (this.currentCellCollector - 13 === this.currentCellTomatoDarkGreen ||
          this.currentCellCollector === this.currentCellTomatoDarkGreen
        ) {
        this.PLUS_POINTS_TOMATO_DARK_GREEN_COL()
      }
    },
    GET_GENERATE_TOMATO_GREEN_COL() {
      if (this.GET_GENERATE_TOMATO_GREEN_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makeTomatoGreen(allColumns[1], 1, 0)
          this.makeTomatoGreenDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 2) {
          this.makeTomatoGreen(allColumns[2], 2, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 3) {
          this.makeTomatoGreen(allColumns[3], 3, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 4) {
          this.makeTomatoGreen(allColumns[4], 4, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 5) {
          this.makeTomatoGreen(allColumns[5], 5, 0)
          this.makeTomatoGreenDouble(allColumns[5 + 3], 5 + 3, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 6) {
          this.makeTomatoGreen(allColumns[6], 6, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 7) {
          this.makeTomatoGreen(allColumns[7], 7, 0)
          this.makeTomatoGreenDouble(allColumns[7 + 3], 7 + 3, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 8) {
          this.makeTomatoGreen(allColumns[8], 8, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 9) {
          this.makeTomatoGreen(allColumns[9], 9, 0)
          this.makeTomatoGreenDouble(allColumns[9 - 3], 9 - 3, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 10) {
          this.makeTomatoGreen(allColumns[10], 10, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 11) {
          this.makeTomatoGreen(allColumns[11], 11, 0)
          this.makeTomatoGreenDouble(allColumns[11 - 5], 11 - 5, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 12) {
          this.makeTomatoGreen(allColumns[12], 12, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }
      }
    },
    GET_GENERATE_TOMATO_RED_COL() {
      if (this.GET_GENERATE_TOMATO_RED_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makeTomatoRed(allColumns[1], 1, 0)
          this.makeTomatoRedDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 2) {
          this.makeTomatoRed(allColumns[2], 2, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 3) {
          this.makeTomatoRed(allColumns[3], 3, 0)
          this.makeTomatoRedDouble(allColumns[3 + 5], 3 + 5, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 4) {
          this.makeTomatoRed(allColumns[4], 4, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 5) {
          this.makeTomatoRed(allColumns[5], 5, 0)
          this.makeTomatoRedDouble(allColumns[5 + 3], 5 + 3, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 6) {
          this.makeTomatoRed(allColumns[6], 6, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 7) {
          this.makeTomatoRed(allColumns[7], 7, 0)
          this.makeTomatoRedDouble(allColumns[7 + 3], 7 + 3, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 8) {
          this.makeTomatoRed(allColumns[8], 8, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 9) {
          this.makeTomatoRed(allColumns[9], 9, 0)
          this.makeTomatoRedDouble(allColumns[9 - 3], 9 - 3, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 10) {
          this.makeTomatoRed(allColumns[10], 10, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 11) {
          this.makeTomatoRed(allColumns[11], 11, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 12) {
          this.makeTomatoRed(allColumns[12], 12, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }
      }
    },
    GET_GENERATE_TOMATO_DARK_GREEN_COL() {
      if (this.GET_GENERATE_TOMATO_DARK_GREEN_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makeTomatoDarkGreen(allColumns[1], 1, 0)
          this.makeTomatoDarkGreenDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 2) {
          this.makeTomatoDarkGreen(allColumns[2], 2, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 3) {
          this.makeTomatoDarkGreen(allColumns[3], 3, 0)
          this.makeTomatoDarkGreenDouble(allColumns[3 + 5], 3 + 5, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 4) {
          this.makeTomatoDarkGreen(allColumns[4], 4, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 5) {
          this.makeTomatoDarkGreen(allColumns[5], 5, 0)
          this.makeTomatoDarkGreenDouble(allColumns[5 + 3], 5 + 3, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 6) {
          this.makeTomatoDarkGreen(allColumns[6], 6, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 7) {
          this.makeTomatoDarkGreen(allColumns[7], 7, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 8) {
          this.makeTomatoDarkGreen(allColumns[8], 8, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 9) {
          this.makeTomatoDarkGreen(allColumns[9], 9, 0)
          this.makeTomatoDarkGreenDouble(allColumns[9 - 3], 9 - 3, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 10) {
          this.makeTomatoDarkGreen(allColumns[10], 10, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 11) {
          this.makeTomatoDarkGreen(allColumns[11], 11, 0)
          this.makeTomatoDarkGreenDouble(allColumns[11 - 5], 11 - 5, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 12) {
          this.makeTomatoDarkGreen(allColumns[12], 12, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }
      }
    },
    GET_GENERATE_COLLECTOR_TOMATO_COL() {
      if (this.GET_GENERATE_COLLECTOR_TOMATO_COL) {
        generatorCollectorTomato(this.cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, false)
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL,
      EN_CollectorGameGetters.GET_TOMATO_LEVEL_COL,

      EN_CollectorGameGetters.GET_POINTS_TOMATO_COL,
      EN_CollectorGameGetters.GET_TIMER_TOMATO_COL,
      EN_CollectorGameGetters.GET_GENERATE_TOMATO_GREEN_COL,
      EN_CollectorGameGetters.GET_GENERATE_TOMATO_RED_COL,
      EN_CollectorGameGetters.GET_GENERATE_TOMATO_DARK_GREEN_COL,
      EN_CollectorGameGetters.GET_GENERATE_COLLECTOR_TOMATO_COL,
      EN_CollectorGameGetters.GET_TOMATO_LEVEL_COMPLETED_COL,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.PLUS_POINTS_COL,

      EN_CollectorGameMutation.PLUS_POINTS_TOMATO_GREEN_COL,
      EN_CollectorGameMutation.PLUS_POINTS_TOMATO_RED_COL,
      EN_CollectorGameMutation.PLUS_POINTS_TOMATO_DARK_GREEN_COL,
      EN_CollectorGameMutation.START_TOMATO_LEVEL_COL,
      EN_CollectorGameMutation.FINISH_TOMATO_LEVEL_COL,
      EN_CollectorGameMutation.START_FINISH_TIMER_TOMATO_COL,
      EN_CollectorGameMutation.CLOSE_GAME_FIELD_TOMATO_COL,
      EN_CollectorGameMutation.START_FINISH_ALL_TOMATOES_INTERVAL_COL,

      EN_CollectorGameMutation.GENERATE_TOMATO_GREEN_COL,
      EN_CollectorGameMutation.NOT_GENERATE_TOMATO_GREEN_COL,
      EN_CollectorGameMutation.GENERATE_TOMATO_RED_COL,
      EN_CollectorGameMutation.NOT_GENERATE_TOMATO_RED_COL,
      EN_CollectorGameMutation.GENERATE_TOMATO_DARK_GREEN_COL,
      EN_CollectorGameMutation.NOT_GENERATE_TOMATO_DARK_GREEN_COL,
      EN_CollectorGameMutation.GENERATE_COLLECTOR_TOMATO_COL,
      EN_CollectorGameMutation.NOT_GENERATE_COLLECTOR_TOMATO_COL,
      EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_TOMATO_COL,
      EN_CollectorGameMutation.SHOW_LOSS_BLOCK_TOMATO_COL,
      EN_CollectorGameMutation.COMPLETE_TOMATO_LEVEL_COL,
    ]),
    generatorTomatoGreen(
      cells: ICellTomato[], 
      column: number[], 
      columnCellId: number, 
      columnCellIndex: number = 0
    ) {
    	let testTomato: ICellTomato[]
    
    	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])
    
    	if (testTomato[0].id === column[column.length - 2]) {
        this.currentCellTomatoGreen = testTomato[0].id
        if (this.currentCellTomatoGreen === this.currentCellCollector - 13) {
          return false
        }
    	}

    	if (testTomato[0].id === column[column.length - 1]) {
        this.currentCellTomatoGreen = testTomato[0].id
        if (this.currentCellTomatoGreen === this.currentCellCollector) {
          return false
        }
    		return false
    	}
    
    	if (testTomato[0].id === columnCellId) {
    		testTomato[0].isTomatoGreen = true
      
    		setTimeout(() => {
    			testTomato[0].isTomatoGreen = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorTomatoGreen(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_TOMATO_GREEN)
    	}
    },
    generatorTomatoRed (
    	cells: ICellTomato[],
    	column: number[],
    	columnCellId: number = 2,
    	columnCellIndex: number = 0
    ) {
    	let testTomato: ICellTomato[]
    
    	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])

      if (testTomato[0].id === column[column.length - 2]) {
        this.currentCellTomatoRed = testTomato[0].id
        if (this.currentCellTomatoRed === this.currentCellCollector - 13) {
          return false
        }
    	}

      if (testTomato[0].id === column[column.length - 1]) {
        this.currentCellTomatoRed = testTomato[0].id
        if (this.currentCellTomatoRed === this.currentCellCollector) {
          return false
        }
    		return false
    	}

    	if (testTomato[0].id === columnCellId) {
    		testTomato[0].isTomatoRed = true
      
    		setTimeout(() => {
    			testTomato[0].isTomatoRed = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorTomatoRed(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_TOMATO_RED)
    	}
    },
    generatorTomatoDarkGreen(
    	cells: ICellTomato[],
    	column: number[],
    	columnCellId: number,
    	columnCellIndex: number
    ) {
    	let testTomato: ICellTomato[]
    
    	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])

      if (testTomato[0].id === column[column.length - 2]) {
        this.currentCellTomatoDarkGreen = testTomato[0].id
        if (this.currentCellTomatoDarkGreen === this.currentCellCollector - 13) {
          return false
        }
    	}
    
    	if (testTomato[0].id === column[column.length - 1]) {
        this.currentCellTomatoDarkGreen = testTomato[0].id
        if (this.currentCellTomatoDarkGreen === this.currentCellCollector) {
          return false
        }
    		return false
    	}
    
    	if (testTomato[0].id === columnCellId) {
    		testTomato[0].isTomatoDarkGreen = true
      
    		setTimeout(() => {
    			testTomato[0].isTomatoDarkGreen = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorTomatoDarkGreen(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_TOMATO_DARK_GREEN)
    	}
    },
    makeTomatoGreen(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_GREEN_COL) {
        this.generatorTomatoGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeTomatoGreenDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_GREEN_COL) {
        this.generatorTomatoGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeTomatoRed(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_RED_COL) {
        this.generatorTomatoRed(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeTomatoRedDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_RED_COL) {
        this.generatorTomatoRed(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeTomatoDarkGreen(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_DARK_GREEN_COL) {
        this.generatorTomatoDarkGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeTomatoDarkGreenDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_DARK_GREEN_COL) {
        this.generatorTomatoDarkGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    moveCollectorLeft() {
      if (this.isCollectorMovedLeft) {
        generatorCollectorMoveLeftTomato(
          this.cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, this.isMovingLeft
        )

        setTimeout(() => {
          this.isCollectorMovedLeft = false
          this.isMovingLeft = false
        }, EN_CONFIG.TIMING_MOVE_COLLECTOR_LEFT)
      } 
    },
    moveCollectorRight() {
      if (this.isCollectorMovedRight) {
        generatorCollectorMoveRightTomato(
          this.cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, this.isMovingRight
        )

        setTimeout(() => {
          this.isCollectorMovedRight = false
          this.isMovingRight = false
        }, EN_CONFIG.TIMING_MOVE_COLLECTOR_RIGHT)
      } 
    }
  }
})
</script>

<style src='./collectorGameField.css' module='styles'>
  
</style>