<template>
  <div 
    :class='styles.dialogTask' 
    v-if='GET_TOMATO_AIR_TEMPERATURE_CHECK_GH || 
          GET_TOMATO_SOIL_MOISTURE_CHECK_GH ||
          GET_TOMATO_SOIL_MOISTURE_ACTION_GH || 
          GET_TOMATO_AIR_HUMIDITY_CHECK_GH'
  >
    <div 
      :class='styles.dialog' 
      v-if='GET_TOMATO_LEVEL_GH && 
      !GET_FIRST_MISTAKE_TOMATO_GH && 
      !GET_SECOND_MISTAKE_TOMATO_GH && 
      !GET_TOMATO_SOIL_MOISTURE_ACTION_GH &&
      GET_START_GAME_GH'
    >

      <div :class='styles.content'>
        <div v-if='GET_TOMATO_SOIL_MOISTURE_CHECK_GH' :class='styles.contentTomato'>
          <ul :class='styles.characteristicsList'>
            <li 
              :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_SOIL_MOISTURE_CHECK_GH}]' 
              @click='chooseOptionTomato'
            >
              25
            </li>

            <li 
              :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_SOIL_MOISTURE_CHECK_GH}]' 
              @click='chooseOptionTomatoSoilCorrect'
            >
              30.1
            </li>

            <li 
              :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_SOIL_MOISTURE_CHECK_GH}]' 
              @click='chooseOptionTomato'
            >
              30
            </li>
          </ul>
        </div>

        <div v-if='GET_TOMATO_AIR_HUMIDITY_CHECK_GH' :class='styles.contentTomato'>
          <ul :class='styles.characteristicsList'>
            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_AIR_HUMIDITY_CHECK_GH}]' 
            @click='chooseOptionTomato'
            >
              70,6
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_AIR_HUMIDITY_CHECK_GH}]' 
            @click='chooseOptionTomato'
            >
              25
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_AIR_HUMIDITY_CHECK_GH}]' 
            @click='chooseOptionTomatoAirCorrect'
            >
              70
            </li>
          </ul>
        </div>

        <div v-if='GET_TOMATO_AIR_TEMPERATURE_CHECK_GH' :class='styles.contentTomato'>
          <ul :class='styles.characteristicsList'>
            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_AIR_TEMPERATURE_CHECK_GH}]' 
            @click='chooseOptionTomatoAirCorrect'
            >
              25
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_AIR_TEMPERATURE_CHECK_GH}]' 
            @click='chooseOptionTomato'
            >
              60,8
            </li>

            <li :class='[styles.characteristicsItem, {[styles.characteristicsItemAnimation]: GET_TOMATO_AIR_TEMPERATURE_CHECK_GH}]' 
            @click='chooseOptionTomato'
            >
              70
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

