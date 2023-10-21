<template>
    <div :class='styles.ratingTable'>
      <div :class='styles.top'>
        <topSectionRating />
      </div>

      <div :class='styles.main'>
        <div :class='styles.tableWrapper'>
          <div :class='styles.tableTitle'>
            <h6>Рейтинг участников:</h6>
            <div :class='styles.quantityPlayers'>
              <img :class='styles.iconPlayers' src='../../../public/images/iconPerson.svg' alt='icon of player'/>
              <p>{{ GET_PLAYER_LIDERBOARD_RANKING_DATA.total_players }}</p>
            </div>
          </div>

          <div :class='styles.tablePlayer'>
            <div :class='styles.tablePlayerWrapper'>
              <p :class='styles.tablePlayerId'>{{ GET_PLAYER_LIDERBOARD_RANKING_DATA.place }}.</p>
              <p :class='styles.tablePlayerName'>{{ GET_PLAYER_LIDERBOARD_RANKING_DATA.player_name }}</p>
            </div>

            <div :class='styles.award'>
              <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
              <p>{{ GET_PLAYER_LIDERBOARD_RANKING_DATA.achievement_count }}/5</p>
            </div>

            <div :class='styles.playerRating'>
              {{ GET_PLAYER_LIDERBOARD_RANKING_DATA.top_score >= GET_PLAYER_LIDERBOARD_RANKING_DATA.own_coins ? GET_PLAYER_LIDERBOARD_RANKING_DATA.top_score : GET_PLAYER_LIDERBOARD_RANKING_DATA.own_coins}}
            </div>
          </div>

          <div :class='styles.table'>
            <div :class='styles.tableTop'>
              <p :class='styles.tableN'>№</p>
              <p :class='styles.tableName'>Имя</p>
              <p :class='styles.tableAward'>Награда</p>
              <p :class='styles.tableProfit'>Очки</p>
            </div>

            <ul :class='styles.playerList'>
              <li 
                :class='styles.playerItem' 
                v-for='(playerItem, i) in GET_PLAYER_LIDERBOARD_RANKING_DATA.liderdoard' 
                :key='playerItem.name'
              >
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>{{ i + 1 }}.</p>
                  <p :class='styles.playerItemName'>{{ playerItem.name }}</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>{{ countAchievement(playerItem) }}/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>{{ playerItem.top_score}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import iconButton from '../ui/button/iconButton/iconButton.vue'
import topSectionRating from '../ui/section/topSectionRating/topSectionRating.vue'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { mapActions, mapGetters } from 'vuex'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { IPlayer, IPlayerLiderboard } from '@/interfaces/player.interface'

export default Vue.extend({
  name: 'ratingTable',
  data: () => ({
    numberPlayer: 0
  }),
  components: {
    iconButton,
    topSectionRating
  },
  created() {
    this.GET_PLAYER_LIDERBOARD_RATING(this.GET_PLAYER_DATA.id)
  },
  computed: {
    ...mapGetters([
      EN_PlayerDataGetters.GET_PLAYER_DATA, 
      EN_PlayerDataGetters.GET_PLAYER_LIDERBOARD_RANKING_DATA
    ])
  },
  methods: {
    ...mapActions([ 
      EN_PlayerDataActions.GET_PLAYER_LIDERBOARD_RATING
    ]),
    countAchievement(player: IPlayerLiderboard) {
      let numberAchievement: number = 0
      if (player.achievement.gameOne.achievement) {
        numberAchievement += 1
      }

      if (player.achievement.gameTwo.achievement) {
        numberAchievement += 1
      }

      if (player.achievement.gameThree.achievement) {
        numberAchievement += 1
      }

      if (player.achievement.gameFour.achievement) {
        numberAchievement += 1
      }

      if (player.achievement.gameFive.achievement) {
        numberAchievement += 1
      }

      return numberAchievement
    },
    countAchievementPlayer(player: IPlayer) {
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
})
</script>

<style src='./ratingTable.css' module='styles'>
  
</style>