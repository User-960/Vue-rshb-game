<template>
  <div :class='styles.machineCharacteristics'>

    <div v-if='GET_TOMATO_LEVEL_GH' :class='styles.machineCharacteristicsTomato'>
      <ul :class='styles.characteristicsList'>
        <li :class='[styles.characteristicsItem, styles.soilMoisture]'>
          <div :class='styles.soilMoistureNum'>{{ GET_TOMATO_SOIL_MOISTURE_NUM_GH }}</div>
          <div :class='styles.soilMoistureWrapper'>
            <div :class='styles.soilMoistureText'>Влажность почвы</div>
            <button :class='styles.soilMoistureBtn' @click='pourSoilWrongCorrect'>Полить</button>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airMoisture]'>
          <div :class='styles.airMoistureNum'>70</div>
          <div :class='styles.airMoistureWrapper'>
            <div :class='styles.airMoistureText'>Влажность воздуха</div>
            <div :class='styles.airMoistureBtnWrapper'>
              <button :class='styles.airMoistureBtn' @click='pourSoilWrong'>Увлажнить</button>
              <button :class='styles.airMoistureBtn' @click='pourSoilWrong'>Осушить</button>
            </div>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airTemperature]'>
          <div :class='styles.airTemperatureNum'>25</div>
          <div :class='styles.airTemperatureWrapper'>
            <div :class='styles.airTemperatureText'>Температура воздуха</div>
            <div :class='styles.airTemperatureBtnWrapper'>
              <div :class='styles.airTemperatureBtn'></div>
              <div :class='styles.airTemperatureBtn'></div>
              <div :class='styles.airTemperatureBtn'></div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if='GET_PEPPER_LEVEL_GH' :class='styles.machineCharacteristicsTomato'>
      <ul :class='styles.characteristicsList'>
        <li :class='[styles.characteristicsItem, styles.soilMoisture]'>
          <div :class='styles.soilMoistureNum'>85</div>
          <div :class='styles.soilMoistureWrapper'>
            <div :class='styles.soilMoistureText'>Влажность почвы</div>
            <button :class='styles.soilMoistureBtn' @click='moisturizeAirWrong'>Полить</button>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airMoisture]'>
          <div :class='styles.airMoistureNum'>{{ GET_PEPPER_AIR_HUMIDITY_NUM_GH }}</div>
          <div :class='styles.airMoistureWrapper'>
            <div :class='styles.airMoistureText'>Влажность воздуха</div>
            <div :class='styles.airMoistureBtnWrapper'>
              <button :class='styles.airMoistureBtn' @click='moisturizeAirCorrect'>Увлажнить</button>
              <button :class='styles.airMoistureBtn' @click='moisturizeAirWrong'>Осушить</button>
            </div>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airTemperature]'>
          <div :class='styles.airTemperatureNum'>27</div>
          <div :class='styles.airTemperatureWrapper'>
            <div :class='styles.airTemperatureText'>Температура воздуха</div>
            <div :class='styles.airTemperatureBtnWrapper'>
              <div :class='styles.airTemperatureBtn'></div>
              <div :class='styles.airTemperatureBtn'></div>
              <div :class='styles.airTemperatureBtn'></div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if='GET_STRAWBERRY_LEVEL_GH' :class='styles.machineCharacteristicsStrawberry'>
      <ul :class='styles.characteristicsList'>
        <li :class='[styles.characteristicsItem, styles.soilMoisture]'>
          <div :class='styles.soilMoistureNum'>65</div>
          <div :class='styles.soilMoistureWrapper'>
            <div :class='styles.soilMoistureText'>Влажность почвы</div>
            <button :class='styles.soilMoistureBtn' @click='drainAirWrong'>Полить</button>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airMoisture]'>
          <div :class='styles.airMoistureNum'>{{ GET_STRAWBERRY_AIR_HUMIDITY_NUM_GH }}</div>
          <div :class='styles.airMoistureWrapper'>
            <div :class='styles.airMoistureText'>Влажность воздуха</div>
            <div :class='styles.airMoistureBtnWrapper'>
              <button :class='styles.airMoistureBtn' @click='drainAirWrong'>Увлажнить</button>
              <button :class='styles.airMoistureBtn' @click='drainAirCorrect'>Осушить</button>
            </div>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airTemperature]'>
          <div :class='styles.airTemperatureNum'>22</div>
          <div :class='styles.airTemperatureWrapper'>
            <div :class='styles.airTemperatureText'>Температура воздуха</div>
            <div :class='styles.airTemperatureBtnWrapper'>
              <div :class='styles.airTemperatureBtn'></div>
              <div :class='styles.airTemperatureBtn'></div>
              <div :class='styles.airTemperatureBtn'></div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <potTomato v-if='GET_TOMATO_LEVEL_GH' />
    <potPepper v-if='GET_PEPPER_LEVEL_GH' />
    <potStrawberry v-if='GET_STRAWBERRY_LEVEL_GH' />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import potTomato from './potPlant/potTomato.vue'
