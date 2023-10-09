<template>
  <div :class='styles.potWrapper'>
    <div :class='styles.scaleWrapper'>
      <div :class='styles.health'>{{ GET_TOMATO_HEALTH_PERCENTAGE_GH }}%</div>
      <div :class='styles.scale'>
        <div :class='[
            styles.scaleIndicator, 
            {[styles.scaleIndicatorFirstMistake]: GET_FIRST_MISTAKE_GH}
          ]'>
        </div>
      </div>
    </div>

    <div :class='styles.tomatoSprout'></div>
    <div :class='styles.pot'></div>
    <div :class='styles.potTable'></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import draggable from 'vuedraggable'
import { EN_CONFIG } from '../../config/config'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'

export default Vue.extend({
  name: 'potTomato',
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
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SPROUT_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_COLOR_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_HEALTH_PERCENTAGE_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_GH,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.SHOW_TOMATO_SPROUT_GH,
      EN_GreenhouseGameMutation.HIDE_TOMATO_SPROUT_GH,
      EN_GreenhouseGameMutation.SHOW_TOMATO_COLOR_GH,
      EN_GreenhouseGameMutation.HIDE_TOMATO_COLOR_GH,
      EN_GreenhouseGameMutation.SHOW_TOMATO_MODIFIED_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_TOMATO_GH,

      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_GH,
      EN_GreenhouseGameMutation.HIDE_SECOND_MISTAKE_GH,

      EN_GreenhouseGameMutation.FINISH_GAME_GH,
      EN_GreenhouseGameMutation.SHOW_LOSS_BLOCK_GH,
      EN_GreenhouseGameMutation.PLUS_POINTS_GH,
      EN_GreenhouseGameMutation.MINUS_POINTS_GH
    ]),
  },
})
</script>

<style src='./pot.css' module='styles'>
  
</style>