<template>
  <div :class='styles.lossBlockGameWrapper' v-if='GET_LOSS_BLOCK_GN && !GET_INFO_LINK_BLOCK_GN && !GET_RULES_BLOCK_GN && !GET_BONUS_BLOCK_GN && !GET_BONUS_BLOCK_PAYED_GN'>
    <div :class='styles.lossBlockGame'>
      <div :class='styles.title'>
        Проигрыш
      </div>

      <div :class='styles.contentText'>
        <p>
          К сожалению, ты не верно смешал различные гены растений. Генная инженерия поспособствовала ухудшению генетических свойств растений и снижению урожая!
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span> {{ GET_POINTS_GN }}</span>
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
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'lossBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_LOSS_BLOCK_GN,
      EN_GeneticGameGetters.GET_INFO_LINK_BLOCK_GN,
      EN_GeneticGameGetters.GET_RULES_BLOCK_GN,
      EN_GeneticGameGetters.GET_BONUS_BLOCK_GN,
      EN_GeneticGameGetters.GET_BONUS_BLOCK_PAYED_GN,
      EN_GeneticGameGetters.GET_POINTS_GN,

      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.HIDE_LOSS_BLOCK_GN,
      EN_GeneticGameMutation.RESTART_GAME_GN,
    ]),
    restartGame() {
      this.RESTART_GAME_GN()
    },
    skipToMap() {
      this.HIDE_LOSS_BLOCK_GN()
      this.RESTART_GAME_GN()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./lossBlockGame.css' module='styles'>
  
</style>