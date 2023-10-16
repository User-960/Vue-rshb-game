<template>
  <div :class='styles.bonusBlockWrapper' v-if='GET_BONUS_BLOCK_PAYED_GN'>
    <div :class='styles.bonusBlock'>

      <div :class='styles.contentWrapper'>
        <div :class='styles.contentText'>
          <p>
            За твой благородный поступок тебе было дополнительно начислено 100 баллов!
          </p>
        </div>
      
        <div :class='styles.balance'>
          <p>
            Накоплено баллов: <span>+ {{ GET_POINTS_GN }}</span>
          </p>
          <div :class='styles.balanceIcon'>
            <iconButton>
              Б
            </iconButton>
            <p>{{ GET_PLAYER_DATA.own_coins }}</p>
          </div>
        
        </div>
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.btnMap' @click='skipToMap'>
          Карта
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
  name: 'bonusBlockPayed',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_BONUS_BLOCK_PAYED_GN,
      EN_GeneticGameGetters.GET_POINTS_GN,

      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.HIDE_BONUS_BLOCK_PAYED_GN,
      EN_GeneticGameMutation.RESTART_GAME_GN
    ]),
    skipToMap() {
      this.HIDE_BONUS_BLOCK_PAYED_GN()
      this.RESTART_GAME_GN()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./bonusBlock.css' module='styles'>
  
</style>