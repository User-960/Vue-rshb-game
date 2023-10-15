<template>
  <div :class='styles.bonusBlockWrapper' v-if='GET_BONUS_BLOCK_GN'>
    <div :class='styles.bonusBlock'>

      <div :class='styles.contentWrapper'>
        <div :class='styles.contentText'>
          <p>
            У тебя есть возможность отблагодарить Машу и заплатить ей 100 гринкоинов!
          </p>
        </div>
      
        <div :class='styles.balance'>
          <p>
            Мой баланс:
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
        <button :class='styles.skipBtn' @click='skipGame'>
          Назад
        </button>

        <button :class='styles.payMariaBtn' @click='payMaria'>
          Отблагодарить Машу
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
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'bonusBlock',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_BONUS_BLOCK_GN,
      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.HIDE_BONUS_BLOCK_GN,
      EN_GeneticGameMutation.SHOW_BONUS_BLOCK_PAYED_GN,
      EN_GeneticGameMutation.RESTART_GAME_GN,

      EN_PlayerDataMutation.PAY_MONEY_MARIA
    ]),
    skipGame() {
      this.HIDE_BONUS_BLOCK_GN()
      this.RESTART_GAME_GN()
      this.$router.push({ name: 'home' })
    },
    payMaria() {
      this.PAY_MONEY_MARIA()
      this.HIDE_BONUS_BLOCK_GN()
      this.SHOW_BONUS_BLOCK_PAYED_GN()
    }
  }
})
</script>

<style src='./bonusBlock.css' module='styles'>
  
</style>