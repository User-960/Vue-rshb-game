<template>
  <div :class='styles.border' data-testid='collectorGameScreen'>
    <div :class='styles.screen'>
      <ul :class='styles.listLevels'>
        <li :class='[styles.itemLevels, {[styles.tomatoLevelActive] : isChosenTomatoLevel}]' @click='chooseTomatoLevel'>
          <img src='../../../../../../public/images/tomatoBush.svg' alt='image of first level' draggable='false' />
        </li>
        
        <li :class='[styles.itemLevels , {[styles.pepperLevelActive] : isChosenPepperLevel}]' @click='choosePepperLevel'>
          <img src='../../../../../../public/images/pepperBush.svg' alt='image of second level' draggable='false' />
        </li>

        <li :class='[styles.itemLevels, {[styles.strawberryLevelActive] : isChosenStrawberryLevel}]' @click='chooseStrawberryLevel'>
          <img src='../../../../../../public/images/strawberryBush.svg' alt='image of third level' draggable='false' />
        </li>
      </ul>

      <div :class='styles.robot'>
        <img src='../../../../../../public/images/collector.svg' alt='image robot collector' draggable='false' />
        <button 
          :class='[
            styles.btn, 
            {[styles.btnActive] : isChosenTomatoLevel || 
            isChosenPepperLevel || 
            isChosenStrawberryLevel
          }]'
        >
          Собрать урожай
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'collectorGameScreen',
  data: () => ({
    isChosenTomatoLevel: false,
    isChosenPepperLevel: false,
    isChosenStrawberryLevel: false,
  }),
  components: {},
  methods: {
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
    }
  }
})
</script>

<style src='./collectorGameScreen.css' module='styles'>
  
</style>