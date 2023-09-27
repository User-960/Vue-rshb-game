<template>
  <div :class='styles.lossBlockGameWrapper' v-if='GET_LOSS_BLOCK_COL'>
    <div :class='styles.lossBlockGame'>
      <div :class='styles.title'>
        Проигрыш
      </div>

      <div :class='styles.contentText'>
        <p>
          К сожалению, ты вовремя  не отрегулировал систему полива и вентиляции. Все растения погибли!
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span>+ {{ GET_POINTS_COL }}</span>
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
  name: 'lossBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_LOSS_BLOCK_COL,
      EN_CollectorGameGetters.GET_POINTS_COL
    ]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.HIDE_LOSS_BLOCK_COL
    ]),
    restartGame() {
      this.HIDE_LOSS_BLOCK_COL()
      this.$router.push({ name: 'home' })
    },
    skipToMap() {
      this.HIDE_LOSS_BLOCK_COL()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./lossBlockGame.css' module='styles'>
  
</style>