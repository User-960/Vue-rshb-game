<template>
  <navBar>
    <template v-slot:mapBack>
      <div :class='styles.map' data-testid='map'>

        <div :class='styles.infoBlockWrapper' 
          v-if='GET_FIRST_INFO_INTRODUCTION || GET_SECOND_INFO_INTRODUCTION || GET_THIRD_INFO_INTRODUCTION || GET_FOUR_INFO_INTRODUCTION || GET_FOUR_HALF_INFO_INTRODUCTION || GET_SEVEN_INFO_INTRODUCTION'
        >
          <infoBlockM v-if='GET_FIRST_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                Вы – молодой специалист, недавно завершивший обучение перспективного направления «Плодово - ягодные культуры» сельскохозяйственной школы <span>“Своё фермерство”</span>.
              </p>
              <br/>
              <p>
                Вернувшись домой обнаружили, что у Вашего соседа - фермера проблемы с вредителями, маленький урожай, половина земли простаивает.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction"  data-testid='infoIntroductionFirstBtn'>
                Далее
              </skipButton>
            </template>
          </infoBlockM>

          <infoBlockM v-if='GET_SECOND_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                Вы решили арендовать неиспользуемую землю и применить полученные знания для реализации давней задумки.
              </p>
              <br/>
              <p>
                Скопленных сбережений хватит оплатить несколько месяцев аренды, а для покупки необходимого оборудования и сырья денег нет. Было принято решение обратиться в крупный сельскохозяйственный банк за финансовой помощью.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction" data-testid='infoIntroductionSecondBtn'>
                Далее
              </skipButton>
            </template>
          </infoBlockM>

          <infoBlockM v-if='GET_THIRD_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                Вы поэтапно описали план своих действий и предоставили подробную смету по расходам на оборудование и расчёт планируемой прибыли.
              </p>
              <br/>
              <p>
                В банке изучили информацию и приняли положительное решение, одобрив кредит на развитие бизнеса под низкий процент.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction" data-testid='infoIntroductionThirdBtn'>
                Далее
              </skipButton>
            </template>
          </infoBlockM>

          <infoBlockM v-if='GET_FOUR_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                На главной карте изображены 3 локации: Лаборатория, Теплица и Дом.
              </p>
              <div :class='styles.locationInfo'>
                <img :class='styles.locationImg' src='../../../../../public/images/labLocation.svg' alt='image of laboratory' />
                <img :class='styles.locationImg' src='../../../../../public/images/greenhouseLocation.svg' alt='image of laboratory' />
                <img :class='styles.locationImg' src='../../../../../public/images/houseLocation.svg' alt='image of laboratory' />
              </div>
              <p :class='styles.text'>
                Локации открываются по мере прохождения мини игр в них. Доступные для прохождения локации будут подсвечены <span>зелёным цветом</span>. Так же можно заработать ачивки в мини играх выполняя определённые условия для их получения.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction" data-testid='infoIntroductionFourthBtn'>
                Далее
              </skipButton>
            </template>
          </infoBlockM>

          <infoBlockM v-if='GET_FOUR_HALF_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                За успешное прохождение мини игр будут начисляться баллы, которые в конце игры определяют прибыль от собранного урожая и будут указаны в таблице рейтинга всех игроков. Чтобы начать игру в первой локации "Лаборатория", обратись в банк за финансовой помощью.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction" data-testid='infoIntroductionFourthHalfBtn'>
                Далее
              </skipButton>
            </template>
          </infoBlockM>

          <infoBlockM v-if='GET_SEVEN_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                Сбор урожая завершён. Давай его продадим на сельскохозяйственном маркетплейсе <span>“Своё родное”</span>?
              </p>
              <br/>
              <p>
                На маркетплейсе “Свое родное” люди могут заказывать качественные, экологически чистые фрукты и овощи  из соседних регионов, которые будут доставлены им в кратчайшие сроки.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction">
                Далее
              </skipButton>
            </template>
          </infoBlockM>
        </div>

        <div :class='styles.arrowUpBank' v-if='GET_ARROW_UP_BANK' data-testid='arrowBank'></div>
        <div :class='styles.arrowUpShop' v-if='GET_ARROW_UP_SHOP' data-testid='arrowShop'></div>

        <div :class='[
            styles.trees, 
            {[styles.beforeThirdGame]: GET_MAP_BEFORE_THIRD_GAME},
            {[styles.beforeFifthGame]: GET_PLAYER_DATA.minigame.gameFour.complete ||GET_MAP_BEFORE_FIFTH_GAME} 
          ]'>
        </div>

        <modalBank/>
        <modalShop/>

        <div :class='[
            styles.lab, 
            {
              [styles.labAvailable]: GET_PLAYER_DATA.minigame.gameOne.available,
              [styles.levelAvailableAnimation]: GET_PLAYER_DATA.minigame.gameOne.available && !GET_PLAYER_DATA.minigame.gameOne.complete,
            }
          ]' 
          @click='openFirstGame'
        >
        </div>
        
        <modalHouse/>
        <div :class='[
            styles.house, 
            {
              [styles.houseAvailable]: GET_PLAYER_DATA.minigame.gameTwo.complete
            }
          ]' 
          @click='openModalHouse'
          data-testid='houseGame'
        >
        </div>

        <div 
          :class='[
            styles.greenhouse, 
            {
              [styles.greenhouseAvailable]: GET_PLAYER_DATA.minigame.gameOne.complete,
              [styles.levelAvailableAnimation]: GET_PLAYER_DATA.minigame.gameTwo.available && !GET_PLAYER_DATA.minigame.gameTwo.complete,
            }
          ]' 
          @click='openSecondGame'>
        </div>

        <div 
          :class='[
            styles.gardenBed,
            {[styles.startGame]: !GET_PLAYER_DATA.minigame.gameOne.complete || GET_MAP_START_GAME}, 
            {[styles.afterFirstGame]: GET_PLAYER_DATA.minigame.gameOne.complete || GET_MAP_AFTER_FIRST_GAME}, 
            {[styles.afterSecondGame]: GET_PLAYER_DATA.minigame.gameTwo.complete || GET_MAP_AFTER_SECOND_GAME}, 
            {[styles.beforeThirdGame]:  GET_MAP_BEFORE_THIRD_GAME},
            {[styles.beforeFourthGame]: GET_PLAYER_DATA.minigame.gameThree.complete || GET_MAP_BEFORE_FOURTH_GAME},
            {[styles.beforeFifthGame]: GET_PLAYER_DATA.minigame.gameFour.complete || GET_MAP_BEFORE_FIFTH_GAME} 
          ]'
        ></div>
      </div>
    </template>
  </navBar>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBar from '../navBar/navBar.vue'
