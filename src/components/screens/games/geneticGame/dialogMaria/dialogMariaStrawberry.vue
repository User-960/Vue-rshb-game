<template>
  <div :class='styles.dialogMaria'>
    <div :class='styles.dialog' 
      v-if='GET_STRAWBERRY_LEVEL && !GET_STRAWBERRY_MODIFIED && !GET_FIRST_MISTAKE_GN && !GET_SECOND_MISTAKE_GN'
    >

      <div :class='styles.textContent'>
        <div v-if='GET_STRAWBERRY_LEVEL'>
          <p :class='styles.text' 
            v-if='!GET_STRAWBERRY_SPROUT && !GET_STRAWBERRY_COLOR && !GET_STRAWBERRY_MODIFIED'
          >
            Нужно сделать клубнику устойчивой к вирусным инфекциям. Используй для этого фиолетовую колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_STRAWBERRY_SPROUT && !GET_STRAWBERRY_COLOR && !GET_STRAWBERRY_MODIFIED'
          >
            Давай улучшим пигментацию клубники. Используй для этого желтую колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_STRAWBERRY_COLOR && !GET_STRAWBERRY_MODIFIED && !GET_STRAWBERRY_SPROUT'
          >
            Теперь предлагаю увеличить содержание витамина С. Используй для этого голубую колбу.
          </p>
        </div>

        <div :class='styles.timer' v-if='!GET_STRAWBERRY_MODIFIED'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#89E159"/>
          </svg>
          <span>0:0{{ GET_STRAWBERRY_LEVEL ? GET_TIMER_STRAWBERRY_GN : 5 }}</span>
        </div>
      </div>

    </div>

    <div :class='styles.dialogModifiedStrawberry' v-else-if='GET_STRAWBERRY_MODIFIED'></div>

    <div :class='[
        {
          [styles.dialogFirstMistake]: !GET_SECOND_MISTAKE_GN && GET_FIRST_MISTAKE_GN, 
          [styles.dialogSecondMistake]: !GET_FIRST_MISTAKE_GN && GET_SECOND_MISTAKE_GN
        }
      ]' 
      v-else-if='GET_STRAWBERRY_LEVEL && (GET_FIRST_MISTAKE_GN || GET_SECOND_MISTAKE_GN)'
    ></div>

    <div :class='[
      styles.maria, 
      {
        [styles.taskMaria]: !GET_STRAWBERRY_SPROUT || !GET_STRAWBERRY_COLOR,
        [styles.mistakeMaria]: GET_STRAWBERRY_LEVEL && (GET_FIRST_MISTAKE_GN || GET_SECOND_MISTAKE_GN),
        [styles.correctMaria]: GET_STRAWBERRY_MODIFIED
      }
      ]'
    ></div>
  </div>
</template>

<script lang='ts'>
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_CONFIG } from '../config/config'

export default Vue.extend({
  name: 'dialogMariaStrawberry',
  watch: {
    GET_TIMER_STRAWBERRY_GN() {
      if (
          this.GET_STRAWBERRY_LEVEL && 
          this.GET_TIMER_STRAWBERRY_GN === 0 && 
          this.GET_PLAYER_MISTAKES_GN === 0
        ) {
        this.INCREASE_PLAYER_MISTAKES_GN()
        this.SHOW_FIRST_MISTAKE_GN()
        this.START_FINISH_TIMER_STRAWBERRY_GN()
        setTimeout(() => {
          this.HIDE_FIRST_MISTAKE_GN()
          this.UPDATE_TIMER_STRAWBERRY_GN()
          this.START_FINISH_TIMER_STRAWBERRY_GN()
        }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
      }

      if (
          this.GET_STRAWBERRY_LEVEL && 
          this.GET_TIMER_STRAWBERRY_GN === 0 && 
          this.GET_PLAYER_MISTAKES_GN === 1 && 
          !this.GET_FIRST_MISTAKE_GN
        ) {
        this.INCREASE_PLAYER_MISTAKES_GN()
        this.SHOW_SECOND_MISTAKE_GN()
        this.START_FINISH_TIMER_STRAWBERRY_GN()
        setTimeout(() => {
          this.FINISH_GAME_GN()
          this.SHOW_LOSS_BLOCK_GN()
        }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_START_GAME_GN,

      EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL,
      EN_GeneticGameGetters.GET_STRAWBERRY_SPROUT,
      EN_GeneticGameGetters.GET_STRAWBERRY_COLOR,
      EN_GeneticGameGetters.GET_STRAWBERRY_MODIFIED,

      EN_GeneticGameGetters.GET_TIMER_STRAWBERRY_GN,
      EN_GeneticGameGetters.GET_PLAYER_MISTAKES_GN,
      EN_GeneticGameGetters.GET_FIRST_MISTAKE_GN,
      EN_GeneticGameGetters.GET_SECOND_MISTAKE_GN,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.FINISH_GAME_GN,
      EN_GeneticGameMutation.START_FINISH_TIMER_STRAWBERRY_GN,
      EN_GeneticGameMutation.INCREASE_PLAYER_MISTAKES_GN,
      EN_GeneticGameMutation.SHOW_FIRST_MISTAKE_GN,
      EN_GeneticGameMutation.HIDE_FIRST_MISTAKE_GN,
      EN_GeneticGameMutation.SHOW_SECOND_MISTAKE_GN,
      EN_GeneticGameMutation.UPDATE_TIMER_STRAWBERRY_GN,
      EN_GeneticGameMutation.SHOW_LOSS_BLOCK_GN,
    ]),
  }
})
</script>

<style src='./dialogMaria.css' module='styles'>
  
</style>