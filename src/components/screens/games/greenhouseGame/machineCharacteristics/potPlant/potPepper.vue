<template>
  <div :class='styles.potWrapper'>
    <div :class='styles.scaleWrapper'>
      <div :class='styles.health'>{{ GET_PEPPER_HEALTH_PERCENTAGE_GH }}%</div>
      <div :class='styles.scale'>
        <div :class='[
            styles.scaleIndicator, 
            {[styles.scaleIndicatorFirstMistake]: GET_PLAYER_MISTAKES_PEPPER_GH === 1,
            [styles.scaleIndicatorSecondMistake]: GET_PLAYER_MISTAKES_PEPPER_GH === 2}
          ]'>
        </div>
      </div>
    </div>

    <div :class='styles.pepperSprout'></div>
    <div :class='styles.pot'></div>
    <div :class='styles.potTable'></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'

export default Vue.extend({
  name: 'potTomato',
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_PEPPER_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_HEALTH_PERCENTAGE_GH
    ]),
  }
})
</script>

<style src='./pot.css' module='styles'>
  
</style>