<template>
  <div>
    <victoryBlockMiniGameStrawberry />
    <lossBlockMiniGameStrawberry />
    <div :class='[styles.blackScreen, {[styles.blackScreenNon]: isBlackScreenShow}]'></div>

    <div :class='styles.gameWrapper'>

      <div :class='styles.mobileScreen'>
        <div :class='styles.mobileLeft' id='mobileLeftStrawberry'></div>
        <div :class='styles.mobileRight' id='mobileRightStrawberry'></div>
      </div>

      <div :class='styles.border'>
        <div :class='styles.gameField'>
          <div :class='[styles.decorations, styles.leftStrawberry]'></div>

          <div :class='styles.cellWrapper'>
            <div v-for='cell in cells' :key='cell.id'>
              <div :class='[styles.cell]'>
                <div :class='[{[styles.isStrawberryGreen]: cell.isStrawberryGreen}]'></div>
                <div :class='[{[styles.isStrawberryRed]: cell.isStrawberryRed}]'></div>
                <div :class='[{[styles.isStrawberryDarkGreen]: cell.isStrawberryDarkGreen}]'></div>
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

          <div :class='[styles.decorations, styles.rightStrawberry]'></div>
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
  ICellStrawberry,
  getRandomNumberGenerator,
  generatorCellsStrawberry,
  generatorCollectorStrawberry,

  generatorCollectorMoveLeftStrawberry,
  generatorCollectorMoveRightStrawberry,
allColumns,
lastRow
} from '../helpers/helpers'
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'
import victoryBlockMiniGameStrawberry from '../victoryBlockGame/victoryBlockMiniGameStrawberry.vue'
import lossBlockMiniGameStrawberry from '../lossBlockGame/lossBlockMiniGameStrawberry.vue'
import { EN_CONFIG } from '../config/config'
import { AUDIO_CONFIG } from '@/config/audio'

const audioCatchHarvest = new Audio(AUDIO_CONFIG.AUDIO_CATCH_HARVEST)

