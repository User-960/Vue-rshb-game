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
              <p>1446</p>
            </div>
          </div>

          <div :class='styles.tablePlayer'>
            <div :class='styles.tablePlayerWrapper'>
              <p :class='styles.tablePlayerId'>1005.</p>
              <p :class='styles.tablePlayerName'>ВасилийУничтожитель</p>
            </div>

            <div :class='styles.award'>
              <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
              <p>5/5</p>
            </div>

            <div :class='styles.playerRating'>5000</div>
          </div>

          <div :class='styles.table'>
            <div :class='styles.tableTop'>
              <p :class='styles.tableN'>№</p>
              <p :class='styles.tableName'>Имя</p>
              <p :class='styles.tableAward'>Награда</p>
              <p :class='styles.tableProfit'>Очки</p>
            </div>

            <ul :class='styles.playerList'>
              <li :class='styles.playerItem' v-for='(playerItem, i) in GET_PLAYERS_RATING_DATA' :key='playerItem.name'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>{{ i + 1 }}.</p>
                  <p :class='styles.playerItemName'>{{ playerItem.name }}</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>{{ countAchievement(playerItem) }}/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>{{ playerItem.own_coins}}</div>
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
import { IPlayerLiderboard } from '@/interfaces/player.interface'

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
    this.GET_PLAYERS_RATING()
  },
  computed: {
    ...mapGetters([EN_PlayerDataGetters.GET_PLAYERS_RATING_DATA])
  },
  methods: {
    ...mapActions([EN_PlayerDataActions.GET_PLAYERS_RATING]),
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
    }
  }
})
</script>

<style src='./ratingTable.css' module='styles'>
  
</style>