export default Vue.extend({
  name: 'dialogTaskTomato',
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_START_GAME_GH,
      
      EN_GreenhouseGameGetters.GET_TOMATO_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_ACTION_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_AIR_TEMPERATURE_CHECK_GH,

      EN_GreenhouseGameGetters.GET_TIMER_TOMATO_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_TOMATO_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_TOMATO_GH,
      EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_TOMATO_GH,
    ]),
  },
  watch: {
    GET_TOMATO_SOIL_MOISTURE_CHECK_GH() {
      if (!this.GET_TOMATO_SOIL_MOISTURE_CHECK_GH) {
        this.UPDATE_TIMER_TOMATO_GH()
        this.SHOW_TOMATO_SOIL_MOISTURE_ACTION_GH()
      }
    },
    GET_TOMATO_SOIL_MOISTURE_ACTION_GH() {
      if (!this.GET_TOMATO_SOIL_MOISTURE_ACTION_GH && !this.GET_TOMATO_SOIL_MOISTURE_CHECK_GH) {
        this.INCREASE_TOMATO_SOIL_MOISTURE_NUM_GH()
        this.UPDATE_TIMER_TOMATO_GH()
        this.SHOW_TOMATO_AIR_HUMIDITY_CHECK_GH()
      }
    },
    GET_TOMATO_AIR_HUMIDITY_CHECK_GH() {
      if (!this.GET_TOMATO_AIR_HUMIDITY_CHECK_GH && !this.GET_TOMATO_SOIL_MOISTURE_ACTION_GH && !this.GET_TOMATO_SOIL_MOISTURE_CHECK_GH) {
        this.UPDATE_TIMER_TOMATO_GH()
        this.SHOW_TOMATO_AIR_TEMPERATURE_CHECK_GH()
      }
    },
    GET_TOMATO_AIR_TEMPERATURE_CHECK_GH() {
      if (!this.GET_TOMATO_AIR_TEMPERATURE_CHECK_GH && !this.GET_TOMATO_SOIL_MOISTURE_ACTION_GH && !this.GET_TOMATO_AIR_HUMIDITY_CHECK_GH && !this.GET_TOMATO_SOIL_MOISTURE_CHECK_GH) {
        this.STOP_TIMER_TOMATO_GH()
      }
    }
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.FINISH_GAME_GH,
      EN_GreenhouseGameMutation.STOP_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_TOMATO_GH,

      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_TOMATO_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_TOMATO_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_TOMATO_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_TOMATO_GH,

      EN_GreenhouseGameMutation.UPDATE_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.SHOW_LOSS_BLOCK_GH,
      EN_GreenhouseGameMutation.PLUS_POINTS_GH,
      EN_GreenhouseGameMutation.MINUS_POINTS_GH,

      EN_GreenhouseGameMutation.INCREASE_TOMATO_SOIL_MOISTURE_NUM_GH,
      EN_GreenhouseGameMutation.SHOW_TOMATO_SOIL_MOISTURE_ACTION_GH,
      EN_GreenhouseGameMutation.SHOW_TOMATO_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameMutation.SHOW_TOMATO_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameMutation.HIDE_TOMATO_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameMutation.HIDE_TOMATO_AIR_TEMPERATURE_CHECK_GH,
      EN_GreenhouseGameMutation.HIDE_TOMATO_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameMutation.MINUS_TOMATO_HEALTH_PERCENTAGE_GH,
    ]),
    chooseOptionTomatoSoilCorrect() {
      if (this.GET_TOMATO_SOIL_MOISTURE_CHECK_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_TOMATO_SOIL_MOISTURE_CHECK_GH()
      }
    },
    chooseOptionTomatoAirCorrect() {
      if (this.GET_TOMATO_AIR_HUMIDITY_CHECK_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_TOMATO_AIR_HUMIDITY_CHECK_GH()
      }

      if (this.GET_TOMATO_AIR_TEMPERATURE_CHECK_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_TOMATO_AIR_TEMPERATURE_CHECK_GH()
      }
    },
    chooseOptionTomato() {
      if (this.GET_TOMATO_LEVEL_GH && this.GET_PLAYER_MISTAKES_TOMATO_GH === 0) {
        this.MINUS_POINTS_GH()
        this.INCREASE_PLAYER_MISTAKES_TOMATO_GH()
        this.SHOW_FIRST_MISTAKE_TOMATO_GH()
        this.MINUS_TOMATO_HEALTH_PERCENTAGE_GH()
        this.START_FINISH_TIMER_TOMATO_GH()
        setTimeout(() => {
          this.HIDE_FIRST_MISTAKE_TOMATO_GH()
          this.UPDATE_TIMER_TOMATO_GH()
          this.START_FINISH_TIMER_TOMATO_GH()
        }, EN_CONFIG.TIMING_ERROR_TEXT_DANIL)
      }

      if (this.GET_TOMATO_LEVEL_GH && this.GET_PLAYER_MISTAKES_TOMATO_GH === 1 && !this.GET_FIRST_MISTAKE_TOMATO_GH) {
        this.MINUS_POINTS_GH()
        this.INCREASE_PLAYER_MISTAKES_TOMATO_GH()
        this.SHOW_SECOND_MISTAKE_TOMATO_GH()
        this.MINUS_TOMATO_HEALTH_PERCENTAGE_GH()
        this.START_FINISH_TIMER_TOMATO_GH()
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