export default Vue.extend({
  name: 'collectorGameFieldStrawberry',
  data: () => ({
    isBlackScreenShow: false,
    cells: generatorCellsStrawberry(),
    previousColumn: 0,

    currentCellStrawberryGreen: 0,
    currentIndexCellStrawberryGreen: 0,
    previousColumnStrawberryGreen: 0,

    currentCellStrawberryRed: 0,
    currentIndexCellStrawberryRed: 0,
    previousColumnStrawberryRed: 0,
    
    currentCellStrawberryDarkGreen: 0,
    currentIndexCellStrawberryDarkGreen: 0,
    previousColumnStrawberryDarkGreen: 0,

    currentCellCollector: 117,
    currentIndexCellCollector: 0,
    isCollectorMovedLeft: false,
    isCollectorMovedRight: false,
    isMovingLeft: false,
    isMovingRight: false,
  }),
  components: {
    victoryBlockMiniGameStrawberry,
    lossBlockMiniGameStrawberry
  },
  created() {
    this.START_STRAWBERRY_LEVEL_COL()
    this.START_FINISH_TIMER_STRAWBERRY_COL()

    setTimeout(() => {
      this.isBlackScreenShow = true
    }, EN_CONFIG.TIMING_BLACK_SCREEN)
  },
  watch: {
    GET_TIMER_STRAWBERRY_COL() {
      if (this.GET_TIMER_STRAWBERRY_COL === 0 && this.GET_STRAWBERRY_LEVEL_COL && this.GET_POINTS_STRAWBERRY_COL > EN_CONFIG.MINIMAL_POINTS_STRAWBERRY) {
        this.PLUS_POINTS_COL()
        
        this.FINISH_STRAWBERRY_LEVEL_COL()
        this.START_FINISH_TIMER_STRAWBERRY_COL()

        this.COMPLETE_STRAWBERRY_LEVEL_COL()
        this.SHOW_VICTORY_BLOCK_STRAWBERRY_COL()
      }

      if (this.GET_TIMER_STRAWBERRY_COL === 0 && this.GET_STRAWBERRY_LEVEL_COL && this.GET_POINTS_STRAWBERRY_COL < EN_CONFIG.MINIMAL_POINTS_STRAWBERRY) {
        this.FINISH_STRAWBERRY_LEVEL_COL()
        this.START_FINISH_TIMER_STRAWBERRY_COL()
        this.START_FINISH_ALL_STRAWBERRIES_INTERVAL_COL()
        
        this.SHOW_LOSS_BLOCK_STRAWBERRY_COL()
      }

      if (this.GET_TIMER_STRAWBERRY_COL < 0) {
        this.FINISH_STRAWBERRY_LEVEL_COL()
        this.START_FINISH_TIMER_STRAWBERRY_COL()
        this.START_FINISH_ALL_STRAWBERRIES_INTERVAL_COL()
        
        this.SHOW_LOSS_BLOCK_STRAWBERRY_COL()
      }
    },
    GET_STRAWBERRY_LEVEL_COL() {
      const mobileLeft = document.getElementById('mobileLeftStrawberry')
      const mobileRight = document.getElementById('mobileRightStrawberry')

      if (this.GET_STRAWBERRY_LEVEL_COL) {
        this.GENERATE_COLLECTOR_STRAWBERRY_COL()
        this.START_FINISH_ALL_STRAWBERRIES_INTERVAL_COL()

        mobileLeft?.addEventListener('click', () => {
           if (!this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_STRAWBERRY_LEVEL_COL) {
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
          if (!this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_STRAWBERRY_LEVEL_COL) {
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
          if (event.code == 'KeyA' && !this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_STRAWBERRY_LEVEL_COL) {
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

          if (event.code == 'KeyD' && !this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_STRAWBERRY_LEVEL_COL) {
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

      if (!this.GET_STRAWBERRY_LEVEL_COL) {
        this.cells = generatorCellsStrawberry()

        this.START_FINISH_ALL_STRAWBERRIES_INTERVAL_COL()

        this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        this.NOT_GENERATE_STRAWBERRY_RED_COL()
        this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        this.NOT_GENERATE_COLLECTOR_STRAWBERRY_COL()

        mobileLeft?.removeEventListener('click', () => {
           if (!this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_STRAWBERRY_LEVEL_COL) {
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
          if (!this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_STRAWBERRY_LEVEL_COL) {
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
          if (event.code == 'KeyA' && !this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_STRAWBERRY_LEVEL_COL) {
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

          if (event.code == 'KeyD' && !this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_STRAWBERRY_LEVEL_COL) {
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
    currentCellStrawberryGreen() {
      if (
          this.currentCellCollector - 13 === this.currentCellStrawberryGreen || 
          this.currentCellCollector === this.currentCellStrawberryGreen
        ) {
        audioCatchHarvest.volume = 1
        audioCatchHarvest.play()

        this.PLUS_POINTS_STRAWBERRY_GREEN_COL()
      }
    },
    currentCellStrawberryRed() {
      if (this.currentCellCollector - 13 === this.currentCellStrawberryRed ||
          this.currentCellCollector === this.currentCellStrawberryRed
        ) {
        audioCatchHarvest.volume = 1
        audioCatchHarvest.play()

        this.PLUS_POINTS_STRAWBERRY_RED_COL()
      }
    },
    currentCellStrawberryDarkGreen() {
      if (this.currentCellCollector - 13 === this.currentCellStrawberryDarkGreen ||
          this.currentCellCollector === this.currentCellStrawberryDarkGreen
        ) {
        audioCatchHarvest.volume = 1
        audioCatchHarvest.play()

        this.PLUS_POINTS_STRAWBERRY_DARK_GREEN_COL()
      }
    },
    GET_GENERATE_STRAWBERRY_GREEN_COL() {
      if (this.GET_GENERATE_STRAWBERRY_GREEN_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makeStrawberryGreen(allColumns[1], 1, 0)
          this.makeStrawberryGreenDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 2) {
          this.makeStrawberryGreen(allColumns[2], 2, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 3) {
          this.makeStrawberryGreen(allColumns[3], 3, 0)
          this.makeStrawberryGreenDouble(allColumns[3 + 5], 3 + 5, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 4) {
          this.makeStrawberryGreen(allColumns[4], 4, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 5) {
          this.makeStrawberryGreen(allColumns[5], 5, 0)
          this.makeStrawberryGreenDouble(allColumns[5 + 3], 5 + 3, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 6) {
          this.makeStrawberryGreen(allColumns[6], 6, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 7) {
          this.makeStrawberryGreen(allColumns[7], 7, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 8) {
          this.makeStrawberryGreen(allColumns[8], 8, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 9) {
          this.makeStrawberryGreen(allColumns[9], 9, 0)
          this.makeStrawberryGreenDouble(allColumns[9 - 3], 9 - 3, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 10) {
          this.makeStrawberryGreen(allColumns[10], 10, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 11) {
          this.makeStrawberryGreen(allColumns[11], 11, 0)
          this.makeStrawberryGreenDouble(allColumns[11 - 5], 11 - 5, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }

        if (numberColumn === 12) {
          this.makeStrawberryGreen(allColumns[12], 12, 0)
          this.NOT_GENERATE_STRAWBERRY_GREEN_COL()
        }
      }
    },
    GET_GENERATE_STRAWBERRY_RED_COL() {
      if (this.GET_GENERATE_STRAWBERRY_RED_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makeStrawberryRed(allColumns[1], 1, 0)
          this.makeStrawberryRedDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 2) {
          this.makeStrawberryRed(allColumns[2], 2, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 3) {
          this.makeStrawberryRed(allColumns[3], 3, 0)
          this.makeStrawberryRedDouble(allColumns[3 + 5], 3 + 5, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 4) {
          this.makeStrawberryRed(allColumns[4], 4, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 5) {
          this.makeStrawberryRed(allColumns[5], 5, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 6) {
          this.makeStrawberryRed(allColumns[6], 6, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 7) {
          this.makeStrawberryRed(allColumns[7], 7, 0)
          this.makeStrawberryRedDouble(allColumns[7 + 3], 7 + 3, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 8) {
          this.makeStrawberryRed(allColumns[8], 8, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 9) {
          this.makeStrawberryRed(allColumns[9], 9, 0)
          this.makeStrawberryRedDouble(allColumns[9 - 3], 9 - 3, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 10) {
          this.makeStrawberryRed(allColumns[10], 10, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 11) {
          this.makeStrawberryRed(allColumns[11], 11, 0)
          this.makeStrawberryRedDouble(allColumns[11 - 5], 11 - 5, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }

        if (numberColumn === 12) {
          this.makeStrawberryRed(allColumns[12], 12, 0)
          this.NOT_GENERATE_STRAWBERRY_RED_COL()
        }
      }
    },
    GET_GENERATE_STRAWBERRY_DARK_GREEN_COL() {
      if (this.GET_GENERATE_STRAWBERRY_DARK_GREEN_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makeStrawberryDarkGreen(allColumns[1], 1, 0)
          this.makeStrawberryDarkGreenDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 2) {
          this.makeStrawberryDarkGreen(allColumns[2], 2, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 3) {
          this.makeStrawberryDarkGreen(allColumns[3], 3, 0)
          this.makeStrawberryDarkGreenDouble(allColumns[3 + 5], 3 + 5, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 4) {
          this.makeStrawberryDarkGreen(allColumns[4], 4, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 5) {
          this.makeStrawberryDarkGreen(allColumns[5], 5, 0)
          this.makeStrawberryDarkGreenDouble(allColumns[5 + 3], 5 + 3, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 6) {
          this.makeStrawberryDarkGreen(allColumns[6], 6, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 7) {
          this.makeStrawberryDarkGreen(allColumns[7], 7, 0)
          this.makeStrawberryDarkGreenDouble(allColumns[7 + 3], 7 + 3, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 8) {
          this.makeStrawberryDarkGreen(allColumns[8], 8, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 9) {
          this.makeStrawberryDarkGreen(allColumns[9], 9, 0)
          this.makeStrawberryDarkGreenDouble(allColumns[9 - 3], 9 - 3, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 10) {
          this.makeStrawberryDarkGreen(allColumns[10], 10, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 11) {
          this.makeStrawberryDarkGreen(allColumns[11], 11, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }

        if (numberColumn === 12) {
          this.makeStrawberryDarkGreen(allColumns[12], 12, 0)
          this.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL()
        }
      }
    },
    GET_GENERATE_COLLECTOR_STRAWBERRY_COL() {
      if (this.GET_GENERATE_COLLECTOR_STRAWBERRY_COL) {
        generatorCollectorStrawberry(this.cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, false)
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_STRAWBERRY_COL,
      EN_CollectorGameGetters.GET_STRAWBERRY_LEVEL_COL,

      EN_CollectorGameGetters.GET_POINTS_STRAWBERRY_COL,
      EN_CollectorGameGetters.GET_TIMER_STRAWBERRY_COL,
      EN_CollectorGameGetters.GET_GENERATE_STRAWBERRY_GREEN_COL,
      EN_CollectorGameGetters.GET_GENERATE_STRAWBERRY_RED_COL,
      EN_CollectorGameGetters.GET_GENERATE_STRAWBERRY_DARK_GREEN_COL,
      EN_CollectorGameGetters.GET_GENERATE_COLLECTOR_STRAWBERRY_COL,
      EN_CollectorGameGetters.GET_STRAWBERRY_LEVEL_COMPLETED_COL,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.PLUS_POINTS_COL,

      EN_CollectorGameMutation.PLUS_POINTS_STRAWBERRY_GREEN_COL,
      EN_CollectorGameMutation.PLUS_POINTS_STRAWBERRY_RED_COL,
      EN_CollectorGameMutation.PLUS_POINTS_STRAWBERRY_DARK_GREEN_COL,
      EN_CollectorGameMutation.START_STRAWBERRY_LEVEL_COL,
      EN_CollectorGameMutation.FINISH_STRAWBERRY_LEVEL_COL,
      EN_CollectorGameMutation.START_FINISH_TIMER_STRAWBERRY_COL,
      EN_CollectorGameMutation.CLOSE_GAME_FIELD_STRAWBERRY_COL,
      EN_CollectorGameMutation.START_FINISH_ALL_STRAWBERRIES_INTERVAL_COL,

      EN_CollectorGameMutation.GENERATE_STRAWBERRY_GREEN_COL,
      EN_CollectorGameMutation.NOT_GENERATE_STRAWBERRY_GREEN_COL,
      EN_CollectorGameMutation.GENERATE_STRAWBERRY_RED_COL,
      EN_CollectorGameMutation.NOT_GENERATE_STRAWBERRY_RED_COL,
      EN_CollectorGameMutation.GENERATE_STRAWBERRY_DARK_GREEN_COL,
      EN_CollectorGameMutation.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL,
      EN_CollectorGameMutation.GENERATE_COLLECTOR_STRAWBERRY_COL,
      EN_CollectorGameMutation.NOT_GENERATE_COLLECTOR_STRAWBERRY_COL,
      EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_STRAWBERRY_COL,
      EN_CollectorGameMutation.SHOW_LOSS_BLOCK_STRAWBERRY_COL,
      EN_CollectorGameMutation.COMPLETE_STRAWBERRY_LEVEL_COL,
    ]),
    generatorStrawberryGreen(
      cells: ICellStrawberry[], 
      column: number[], 
      columnCellId: number, 
      columnCellIndex: number = 0
    ) {
    	let testStrawberry: ICellStrawberry[]
    
    	testStrawberry = cells.filter(cell => cell.id === column[columnCellIndex])
    
    	if (testStrawberry[0].id === column[column.length - 2]) {
        this.currentCellStrawberryGreen = testStrawberry[0].id
        if (this.currentCellStrawberryGreen === this.currentCellCollector - 13) {
          return false
        }
    	}

    	if (testStrawberry[0].id === column[column.length - 1]) {
        this.currentCellStrawberryGreen = testStrawberry[0].id
        if (this.currentCellStrawberryGreen === this.currentCellCollector) {
          return false
        }
    		return false
    	}
    
    	if (testStrawberry[0].id === columnCellId) {
    		testStrawberry[0].isStrawberryGreen = true
      
    		setTimeout(() => {
    			testStrawberry[0].isStrawberryGreen = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorStrawberryGreen(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_STRAWBERRY_GREEN)
    	}
    },
    generatorStrawberryRed (
    	cells: ICellStrawberry[],
    	column: number[],
    	columnCellId: number = 2,
    	columnCellIndex: number = 0
    ) {
    	let testStrawberry: ICellStrawberry[]
    
    	testStrawberry = cells.filter(cell => cell.id === column[columnCellIndex])

      if (testStrawberry[0].id === column[column.length - 2]) {
        this.currentCellStrawberryRed = testStrawberry[0].id
        if (this.currentCellStrawberryRed === this.currentCellCollector - 13) {
          return false
        }
    	}

      if (testStrawberry[0].id === column[column.length - 1]) {
        this.currentCellStrawberryRed = testStrawberry[0].id
        if (this.currentCellStrawberryRed === this.currentCellCollector) {
          return false
        }
    		return false
    	}

    	if (testStrawberry[0].id === columnCellId) {
    		testStrawberry[0].isStrawberryRed = true
      
    		setTimeout(() => {
    			testStrawberry[0].isStrawberryRed = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorStrawberryRed(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_STRAWBERRY_RED)
    	}
    },
    generatorStrawberryDarkGreen(
    	cells: ICellStrawberry[],
    	column: number[],
    	columnCellId: number,
    	columnCellIndex: number
    ) {
    	let testStrawberry: ICellStrawberry[]
    
    	testStrawberry = cells.filter(cell => cell.id === column[columnCellIndex])

      if (testStrawberry[0].id === column[column.length - 2]) {
        this.currentCellStrawberryDarkGreen = testStrawberry[0].id
        if (this.currentCellStrawberryDarkGreen === this.currentCellCollector - 13) {
          return false
        }
    	}
    
    	if (testStrawberry[0].id === column[column.length - 1]) {
        this.currentCellStrawberryDarkGreen = testStrawberry[0].id
        if (this.currentCellStrawberryDarkGreen === this.currentCellCollector) {
          return false
        }
    		return false
    	}
    
    	if (testStrawberry[0].id === columnCellId) {
    		testStrawberry[0].isStrawberryDarkGreen = true
      
    		setTimeout(() => {
    			testStrawberry[0].isStrawberryDarkGreen = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorStrawberryDarkGreen(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_STRAWBERRY_DARK_GREEN)
    	}
    },
    makeStrawberryGreen(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_STRAWBERRY_GREEN_COL) {
        this.generatorStrawberryGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeStrawberryGreenDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_STRAWBERRY_GREEN_COL) {
        this.generatorStrawberryGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeStrawberryRed(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_STRAWBERRY_RED_COL) {
        this.generatorStrawberryRed(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeStrawberryRedDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_STRAWBERRY_RED_COL) {
        this.generatorStrawberryRed(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeStrawberryDarkGreen(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_STRAWBERRY_DARK_GREEN_COL) {
        this.generatorStrawberryDarkGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makeStrawberryDarkGreenDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_STRAWBERRY_DARK_GREEN_COL) {
        this.generatorStrawberryDarkGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    moveCollectorLeft() {
      if (this.isCollectorMovedLeft) {
        generatorCollectorMoveLeftStrawberry(
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
        generatorCollectorMoveRightStrawberry(
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