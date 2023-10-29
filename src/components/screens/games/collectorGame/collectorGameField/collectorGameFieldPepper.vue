<template>
  <div>
    <victoryBlockMiniGamePepper />
    <lossBlockMiniGamePepper />
    <div :class='[styles.blackScreen, {[styles.blackScreenNon]: isBlackScreenShow}]'></div>

    <div :class='styles.gameWrapper'>

      <div :class='styles.mobileScreen'>
        <div :class='styles.mobileLeft' id='mobileLeftPepper'></div>
        <div :class='styles.mobileRight' id='mobileRightPepper'></div>
      </div>

      <div :class='styles.border'>
        <div :class='styles.gameField'>
          <div :class='[styles.decorations, styles.leftPepper]'></div>

          <div :class='styles.cellWrapper'>
            <div v-for='cell in cells' :key='cell.id'>
              <div :class='[styles.cell]'>
                <div :class='[{[styles.isPepperGreen]: cell.isPepperGreen}]'></div>
                <div :class='[{[styles.isPepperRed]: cell.isPepperRed}]'></div>
                <div :class='[{[styles.isPepperDarkGreen]: cell.isPepperDarkGreen}]'></div>
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

          <div :class='[styles.decorations, styles.rightPepper]'></div>
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
  ICellPepper,
  getRandomNumberGenerator,
  generatorCellsPepper,
  generatorCollectorPepper,

  generatorCollectorMoveLeftPepper,
  generatorCollectorMoveRightPepper,
allColumns,
lastRow
} from '../helpers/helpers'
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'
import victoryBlockMiniGamePepper from '../victoryBlockGame/victoryBlockMiniGamePepper.vue'
import lossBlockMiniGamePepper from '../lossBlockGame/lossBlockMiniGamePepper.vue'
import { EN_CONFIG } from '../config/config'
import { AUDIO_CONFIG } from '@/config/audio'

const audioCatchHarvest = new Audio(AUDIO_CONFIG.AUDIO_CATCH_HARVEST)

