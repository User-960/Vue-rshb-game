<template>
  <ul :class='styles.navigationLevels'>
    <li :class='[
        styles.navLevel, 
        styles.navLevelTomato,
        {[styles.navLevelTomatoActive]: isNavLevelTomatoActive,}
      ]'
    ></li>

    <li :class='[
        styles.navLevel, 
        styles.navLevelPepper,
        {[styles.navLevelPepperActive]: isNavLevelPepperActive,}
      ]'
    ></li>

    <li :class='[
        styles.navLevel, 
        styles.navLevelStrawberry,
        {[styles.navLevelStrawberryActive]: isNavLevelStrawberryActive,}
      ]'
    ></li>
  </ul>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'navigationLevels',
  data: () => ({
    isNavLevelTomatoActive: true,
    isNavLevelPepperActive: false,
    isNavLevelStrawberryActive: false
  })
})
</script>

<style src='./navigationLevels.css' module='styles'>
  
</style>