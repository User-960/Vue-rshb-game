<template>
  <div :class='styles.machineCharacteristicsBack'>
    <div v-if='GET_TOMATO_LEVEL_GH' :class='[
        styles.plant, 
        {
          [styles.plantSproutTomato]: GET_TOMATO_SPROUT_GH,
          [styles.plantColorTomato]: GET_TOMATO_COLOR_GH,
          [styles.plantModifiedTomato]: GET_TOMATO_MODIFIED_GH
        }
      ]'
    ></div>

    <div v-else-if='GET_PEPPER_LEVEL_GH' :class='[
        styles.plant, 
        {
          [styles.plantSproutPepper]: GET_PEPPER_SPROUT_GH,
          [styles.plantColorPepper]: GET_PEPPER_COLOR_GH,
          [styles.plantModifiedPepper]: GET_PEPPER_MODIFIED_GH
        }
      ]'
    ></div>

    <div v-else-if='GET_STRAWBERRY_LEVEL_GH' :class='[
        styles.plant, 
        {
          [styles.plantSproutStrawberry]: GET_STRAWBERRY_SPROUT_GH,
          [styles.plantColorStrawberry]: GET_STRAWBERRY_COLOR_GH,
          [styles.plantModifiedStrawberry]: GET_STRAWBERRY_MODIFIED_GH
        }
      ]'
    ></div>

    <div :class='styles.bigFlaskEmpty'></div>

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