export default Vue.extend({
  name: 'collectorGameFieldPepper',
  data: () => ({
    isBlackScreenShow: false,
    cells: generatorCellsPepper(),
    previousColumn: 0,

    currentCellPepperGreen: 0,
    currentIndexCellPepperGreen: 0,
    previousColumnPepperGreen: 0,

    currentCellPepperRed: 0,
    currentIndexCellPepperRed: 0,
    previousColumnPepperRed: 0,
    
    currentCellPepperDarkGreen: 0,
    currentIndexCellPepperDarkGreen: 0,
    previousColumnPepperDarkGreen: 0,

    currentCellCollector: 117,
    currentIndexCellCollector: 0,
    isCollectorMovedLeft: false,
    isCollectorMovedRight: false,
    isMovingLeft: false,
    isMovingRight: false,
  }),
  components: {
    victoryBlockMiniGamePepper,
    lossBlockMiniGamePepper
  },
  created() {
    this.START_PEPPER_LEVEL_COL()
    this.START_FINISH_TIMER_PEPPER_COL()

    setTimeout(() => {
      this.isBlackScreenShow = true
    }, EN_CONFIG.TIMING_BLACK_SCREEN)
  },
  watch: {
    GET_TIMER_PEPPER_COL() {
      if (this.GET_TIMER_PEPPER_COL === 0 && this.GET_PEPPER_LEVEL_COL && this.GET_POINTS_PEPPER_COL > EN_CONFIG.MINIMAL_POINTS_PEPPER) {
        this.PLUS_POINTS_COL()
        
        this.FINISH_PEPPER_LEVEL_COL()
        this.START_FINISH_TIMER_PEPPER_COL()

        this.COMPLETE_PEPPER_LEVEL_COL()
        this.SHOW_VICTORY_BLOCK_PEPPER_COL()
      }

      if (this.GET_TIMER_PEPPER_COL === 0 && this.GET_PEPPER_LEVEL_COL && this.GET_POINTS_PEPPER_COL < EN_CONFIG.MINIMAL_POINTS_PEPPER) {
        this.FINISH_PEPPER_LEVEL_COL()
        this.START_FINISH_TIMER_PEPPER_COL()
        this.START_FINISH_ALL_PEPPERS_INTERVAL_COL()
        
        this.SHOW_LOSS_BLOCK_PEPPER_COL()
      }

      if (this.GET_TIMER_PEPPER_COL < 0) {
        this.FINISH_PEPPER_LEVEL_COL()
        this.START_FINISH_TIMER_PEPPER_COL()
        this.START_FINISH_ALL_PEPPERS_INTERVAL_COL()
        
        this.SHOW_LOSS_BLOCK_PEPPER_COL()
      }
    },
    GET_PEPPER_LEVEL_COL() {
      const mobileLeft = document.getElementById('mobileLeftPepper')
      const mobileRight = document.getElementById('mobileRightPepper')

      if (this.GET_PEPPER_LEVEL_COL) {
        this.GENERATE_COLLECTOR_PEPPER_COL()
        this.START_FINISH_ALL_PEPPERS_INTERVAL_COL()

        mobileLeft?.addEventListener('click', () => {
           if (!this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_PEPPER_LEVEL_COL) {
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
          if (!this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_PEPPER_LEVEL_COL) {
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
          if (event.code == 'KeyA' && !this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_PEPPER_LEVEL_COL) {
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

          if (event.code == 'KeyD' && !this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_PEPPER_LEVEL_COL) {
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

      if (!this.GET_PEPPER_LEVEL_COL) {
        this.cells = generatorCellsPepper()

        this.START_FINISH_ALL_PEPPERS_INTERVAL_COL()

        this.NOT_GENERATE_PEPPER_GREEN_COL()
        this.NOT_GENERATE_PEPPER_RED_COL()
        this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        this.NOT_GENERATE_COLLECTOR_PEPPER_COL()

        mobileLeft?.removeEventListener('click', () => {
           if (!this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_PEPPER_LEVEL_COL) {
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
          if (!this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_PEPPER_LEVEL_COL) {
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
          if (event.code == 'KeyA' && !this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft && this.GET_PEPPER_LEVEL_COL) {
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

          if (event.code == 'KeyD' && !this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight && this.GET_PEPPER_LEVEL_COL) {
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
    currentCellPepperGreen() {
      if (
          this.currentCellCollector - 13 === this.currentCellPepperGreen || 
          this.currentCellCollector === this.currentCellPepperGreen
        ) {
        audioCatchHarvest.volume = 1
        audioCatchHarvest.play()

        this.PLUS_POINTS_PEPPER_GREEN_COL()
      }
    },
    currentCellPepperRed() {
      if (this.currentCellCollector - 13 === this.currentCellPepperRed ||
          this.currentCellCollector === this.currentCellPepperRed
        ) {
        audioCatchHarvest.volume = 1
        audioCatchHarvest.play()

        this.PLUS_POINTS_PEPPER_RED_COL()
      }
    },
    currentCellPepperDarkGreen() {
      if (this.currentCellCollector - 13 === this.currentCellPepperDarkGreen ||
          this.currentCellCollector === this.currentCellPepperDarkGreen
        ) {
        audioCatchHarvest.volume = 1
        audioCatchHarvest.play()
        
        this.PLUS_POINTS_PEPPER_DARK_GREEN_COL()
      }
    },
    GET_GENERATE_PEPPER_GREEN_COL() {
      if (this.GET_GENERATE_PEPPER_GREEN_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makePepperGreen(allColumns[1], 1, 0)
          this.makePepperGreenDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 2) {
          this.makePepperGreen(allColumns[2], 2, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 3) {
          this.makePepperGreen(allColumns[3], 3, 0)
          this.makePepperGreenDouble(allColumns[3 + 5], 3 + 5, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 4) {
          this.makePepperGreen(allColumns[4], 4, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 5) {
          this.makePepperGreen(allColumns[5], 5, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 6) {
          this.makePepperGreen(allColumns[6], 6, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 7) {
          this.makePepperGreen(allColumns[7], 7, 0)
          this.makePepperGreenDouble(allColumns[7 + 3], 7 + 3, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 8) {
          this.makePepperGreen(allColumns[8], 8, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 9) {
          this.makePepperGreen(allColumns[9], 9, 0)
          this.makePepperGreenDouble(allColumns[9 - 3], 9 - 3, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 10) {
          this.makePepperGreen(allColumns[10], 10, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 11) {
          this.makePepperGreen(allColumns[11], 11, 0)
          this.makePepperGreenDouble(allColumns[11 - 5], 11 - 5, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }

        if (numberColumn === 12) {
          this.makePepperGreen(allColumns[12], 12, 0)
          this.NOT_GENERATE_PEPPER_GREEN_COL()
        }
      }
    },
    GET_GENERATE_PEPPER_RED_COL() {
      if (this.GET_GENERATE_PEPPER_RED_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makePepperRed(allColumns[1], 1, 0)
          this.makePepperRedDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 2) {
          this.makePepperRed(allColumns[2], 2, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 3) {
          this.makePepperRed(allColumns[3], 3, 0)
          this.makePepperRedDouble(allColumns[3 + 5], 3 + 5, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 4) {
          this.makePepperRed(allColumns[4], 4, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 5) {
          this.makePepperRed(allColumns[5], 5, 0)
          this.makePepperRedDouble(allColumns[5 + 3], 5 + 3, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 6) {
          this.makePepperRed(allColumns[6], 6, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 7) {
          this.makePepperRed(allColumns[7], 7, 0)
          this.makePepperRedDouble(allColumns[7 + 3], 7 + 3, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 8) {
          this.makePepperRed(allColumns[8], 8, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 9) {
          this.makePepperRed(allColumns[9], 9, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 10) {
          this.makePepperRed(allColumns[10], 10, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 11) {
          this.makePepperRed(allColumns[11], 11, 0)
          this.makePepperRedDouble(allColumns[11 - 5], 11 - 5, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }

        if (numberColumn === 12) {
          this.makePepperRed(allColumns[12], 12, 0)
          this.NOT_GENERATE_PEPPER_RED_COL()
        }
      }
    },
    GET_GENERATE_PEPPER_DARK_GREEN_COL() {
      if (this.GET_GENERATE_PEPPER_DARK_GREEN_COL) {
        let numberColumn = getRandomNumberGenerator(1, 13, this.previousColumn)
        this.previousColumn = numberColumn

        if (numberColumn === 1) {
          this.makePepperDarkGreen(allColumns[1], 1, 0)
          this.makePepperDarkGreenDouble(allColumns[1 + 3], 1 + 3, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 2) {
          this.makePepperDarkGreen(allColumns[2], 2, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 3) {
          this.makePepperDarkGreen(allColumns[3], 3, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 4) {
          this.makePepperDarkGreen(allColumns[4], 4, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 5) {
          this.makePepperDarkGreen(allColumns[5], 5, 0)
          this.makePepperDarkGreenDouble(allColumns[5 + 3], 5 + 3, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 6) {
          this.makePepperDarkGreen(allColumns[6], 6, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 7) {
          this.makePepperDarkGreen(allColumns[7], 7, 0)
          this.makePepperDarkGreenDouble(allColumns[7 + 3], 7 + 3, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 8) {
          this.makePepperDarkGreen(allColumns[8], 8, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 9) {
          this.makePepperDarkGreen(allColumns[9], 9, 0)
          this.makePepperDarkGreenDouble(allColumns[9 - 3], 9 - 3, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 10) {
          this.makePepperDarkGreen(allColumns[10], 10, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 11) {
          this.makePepperDarkGreen(allColumns[11], 11, 0)
          this.makePepperDarkGreenDouble(allColumns[11 - 5], 11 - 5, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }

        if (numberColumn === 12) {
          this.makePepperDarkGreen(allColumns[12], 12, 0)
          this.NOT_GENERATE_PEPPER_DARK_GREEN_COL()
        }
      }
    },
    GET_GENERATE_COLLECTOR_PEPPER_COL() {
      if (this.GET_GENERATE_COLLECTOR_PEPPER_COL) {
        generatorCollectorPepper(this.cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, false)
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_PEPPER_COL,
      EN_CollectorGameGetters.GET_PEPPER_LEVEL_COL,

      EN_CollectorGameGetters.GET_POINTS_PEPPER_COL,
      EN_CollectorGameGetters.GET_TIMER_PEPPER_COL,
      EN_CollectorGameGetters.GET_GENERATE_PEPPER_GREEN_COL,
      EN_CollectorGameGetters.GET_GENERATE_PEPPER_RED_COL,
      EN_CollectorGameGetters.GET_GENERATE_PEPPER_DARK_GREEN_COL,
      EN_CollectorGameGetters.GET_GENERATE_COLLECTOR_PEPPER_COL,
      EN_CollectorGameGetters.GET_PEPPER_LEVEL_COMPLETED_COL,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.PLUS_POINTS_COL,

      EN_CollectorGameMutation.PLUS_POINTS_PEPPER_GREEN_COL,
      EN_CollectorGameMutation.PLUS_POINTS_PEPPER_RED_COL,
      EN_CollectorGameMutation.PLUS_POINTS_PEPPER_DARK_GREEN_COL,
      EN_CollectorGameMutation.START_PEPPER_LEVEL_COL,
      EN_CollectorGameMutation.FINISH_PEPPER_LEVEL_COL,
      EN_CollectorGameMutation.START_FINISH_TIMER_PEPPER_COL,
      EN_CollectorGameMutation.CLOSE_GAME_FIELD_PEPPER_COL,
      EN_CollectorGameMutation.START_FINISH_ALL_PEPPERS_INTERVAL_COL,

      EN_CollectorGameMutation.GENERATE_PEPPER_GREEN_COL,
      EN_CollectorGameMutation.NOT_GENERATE_PEPPER_GREEN_COL,
      EN_CollectorGameMutation.GENERATE_PEPPER_RED_COL,
      EN_CollectorGameMutation.NOT_GENERATE_PEPPER_RED_COL,
      EN_CollectorGameMutation.GENERATE_PEPPER_DARK_GREEN_COL,
      EN_CollectorGameMutation.NOT_GENERATE_PEPPER_DARK_GREEN_COL,
      EN_CollectorGameMutation.GENERATE_COLLECTOR_PEPPER_COL,
      EN_CollectorGameMutation.NOT_GENERATE_COLLECTOR_PEPPER_COL,
      EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_PEPPER_COL,
      EN_CollectorGameMutation.SHOW_LOSS_BLOCK_PEPPER_COL,
      EN_CollectorGameMutation.COMPLETE_PEPPER_LEVEL_COL,
    ]),
    generatorPepperGreen(
      cells: ICellPepper[], 
      column: number[], 
      columnCellId: number, 
      columnCellIndex: number = 0
    ) {
    	let testPepper: ICellPepper[]
    
    	testPepper = cells.filter(cell => cell.id === column[columnCellIndex])
    
    	if (testPepper[0].id === column[column.length - 2]) {
        this.currentCellPepperGreen = testPepper[0].id
        if (this.currentCellPepperGreen === this.currentCellCollector - 13) {
          return false
        }
    	}

    	if (testPepper[0].id === column[column.length - 1]) {
        this.currentCellPepperGreen = testPepper[0].id
        if (this.currentCellPepperGreen === this.currentCellCollector) {
          return false
        }
    		return false
    	}
    
    	if (testPepper[0].id === columnCellId) {
    		testPepper[0].isPepperGreen = true
      
    		setTimeout(() => {
    			testPepper[0].isPepperGreen = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorPepperGreen(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_PEPPER_GREEN)
    	}
    },
    generatorPepperRed (
    	cells: ICellPepper[],
    	column: number[],
    	columnCellId: number = 2,
    	columnCellIndex: number = 0
    ) {
    	let testPepper: ICellPepper[]
    
    	testPepper = cells.filter(cell => cell.id === column[columnCellIndex])

      if (testPepper[0].id === column[column.length - 2]) {
        this.currentCellPepperRed = testPepper[0].id
        if (this.currentCellPepperRed === this.currentCellCollector - 13) {
          return false
        }
    	}

      if (testPepper[0].id === column[column.length - 1]) {
        this.currentCellPepperRed = testPepper[0].id
        if (this.currentCellPepperRed === this.currentCellCollector) {
          return false
        }
    		return false
    	}

    	if (testPepper[0].id === columnCellId) {
    		testPepper[0].isPepperRed = true
      
    		setTimeout(() => {
    			testPepper[0].isPepperRed = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorPepperRed(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_PEPPER_RED)
    	}
    },
    generatorPepperDarkGreen(
    	cells: ICellPepper[],
    	column: number[],
    	columnCellId: number,
    	columnCellIndex: number
    ) {
    	let testPepper: ICellPepper[]
    
    	testPepper = cells.filter(cell => cell.id === column[columnCellIndex])

      if (testPepper[0].id === column[column.length - 2]) {
        this.currentCellPepperDarkGreen = testPepper[0].id
        if (this.currentCellPepperDarkGreen === this.currentCellCollector - 13) {
          return false
        }
    	}
    
    	if (testPepper[0].id === column[column.length - 1]) {
        this.currentCellPepperDarkGreen = testPepper[0].id
        if (this.currentCellPepperDarkGreen === this.currentCellCollector) {
          return false
        }
    		return false
    	}
    
    	if (testPepper[0].id === columnCellId) {
    		testPepper[0].isPepperDarkGreen = true
      
    		setTimeout(() => {
    			testPepper[0].isPepperDarkGreen = false
        
    			columnCellId += 13
    			columnCellIndex += 1
    			this.generatorPepperDarkGreen(cells, column, columnCellId, columnCellIndex)
    		}, EN_CONFIG.TIMING_GENERATE_PEPPER_DARK_GREEN)
    	}
    },
    makePepperGreen(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_PEPPER_GREEN_COL) {
        this.generatorPepperGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makePepperGreenDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_PEPPER_GREEN_COL) {
        this.generatorPepperGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makePepperRed(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_PEPPER_RED_COL) {
        this.generatorPepperRed(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makePepperRedDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_PEPPER_RED_COL) {
        this.generatorPepperRed(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makePepperDarkGreen(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_PEPPER_DARK_GREEN_COL) {
        this.generatorPepperDarkGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    makePepperDarkGreenDouble(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_PEPPER_DARK_GREEN_COL) {
        this.generatorPepperDarkGreen(this.cells, column, currentCell, currentIndexCell)
      }
    },
    moveCollectorLeft() {
      if (this.isCollectorMovedLeft) {
        generatorCollectorMoveLeftPepper(
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
        generatorCollectorMoveRightPepper(
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