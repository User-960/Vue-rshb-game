<template>
  <ul :class='styles.navigationLevels'>
    <li :class='[
        styles.navLevel, 
        styles.navLevelTomato,
        {[styles.navLevelTomatoActive]: GET_TOMATO_LEVEL_GH || !GET_TOMATO_LEVEL_GH}
      ]'
      @click='openTomatoLevel'
    ></li>

    <li :class='[
        styles.navLevel, 
        styles.navLevelPepper,
        {[styles.navLevelPepperActive]: !GET_TOMATO_LEVEL_GH || GET_PEPPER_LEVEL_GH}
      ]'
      @click='openPepperLevel'
    ></li>

    <li :class='[
        styles.navLevel, 
        styles.navLevelStrawberry,
        {[styles.navLevelStrawberryActive]: !GET_PEPPER_LEVEL_GH || GET_STRAWBERRY_LEVEL_GH}
      ]'
      @click='openStrawberryLevel'
    ></li>
  </ul>
</template>

<script lang='ts'>
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'navigationLevels',
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_TOMATO_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_ACTION_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_AIR_HUMIDITY_CHECK_GH,
      
      EN_GreenhouseGameGetters.GET_PEPPER_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_CHECK_GH,

      EN_GreenhouseGameGetters.GET_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.START_TOMATO_LEVEL_GH,
      EN_GreenhouseGameMutation.FINISH_TOMATO_LEVEL_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_TOMATO_GH,

      EN_GreenhouseGameMutation.START_PEPPER_LEVEL_GH,
      EN_GreenhouseGameMutation.FINISH_PEPPER_LEVEL_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_PEPPER_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_PEPPER_GH,
      EN_GreenhouseGameMutation.SHOW_PEPPER_SOIL_MOISTURE_CHECK_GH,

      EN_GreenhouseGameMutation.START_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameMutation.FINISH_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.SHOW_STRAWBERRY_SOIL_MOISTURE_CHECK_GH,
    ]),
    openTomatoLevel() {
      if (!this.GET_PEPPER_LEVEL_GH) {
        this.FINISH_PEPPER_LEVEL_GH()
        this.START_FINISH_TIMER_PEPPER_GH()
        this.FINISH_STRAWBERRY_LEVEL_GH()
        this.START_FINISH_TIMER_STRAWBERRY_GH()

        this.START_TOMATO_LEVEL_GH()
        this.UPDATE_TIMER_TOMATO_GH()
        this.START_FINISH_TIMER_TOMATO_GH()
      }
    },
    openPepperLevel() {
      if (
          !this.GET_PEPPER_LEVEL_GH && 
          !this.GET_TOMATO_AIR_TEMPERATURE_CHECK_GH && 
          !this.GET_TOMATO_SOIL_MOISTURE_CHECK_GH &&
          !this.GET_TOMATO_SOIL_MOISTURE_ACTION_GH && 
          !this.GET_TOMATO_AIR_HUMIDITY_CHECK_GH
        ) {
        this.FINISH_TOMATO_LEVEL_GH()
        this.START_FINISH_TIMER_TOMATO_GH()
        this.FINISH_STRAWBERRY_LEVEL_GH()
        this.START_FINISH_TIMER_STRAWBERRY_GH()

        if (!this.GET_PEPPER_LEVEL_GH && !this.GET_PEPPER_SOIL_MOISTURE_CHECK_GH) {
          this.START_PEPPER_LEVEL_GH()
          this.SHOW_PEPPER_SOIL_MOISTURE_CHECK_GH()
          this.UPDATE_TIMER_PEPPER_GH()
          this.START_FINISH_TIMER_PEPPER_GH()
        }
      }
    },
    openStrawberryLevel() {
      if (
          !this.GET_STRAWBERRY_LEVEL_GH && 
          !this.GET_PEPPER_AIR_TEMPERATURE_CHECK_GH && 
          !this.GET_PEPPER_SOIL_MOISTURE_CHECK_GH &&
          !this.GET_PEPPER_AIR_HUMIDITY_ACTION_GH && 
          !this.GET_PEPPER_AIR_HUMIDITY_CHECK_GH
        ) {
        this.FINISH_TOMATO_LEVEL_GH()
        this.START_FINISH_TIMER_TOMATO_GH()
        this.FINISH_PEPPER_LEVEL_GH()
        this.START_FINISH_TIMER_PEPPER_GH()

        if (!this.GET_STRAWBERRY_LEVEL_GH && !this.GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH) {
          this.START_STRAWBERRY_LEVEL_GH()
          this.SHOW_STRAWBERRY_SOIL_MOISTURE_CHECK_GH()
          this.UPDATE_TIMER_STRAWBERRY_GH()
          this.START_FINISH_TIMER_STRAWBERRY_GH()
        }
      }
    }
  }
})
</script>

<style src='./navigationLevels.css' module='styles'>
  
</style>