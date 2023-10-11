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
import { mapGetters } from 'vuex'
import { 
  generatorCells, 
  generatorTomatoGreen, 
  generatorTomatoRed, 
  generatorTomatoDarkGreen,
  generatorCollector,

  generatorCollectorMoveLeft,
  generatorCollectorMoveRight
} from '../helpers/helpers'

const cells = generatorCells()
const firstColumn: number[] = [1, 14, 27, 40, 53, 66, 79, 92, 105, 118]
const secondColumn: number[] = [2, 15, 28, 41, 54, 67, 80, 93, 106, 119]
const thirdColumn: number[] = [3, 16, 29, 42, 55, 68, 81, 94, 107, 120]
const fourthColumn: number[] = [4, 17, 30, 43, 56, 69, 80, 95, 108, 121]
const fifthColumn: number[] = [5, 18, 31, 44, 57, 70, 83, 96, 109, 122]
const sixthColumn: number[] = [6, 19, 32, 45, 58, 71, 84, 97, 110, 123]
const seventhColumn: number[] = [7, 20, 33, 46, 59, 72, 85, 98, 111, 124]
const eighthColumn: number[] = [8, 21, 34, 47, 60, 73, 86, 99, 112, 125]
const ninthColumn: number[] = [9, 22, 35, 48, 61, 74, 87, 100, 113, 126]

const lastRow: number[] = [
	117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129
]

export default Vue.extend({
  name: 'collectorGameFieldTomato',
  data: () => ({
    isBlackScreenShow: false,
    cells,
    generateTomatoGreen: false,
    generateTomatoRed: false,
    generateTomatoDarkGreen: false,
    generateCollector: false,

    currentCellCollector: 117,
    currentIndexCellCollector: 0,
    isCollectorMovedLeft: false,
    isCollectorMovedRight: false,
    isMovingLeft: false,
    isMovingRight: false,
  }),
  components: {},
  created() {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'KeyA' && !this.isMovingLeft && !this.isMovingRight && !this.isCollectorMovedLeft) {
        this.isMovingLeft = true
        if (this.isMovingLeft) {
          this.currentCellCollector -= 1
          this.currentIndexCellCollector -= 1

          if (this.currentCellCollector > 116) {
            this.moveCollectorLeft()
          } else {
            this.currentCellCollector = 129
            this.currentIndexCellCollector = 12
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
            this.moveCollectorRight()
          } else {
            this.currentCellCollector = 117
            this.currentIndexCellCollector = 0
            this.moveCollectorRight()
          }
        } 
      
      }
    })

    setTimeout(() => {
      this.isBlackScreenShow = true
    }, 2350)

    setTimeout(() => {
      this.generateCollector = true
    }, 2500)

    setTimeout(() => {
      this.generateTomatoGreen = true
    }, 2800)

    setTimeout(() => {
      this.generateTomatoRed = true
    }, 3400)

    setTimeout(() => {
      this.generateTomatoDarkGreen = true
    }, 4000)
  },
  watch: {
    generateTomatoGreen() {
      if (this.generateTomatoGreen) {
        const greenTomato = generatorTomatoGreen(cells, fifthColumn, 5, 0)
        if (!greenTomato) {
          this.generateTomatoGreen = false
        }
      }
    },
    generateTomatoRed() {
      if (this.generateTomatoRed) {
        const redTomato = generatorTomatoRed(cells, secondColumn, 2, 0)
        if (!redTomato) {
          this.generateTomatoRed = false
        }
      }
    },
    generateTomatoDarkGreen() {
      if (this.generateTomatoDarkGreen) {
        const darkGreenTomato = generatorTomatoDarkGreen(cells, ninthColumn, 9, 0)
        if (!darkGreenTomato) {
          this.generateTomatoDarkGreen = false
        }
      }
    },
    generateCollector() {
      if (this.generateCollector) {
        generatorCollector(cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, false)
      }
    }
  },
  computed: {
    ...mapGetters([EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL]),
  },
  methods: {
    moveCollectorLeft() {
      if (this.isCollectorMovedLeft === false) {
        this.isCollectorMovedLeft = true

        generatorCollectorMoveLeft(
          cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, this.isMovingLeft
        )

        setTimeout(() => {
          this.isCollectorMovedLeft = false
          this.isMovingLeft = false
        }, 200)
      } 
    },
    moveCollectorRight() {
      if (this.isCollectorMovedRight === false) {
        this.isCollectorMovedRight = true

        generatorCollectorMoveRight(
          cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, this.isMovingRight
        )

        setTimeout(() => {
          this.isCollectorMovedRight = false
          this.isMovingRight = false
        }, 200)
      } 
    }
  }
})
</script>

<style src='./collectorGameField.css' module='styles'>
  
</style>