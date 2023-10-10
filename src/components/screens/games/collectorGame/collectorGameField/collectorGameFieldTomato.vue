<template>
  <div>
    <div :class='[styles.blackScreen, {[styles.blackScreenNon]: isBlackScreenShow}]'></div>

    <div :class='styles.gameWrapper'>
      <div :class='styles.border'>
        <div :class='styles.gameField'>
          <div :class='[styles.decorations, styles.left]'></div>

          <div :class='styles.cellWrapper'>
            <div v-for='cell in cells' :key='cell.id'>
              <div :class='[styles.cell, {[styles.isTomatoGreen]: cell.isTomatoGreen}]'></div>
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
import { generatorCells } from '../helpers/helpers'

const cells = generatorCells()

export default Vue.extend({
  name: 'collectorGameFieldTomato',
  data: () => ({
    isBlackScreenShow: false,
    cells,
  }),
  components: {},
  created() {
    setTimeout(() => {
      this.isBlackScreenShow = true
    }, 2350)
  },
  computed: {
    ...mapGetters([EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL]),
  },
  methods: {}
})
</script>

<style src='./collectorGameField.css' module='styles'>
  
</style>