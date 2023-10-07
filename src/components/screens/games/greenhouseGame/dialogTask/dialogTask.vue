<template>
  <div :class='styles.dialogTask'>
    <div :class='styles.dialog' 
      v-if='GET_TOMATO_LEVEL_GH && !GET_TOMATO_MODIFIED_GH && !GET_FIRST_MISTAKE_GH && !GET_SECOND_MISTAKE_GH'
    >

      <div :class='styles.content'>
        <div v-if='GET_TOMATO_LEVEL_GH' :class='styles.contentTomato'>
          <ul :class='styles.characteristicsList' 
            v-if='!GET_TOMATO_SPROUT_GH && !GET_TOMATO_COLOR_GH && !GET_TOMATO_MODIFIED_GH'
          >
            <li :class='styles.characteristicsItem'>25</li>
            <li :class='styles.characteristicsItem'>30,1</li>
            <li :class='styles.characteristicsItem'>30</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_CONFIG } from '../config/config'

export default Vue.extend({
  name: 'dialogTask',
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_TOMATO_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_SPROUT_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_COLOR_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_MODIFIED_GH,

      EN_GreenhouseGameGetters.GET_TIMER_TOMATO_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_GH,
      EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_GH,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.FINISH_GAME_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.SHOW_LOSS_BLOCK_GH,
    ]),
  }
})
</script>

<style src='./dialogTask.css' module='styles'>
  
</style>