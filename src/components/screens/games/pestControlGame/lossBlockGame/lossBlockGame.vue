<template>
  <div :class='styles.lossBlockGameWrapper' v-if='GET_LOSS_BLOCK_PS && !GET_INFO_LINK_BLOCK_PS && !GET_RULES_BLOCK_PS'>
    <div :class='styles.lossBlockGame'>
      <div :class='styles.title'>
        Проигрыш
      </div>

      <div :class='styles.contentText'>
        <p>
          Твои действия привели к гибели большого количества растений. Собрать урожай в необходимом количестве не получится.
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
import { EN_PestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { EN_PestControlGameMutation } from '@/store/modules/pestControlGame/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'lossBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_PestControlGameGetters.GET_LOSS_BLOCK_PS,
      EN_PestControlGameGetters.GET_INFO_LINK_BLOCK_PS,
      EN_PestControlGameGetters.GET_RULES_BLOCK_PS,
      EN_PestControlGameGetters.GET_POINTS_PS,
      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_PestControlGameMutation.HIDE_LOSS_BLOCK_PS,
      EN_PestControlGameMutation.RESTART_GAME_PS
    ]),
    restartGame() {
      this.HIDE_LOSS_BLOCK_PS()
      this.RESTART_GAME_PS()
    },
    skipToMap() {
      this.HIDE_LOSS_BLOCK_PS()
      this.RESTART_GAME_PS()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./lossBlockGame.css' module='styles'>
  
</style>