import potPepper from './potPlant/potPepper.vue'
import potStrawberry from './potPlant/potStrawberry.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import { EN_CONFIG } from '../config/config'

export default Vue.extend({
  name: 'machineCharacteristics',
  components: {
    potTomato,
    potPepper,
    potStrawberry
  },
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_TOMATO_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_ACTION_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_NUM_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_TOMATO_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_TOMATO_GH,

      EN_GreenhouseGameGetters.GET_PEPPER_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_NUM_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_PEPPER_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_PEPPER_GH,

      EN_GreenhouseGameGetters.GET_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_NUM_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_STRAWBERRY_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_STRAWBERRY_GH,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.PLUS_POINTS_GH,
      EN_GreenhouseGameMutation.MINUS_POINTS_GH,

      EN_GreenhouseGameMutation.FINISH_GAME_GH,
      EN_GreenhouseGameMutation.SHOW_LOSS_BLOCK_GH,

      EN_GreenhouseGameMutation.HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.MINUS_TOMATO_HEALTH_PERCENTAGE_GH,
      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_TOMATO_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_TOMATO_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_TOMATO_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_TOMATO_GH,

      EN_GreenhouseGameMutation.HIDE_PEPPER_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_PEPPER_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_PEPPER_GH,
      EN_GreenhouseGameMutation.MINUS_PEPPER_HEALTH_PERCENTAGE_GH,
      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_PEPPER_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_PEPPER_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_PEPPER_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_PEPPER_GH,

      EN_GreenhouseGameMutation.HIDE_STRAWBERRY_AIR_HUMIDITY_ACTION_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH,
      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_STRAWBERRY_GH,
    ]),
    pourSoilWrongCorrect() {
      if (this.GET_TOMATO_LEVEL_GH && this.GET_TOMATO_SOIL_MOISTURE_ACTION_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH()
      }
    },
    pourSoilWrong() {
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
    },
    moisturizeAirCorrect() {
      if (this.GET_PEPPER_LEVEL_GH && this.GET_PEPPER_AIR_HUMIDITY_ACTION_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_PEPPER_AIR_HUMIDITY_ACTION_GH()
      }
    },
    moisturizeAirWrong() {
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
    },
    drainAirCorrect() {
      if (this.GET_STRAWBERRY_LEVEL_GH && this.GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_STRAWBERRY_AIR_HUMIDITY_ACTION_GH()
      }
    },
    drainAirWrong() {
      if (this.GET_STRAWBERRY_LEVEL_GH && this.GET_PLAYER_MISTAKES_STRAWBERRY_GH === 0) {
        this.MINUS_POINTS_GH()
        this.INCREASE_PLAYER_MISTAKES_STRAWBERRY_GH()
        this.SHOW_FIRST_MISTAKE_STRAWBERRY_GH()
        this.MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH()
        this.START_FINISH_TIMER_STRAWBERRY_GH()
        setTimeout(() => {
          this.HIDE_FIRST_MISTAKE_STRAWBERRY_GH()
          this.UPDATE_TIMER_STRAWBERRY_GH()
          this.START_FINISH_TIMER_STRAWBERRY_GH()
        }, EN_CONFIG.TIMING_ERROR_TEXT_DANIL)
      }

      if (this.GET_STRAWBERRY_LEVEL_GH && this.GET_PLAYER_MISTAKES_STRAWBERRY_GH === 1 && !this.GET_FIRST_MISTAKE_STRAWBERRY_GH) {
        this.MINUS_POINTS_GH()
        this.INCREASE_PLAYER_MISTAKES_STRAWBERRY_GH()
        this.SHOW_SECOND_MISTAKE_STRAWBERRY_GH()
        this.MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH()
        this.START_FINISH_TIMER_STRAWBERRY_GH()
        setTimeout(() => {
          this.FINISH_GAME_GH()
          this.SHOW_LOSS_BLOCK_GH()
        }, EN_CONFIG.TIMING_ERROR_TEXT_DANIL)
      }
    },
  }
})
</script>

<style src='./machineCharacteristics.css' module='styles'>
  
</style>