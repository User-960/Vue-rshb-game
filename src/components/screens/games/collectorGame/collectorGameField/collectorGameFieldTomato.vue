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
  generatorCollector
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
	118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130
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

    currentCellCollector: 118,
    currentIndexCellCollector: 0,
    isCollectorMovedLeft: false,
    isCollectorMovedRight: false,
  }),
  components: {},
  created() {
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

        document.addEventListener('keydown', (event) => {
          if (event.code == 'KeyA') {
            this.moveCollectorLeft()
          } 
          
          if (event.code == 'KeyD') {
            this.moveCollectorRight()
          }
        });
      }
    }
  },
  computed: {
    ...mapGetters([EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL]),
  },
  methods: {
    moveCollectorLeft() {
      if (this.currentCellCollector > 118 && this.currentIndexCellCollector !== lastRow[0]) {
        this.currentCellCollector -= 1
        this.currentIndexCellCollector -= 1

        generatorCollector(cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, true)
        this.isCollectorMovedLeft = true
        setTimeout(() => {
          this.isCollectorMovedLeft = false
        }, 300)
        console.log('Move Collector Left')
      } 
    },
    moveCollectorRight() {
      if (this.currentCellCollector < 130 && this.currentIndexCellCollector < lastRow[lastRow.length - 1]) {
        this.currentCellCollector += 1
        this.currentIndexCellCollector += 1

        generatorCollector(cells, lastRow, this.currentCellCollector, this.currentIndexCellCollector, true)

        this.isCollectorMovedRight = true
        setTimeout(() => {
          this.isCollectorMovedRight = false
        }, 300);
        console.log('Move Collector Right')
      } 
    }
  }
})
</script>

<style src='./collectorGameField.css' module='styles'>
  
</style>