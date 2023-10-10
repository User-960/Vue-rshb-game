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
import { generatorCells, generatorTomatoGreen, generatorTomatoRed, generatorTomatoDarkGreen } from '../helpers/helpers'

const cells = generatorCells()
const firstColumn: number[] = [1, 14, 27, 40, 53, 66, 79, 92, 105, 118]
const secondColumn: number[] = [2, 15, 28, 41, 54, 67, 80, 93, 106, 119]
const fifthColumn: number[] = [5, 18, 31, 44, 57, 70, 83, 96, 109, 122]
const ninthColumn: number[] = [9, 22, 35, 48, 61, 74, 87, 100, 113, 126]

export default Vue.extend({
  name: 'collectorGameFieldTomato',
  data: () => ({
    isBlackScreenShow: false,
    cells,
    generateTomatoGreen: false,
    generateTomatoRed: false,
    generateTomatoDarkGreen: false
  }),
  components: {},
  created() {
    setTimeout(() => {
      this.isBlackScreenShow = true
      this.generateTomatoGreen = true
    }, 2350)

    setTimeout(() => {
      this.generateTomatoGreen = true
    }, 2500)

    setTimeout(() => {
      this.generateTomatoRed = true
    }, 3000)

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
    }
  },
  computed: {
    ...mapGetters([EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL]),
  },
  methods: {}
})
</script>

<style src='./collectorGameField.css' module='styles'>
  
</style>