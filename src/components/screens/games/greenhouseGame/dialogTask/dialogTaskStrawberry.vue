<template>
  <div 
    :class='styles.dialogTask' 
    v-if='GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH || 
          GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH ||
          GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH || 
          GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH'
  >
    <div 
      :class='styles.dialog' 
      v-if='GET_STRAWBERRY_LEVEL_GH && 
      !GET_FIRST_MISTAKE_GH && 
      !GET_SECOND_MISTAKE_GH && 
      !GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH &&
      GET_START_GAME_GH'
    >

      <div :class='styles.content'>
        <div v-if='GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH' :class='styles.contentStrawberry'>
          <ul :class='styles.characteristicsList'>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberry'>22</li>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberry'>34,2</li>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberrySoilCorrect'>32</li>
          </ul>
        </div>

        <div v-if='GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH' :class='styles.contentStrawberry'>
          <ul :class='styles.characteristicsList'>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberry'>122</li>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberryAirCorrect'>102</li>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberry'>2</li>
          </ul>
        </div>

        <div v-if='GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH' :class='styles.contentStrawberry'>
          <ul :class='styles.characteristicsList'>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberry'>38</li>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberryAirCorrect'>22</li>
            <li :class='styles.characteristicsItem' @click='chooseOptionStrawberry'>69,2</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_CONFIG } from '../config/config'

export default Vue.extend({
  name: 'dialogTaskStrawberry',
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_START_GAME_GH,
      
      EN_GreenhouseGameGetters.GET_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH,

      EN_GreenhouseGameGetters.GET_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_GH,
      EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_GH,
    ]),
  },
  watch: {
    GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH() {
      if (!this.GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH) {
        this.UPDATE_TIMER_STRAWBERRY_GH()
        this.SHOW_STRAWBERRY_AIR_HUMIDITY_CHECK_GH()
      }
    },
    GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH() {
      if (!this.GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH) {
        this.UPDATE_TIMER_STRAWBERRY_GH()
        this.SHOW_STRAWBERRY_AIR_HUMIDITY_ACTION_GH()
      }
    },
    GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH() {
      if (!this.GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH) {
        this.REDUCE_STRAWBERRY_AIR_HUMIDITY_NUM_GH()
        this.UPDATE_TIMER_STRAWBERRY_GH()
        this.SHOW_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH()
      }
    },
    GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH() {
      if (!this.GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH) {
        this.STOP_TIMER_STRAWBERRY_GH()
        this.FINISH_GAME_GH()
      }
    }
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.FINISH_GAME_GH,
      
      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_GH,
      EN_GreenhouseGameMutation.SHOW_LOSS_BLOCK_GH,
      EN_GreenhouseGameMutation.PLUS_POINTS_GH,
      EN_GreenhouseGameMutation.MINUS_POINTS_GH,

      EN_GreenhouseGameMutation.START_FINISH_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.STOP_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_STRAWBERRY_GH,

      EN_GreenhouseGameMutation.SHOW_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameMutation.SHOW_STRAWBERRY_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameMutation.SHOW_STRAWBERRY_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameMutation.REDUCE_STRAWBERRY_AIR_HUMIDITY_NUM_GH,
      EN_GreenhouseGameMutation.HIDE_STRAWBERRY_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameMutation.HIDE_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameMutation.HIDE_STRAWBERRY_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameMutation.MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH,
    ]),
    chooseOptionStrawberrySoilCorrect() {
      if (this.GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_STRAWBERRY_SOIL_MOISTURE_CHECK_GH()
      }
    },
    chooseOptionStrawberryAirCorrect() {
      if (this.GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_STRAWBERRY_AIR_HUMIDITY_CHECK_GH()
      }

      if (this.GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH()
      }
    },
    chooseOptionStrawberry() {
      if (this.GET_STRAWBERRY_LEVEL_GH && this.GET_PLAYER_MISTAKES_GH === 0) {
        this.MINUS_POINTS_GH()
        this.MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH()
        this.INCREASE_PLAYER_MISTAKES_GH()
        this.SHOW_FIRST_MISTAKE_GH()
        this.START_FINISH_TIMER_STRAWBERRY_GH()
        setTimeout(() => {
          this.HIDE_FIRST_MISTAKE_GH()
          this.UPDATE_TIMER_STRAWBERRY_GH()
          this.START_FINISH_TIMER_STRAWBERRY_GH()
        }, EN_CONFIG.TIMING_ERROR_TEXT_DANIL)
      }

      if (this.GET_STRAWBERRY_LEVEL_GH && this.GET_PLAYER_MISTAKES_GH === 1 && !this.GET_FIRST_MISTAKE_GH) {
        this.MINUS_POINTS_GH()
        this.MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH()
        this.INCREASE_PLAYER_MISTAKES_GH()
        this.SHOW_SECOND_MISTAKE_GH()
        this.START_FINISH_TIMER_STRAWBERRY_GH()
        setTimeout(() => {
          this.FINISH_GAME_GH()
          this.SHOW_LOSS_BLOCK_GH()
        }, EN_CONFIG.TIMING_ERROR_TEXT_DANIL)
      }
    }
  }
})
</script>

<style src='./dialogTask.css' module='styles'>
  
</style>