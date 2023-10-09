<template>
  <div :class='styles.dialogDanil'>
    <div :class='styles.dialog' 
      v-if='GET_STRAWBERRY_LEVEL_GH && !GET_STRAWBERRY_MODIFIED_GH && !GET_FIRST_MISTAKE_GH && !GET_SECOND_MISTAKE_GH'
    >

      <div :class='styles.textContent'>
        <div v-if='GET_STRAWBERRY_LEVEL_GH'>
          <p :class='styles.text' 
            v-if='!GET_STRAWBERRY_SPROUT_GH && !GET_STRAWBERRY_COLOR_GH && !GET_STRAWBERRY_MODIFIED_GH'
          >
            Нужно сделать клубнику устойчивой к вирусным инфекциям. Используй для этого фиолетовую колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_STRAWBERRY_SPROUT_GH && !GET_STRAWBERRY_COLOR_GH && !GET_STRAWBERRY_MODIFIED_GH'
          >
            Давай улучшим пигментацию клубники. Используй для этого желтую колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_STRAWBERRY_COLOR_GH && !GET_STRAWBERRY_MODIFIED_GH && !GET_STRAWBERRY_SPROUT_GH'
          >
            Теперь предлагаю увеличить содержание витамина С. Используй для этого голубую колбу.
          </p>
        </div>

        <div :class='styles.timer' v-if='!GET_STRAWBERRY_MODIFIED_GH'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#89E159"/>
          </svg>
          <span>0:0{{ GET_STRAWBERRY_LEVEL_GH ? GET_TIMER_STRAWBERRY_GH : 5 }}</span>
        </div>
      </div>

    </div>

    <div :class='styles.dialogModifiedStrawberry' v-else-if='GET_STRAWBERRY_MODIFIED_GH'></div>

    <div :class='[
        {
          [styles.dialogFirstMistake]: !GET_SECOND_MISTAKE_GH && GET_FIRST_MISTAKE_GH, 
          [styles.dialogSecondMistake]: !GET_FIRST_MISTAKE_GH && GET_SECOND_MISTAKE_GH
        }
      ]' 
      v-else-if='GET_STRAWBERRY_LEVEL_GH && (GET_FIRST_MISTAKE_GH || GET_SECOND_MISTAKE_GH)'
    ></div>

    <div :class='[
      styles.danil, 
      {
        [styles.taskDanilCheck]: !GET_STRAWBERRY_SPROUT_GH || !GET_STRAWBERRY_COLOR_GH,
        [styles.taskDanilWrite]: !GET_TOMATO_SPROUT_GH || !GET_TOMATO_COLOR_GH,
        [styles.mistakeDanil]: GET_STRAWBERRY_LEVEL_GH && (GET_FIRST_MISTAKE_GH || GET_SECOND_MISTAKE_GH),
        [styles.correctDanil]: GET_STRAWBERRY_MODIFIED_GH,
        [styles.readyDanil]: GET_TOMATO_MODIFIED_GH
      }
      ]'
    ></div>
  </div>
</template>

<script lang='ts'>
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_CONFIG } from '../config/config'

export default Vue.extend({
  name: 'dialogDanilStrawberry',
  watch: {
    GET_TIMER_STRAWBERRY_GH() {
      if (this.GET_STRAWBERRY_LEVEL_GH && this.GET_TIMER_STRAWBERRY_GH === 0 && this.GET_PLAYER_MISTAKES_GH === 0) {
        this.INCREASE_PLAYER_MISTAKES_GH()
        this.SHOW_FIRST_MISTAKE_GH()
        this.START_FINISH_TIMER_STRAWBERRY_GH()
        setTimeout(() => {
          this.HIDE_FIRST_MISTAKE_GH()
          this.UPDATE_TIMER_STRAWBERRY_GH()
          this.START_FINISH_TIMER_STRAWBERRY_GH()
        }, EN_CONFIG.TIMING_ERROR_TEXT_DANIL)
      }

      if (
          this.GET_STRAWBERRY_LEVEL_GH && 
          this.GET_TIMER_STRAWBERRY_GH === 0 && 
          this.GET_PLAYER_MISTAKES_GH === 1 && 
          !this.GET_FIRST_MISTAKE_GH
        ) {
        this.INCREASE_PLAYER_MISTAKES_GH()
        this.SHOW_SECOND_MISTAKE_GH()
        this.START_FINISH_TIMER_STRAWBERRY_GH()
        setTimeout(() => {
          this.FINISH_GAME_GH()
          this.SHOW_LOSS_BLOCK_GH()
        }, EN_CONFIG.TIMING_ERROR_TEXT_DANIL)
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_STRAWBERRY_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_SPROUT_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_COLOR_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_MODIFIED_GH,

      EN_GreenhouseGameGetters.GET_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_GH,
      EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_GH,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.FINISH_GAME_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_GH,
      EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_GH,
      EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_GH,
      EN_GreenhouseGameMutation.UPDATE_TIMER_STRAWBERRY_GH,
      EN_GreenhouseGameMutation.SHOW_LOSS_BLOCK_GH,
    ]),
  }
})
</script>

<style src='./dialogDanil.css' module='styles'>
  
</style>