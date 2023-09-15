<template>
  <navBar>
    <template v-slot:mapBack>
      <div :class='styles.map'>
        <div :class='[
            styles.trees, 
            {[styles.beforeThirdGame]: isBeforeThirdGame},
            {[styles.beforeFifthGame]: isBeforeFifthGame} 
          ]'>
        </div>

        <div :class='styles.lab' @click='openFirstGame'></div>

        <div :class='[
            styles.house, 
            {[styles.houseAvailable]: isHouseAvailable}
          ]' 
          @click='openSecondGame'
        ></div>

        <div 
          :class='[
            styles.greenhouse, 
            {[styles.greenhouseAvailable]: isGreenhouseAvailable}
          ]' 
          @click='openThirdGame'>
        </div>

        <div 
          :class='[
            {[styles.gardenBed]: isStartGame}, 
            {[styles.afterFirstGame]: isAfterFirstGame}, 
            {[styles.afterSecondGame]: isAfterSecondGame}, 
            {[styles.beforeThirdGame]: isBeforeThirdGame},
            {[styles.beforeFourthGame]: isBeforeFourthGame},
            {[styles.beforeFifthGame]: isBeforeFifthGame} 
          ]'
        ></div>
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
    isStartGame: true,
    isAfterFirstGame: false,
    isAfterSecondGame: false,
    isBeforeThirdGame: false,
    isBeforeFourthGame: false,
    isBeforeFifthGame: false,
    // isAfterFifthGame: false,

    isHouseAvailable: false,
    isGreenhouseAvailable: false,
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