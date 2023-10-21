<template>
  <navBar>
    <template v-slot:mapBack>
      <div :class='styles.map' data-testid='map'>

        <div :class='styles.infoBlockWrapper' 
          v-if='GET_FIRST_INFO_INTRODUCTION || GET_SECOND_INFO_INTRODUCTION || GET_THIRD_INFO_INTRODUCTION || GET_FOUR_INFO_INTRODUCTION'
        >
          <infoBlockM v-click-outside='skipInfoIntroduction' v-if='GET_FIRST_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                Ты – молодой специалист, который недавно завершил обучение на перспективном направлении «Плодово-ягодные культуры» в сельскохозяйственной школе <span>“Своё фермерство”</span>.
              </p>
              <br/>
              <p>
              Ты учился с большим интересом и почерпнул много полезной информации из агросферы. Тебе не терпится применить полученные знания в реальном деле.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction">
                Далее
              </skipButton>
            </template>
          </infoBlockM>

          <infoBlockM v-click-outside='skipInfoIntroduction' v-if='GET_SECOND_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                Когда ты вернулся домой, ты узнал, что у твоего соседа - фермера дела идут не очень: проблемы с вредителями, маленький урожай,  половина земли простаивает.
              </p>
              <br/>
              <p>
                После недолгих раздумий, ты решил обратиться к фермеру, чтобы арендовать землю, которую он не использует, чтобы применить полученные теоретические знания на практике.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction">
                Далее
              </skipButton>
            </template>
          </infoBlockM>

          <infoBlockM v-click-outside='skipInfoIntroduction' v-if='GET_THIRD_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                Ты видишь карту, на ней три локации. 
                Сейчас все 3 локации -  заблокированы. Каждая локация будет доступна после того как ты за заданное время успеешь выполнить задание.
              </p>
              <br/>
              <p>
                За каждое выполненное задание ты будешь получать баллы.
                Набери как можно больше баллов, чтобы стать самым крупным фермером в округе.
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction">
                Далее
              </skipButton>
            </template>
          </infoBlockM>

          <infoBlockM v-click-outside='skipInfoIntroduction' v-if='GET_FOUR_INFO_INTRODUCTION'>
            <template v-slot:contentText>
              <p>
                В данный момент, твоих скопленных сбережений хватает только на несколько месяцев аренды, а на покупку необходимого оборудования и сырья средств нет.
              </p>
              <br/>
              <p>
                Обратись в сельскохозяйственный банк за финансовой помощью. 
              </p>
            </template>

            <template v-slot:nextBtn>
              <skipButton @onclick="skipInfoIntroduction">
                Далее
              </skipButton>
            </template>
          </infoBlockM>
        </div>

        <div :class='styles.arrowUpBank' v-if='GET_ARROW_UP_BANK'></div>
        <div :class='styles.arrowUpShop' v-if='GET_ARROW_UP_SHOP'></div>

        <div :class='[
            styles.trees, 
            {[styles.beforeThirdGame]: GET_MAP_BEFORE_THIRD_GAME},
            {[styles.beforeFifthGame]: GET_PLAYER_DATA.minigame.gameFour.complete ||GET_MAP_BEFORE_FIFTH_GAME} 
          ]'>
        </div>

        <modalBank/>
        <modalShop/>

        <div :class='[
            styles.lab, {[styles.labAvailable]: GET_PLAYER_DATA.minigame.gameOne.available}
          ]' 
          @click='openFirstGame'
        >
        </div>
        
        <modalHouse/>
        <div :class='[
            styles.house, 
            {[styles.houseAvailable]: GET_PLAYER_DATA.minigame.gameTwo.complete}
          ]' 
          @click='openModalHouse'
          data-testid='houseGame'
        >
        </div>

        <div 
          :class='[
            styles.greenhouse, 
            {[styles.greenhouseAvailable]: GET_PLAYER_DATA.minigame.gameOne.complete}
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

// import { ref } from 'vue'
// import { onClickOutside } from '@vueuse/core'

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
        this.SHOW_ARROW_UP_BANK()
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