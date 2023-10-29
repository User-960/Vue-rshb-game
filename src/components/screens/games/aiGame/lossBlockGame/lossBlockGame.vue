<template>
  <div :class='styles.lossBlockGameWrapper' v-if='GET_LOSS_BLOCK_AI && !GET_INFO_LINK_BLOCK_AI && !GET_RULES_BLOCK_AI'>
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
          Накоплено баллов: <span> {{ GET_POINTS_AI }}</span>
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
import { EN_AiGameGetters } from '@/store/modules/aiGame/getters'
import { EN_AiGameMutation } from '@/store/modules/aiGame/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'lossBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_AiGameGetters.GET_LOSS_BLOCK_AI,
      EN_AiGameGetters.GET_RULES_BLOCK_AI,
      EN_AiGameGetters.GET_INFO_LINK_BLOCK_AI,
      EN_AiGameGetters.GET_POINTS_AI,

      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_AiGameMutation.HIDE_LOSS_BLOCK_AI,
      EN_AiGameMutation.RESTART_GAME_AI,
    ]),
    restartGame() {
      this.RESTART_GAME_AI()
    },
    skipToMap() {
      this.HIDE_LOSS_BLOCK_AI()
      this.RESTART_GAME_AI()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./lossBlockGame.css' module='styles'>
  
</style>