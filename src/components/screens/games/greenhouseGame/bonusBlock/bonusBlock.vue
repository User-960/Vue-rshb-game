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
            Мой баланс: {{ GET_PLAYER_DATA.own_money }} гринкоинов
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
          Отказаться
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
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'

export default Vue.extend({
  name: 'bonusBlock',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_BONUS_BLOCK_GH,
      EN_GreenhouseGameGetters.GET_POINTS_GH,

      EN_PlayerDataGetters.GET_PLAYER_DATA,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.HIDE_BONUS_BLOCK_GH,
      EN_GreenhouseGameMutation.SHOW_BONUS_BLOCK_PAYED_GH,
      EN_GreenhouseGameMutation.RESTART_GAME_GH,
      
      EN_PlayerDataMutation.PAY_MONEY_DANIL,
      EN_PlayerDataMutation.SUM_COINS,
      EN_PlayerDataMutation.COMPLETE_MINI_GAME,
      EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_TWO,
      EN_PlayerDataMutation.PERFORM_ACHIEVEMENT,

      EN_HomeScreenMutation.SHOW_MAP_BEFORE_THIRD_GAME,
    ]),
    ...mapActions([
      EN_PlayerDataActions.UPDATE_PLAYER_COINS,
      EN_PlayerDataActions.UPDATE_PLAYER_MINI_GAME,
    ]),
    payDanil() {
      if (!this.GET_PLAYER_DATA.minigame.gameTwo.complete) {
        this.PAY_MONEY_DANIL()
        this.SUM_COINS(100)
        this.SAVE_SCORE_MINI_GAME_TWO(this.GET_POINTS_GH)
        if (this.GET_POINTS_GH >= 185) {
          this.PERFORM_ACHIEVEMENT('gameTwo')
        }
        this.COMPLETE_MINI_GAME('gameTwo')

        this.UPDATE_PLAYER_MINI_GAME(this.GET_PLAYER_DATA)
      }

      this.SHOW_MAP_BEFORE_THIRD_GAME()
      this.HIDE_BONUS_BLOCK_GH()
      this.SHOW_BONUS_BLOCK_PAYED_GH()
    },
    skipGame() {
      if (!this.GET_PLAYER_DATA.minigame.gameTwo.complete) {
        this.SAVE_SCORE_MINI_GAME_TWO(this.GET_POINTS_GH)
        if (this.GET_POINTS_GH >= 185) {
          this.PERFORM_ACHIEVEMENT('gameTwo')
        }
        this.COMPLETE_MINI_GAME('gameTwo')

        this.UPDATE_PLAYER_MINI_GAME(this.GET_PLAYER_DATA)
      }

      this.HIDE_BONUS_BLOCK_GH()
      this.RESTART_GAME_GH()

      this.SHOW_MAP_BEFORE_THIRD_GAME()
      this.$router.push({ name: 'home' })
    },
  }
})
</script>

<style src='./bonusBlock.css' module='styles'>
  
</style>