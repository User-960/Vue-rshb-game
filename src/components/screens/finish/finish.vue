<template>
    <layout>
      <template v-slot:default v-if='GET_TABLE_RATING'>
        <ratingTable/>
      </template>

      <template v-slot:default v-else-if='!GET_TABLE_RATING'>
        <div :class='styles.finishScreen'>
          <estimationBlock/>
          
          <topSection/>

          <section :class='styles.statSection'>
            <div :class='styles.blockTitle'>
              <h2 :class='styles.title'>Статистика</h2>
              <social/>
            </div>

            <ul :class='styles.statBlock'>
              <li :class='styles.result'><p>Затраты:</p><span>8500 гринкоинов</span></li>
              <li :class='styles.result'><p>В т.ч. заемные средства:</p><span>9000 гринкоинов</span></li>
              <li :class='styles.result'><p>Прибыль:</p><span>{{ GET_PLAYER_DATA.own_coins * 23 }} гринкоинов</span></li>

              <li :class='styles.result'><p>Награды:</p>
                <span>
                  <iconButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17 10.43V2H7V10.43C7 10.78 7.18 11.11 7.49 11.29L11.67 13.8L10.68 16.14L7.27 16.43L9.86 18.67L9.07 22L12 20.23L14.93 22L14.15 18.67L16.74 16.43L13.33 16.14L12.34 13.8L16.52 11.29C16.82 11.11 17 10.79 17 10.43ZM11 11.07L9 9.87V4H11V11.07ZM15 9.87L13 11.07V4H15V9.87Z" fill="currentColor"/>
                    </svg>
                  </iconButton>
                </span>
                <span>{{ countAchievement(GET_PLAYER_DATA) }}/5</span>
              </li>
            </ul>
          </section>

          <section :class='styles.navSection'>
            <div :class='styles.exitButton'>
              <exitButton/>
            </div>

            <div :class='styles.wrapperBtn'>
              <skipButton @onclick="restartFunc">
                Таблица
              </skipButton>
            </div>

            <div :class='styles.wrapperBtn'>
              <skipButton @onclick="restartGame">
                Начать заново
              </skipButton>
            </div>
          </section>
        </div>
      </template>
    </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import skipButton from '../../ui/button/skipButton/skipButton.vue'
import topSection from '../../ui/section/topSection/topSection.vue'
import estimationBlock from '../../ui/estimationBlock/estimationBlock.vue'
import layout from '../../layout/layout.vue'
import iconButton from '../../ui/button/iconButton/iconButton.vue'
import exitButton from '../../ui/button/exitButton/exitButton.vue'
import ratingTable from '../../ratingTable/ratingTable.vue'
import social from '../../ui/social/social.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { IPlayer } from '@/interfaces/player.interface'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { EN_FinishScreenMutation } from '@/store/modules/finishScreen/mutations'

export default Vue.extend({
  name: 'finish',
  data: () => ({}),
  components: {
    layout,
    skipButton,
    topSection,
    iconButton,
    exitButton,
    social,
    ratingTable,
    estimationBlock
  },
  created() {
    if (this.GET_PLAYER_DATA.user_review === null) {
      this.SHOW_ESTIMATION_BLOCK()
    }
  },
  computed: {
    ...mapGetters([EN_PlayerDataGetters.GET_TABLE_RATING, EN_PlayerDataGetters.GET_PLAYER_DATA])
  },
  methods: {
    ...mapMutations([
      EN_PlayerDataMutation.SHOW_TABLE_RATING,
      EN_FinishScreenMutation.SHOW_ESTIMATION_BLOCK
    ]),
    ...mapActions([EN_PlayerDataActions.GET_PLAYER_NEW_GAME]),
    restartFunc() {
      this.SHOW_TABLE_RATING()
    },
    restartGame() {
      this.GET_PLAYER_NEW_GAME(this.GET_PLAYER_DATA.id)
      this.$router.push({ name: 'home' })
    },
    countAchievement(player: IPlayer) {
      let numberAchievement: number = 0
      if (player.minigame?.gameOne.achievement) {
        numberAchievement += 1
      }

      if (player.minigame?.gameTwo.achievement) {
        numberAchievement += 1
      }

      if (player.minigame?.gameThree.achievement) {
        numberAchievement += 1
      }

      if (player.minigame?.gameFour.achievement) {
        numberAchievement += 1
      }

      if (player.minigame?.gameFive.achievement) {
        numberAchievement += 1
      }

      return numberAchievement
    }
  }
});
</script>

<style src='./finish.css' module='styles'>

</style>