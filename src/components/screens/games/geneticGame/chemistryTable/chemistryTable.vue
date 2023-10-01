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

    <div :class='styles.flasks'></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'chemistryTable',
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