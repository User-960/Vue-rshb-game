<template>
  <div :class='styles.chemistryTableBack'>
    <div :class='[
        styles.plant, 
        {
          [styles.plantSproutTomato]: isPlantSproutTomato,
          [styles.plantColorTomato]: isPlantColorTomato,
          [styles.plantModifiedTomato]: isPlantModifiedTomato,

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
  })
})
</script>

<style src='./chemistryTable.css' module='styles'>
  
</style>