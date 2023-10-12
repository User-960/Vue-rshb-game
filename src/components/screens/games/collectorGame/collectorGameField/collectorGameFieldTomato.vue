<template>
  <div>
    <div :class='[styles.blackScreen, {[styles.blackScreenNon]: isBlackScreenShow}]'></div>

    <div :class='styles.gameWrapper'>
      <div :class='styles.border'>
        <div :class='styles.gameField'>
          <div :class='[styles.decorations, styles.left]'></div>

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

          <div :class='[styles.decorations, styles.right]'></div>
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
  ICell,

  getRandomNumberGenerator,
  generatorCells,
  generatorCollector,

  generatorCollectorMoveLeft,
  generatorCollectorMoveRight
} from '../helpers/helpers'
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'

const cells = generatorCells()
const firstColumn: number[] = [1, 14, 27, 40, 53, 66, 79, 92, 105, 118]
const secondColumn: number[] = [2, 15, 28, 41, 54, 67, 80, 93, 106, 119]
const thirdColumn: number[] = [3, 16, 29, 42, 55, 68, 81, 94, 107, 120]
const fourthColumn: number[] = [4, 17, 30, 43, 56, 69, 82, 95, 108, 121]
const fifthColumn: number[] = [5, 18, 31, 44, 57, 70, 83, 96, 109, 122]
const sixthColumn: number[] = [6, 19, 32, 45, 58, 71, 84, 97, 110, 123]
const seventhColumn: number[] = [7, 20, 33, 46, 59, 72, 85, 98, 111, 124]
const eighthColumn: number[] = [8, 21, 34, 47, 60, 73, 86, 99, 112, 125]
const ninthColumn: number[] = [9, 22, 35, 48, 61, 74, 87, 100, 113, 126]
const tenthColumn: number[] = [10, 23, 36, 49, 62, 75, 88, 101, 114, 127]
const eleventhColumn: number[] = [11, 24, 37, 50, 63, 76, 89, 102, 115, 128]
const twelfthColumn: number[] = [12, 25, 38, 51, 64, 77, 90, 103, 116, 129]

const allColumns: number[][] = [[], firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, sixthColumn, seventhColumn, eighthColumn, ninthColumn, tenthColumn, eleventhColumn,twelfthColumn]

const lastRow: number[] = [
	117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129
]

