<template>
  <ul :class='styles.navigationLevels'>
    <li :class='[
        styles.navLevel, 
        styles.navLevelTomato,
        {[styles.navLevelTomatoActive]: GET_TOMATO_LEVEL}
      ]'
    ></li>

    <li :class='[
        styles.navLevel, 
        styles.navLevelPepper,
        {[styles.navLevelPepperActive]: GET_PEPPER_LEVEL,}
      ]'
    ></li>

    <li :class='[
        styles.navLevel, 
        styles.navLevelStrawberry,
        {[styles.navLevelStrawberryActive]: GET_STRAWBERRY_LEVEL,}
      ]'
    ></li>
  </ul>
</template>

<script lang='ts'>
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'navigationLevels',
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_TOMATO_LEVEL,
      EN_GeneticGameGetters.GET_PEPPER_LEVEL,
      EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL,
    ]),
  }
})
</script>

<style src='./navigationLevels.css' module='styles'>
  
</style>