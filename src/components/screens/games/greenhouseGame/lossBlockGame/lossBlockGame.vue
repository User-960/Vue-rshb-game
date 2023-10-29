<template>
  <div :class='styles.lossBlockGameWrapper' v-if='GET_LOSS_BLOCK_GH && !GET_INFO_LINK_BLOCK_GH && !GET_RULES_BLOCK_GH && !GET_BONUS_BLOCK_GH && !GET_BONUS_BLOCK_PAYED_GH'>
    <div :class='styles.lossBlockGame'>
      <div :class='styles.title'>
        Проигрыш
      </div>

      <div :class='styles.contentText'>
        <p>
          К сожалению, ты не верно отрегулировал показатели на приборе, растение не может существовать в таких условиях. Давай попробуем еще раз!
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span> {{ GET_POINTS_GH }}</span>
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
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'lossBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_LOSS_BLOCK_GH,
      EN_GreenhouseGameGetters.GET_POINTS_GH,
      EN_GreenhouseGameGetters.GET_INFO_LINK_BLOCK_GH,
      EN_GreenhouseGameGetters.GET_RULES_BLOCK_GH,
      EN_GreenhouseGameGetters.GET_BONUS_BLOCK_GH,
      EN_GreenhouseGameGetters.GET_BONUS_BLOCK_PAYED_GH,

      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.HIDE_LOSS_BLOCK_GH,
      EN_GreenhouseGameMutation.RESTART_GAME_GH,
    ]),
    restartGame() {
      this.RESTART_GAME_GH()
    },
    skipToMap() {
      this.HIDE_LOSS_BLOCK_GH()
      this.RESTART_GAME_GH()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./lossBlockGame.css' module='styles'>
  
</style>