export default Vue.extend({
  name: 'collectorGameFieldTomato',
  data: () => ({
    isBlackScreenShow: false,
    cells,
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
  components: {},
  created() {
    this.START_TOMATO_LEVEL_COL()
    this.START_FINISH_TIMER_TOMATO_COL()
    
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyA' && !this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft) {
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
      
      if (event.code == 'KeyD' && !this.isMovingRight && !this.isMovingLeft && !this.isCollectorMovedRight) {
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

    setTimeout(() => {
      this.isBlackScreenShow = true
    }, 2350)
  },
  watch: {
    GET_TIMER_TIMER_COL() {
      if (this.GET_TIMER_TIMER_COL === 0 && this.GET_TOMATO_LEVEL_COL) {
        this.FINISH_TOMATO_LEVEL_COL()
        this.START_FINISH_TIMER_TOMATO_COL()
        this.SHOW_VICTORY_BLOCK_TOMATO_COL()
      }
    },
    GET_TOMATO_LEVEL_COL() {
      if (this.GET_TOMATO_LEVEL_COL) {
        this.GENERATE_COLLECTOR_COL()

        this.START_FINISH_ALL_TOMATOES_INTERVAL_COL()
      }

      if (!this.GET_TOMATO_LEVEL_COL) {
        // this.FINISH_ALL_TOMATOES_INTERVAL_COL()
        this.START_FINISH_ALL_TOMATOES_INTERVAL_COL()

        this.NOT_GENERATE_TOMATO_GREEN_COL()
        this.NOT_GENERATE_TOMATO_RED_COL()
        this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        this.NOT_GENERATE_COLLECTOR_COL()

        this.cells = generatorCells()

        this.CLOSE_GAME_FIELD_TOMATO_COL()
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
          this.makeTomatoGreen(allColumns[1], this.currentCellTomatoGreen, 0)
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
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 6) {
          this.makeTomatoGreen(allColumns[6], 6, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 7) {
          this.makeTomatoGreen(allColumns[7], 7, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 8) {
          this.makeTomatoGreen(allColumns[8], 8, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 9) {
          this.makeTomatoGreen(allColumns[9], 9, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 10) {
          this.makeTomatoGreen(allColumns[10], 10, 0)
          this.NOT_GENERATE_TOMATO_GREEN_COL()
        }

        if (numberColumn === 11) {
          this.makeTomatoGreen(allColumns[11], 11, 0)
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
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 2) {
          this.makeTomatoRed(allColumns[2], 2, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 3) {
          this.makeTomatoRed(allColumns[3], 3, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 4) {
          this.makeTomatoRed(allColumns[4], 4, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 5) {
          this.makeTomatoRed(allColumns[5], 5, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 6) {
          this.makeTomatoRed(allColumns[6], 6, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 7) {
          this.makeTomatoRed(allColumns[7], 7, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 8) {
          this.makeTomatoRed(allColumns[8], 8, 0)
          this.NOT_GENERATE_TOMATO_RED_COL()
        }

        if (numberColumn === 9) {
          this.makeTomatoRed(allColumns[9], 9, 0)
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
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 2) {
          this.makeTomatoDarkGreen(allColumns[2], 2, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 3) {
          this.makeTomatoDarkGreen(allColumns[3], 3, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 4) {
          this.makeTomatoDarkGreen(allColumns[4], 4, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 5) {
          this.makeTomatoDarkGreen(allColumns[5], 5, 0)
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
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 10) {
          this.makeTomatoDarkGreen(allColumns[10], 10, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 11) {
          this.makeTomatoDarkGreen(allColumns[11], 11, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }

        if (numberColumn === 12) {
          this.makeTomatoDarkGreen(allColumns[12], 12, 0)
          this.NOT_GENERATE_TOMATO_DARK_GREEN_COL()
        }
      }
    },
    GET_GENERATE_COLLECTOR_COL() {
      if (this.GET_GENERATE_COLLECTOR_COL) {
        generatorCollector(cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, false)
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL,
      EN_CollectorGameGetters.GET_TOMATO_LEVEL_COL,

      EN_CollectorGameGetters.GET_TIMER_TIMER_COL,
      EN_CollectorGameGetters.GET_GENERATE_TOMATO_GREEN_COL,
      EN_CollectorGameGetters.GET_GENERATE_TOMATO_RED_COL,
      EN_CollectorGameGetters.GET_GENERATE_TOMATO_DARK_GREEN_COL,
      EN_CollectorGameGetters.GET_GENERATE_COLLECTOR_COL,
    ]),
  },
  methods: {
    ...mapMutations([
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
      EN_CollectorGameMutation.GENERATE_COLLECTOR_COL,
      EN_CollectorGameMutation.NOT_GENERATE_COLLECTOR_COL,

      EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_TOMATO_COL,
    ]),
    generatorTomatoGreen(cells: ICell[], column: number[], columnCellId: number, columnCellIndex: number = 0) {
    	let testTomato: ICell[]
    
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
    		}, 700)
    	}
    },
    generatorTomatoRed (
    	cells: ICell[],
    	column: number[],
    	columnCellId: number = 2,
    	columnCellIndex: number = 0
    ) {
    	let testTomato: ICell[]
    
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
    		}, 700)
    	}
    },
    generatorTomatoDarkGreen(
    	cells: ICell[],
    	column: number[],
    	columnCellId: number,
    	columnCellIndex: number
    ) {
    	let testTomato: ICell[]
    
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
    		}, 700)
    	}
    },
    makeTomatoGreen(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_GREEN_COL) {
        this.generatorTomatoGreen(cells, column, currentCell, currentIndexCell)
      }
    },
    makeTomatoRed(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_RED_COL) {
        this.generatorTomatoRed(cells, column, currentCell, currentIndexCell)
      }
    },
    makeTomatoDarkGreen(column: number[], currentCell: number, currentIndexCell: number) {
      if (this.GET_GENERATE_TOMATO_DARK_GREEN_COL) {
        this.generatorTomatoDarkGreen(cells, column, currentCell, currentIndexCell)
      }
    },
    moveCollectorLeft() {
      if (this.isCollectorMovedLeft) {
        generatorCollectorMoveLeft(
          cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, this.isMovingLeft
        )

        setTimeout(() => {
          this.isCollectorMovedLeft = false
          this.isMovingLeft = false
        }, 150)
      } 
    },
    moveCollectorRight() {
      if (this.isCollectorMovedRight) {
        generatorCollectorMoveRight(
          cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, this.isMovingRight
        )

        setTimeout(() => {
          this.isCollectorMovedRight = false
          this.isMovingRight = false
        }, 150)
      } 
    }
  }
})
</script>

<style src='./collectorGameField.css' module='styles'>
  
</style>