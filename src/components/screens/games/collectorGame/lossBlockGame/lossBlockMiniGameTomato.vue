<template>
  <div :class='styles.lossBlockTomatoLevelWrapper' v-if='GET_lOSS_BLOCK_TOMATO_COL'>
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
          Накоплено баллов: <span>+ {{ GET_POINTS_TOMATO_COL }}</span>
        </p>
        <div :class='styles.resultIcon'>
          <iconButton>
            Б
          </iconButton>
          <p>{{ GET_POINTS_COL }}</p>
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
  name: 'lossBlockMiniGameTomato',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_lOSS_BLOCK_TOMATO_COL,
      EN_CollectorGameGetters.GET_POINTS_TOMATO_COL,
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL,
      EN_CollectorGameGetters.GET_TOMATO_LEVEL_COL,

      EN_CollectorGameGetters.GET_POINTS_COL,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.HIDE_LOSS_BLOCK_TOMATO_COL,
      EN_CollectorGameMutation.START_TOMATO_LEVEL_COL,
      EN_CollectorGameMutation.START_FINISH_ALL_TOMATOES_INTERVAL_COL,
      EN_CollectorGameMutation.START_FINISH_TIMER_TOMATO_COL,
      EN_CollectorGameMutation.RESTART_TOMATO_LEVEL_COL,
      EN_CollectorGameMutation.OPEN_GAME_FIELD_TOMATO_COL,
    ]),
    restartGame() {
      if (this.GET_OPEN_GAME_FIELD_TOMATO_COL && !this.GET_TOMATO_LEVEL_COL) {
        this.RESTART_TOMATO_LEVEL_COL()
        this.OPEN_GAME_FIELD_TOMATO_COL()
        this.HIDE_LOSS_BLOCK_TOMATO_COL()

        this.START_TOMATO_LEVEL_COL()
        this.START_FINISH_TIMER_TOMATO_COL()
      }
    },
    skipToMap() {
      this.HIDE_LOSS_BLOCK_TOMATO_COL()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./lossBlockGame.css' module='styles'>
  
</style>