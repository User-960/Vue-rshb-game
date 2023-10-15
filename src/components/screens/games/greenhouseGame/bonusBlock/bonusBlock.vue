<template>
  <div :class='styles.bonusBlockWrapper' v-if='GET_BONUS_BLOCK_GH'>
    <div :class='styles.bonusBlock'>

      <div :class='styles.contentWrapper'>
        <div :class='styles.contentText'>
          <p>
            У тебя есть возможность отблагодарить Данила и заплатить ему 100 гринкоинов!
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

        <button :class='styles.payDanilBtn' @click='payDanil'>
          Отблагодарить Данила
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
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
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
      EN_GreenhouseGameGetters.GET_BONUS_BLOCK_GH,
      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.HIDE_BONUS_BLOCK_GH,
      EN_GreenhouseGameMutation.SHOW_BONUS_BLOCK_PAYED_GH,
      EN_GreenhouseGameMutation.RESTART_GAME_GH,
      
      EN_PlayerDataMutation.PAY_MONEY_DANIL,
      EN_HomeScreenMutation.SHOW_MAP_BEFORE_THIRD_GAME,
    ]),
    skipGame() {
      this.HIDE_BONUS_BLOCK_GH()
      this.RESTART_GAME_GH()

      this.SHOW_MAP_BEFORE_THIRD_GAME()
      this.$router.push({ name: 'home' })
    },
    payDanil() {
      this.SHOW_MAP_BEFORE_THIRD_GAME()

      this.PAY_MONEY_DANIL()
      this.HIDE_BONUS_BLOCK_GH()
      this.SHOW_BONUS_BLOCK_PAYED_GH()
    }
  }
})
</script>

<style src='./bonusBlock.css' module='styles'>
  
</style>