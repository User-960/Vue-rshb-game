<template>
  <navBar>
    <template v-slot:mapBack>
      <div :class='styles.map'>
        <div :class='[styles.trees, {[styles.thirdGame]: isThirdGameGameAvailable} ]'></div>
        <div :class='styles.lab' @click='openFirstGame'></div>

        <div :class='[styles.house, {[styles.available]: isHouseGameAvailable}]' @click='openSecondGame'></div>

        <div 
          :class='[styles.greenhouse, {[styles.available]: isGreenHouseGameAvailable}]' 
          @click='openThirdGame'>
        </div>

        <div :class='{[styles.gardenBed]: isFirstLevelGame}'></div>
      </div>
    </template>
  </navBar>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBar from '../navBar/navBar.vue'

export default Vue.extend({
  name: 'mapBack',
  data: () => ({
    isHouseGameAvailable: false,
    isGreenHouseGameAvailable: false,
    isThirdGameGameAvailable: false,
    isFirstLevelGame: true
  }),
  components: {
    navBar
  },
  methods: {
    openFirstGame() {
      console.log('Open First Game')
    },
    openSecondGame() {
      console.log('Open Second Game')
    },
    openThirdGame() {
      console.log('Open Third Game')
    }
  }
})
</script>

<style src='./mapBack.css' module='styles'>
  
</style>