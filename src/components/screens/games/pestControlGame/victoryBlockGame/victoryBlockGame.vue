<template>
  <div :class='styles.victoryBlockWrapper' v-if='GET_VICTORY_BLOCK_PS' data-testid='victoryBlock'>
    <div :class='styles.victoryBlockGame'>
      <div :class='styles.title'>
        Победа!
      </div>

      <div :class='styles.contentText'>
        <p>
          Большая часть вредителей уничтожены, растения скоро принесут плоды и можно приступить к сбору урожая!
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span>+ {{ GET_POINTS_PS }}</span>
        </p>
        <div :class='styles.resultIcon'>
          <iconButton>
            Б
          </iconButton>
          <p>{{ GET_PLAYER_DATA.own_coins }}</p>
        </div>
        
      </div>

      <div :class='styles.achievement' v-if='GET_POINTS_PS >= 60'>
        <div :class='styles.achievementIcon'>
          <p :class='styles.achievementName'>
            “Гроза вредителей”
          </p>
          <iconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 1H5C3.9 1 3.01 1.9 3.01 3L3 15.93C3 16.62 3.35 17.23 3.88 17.59L12 23L20.11 17.59C20.64 17.23 20.99 16.62 20.99 15.93L21 3C21 1.9 20.1 1 19 1ZM12 20.6L5 15.94V3H19V15.93L12 20.6ZM9.99 13.18L7.41 10.59L6 12L10 16L18 8L16.58 6.58L9.99 13.18Z" fill="currentColor"/>
            </svg>
          </iconButton>
        </div>
        <p :class='styles.achievementDesc'>
          Эффективно контролировал распространение вредителей и предотвратил их размножение на всех участках
        </p>
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.btnRestart' @click='restartGame'>
          Ещё раз
        </button>

        <button :class='styles.btnMap' @click='skipToMap'>
          Далее
        </button>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import closeButton from '../../../../ui/button/closeButton/closeButton.vue'
import iconButton from '../../../../ui/button/iconButton/iconButton.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_PestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { EN_PestControlGameMutation } from '@/store/modules/pestControlGame/mutations'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'

export default Vue.extend({
  name: 'victoryBlockGame',
  components: {
    closeButton,
    iconButton
  },
  watch: {
    GET_VICTORY_BLOCK_PS() {
      if (this.GET_VICTORY_BLOCK_PS) {
        if (!this.GET_PLAYER_DATA.minigame.gameFour.complete) {
          this.SUM_COINS(this.GET_POINTS_PS)
          this.SAVE_SCORE_MINI_GAME_FOUR(this.GET_POINTS_PS)
          if (this.GET_POINTS_PS >= 60) {
            this.PERFORM_ACHIEVEMENT('gameFour')
          }
          this.COMPLETE_MINI_GAME('gameFour')
        
          this.UPDATE_PLAYER_MINI_GAME(this.GET_PLAYER_DATA)
        }
        
        this.COMPLETE_PEST_CONTROL_GAME()
        this.SHOW_MAP_BEFORE_FIFTH_GAME()
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_PestControlGameGetters.GET_VICTORY_BLOCK_PS,
      EN_PestControlGameGetters.GET_POINTS_PS,

      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_PestControlGameMutation.HIDE_VICTORY_BLOCK_PS,
      EN_PestControlGameMutation.RESTART_GAME_PS,
      EN_PestControlGameMutation.COMPLETE_PEST_CONTROL_GAME,

      EN_PlayerDataMutation.SUM_COINS,
      EN_PlayerDataMutation.COMPLETE_MINI_GAME,
      EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_FOUR,
      EN_PlayerDataMutation.PERFORM_ACHIEVEMENT,
      EN_HomeScreenMutation.SHOW_MAP_BEFORE_FIFTH_GAME
    ]),
    ...mapActions([
      EN_PlayerDataActions.UPDATE_PLAYER_COINS,
      EN_PlayerDataActions.UPDATE_PLAYER_MINI_GAME,
    ]),
    restartGame() {
      this.RESTART_GAME_PS()
    },
    skipToMap() {
      this.HIDE_VICTORY_BLOCK_PS()
      this.RESTART_GAME_PS()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./victoryBlockGame.css' module='styles'>
  
</style>