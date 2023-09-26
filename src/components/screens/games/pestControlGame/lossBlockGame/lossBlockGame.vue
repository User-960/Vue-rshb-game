<template>
  <div :class='styles.lossBlockGameWrapper' v-if='GET_LOSS_BLOCK'>
    <div :class='styles.lossBlockGame'>
      <div :class='styles.title'>
        Проигрыш
      </div>

      <div :class='styles.contentText'>
        <p>
          К сожалению, ты не уничтожил всех вредителей, и все растения погибли!
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span>+ {{ GET_POINTS }}</span>
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
import { EPestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { EPestControlGameMutation } from '@/store/modules/pestControlGame/mutations'

export default Vue.extend({
  name: 'lossBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EPestControlGameGetters.GET_LOSS_BLOCK,
      EPestControlGameGetters.GET_POINTS
    ]),
  },
  methods: {
    ...mapMutations([
      EPestControlGameMutation.HIDE_LOSS_BLOCK
    ]),
    restartGame() {
      this.HIDE_LOSS_BLOCK()
      this.$router.push({ name: 'home' })
    },
    skipToMap() {
      this.HIDE_LOSS_BLOCK()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./lossBlockGame.css' module='styles'>
  
</style>