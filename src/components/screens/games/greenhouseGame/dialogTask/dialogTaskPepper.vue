<template>
  <div 
    :class='styles.dialogTask' 
    v-if='GET_PEPPER_AIR_TEMPERATURE_CHECK_GH || 
          GET_PEPPER_SOIL_MOISTURE_CHECK_GH ||
          GET_PEPPER_AIR_HUMIDITY_ACTION_GH || 
          GET_PEPPER_AIR_HUMIDITY_CHECK_GH'
  >
    <div 
      :class='styles.dialog' 
      v-if='GET_PEPPER_LEVEL_GH && 
      !GET_FIRST_MISTAKE_PEPPER_GH && 
      !GET_SECOND_MISTAKE_PEPPER_GH && 
      !GET_PEPPER_AIR_HUMIDITY_ACTION_GH &&
      GET_START_GAME_GH'
    >

      <div :class='styles.content'>
        <div v-if='GET_PEPPER_SOIL_MOISTURE_CHECK_GH' :class='styles.contentPepper'>
          <ul :class='styles.characteristicsList'>
            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_SOIL_MOISTURE_CHECK_GH}]' @click='chooseOptionPepperSoilCorrect'
            data-testid='pepperTaskSoilMoistureCorrect'
            >
              85
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_SOIL_MOISTURE_CHECK_GH}]' @click='chooseOptionPepper'
            >
              25
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_SOIL_MOISTURE_CHECK_GH}]' @click='chooseOptionPepper'
            >
              80,5
            </li>
          </ul>
        </div>

        <div v-if='GET_PEPPER_AIR_HUMIDITY_CHECK_GH' :class='styles.contentPepper'>
          <ul :class='styles.characteristicsList'>
            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_AIR_HUMIDITY_CHECK_GH}]' @click='chooseOptionPepper'
            >
              27
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_AIR_HUMIDITY_CHECK_GH}]' @click='chooseOptionPepper'
            >
              70,2
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_AIR_HUMIDITY_CHECK_GH}]' @click='chooseOptionPepperAirCorrect'
            data-testid='pepperTaskAirHumidityCorrect'
            >
              65
            </li>
          </ul>
        </div>

        <div v-if='GET_PEPPER_AIR_TEMPERATURE_CHECK_GH' :class='styles.contentPepper'>
          <ul :class='styles.characteristicsList'>
            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_AIR_TEMPERATURE_CHECK_GH}]' @click='chooseOptionPepper'
            >
              65
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_AIR_TEMPERATURE_CHECK_GH}]' @click='chooseOptionPepper'
            >
              25,7
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_PEPPER_AIR_TEMPERATURE_CHECK_GH}]' @click='chooseOptionPepperAirCorrect'
            data-testid='pepperTaskAirTemperatureCorrect'
            >
              27
            </li>
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
import { AUDIO_CONFIG } from '@/config/audio'

const audioSuccessFlask = new Audio(AUDIO_CONFIG.AUDIO_SUCCESS_FLASK)
const audioMistake = new Audio(AUDIO_CONFIG.AUDIO_MISTAKE)

