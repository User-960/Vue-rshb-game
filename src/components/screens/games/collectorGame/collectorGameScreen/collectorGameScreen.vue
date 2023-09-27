<template>
  <div :class='styles.border' data-testid='collectorGameScreen'>
    <div :class='styles.screen'>
      <ul :class='styles.listLevels'>
        <li :class='[styles.itemLevels, {[styles.tomatoLevelActive] : isChosenTomatoLevel}]' @click='chooseTomatoLevel'>
          <img src='../../../../../../public/images/tomatoBushRed.svg' alt='image of first level' draggable='false' />
        </li>
        
        <li :class='[styles.itemLevels , {[styles.pepperLevelActive] : isChosenPepperLevel}]' @click='choosePepperLevel'>
          <img src='../../../../../../public/images/pepperBushRed.svg' alt='image of second level' draggable='false' />
        </li>

        <li :class='[styles.itemLevels, {[styles.strawberryLevelActive] : isChosenStrawberryLevel}]' @click='chooseStrawberryLevel'>
          <img src='../../../../../../public/images/strawberryBushRed.svg' alt='image of third level' draggable='false' />
        </li>
      </ul>

      <div :class='styles.robot'>
        <img src='../../../../../../public/images/collectorShop.svg' alt='image robot collector' draggable='false' />
        <button 
          :class='[
            styles.btn, 
            {[styles.btnActive] : isChosenTomatoLevel || 
            isChosenPepperLevel || 
            isChosenStrawberryLevel
          }]'
          @click='openGame'
        >
          Собрать урожай
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'collectorGameScreen',
  data: () => ({
    isChosenTomatoLevel: false,
    isChosenPepperLevel: false,
    isChosenStrawberryLevel: false,

    isOpenTomatoLevel: false,
  }),
  components: {},
  methods: {
    ...mapMutations([EN_CollectorGameMutation.OPEN_GAME_FIELD_COL]),
    chooseTomatoLevel() {
      this.isChosenPepperLevel = false
      this.isChosenStrawberryLevel = false
      this.isChosenTomatoLevel = true
    },
    choosePepperLevel() {
      this.isChosenTomatoLevel = false
      this.isChosenStrawberryLevel = false
      this.isChosenPepperLevel = true
    },
    chooseStrawberryLevel() {
      this.isChosenTomatoLevel = false
      this.isChosenPepperLevel = false
      this.isChosenStrawberryLevel = true
    },
    openGame() {
      if (this.isChosenTomatoLevel || this.isChosenPepperLevel || this.isChosenStrawberryLevel) {
        this.OPEN_GAME_FIELD_COL()
      }
    }
  }
})
</script>

<style src='./collectorGameScreen.css' module='styles'>
  
</style>