<template>
  <div :class='styles.machineCharacteristics'>

    <div v-if='GET_TOMATO_LEVEL_GH' :class='styles.machineCharacteristicsTomato'>
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

    <!-- <div v-else-if='GET_PEPPER_LEVEL_GH' :class='[
        styles.plant, 
        {
          [styles.plantSproutPepper]: GET_PEPPER_SPROUT_GH,
          [styles.plantColorPepper]: GET_PEPPER_COLOR_GH,
          [styles.plantModifiedPepper]: GET_PEPPER_MODIFIED_GH
        }
      ]'
    ></div> -->

    <!-- <div v-else-if='GET_STRAWBERRY_LEVEL_GH' :class='[
        styles.plant, 
        {
          [styles.plantSproutStrawberry]: GET_STRAWBERRY_SPROUT_GH,
          [styles.plantColorStrawberry]: GET_STRAWBERRY_COLOR_GH,
          [styles.plantModifiedStrawberry]: GET_STRAWBERRY_MODIFIED_GH
        }
      ]'
    ></div> -->

    <!-- <flasksTomato v-if='GET_TOMATO_LEVEL_GH' />
    <flasksPepper v-else-if='GET_PEPPER_LEVEL_GH' />
    <flasksStrawberry v-else-if='GET_STRAWBERRY_LEVEL_GH' /> -->
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import flasksTomato from './flasks/flasksTomato.vue'
import flasksPepper from './flasks/flasksPepper.vue'
import flasksStrawberry from './flasks/flasksStrawberry.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'

export default Vue.extend({
  name: 'machineCharacteristics',
  components: {
    flasksTomato,
    flasksPepper,
    flasksStrawberry
  },
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_TOMATO_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SPROUT_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_COLOR_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_MODIFIED_GH,

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
      EN_GreenhouseGameMutation.HIDE_TOMATO_MODIFIED_GH,
      EN_GreenhouseGameMutation.HIDE_PEPPER_MODIFIED_GH,
      EN_GreenhouseGameMutation.HIDE_STRAWBERRY_MODIFIED_GH,
    ]),
  }
})
</script>

<style src='./machineCharacteristics.css' module='styles'>
  
</style>