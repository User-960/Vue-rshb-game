<template>
  <div :class='styles.chemistryTableBack'>
    <div :class='[
        styles.plant, 
        {
          [styles.plantSproutTomato]: GET_TOMATO_SPROUT,
          [styles.plantColorTomato]: GET_TOMATO_COLOR,
          [styles.plantModifiedTomato]: GET_TOMATO_MODIFIED,

          [styles.plantSproutPepper]: isPlantSproutPepper,
          [styles.plantColorPepper]: isPlantColorPepper,
          [styles.plantModifiedPepper]: isPlantModifiedPepper,

          [styles.plantSproutStrawberry]: isPlantSproutStrawberry,
          [styles.plantColorStrawberry]: isPlantColorStrawberry,
          [styles.plantModifiedStrawberry]: isPlantModifiedStrawberry
        }
      ]'
    ></div>

    <div :class='styles.bigFlaskEmpty'></div>

    <flasks />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import flasks from './flasks/flasks.vue'
import { mapGetters } from 'vuex'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'

export default Vue.extend({
  name: 'chemistryTable',
  components: {
    flasks
  },
  data: () => ({
    isPlantSproutTomato: false,
    isPlantColorTomato: false,
    isPlantModifiedTomato: false,

    isPlantSproutPepper: false,
    isPlantColorPepper: false,
    isPlantModifiedPepper: false,

    isPlantSproutStrawberry: false,
    isPlantColorStrawberry: false,
    isPlantModifiedStrawberry: false
  }),
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_TOMATO_SPROUT,
      EN_GeneticGameGetters.GET_TOMATO_COLOR,
      EN_GeneticGameGetters.GET_TOMATO_MODIFIED,
    ]),
  }
})
</script>

<style src='./chemistryTable.css' module='styles'>
  
</style>