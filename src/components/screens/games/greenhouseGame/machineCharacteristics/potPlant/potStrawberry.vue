<template>
  <div :class='styles.wrapper'>
    <div :class='styles.columns'>
      
      <div :class='styles.dropZoneContainer'>
        <div :class='[
            styles.effect, 
            {
              [styles.blueStars]: isBlueEffectActive,
              [styles.greenStars]: isGreenEffectActive,
              [styles.redStars]: isRedEffectActive,
              [styles.yellowStars]: isYellowEffectActive,
              [styles.pinkStars]: isPinkEffectActive,
              [styles.cyanStars]: isCyanEffectActive,
              [styles.orangeStars]: isOrangeEffectActive,
              [styles.purpleStars]: isPurpleEffectActive,
              [styles.greyStars]: isGreyEffectActive,
            }
          ]'
        ></div>

        <div :class='styles.flasksBox'></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import draggable from 'vuedraggable'
import { EN_CONFIG } from '../../config/config'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'

export default Vue.extend({
  name: 'potStrawberry',
  data: () => ({
    isBlueEffectActive: false,
    isGreenEffectActive: false,
    isRedEffectActive: false,
    isYellowEffectActive: false,
    isPinkEffectActive: false,
    isCyanEffectActive: false,
    isOrangeEffectActive: false,
    isPurpleEffectActive: false,
    isGreyEffectActive: false,

    isBlueFlaskRotate: false,
    isGreenFlaskRotate: false,
    isPinkFlaskRotate: false,
    isYellowFlaskRotate: false,
    isRedFlaskRotate: false,
    isCyanFlaskRotate: false,
    isOrangeFlaskRotate: false,
    isPurpleFlaskRotate: false,
    isGreyFlaskRotate: false,

    isEmptyFlask: false,
  }),
  components: {
    draggable,
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_PLAYER_MISTAKES_GN,
      EN_GeneticGameGetters.GET_FLASKS_STRAWBERRY_GN,
      EN_GeneticGameGetters.GET_FLASKS_DROPZONE_STRAWBERRY_GN,
      EN_GeneticGameGetters.GET_STRAWBERRY_SPROUT,
      EN_GeneticGameGetters.GET_STRAWBERRY_COLOR,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.SHOW_STRAWBERRY_SPROUT,
      EN_GeneticGameMutation.HIDE_STRAWBERRY_SPROUT,
      EN_GeneticGameMutation.SHOW_STRAWBERRY_COLOR,
      EN_GeneticGameMutation.HIDE_STRAWBERRY_COLOR,
      EN_GeneticGameMutation.SHOW_STRAWBERRY_MODIFIED,
      EN_GeneticGameMutation.START_FINISH_TIMER_STRAWBERRY_GN,
      EN_GeneticGameMutation.UPDATE_TIMER_STRAWBERRY_GN,

      EN_GeneticGameMutation.INCREASE_PLAYER_MISTAKES_GN,
      EN_GeneticGameMutation.SHOW_FIRST_MISTAKE_GN,
      EN_GeneticGameMutation.HIDE_FIRST_MISTAKE_GN,
      EN_GeneticGameMutation.SHOW_SECOND_MISTAKE_GN,
      EN_GeneticGameMutation.HIDE_SECOND_MISTAKE_GN,

      EN_GeneticGameMutation.FINISH_GAME_GN,
      EN_GeneticGameMutation.SHOW_LOSS_BLOCK_GN,
      EN_GeneticGameMutation.SHOW_VICTORY_BLOCK_GN,
      EN_GeneticGameMutation.PLUS_POINTS_GN,
      EN_GeneticGameMutation.MINUS_POINTS_GN
    ])
  },
})
</script>

<style src='./pot.css' module='styles'>
  
</style>