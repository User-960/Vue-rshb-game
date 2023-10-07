<template>
  <ul :class='styles.navigationLevels'>
    <li :class='[
        styles.navLevel, 
        styles.navLevelTomato,
        {[styles.navLevelTomatoActive]: GET_TOMATO_MODIFIED || GET_TOMATO_LEVEL}
      ]'
      @click='openTomatoLevel'
    ></li>

    <li :class='[
        styles.navLevel, 
        styles.navLevelPepper,
        {[styles.navLevelPepperActive]: GET_PEPPER_MODIFIED || GET_PEPPER_LEVEL}
      ]'
      @click='openPepperLevel'
    ></li>

    <li :class='[
        styles.navLevel, 
        styles.navLevelStrawberry,
        {[styles.navLevelStrawberryActive]: GET_STRAWBERRY_MODIFIED || GET_STRAWBERRY_LEVEL}
      ]'
      @click='openStrawberryLevel'
    ></li>
  </ul>
</template>

<script lang='ts'>
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'navigationLevels',
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_TOMATO_LEVEL,
      EN_GeneticGameGetters.GET_TOMATO_MODIFIED,
      EN_GeneticGameGetters.GET_PEPPER_LEVEL,
      EN_GeneticGameGetters.GET_PEPPER_MODIFIED,
      EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL,
      EN_GeneticGameGetters.GET_STRAWBERRY_MODIFIED,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.START_TOMATO_LEVEL,
      EN_GeneticGameMutation.FINISH_TOMATO_LEVEL,
      EN_GeneticGameMutation.START_FINISH_TIMER_TOMATO_GN,
      EN_GeneticGameMutation.UPDATE_TIMER_TOMATO_GN,

      EN_GeneticGameMutation.START_PEPPER_LEVEL,
      EN_GeneticGameMutation.FINISH_PEPPER_LEVEL,
      EN_GeneticGameMutation.START_FINISH_TIMER_PEPPER_GN,
      EN_GeneticGameMutation.UPDATE_TIMER_PEPPER_GN,

      EN_GeneticGameMutation.START_STRAWBERRY_LEVEL,
      EN_GeneticGameMutation.FINISH_STRAWBERRY_LEVEL,
      EN_GeneticGameMutation.START_FINISH_TIMER_STRAWBERRY_GN,
      EN_GeneticGameMutation.UPDATE_TIMER_STRAWBERRY_GN,
    ]),
    openTomatoLevel() {
      if (!this.GET_TOMATO_LEVEL && !this.GET_TOMATO_MODIFIED) {
        this.FINISH_PEPPER_LEVEL()
        this.START_FINISH_TIMER_PEPPER_GN()
        this.FINISH_STRAWBERRY_LEVEL()
        this.START_FINISH_TIMER_STRAWBERRY_GN()

        this.START_TOMATO_LEVEL()
        this.UPDATE_TIMER_TOMATO_GN()
        this.START_FINISH_TIMER_TOMATO_GN()
      }
    },
    openPepperLevel() {
      if (!this.GET_PEPPER_LEVEL && !this.GET_PEPPER_MODIFIED && this.GET_TOMATO_MODIFIED) {
        this.FINISH_TOMATO_LEVEL()
        this.START_FINISH_TIMER_TOMATO_GN()
        this.FINISH_STRAWBERRY_LEVEL()
        this.START_FINISH_TIMER_STRAWBERRY_GN()

        this.START_PEPPER_LEVEL()
        this.UPDATE_TIMER_PEPPER_GN()
        this.START_FINISH_TIMER_PEPPER_GN()
      }
    },
    openStrawberryLevel() {
      if (!this.GET_STRAWBERRY_LEVEL && 
          !this.GET_STRAWBERRY_MODIFIED && 
          this.GET_TOMATO_MODIFIED && this.GET_PEPPER_MODIFIED
        ) {
        this.FINISH_TOMATO_LEVEL()
        this.START_FINISH_TIMER_TOMATO_GN()
        this.FINISH_PEPPER_LEVEL()
        this.START_FINISH_TIMER_PEPPER_GN()

        this.START_STRAWBERRY_LEVEL()
        this.UPDATE_TIMER_STRAWBERRY_GN()
        this.START_FINISH_TIMER_STRAWBERRY_GN()
      }
    }
  }
})
</script>

<style src='./navigationLevels.css' module='styles'>
  
</style>