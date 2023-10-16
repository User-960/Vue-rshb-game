<template>
  <div :class='styles.victoryBlockWrapper' v-if='GET_VICTORY_BLOCK_GN'>
    <div :class='styles.victoryBlockGame'>

      <div :class='styles.victoryContentWrapper'>
        <div :class='styles.victoryTextWrapper'>
          <div :class='styles.title'>
            Победа!
          </div>
        
          <div :class='styles.contentText'>
            <p>
              Ты достаточно быстро реагировал на мои подсказки и верно смешал необходимые гены растений!
            </p>
          </div>
        
          <div :class='styles.result'>
            <p>
              Накоплено баллов: <span>+ {{ GET_POINTS_GN }}</span>
            </p>
            <div :class='styles.resultIcon'>
              <iconButton>
                Б
              </iconButton>
              <p>{{ GET_PLAYER_DATA.own_coins }}</p>
            </div>
          
          </div>
        
          <div :class='styles.achievement' v-if='GET_POINTS_GN >= 135'>
            <div :class='styles.achievementIcon'>
              <p :class='styles.achievementName'>
                “Мастер скрещивания”
              </p>
              <iconButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.5 19.6719V22.25C18.5 22.4489 18.421 22.6397 18.2804 22.7803C18.1397 22.921 17.949 23 17.75 23C17.5511 23 17.3604 22.921 17.2197 22.7803C17.0791 22.6397 17 22.4489 17 22.25V19.6719C17.0037 18.5567 16.6949 17.4628 16.1087 16.5142C15.5225 15.5656 14.6822 14.8002 13.6832 14.3047L9.14567 12.0369C7.89695 11.4175 6.8467 10.4608 6.11398 9.27503C5.38126 8.08929 4.99536 6.72199 5.00004 5.32812V2.75C5.00004 2.55109 5.07906 2.36032 5.21971 2.21967C5.36036 2.07902 5.55113 2 5.75004 2C5.94895 2 6.13972 2.07902 6.28037 2.21967C6.42102 2.36032 6.50004 2.55109 6.50004 2.75V5.32812C6.49636 6.44327 6.80515 7.53715 7.39139 8.48577C7.97763 9.4344 8.81788 10.1998 9.81692 10.6953L14.3544 12.9631C15.6031 13.5825 16.6534 14.5392 17.3861 15.725C18.1188 16.9107 18.5047 18.278 18.5 19.6719ZM14.75 19.25H6.51598C6.55206 18.7391 6.65384 18.2349 6.81879 17.75H13.6354C13.8343 17.75 14.025 17.671 14.1657 17.5303C14.3063 17.3897 14.3854 17.1989 14.3854 17C14.3854 16.8011 14.3063 16.6103 14.1657 16.4697C14.025 16.329 13.8343 16.25 13.6354 16.25H7.57442C7.95078 15.7059 8.41491 15.2282 8.94785 14.8363C9.02739 14.778 9.09466 14.7046 9.14583 14.6203C9.197 14.536 9.23106 14.4424 9.24608 14.345C9.2611 14.2475 9.25677 14.1481 9.23335 14.0523C9.20993 13.9565 9.16787 13.8663 9.10957 13.7867C9.05128 13.7072 8.97789 13.6399 8.8936 13.5887C8.8093 13.5376 8.71576 13.5035 8.6183 13.4885C8.52084 13.4735 8.42138 13.4778 8.3256 13.5012C8.22981 13.5246 8.13957 13.5667 8.06004 13.625C7.11264 14.3234 6.34227 15.2343 5.81082 16.2845C5.27938 17.3347 5.00168 18.4949 5.00004 19.6719V22.25C5.00004 22.4489 5.07906 22.6397 5.21971 22.7803C5.36036 22.921 5.55113 23 5.75004 23C5.94895 23 6.13972 22.921 6.28037 22.7803C6.42102 22.6397 6.50004 22.4489 6.50004 22.25V20.75H14.75C14.949 20.75 15.1397 20.671 15.2804 20.5303C15.421 20.3897 15.5 20.1989 15.5 20C15.5 19.8011 15.421 19.6103 15.2804 19.4697C15.1397 19.329 14.949 19.25 14.75 19.25ZM17.75 2C17.5511 2 17.3604 2.07902 17.2197 2.21967C17.0791 2.36032 17 2.55109 17 2.75V4.25H8.75004C8.55113 4.25 8.36036 4.32902 8.21971 4.46967C8.07906 4.61032 8.00004 4.80109 8.00004 5C8.00004 5.19891 8.07906 5.38968 8.21971 5.53033C8.36036 5.67098 8.55113 5.75 8.75004 5.75H16.9841C16.948 6.26093 16.8462 6.76508 16.6813 7.25H9.86473C9.66582 7.25 9.47505 7.32902 9.3344 7.46967C9.19375 7.61032 9.11473 7.80109 9.11473 8C9.11473 8.19891 9.19375 8.38968 9.3344 8.53033C9.47505 8.67098 9.66582 8.75 9.86473 8.75H15.9257C15.5493 9.29406 15.0852 9.77181 14.5522 10.1637C14.4728 10.222 14.4057 10.2954 14.3546 10.3797C14.3036 10.4639 14.2696 10.5574 14.2547 10.6547C14.2397 10.7521 14.2441 10.8515 14.2676 10.9471C14.2911 11.0428 14.3332 11.1329 14.3914 11.2123C14.5092 11.3727 14.6858 11.4798 14.8824 11.5099C14.9798 11.5248 15.0792 11.5204 15.1748 11.497C15.2705 11.4735 15.3606 11.4314 15.44 11.3731C16.3872 10.6749 17.1574 9.76432 17.6888 8.71448C18.2203 7.66464 18.4981 6.50481 18.5 5.32812V2.75C18.5 2.55109 18.421 2.36032 18.2804 2.21967C18.1397 2.07902 17.949 2 17.75 2Z" fill="currentColor"/>
              </svg>
              </iconButton>
            </div>
            <p :class='styles.achievementDesc'>
              Генная инженерия поспособствовала формированию новых генетических свойств, снижению заболеваемости растений и увеличению урожая!
            </p>
          </div>
        </div>

        <img src='../../../../../../public/images/startMaria.svg' draggable alt='img of Maria'/>
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
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'victoryBlockGame',
  components: {
    closeButton,
    iconButton
  },
  watch: {
    GET_VICTORY_BLOCK_GN() {
      if (this.GET_VICTORY_BLOCK_GN) {
        this.SUM_COINS(this.GET_POINTS_GN)
        this.UPDATE_PLAYER_COINS(this.GET_PLAYER_DATA)

        this.COMPLETE_GENETIC_GAME()
        this.SHOW_MAP_AFTER_FIRST_GAME()
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_VICTORY_BLOCK_GN,
      EN_GeneticGameGetters.GET_POINTS_GN,

      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.HIDE_VICTORY_BLOCK_GN,
      EN_GeneticGameMutation.RESTART_GAME_GN,
      EN_GeneticGameMutation.SHOW_BONUS_BLOCK_GN,
      EN_GeneticGameMutation.COMPLETE_GENETIC_GAME,

      EN_HomeScreenMutation.SHOW_MAP_AFTER_FIRST_GAME,

      EN_PlayerDataMutation.SUM_COINS,
    ]),
    ...mapActions([EN_PlayerDataActions.UPDATE_PLAYER_COINS]),
    restartGame() {
      this.RESTART_GAME_GN()
    },
    skipToMap() {
      this.HIDE_VICTORY_BLOCK_GN()
      this.SHOW_BONUS_BLOCK_GN()
    }
  }
})
</script>

<style src='./victoryBlockGame.css' module='styles'>
  
</style>