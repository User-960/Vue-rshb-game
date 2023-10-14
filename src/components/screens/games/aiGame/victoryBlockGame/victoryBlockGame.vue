<template>
  <div :class='styles.victoryBlockWrapper' v-if='GET_VICTORY_BLOCK_AI'>
    <div :class='styles.victoryBlockGame'>
      <div :class='styles.title'>
        Победа!
      </div>

      <div :class='styles.contentText'>
        <p>
          Ты вовремя отрегулировал систему полива и вентиляции. Все растения себя прекрасно чувствуют.
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span>+ {{ GET_POINTS_AI }}</span>
        </p>
        <div :class='styles.resultIcon'>
          <iconButton>
            Б
          </iconButton>
          <p>120</p>
        </div>
        
      </div>

      <div :class='styles.achievement'>
        <div :class='styles.achievementIcon'>
          <p :class='styles.achievementName'>
            “Точный настройщик”
          </p>
          <iconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.8372 7.40115C21.2272 7.01115 21.2272 6.38115 20.8372 5.99115L18.0072 3.16115C17.6172 2.77115 16.9872 2.77115 16.5972 3.16115L12.1072 7.65115L8.21719 3.76115C7.43719 2.98115 6.16719 2.98115 5.38719 3.76115L3.48719 5.66115C2.70719 6.44115 2.70719 7.71115 3.48719 8.49115L7.37719 12.3812L2.86719 16.8912V21.1312H7.10719L11.6272 16.6112L15.5172 20.5012C16.4672 21.4512 17.7472 21.1012 18.3472 20.5012L20.2472 18.6012C21.0272 17.8212 21.0272 16.5512 20.2472 15.7712L16.3572 11.8812L20.8372 7.40115ZM4.90719 7.07115L6.79719 5.17115L8.06719 6.44115L6.88719 7.63115L8.29719 9.04115L9.48719 7.85115L10.6872 9.05115L8.78719 10.9512L4.90719 7.07115ZM16.1372 14.5112L14.9472 15.7012L16.3572 17.1112L17.5472 15.9212L18.8172 17.1912L16.9172 19.0912L13.0272 15.2012L14.9272 13.3012L16.1372 14.5112ZM6.27719 19.1312H4.86719V17.7212L14.4772 8.11115L15.8872 9.52115L6.27719 19.1312ZM15.8872 6.69115L17.2972 5.28115L18.7072 6.69115L17.2972 8.10115L15.8872 6.69115Z" fill="#89E159"/>
            </svg>
          </iconButton>
        </div>
        <p :class='styles.achievementDesc'>
          Оперативно отрегулировал систему полива и вентиляции, чтобы параметры влажности почвы и температуры воздуха оставались близкими к целевым значениям.
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
import { mapGetters, mapMutations } from 'vuex'
import { EN_AiGameGetters } from '@/store/modules/aiGame/getters'
import { EN_AiGameMutation } from '@/store/modules/aiGame/mutations'

export default Vue.extend({
  name: 'victoryBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_AiGameGetters.GET_VICTORY_BLOCK_AI,
      EN_AiGameGetters.GET_POINTS_AI
    ]),
  },
  methods: {
    ...mapMutations([
      EN_AiGameMutation.HIDE_VICTORY_BLOCK_AI,
      EN_AiGameMutation.RESTART_GAME_AI
    ]),
    restartGame() {
      this.RESTART_GAME_AI()
    },
    skipToMap() {
      this.HIDE_VICTORY_BLOCK_AI()
      this.RESTART_GAME_AI()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./victoryBlockGame.css' module='styles'>
  
</style>