export default Vue.extend({
  name: 'dialogTaskPepper',
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_START_GAME_GH,
      
      EN_GreenhouseGameGetters.GET_PEPPER_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_AIR_TEMPERATURE_CHECK_GH,

      EN_GreenhouseGameGetters.GET_TIMER_PEPPER_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_PEPPER_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_PEPPER_GH,
      EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_PEPPER_GH,
    ]),
  },
  watch: {
    GET_PEPPER_SOIL_MOISTURE_CHECK_GH() {
      if (!this.GET_PEPPER_SOIL_MOISTURE_CHECK_GH) {
        this.UPDATE_TIMER_PEPPER_GH()
        this.SHOW_PEPPER_AIR_HUMIDITY_CHECK_GH()
      }
    },
    GET_PEPPER_AIR_HUMIDITY_CHECK_GH() {
      if (!this.GET_PEPPER_AIR_HUMIDITY_CHECK_GH) {
        this.UPDATE_TIMER_PEPPER_GH()
        this.SHOW_PEPPER_AIR_HUMIDITY_ACTION_GH()
      }
    },
    GET_PEPPER_AIR_HUMIDITY_ACTION_GH() {
      if (!this.GET_PEPPER_AIR_HUMIDITY_ACTION_GH) {
        this.INCREASE_PEPPER_AIR_HUMIDITY_NUM_GH()
        this.UPDATE_TIMER_PEPPER_GH()
        this.SHOW_PEPPER_AIR_TEMPERATURE_CHECK_GH()
      }
    },
    GET_PEPPER_AIR_TEMPERATURE_CHECK_GH() {
      if (!this.GET_PEPPER_AIR_TEMPERATURE_CHECK_GH) {
        this.STOP_TIMER_PEPPER_GH()
      }
    }
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.FINISH_GAME_GH,

      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_PEPPER_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_PEPPER_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_PEPPER_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_PEPPER_GH,

      EN_GreenhouseGameMutation.SHOW_LOSS_BLOCK_GH,
      EN_GreenhouseGameMutation.PLUS_POINTS_GH,
      EN_GreenhouseGameMutation.MINUS_POINTS_GH,

      EN_GreenhouseGameMutation.START_FINISH_TIMER_PEPPER_GH,
      EN_GreenhouseGameMutation.STOP_TIMER_PEPPER_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_PEPPER_GH,

      EN_GreenhouseGameMutation.SHOW_PEPPER_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameMutation.SHOW_PEPPER_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameMutation.SHOW_PEPPER_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameMutation.INCREASE_PEPPER_AIR_HUMIDITY_NUM_GH,
      EN_GreenhouseGameMutation.HIDE_PEPPER_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameMutation.HIDE_PEPPER_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameMutation.HIDE_PEPPER_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameMutation.MINUS_PEPPER_HEALTH_PERCENTAGE_GH,
    ]),
    chooseOptionPepperSoilCorrect() {
      if (this.GET_PEPPER_SOIL_MOISTURE_CHECK_GH) {
        audioSuccessFlask.volume = 1
        audioSuccessFlask.play()

        this.PLUS_POINTS_GH()
        this.HIDE_PEPPER_SOIL_MOISTURE_CHECK_GH()
      }
    },
    chooseOptionPepperAirCorrect() {
      if (this.GET_PEPPER_AIR_HUMIDITY_CHECK_GH) {
        audioSuccessFlask.volume = 1
        audioSuccessFlask.play()

        this.PLUS_POINTS_GH()
        this.HIDE_PEPPER_AIR_HUMIDITY_CHECK_GH()
      }

      if (this.GET_PEPPER_AIR_TEMPERATURE_CHECK_GH) {
        audioSuccessFlask.volume = 1
        audioSuccessFlask.play()
        
        this.PLUS_POINTS_GH()
        this.HIDE_PEPPER_AIR_TEMPERATURE_CHECK_GH()
      }
    },
    chooseOptionPepper() {
      audioMistake.volume = 1
      audioMistake.play()

      if (this.GET_PEPPER_LEVEL_GH && this.GET_PLAYER_MISTAKES_PEPPER_GH === 0) {
        this.MINUS_POINTS_GH()
        this.INCREASE_PLAYER_MISTAKES_PEPPER_GH()
        this.SHOW_FIRST_MISTAKE_PEPPER_GH()
        this.MINUS_PEPPER_HEALTH_PERCENTAGE_GH()
        this.START_FINISH_TIMER_PEPPER_GH()
        setTimeout(() => {
          this.HIDE_FIRST_MISTAKE_PEPPER_GH()
          this.UPDATE_TIMER_PEPPER_GH()
          this.START_FINISH_TIMER_PEPPER_GH()
        }, EN_CONFIG.TIMING_ERROR_TEXT_DANIL)
      }

      if (this.GET_PEPPER_LEVEL_GH && this.GET_PLAYER_MISTAKES_PEPPER_GH === 1 && !this.GET_FIRST_MISTAKE_PEPPER_GH) {
        this.MINUS_POINTS_GH()
        this.INCREASE_PLAYER_MISTAKES_PEPPER_GH()
        this.SHOW_SECOND_MISTAKE_PEPPER_GH()
        this.MINUS_PEPPER_HEALTH_PERCENTAGE_GH()
        this.START_FINISH_TIMER_PEPPER_GH()
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