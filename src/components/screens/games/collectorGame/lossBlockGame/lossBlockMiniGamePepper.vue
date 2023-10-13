<template>
  <div :class='styles.lossBlockPepperLevelWrapper' v-if='GET_lOSS_BLOCK_PEPPER_COL'>
    <div :class='styles.lossBlockGame'>
      <div :class='styles.title'>
        Проигрыш
      </div>

      <div :class='styles.contentText'>
        <p>
          К сожалению, ты вовремя  не собрал нужное количество томатов.
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span>+ {{ GET_POINTS_PEPPER_COL }}</span>
        </p>
        <div :class='styles.resultIcon'>
          <iconButton>
            Б
          </iconButton>
          <p>120</p>
        </div>
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
import { EN_CollectorGameGetters } from '../../../../../store/modules/collectorGame/getters'
import { EN_CollectorGameMutation } from '../../../../../store/modules/collectorGame/mutations'

export default Vue.extend({
  name: 'lossBlockMiniGamePepper',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_lOSS_BLOCK_PEPPER_COL,
      EN_CollectorGameGetters.GET_POINTS_PEPPER_COL,
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_PEPPER_COL,
      EN_CollectorGameGetters.GET_PEPPER_LEVEL_COL,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.HIDE_LOSS_BLOCK_PEPPER_COL,
      EN_CollectorGameMutation.START_PEPPER_LEVEL_COL,
      EN_CollectorGameMutation.START_FINISH_ALL_PEPPERS_INTERVAL_COL,
      EN_CollectorGameMutation.START_FINISH_TIMER_PEPPER_COL,
      EN_CollectorGameMutation.RESTART_PEPPER_LEVEL_COL,
      EN_CollectorGameMutation.OPEN_GAME_FIELD_PEPPER_COL,
    ]),
    restartGame() {
      if (this.GET_OPEN_GAME_FIELD_PEPPER_COL && !this.GET_PEPPER_LEVEL_COL) {
        this.RESTART_PEPPER_LEVEL_COL()
        this.OPEN_GAME_FIELD_PEPPER_COL()
        this.HIDE_LOSS_BLOCK_PEPPER_COL()

        this.START_PEPPER_LEVEL_COL()
        this.START_FINISH_TIMER_PEPPER_COL()
      }
    },
    skipToMap() {
      this.HIDE_LOSS_BLOCK_PEPPER_COL()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./lossBlockGame.css' module='styles'>
  
</style>