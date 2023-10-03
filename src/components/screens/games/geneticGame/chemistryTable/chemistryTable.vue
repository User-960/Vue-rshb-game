<template>
  <div :class='styles.chemistryTableBack'>
    <div :class='[
        styles.plant, 
        {
          [styles.plantSproutTomato]: GET_TOMATO_SPROUT,
          [styles.plantColorTomato]: GET_TOMATO_COLOR,
          [styles.plantModifiedTomato]: GET_TOMATO_MODIFIED,

          [styles.plantSproutPepper]: GET_PEPPER_SPROUT,
          [styles.plantColorPepper]: GET_PEPPER_COLOR,
          [styles.plantModifiedPepper]: GET_PEPPER_MODIFIED,

          [styles.plantSproutStrawberry]: GET_STRAWBERRY_SPROUT,
          [styles.plantColorStrawberry]: GET_STRAWBERRY_COLOR,
          [styles.plantModifiedStrawberry]: GET_STRAWBERRY_MODIFIED
        }
      ]'
    ></div>

    <div :class='styles.bigFlaskEmpty'></div>

    <flasksTomato v-if='GET_TOMATO_LEVEL' />
    <flasksPepper v-else-if='GET_PEPPER_LEVEL' />
    <flasksStrawberry v-else-if='GET_STRAWBERRY_LEVEL' />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import flasksTomato from './flasks/flasksTomato.vue'
import flasksPepper from './flasks/flasksPepper.vue'
import flasksStrawberry from './flasks/flasksStrawberry.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'

export default Vue.extend({
  name: 'chemistryTable',
  components: {
    flasksTomato,
    flasksPepper,
    flasksStrawberry
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_TOMATO_LEVEL,
      EN_GeneticGameGetters.GET_TOMATO_SPROUT,
      EN_GeneticGameGetters.GET_TOMATO_COLOR,
      EN_GeneticGameGetters.GET_TOMATO_MODIFIED,

      EN_GeneticGameGetters.GET_PEPPER_LEVEL,
      EN_GeneticGameGetters.GET_PEPPER_SPROUT,
      EN_GeneticGameGetters.GET_PEPPER_COLOR,
      EN_GeneticGameGetters.GET_PEPPER_MODIFIED,

      EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL,
      EN_GeneticGameGetters.GET_STRAWBERRY_SPROUT,
      EN_GeneticGameGetters.GET_STRAWBERRY_COLOR,
      EN_GeneticGameGetters.GET_STRAWBERRY_MODIFIED,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.START_PEPPER_LEVEL,
      EN_GeneticGameMutation.START_STRAWBERRY_LEVEL,
      EN_GeneticGameMutation.FINISH_STRAWBERRY_LEVEL,
      EN_GeneticGameMutation.HIDE_TOMATO_MODIFIED,
      EN_GeneticGameMutation.HIDE_PEPPER_MODIFIED,
      EN_GeneticGameMutation.HIDE_STRAWBERRY_MODIFIED,
    ]),
  }
})
</script>

<style src='./chemistryTable.css' module='styles'>
  
</style>