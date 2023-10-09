<template>
  <div :class='styles.machineCharacteristics'>

    <div v-if='GET_TOMATO_LEVEL_GH' :class='styles.machineCharacteristicsTomato'>
      <ul :class='styles.characteristicsList'>
        <li :class='[styles.characteristicsItem, styles.soilMoisture]'>
          <div :class='styles.soilMoistureNum'>{{ GET_TOMATO_SOIL_MOISTURE_NUM_GH }}</div>
          <div :class='styles.soilMoistureWrapper'>
            <div :class='styles.soilMoistureText'>Влажность почвы</div>
            <button :class='styles.soilMoistureBtn' @click='pourSoil'>Полить</button>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airMoisture]'>
          <div :class='styles.airMoistureNum'>70</div>
          <div :class='styles.airMoistureWrapper'>
            <div :class='styles.airMoistureText'>Влажность воздуха</div>
            <div :class='styles.airMoistureBtnWrapper'>
              <button :class='styles.airMoistureBtn' @click='moisturizeAir'>Увлажнить</button>
              <button :class='styles.airMoistureBtn' @click='drainAir'>Осушить</button>
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

    <div v-if='GET_PEPPER_LEVEL_GH' :class='styles.machineCharacteristicsPepper'>
      <ul :class='styles.characteristicsList'>
        <li :class='[styles.characteristicsItem, styles.soilMoisture]'>
          <div :class='styles.soilMoistureNum'>30,1</div>
          <div :class='styles.soilMoistureWrapper'>
            <div :class='styles.soilMoistureText'>Влажность почвы</div>
            <button :class='styles.soilMoistureBtn'>Полить</button>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airMoisture]'>
          <div :class='styles.airMoistureNum'>70</div>
          <div :class='styles.airMoistureWrapper'>
            <div :class='styles.airMoistureText'>Влажность воздуха</div>
            <div :class='styles.airMoistureBtnWrapper'>
              <button :class='styles.airMoistureBtn'>Увлажнить</button>
              <button :class='styles.airMoistureBtn'>Осушить</button>
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

    <div v-if='GET_STRAWBERRY_LEVEL_GH' :class='styles.machineCharacteristicsStrawberry'>
      <ul :class='styles.characteristicsList'>
        <li :class='[styles.characteristicsItem, styles.soilMoisture]'>
          <div :class='styles.soilMoistureNum'>30,1</div>
          <div :class='styles.soilMoistureWrapper'>
            <div :class='styles.soilMoistureText'>Влажность почвы</div>
            <button :class='styles.soilMoistureBtn'>Полить</button>
          </div>
        </li>

        <li :class='[styles.characteristicsItem, styles.airMoisture]'>
          <div :class='styles.airMoistureNum'>70</div>
          <div :class='styles.airMoistureWrapper'>
            <div :class='styles.airMoistureText'>Влажность воздуха</div>
            <div :class='styles.airMoistureBtnWrapper'>
              <button :class='styles.airMoistureBtn'>Увлажнить</button>
              <button :class='styles.airMoistureBtn'>Осушить</button>
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

    <!-- <div v-else-if='GET_STRAWBERRY_LEVEL_GH' :class='[
        styles.plant, 
        {
          [styles.plantSproutStrawberry]: GET_STRAWBERRY_SPROUT_GH,
          [styles.plantColorStrawberry]: GET_STRAWBERRY_COLOR_GH,
          [styles.plantModifiedStrawberry]: GET_STRAWBERRY_MODIFIED_GH
        }
      ]'
    ></div> -->

    <potTomato v-if='GET_TOMATO_LEVEL_GH' />

    <!-- <flasksPepper v-else-if='GET_PEPPER_LEVEL_GH' />
    <flasksStrawberry v-else-if='GET_STRAWBERRY_LEVEL_GH' /> -->
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

      EN_GreenhouseGameGetters.GET_PEPPER_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_SPROUT_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_COLOR_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_MODIFIED_GH,

      EN_GreenhouseGameGetters.GET_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_SPROUT_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_COLOR_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_MODIFIED_GH,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.START_PEPPER_LEVEL_GH,
      EN_GreenhouseGameMutation.START_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameMutation.FINISH_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameMutation.PLUS_POINTS_GH,

      EN_GreenhouseGameMutation.HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH,
      EN_GreenhouseGameMutation.INCREASE_TOMATO_SOIL_MOISTURE_NUM_GH,
      EN_GreenhouseGameMutation.SHOW_TOMATO_AIR_HUMIDITY_CHECK_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_TOMATO_GH,

      EN_GreenhouseGameMutation.HIDE_PEPPER_MODIFIED_GH,

      EN_GreenhouseGameMutation.HIDE_STRAWBERRY_MODIFIED_GH,
    ]),
    pourSoil() {
      if (this.GET_TOMATO_LEVEL_GH && this.GET_TOMATO_SOIL_MOISTURE_ACTION_GH) {
        this.PLUS_POINTS_GH()
        this.HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH()
      }
    },
    moisturizeAir() {
      // if (this.GET_TOMATO_SOIL_MOISTURE_ACTION_GH) {
      //   this.HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH()
      //   this.INCREASE_TOMATO_SOIL_MOISTURE_NUM_GH()
      //   this.SHOW_TOMATO_SOIL_TEMPERATURE_CHECK_GH()
      // }
      console.log(1)
    },
    drainAir() {
      // if (this.GET_TOMATO_SOIL_MOISTURE_ACTION_GH) {
      //   this.HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH()
      //   this.INCREASE_TOMATO_SOIL_MOISTURE_NUM_GH()
      //   this.SHOW_TOMATO_SOIL_TEMPERATURE_CHECK_GH()
      // }
      console.log(1)
    }
  }
})
</script>

<style src='./machineCharacteristics.css' module='styles'>
  
</style>