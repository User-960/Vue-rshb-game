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
              <p :class='styles.tableProfit'>Прибыль</p>
            </div>

            <ul :class='styles.playerList'>
              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
              </li>
              
              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
              </li>

              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
              </li>

              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
              </li>

              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
              </li>

              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
              </li>

              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
              </li>

              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
              </li>

              <li :class='styles.playerItem'>
                <div :class='styles.playerItemWrapper'>
                  <p :class='styles.playerItemId'>1.</p>
                  <p :class='styles.playerItemName'>Андрей2000</p>
                </div>
              
                <div :class='styles.playerItemAward'>
                  <img :class='styles.iconAward' src='../../../public/images/iconAward.svg' alt='icon of player'/>
                  <p>5/5</p>
                </div>
              
                <div :class='styles.playerItemRating'>5000</div>
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

export default Vue.extend({
  name: 'ratingTable',
  components: {
    iconButton,
    topSectionRating
  },
  methods: {}
})
</script>

<style src='./ratingTable.css' module='styles'>
  
</style>