import modalHouse from '../modalHouse/modalHouse.vue'
import modalBank from '../modalBank/modalBank.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import modalShop from '../modalShop/modalShop.vue'
import { EN_HomeScreenGetters } from '@/store/modules/homeScreen/getters'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import infoBlockM from '@/components/ui/infoBlock/infoBlockM/infoBlockM.vue'
import skipButton from '@/components/ui/button/skipButton/skipButton.vue'
import vClickOutside from 'v-click-outside'

export default Vue.extend({
  name: 'mapBack',
  data: () => ({
    isGreenhouseAvailable: true,
    isHouseAvailable: true
  }),
  components: {
    navBar,
    modalHouse,
    modalBank,
    modalShop,
    infoBlockM,
    skipButton
  },
  created() {
    if (this.GET_PLAYER_DATA.minigame.gameOne.complete === false && 
        this.GET_PLAYER_DATA.minigame.gameOne.available === false
      ) {
      this.SHOW_FIRST_INFO_INTRODUCTION()
    }
  },
  watch: {
    GET_PLAYER_DATA() {
      if (
        this.GET_PLAYER_DATA.minigame.gameFive.complete && 
        this.GET_PLAYER_DATA.own_money < 9270 && 
        this.GET_PLAYER_DATA.credit === 9000
      ) {
        this.SHOW_SEVEN_INFO_INTRODUCTION()
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_PlayerDataGetters.GET_PLAYER_DATA,

      EN_HomeScreenGetters.GET_MAP_START_GAME,
      EN_HomeScreenGetters.GET_MAP_AFTER_FIRST_GAME,
      EN_HomeScreenGetters.GET_MAP_AFTER_SECOND_GAME,
      EN_HomeScreenGetters.GET_MAP_BEFORE_THIRD_GAME,
      EN_HomeScreenGetters.GET_MAP_BEFORE_FOURTH_GAME,
      EN_HomeScreenGetters.GET_MAP_BEFORE_FIFTH_GAME,

      EN_HomeScreenGetters.GET_FIRST_INFO_INTRODUCTION,
      EN_HomeScreenGetters.GET_SECOND_INFO_INTRODUCTION,
      EN_HomeScreenGetters.GET_THIRD_INFO_INTRODUCTION,
      EN_HomeScreenGetters.GET_FOUR_INFO_INTRODUCTION,
      EN_HomeScreenGetters.GET_FOUR_HALF_INFO_INTRODUCTION,
      EN_HomeScreenGetters.GET_SEVEN_INFO_INTRODUCTION,

      EN_HomeScreenGetters.GET_ARROW_UP_BANK,
      EN_HomeScreenGetters.GET_ARROW_UP_SHOP,
    ])
  },
  methods: {
    ...mapMutations([
      EN_HomeScreenMutation.SHOW_MODAL_HOUSE,
      EN_HomeScreenMutation.SHOW_FIRST_INFO_INTRODUCTION,
      EN_HomeScreenMutation.HIDE_FIRST_INFO_INTRODUCTION,
      EN_HomeScreenMutation.SHOW_SECOND_INFO_INTRODUCTION,
      EN_HomeScreenMutation.HIDE_SECOND_INFO_INTRODUCTION,
      EN_HomeScreenMutation.SHOW_THIRD_INFO_INTRODUCTION,
      EN_HomeScreenMutation.HIDE_THIRD_INFO_INTRODUCTION,
      EN_HomeScreenMutation.SHOW_FOUR_INFO_INTRODUCTION,
      EN_HomeScreenMutation.HIDE_FOUR_INFO_INTRODUCTION,
      EN_HomeScreenMutation.SHOW_FOUR_HALF_INFO_INTRODUCTION,
      EN_HomeScreenMutation.HIDE_FOUR_HALF_INFO_INTRODUCTION,
      EN_HomeScreenMutation.SHOW_SEVEN_INFO_INTRODUCTION,
      EN_HomeScreenMutation.HIDE_SEVEN_INFO_INTRODUCTION,

      EN_HomeScreenMutation.SHOW_ARROW_UP_BANK,
    ]),
    openFirstGame() {
      if (this.GET_PLAYER_DATA.minigame.gameOne.available) {
        this.$router.push({ name: 'genetic-game' })
      }
    },
    openModalHouse() {
      if (this.GET_PLAYER_DATA.minigame.gameTwo.complete) {
        this.SHOW_MODAL_HOUSE()
      }
    },
    openSecondGame() {
      if (this.GET_PLAYER_DATA.minigame.gameOne.complete) {
        this.$router.push({ name: 'greenhouse-game' })
      }
    },
    skipInfoIntroduction() {
      if (this.GET_FIRST_INFO_INTRODUCTION) {
        this.HIDE_FIRST_INFO_INTRODUCTION()
        this.SHOW_SECOND_INFO_INTRODUCTION()
        return
      }

      if (this.GET_SECOND_INFO_INTRODUCTION) {
        this.HIDE_SECOND_INFO_INTRODUCTION()
        this.SHOW_THIRD_INFO_INTRODUCTION()
        return
      }

      if (this.GET_THIRD_INFO_INTRODUCTION) {
        this.HIDE_THIRD_INFO_INTRODUCTION()
        this.SHOW_FOUR_INFO_INTRODUCTION()
        return
      }

      if (this.GET_FOUR_INFO_INTRODUCTION) {
        this.HIDE_FOUR_INFO_INTRODUCTION()
        this.SHOW_FOUR_HALF_INFO_INTRODUCTION()
        return
      }

      if (this.GET_FOUR_HALF_INFO_INTRODUCTION) {
        this.HIDE_FOUR_HALF_INFO_INTRODUCTION()
        this.SHOW_ARROW_UP_BANK()
        return
      }

      if (this.GET_SEVEN_INFO_INTRODUCTION) {
        this.HIDE_SEVEN_INFO_INTRODUCTION()
        return
      }
    },
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
})
</script>

<style src='./mapBack.css' module='styles'>
  
</style>