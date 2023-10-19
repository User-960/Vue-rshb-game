<template>
  <div :class='styles.modalHouseWrapper' v-if='GET_MODAL_SHOP_VISIBLE'>

    <div :class='styles.modalShop' v-click-outside='onClickOutside'>
      <div :class='styles.navShop'>
        <div :class='styles.closeBtnWrapper'>
          <closeButton @onclick='HIDE_MODAL_SHOP'/>
        </div>
        
        <button 
          :class='[styles.shopType, {[styles.shopTypeActive] : isShopA}]'
          @click='choiceShopA'
        >Своё фермерство</button>

        <button 
          :class='[styles.shopType, {[styles.shopTypeActive] : isShopB}]'
          @click='choiceShopB'
        >Своё родное</button>
      </div>

      <div :class='[styles.shopA, {[styles.shopAActive] : isShowShopA}]'>
        <ul :class='styles.choice'>

          <button :class='[styles.choiceBtn, {[styles.choiceBtnActive] : isPc}]' @click='showPcCard'>
            Программное обеспечение
          </button>

          <button :class='[styles.choiceBtn, {[styles.choiceBtnActive] : isDrone}]' @click='showDroneCard'>
            Беспилотный летательный аппарат
          </button>

          <button 
            :class='[styles.choiceBtn, {[styles.choiceBtnActive] : isRobotCollector}]' @click='showRobotCollectorCard'
          >
            Робот-собиратель урожая
          </button>

        </ul>

        <div :class='[styles.description, {[styles.descActive] : isPc}]'>
          <img :class='styles.img' src='../../../../../public/images/systemShop.svg' alt='photo of PC'/>
          <p :class='styles.text'>
            Собирает и обрабатывает информацию о растениях и почве
          </p>
          
          <shopLinkButton link='https://vc.ru/rshb/626952-rosselhozbank-opredelil-optimalnuyu-strategiyu-razvitiya-rynka-otechestvennogo-bankovskogo-po'/>

          <button 
            v-if='!GET_PLAYER_DATA.equipment.software.available'
            :class='[styles.buyBtn, 
            {[styles.buyBtnNonActive]: !GET_PLAYER_DATA.minigame.gameTwo.complete}]'
            @click='buySoftware'
          >
            {{ !GET_PLAYER_DATA.minigame.gameTwo.complete ? 'Заблокировано' : 'Купить за 1800' }}
          </button>

          <button 
            v-else-if='GET_PLAYER_DATA.equipment.software.available'
            :class='styles.buyInventory'
          >
            В инвентаре
          </button>
        </div>

        <div :class='[styles.description, {[styles.descActive] : isDrone}]'>
          <img :class='styles.img' src='../../../../../public/images/droneShop.svg' alt='photo of drone'/>
          <p :class='styles.text'>
            Эффективно и быстро производит опрыскивание растений средствами защиты
          </p>

          <shopLinkButton link='https://vc.ru/future/592705-perspektivy-bespilotnyh-tehnologiy-v-selskom-hozyaystve'/>

          <button 
            v-if='!GET_PLAYER_DATA.equipment.bpla.available'
            :class='[styles.buyBtn, 
            {[styles.buyBtnNonActive]: !GET_PLAYER_DATA.minigame.gameThree.complete}]'
            @click='buyDrone'
          >
            {{ !GET_PLAYER_DATA.minigame.gameThree.complete ? 'Заблокировано' : 'Купить за 2500' }}
          </button>

          <button 
            v-else-if='GET_PLAYER_DATA.equipment.bpla.available'
            :class='styles.buyInventory'
          >
            В инвентаре
          </button>
        </div>

        <div :class='[styles.description, {[styles.descActive] : isRobotCollector}]'>
          <img :class='styles.img' src='../../../../../public/images/collectorShop.svg' alt='photo of robot'/>
          <p :class='styles.text'>
            Автоматически собирает фрукты или овощи с помощью датчиков и робозахвата
          </p>

          <shopLinkButton link='https://vc.ru/future/584306-ces-2023-spasut-li-mir-roboty-i-selskoe-hozyaystvo'/>

          <button 
            v-if='!GET_PLAYER_DATA.equipment.robot.available'
            :class='[styles.buyBtn, 
            {[styles.buyBtnNonActive]: !GET_PLAYER_DATA.minigame.gameFour.complete}]'
            @click='buyRobot'
          >
            {{ !GET_PLAYER_DATA.minigame.gameFour.complete ? 'Заблокировано' : 'Купить за 4200' }}
          </button>

          <button 
            v-else-if='GET_PLAYER_DATA.equipment.robot.available'
            :class='styles.buyInventory'
          >
            В инвентаре
          </button>
        </div>
      </div>

      <div :class='[styles.shopB, {[styles.shopBActive] : isShowShopB}]'>
        <div :class='styles.listSellsWrapper'>
          <listSells />
        </div>

        <div :class='styles.sellBtnWrapper'>
          <button :class='[
              styles.sellBtn, 
              {[styles.sellBtnNoActive]: GET_PLAYER_DATA.own_coins * 19 < 9270 || GET_PLAYER_DATA.own_money >= 5270}
            ]' 
            @click='sellHarvest' 
            aria-label='button sell'
          >
            Продать за {{ 
              GET_PLAYER_DATA.own_coins * 19 > 5270 && 
              GET_PLAYER_DATA.own_money < 9270 && 
              GET_PLAYER_DATA.credit === 9000 ? 
              GET_PLAYER_DATA.own_coins * 19 : 0 
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import listSells from './listSells/listSells.vue'
import shopLinkButton from '../../../ui/button/shopButton/shopLinkButton/shopLinkButton.vue'
import closeButton from '../../../ui/button/closeButton/closeButton.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_HomeScreenGetters } from '@/store/modules/homeScreen/getters'
import vClickOutside from 'v-click-outside'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'

export default Vue.extend({
  name: 'modalShop',
  data: () => ({
    isShopA: true,
    isShopB: false,
    isPc: true,
    isDrone: false,
    isRobotCollector: false,
    isShowShopA: true,
    isShowShopB: false
  }),
  components: {
    listSells,
    shopLinkButton,
    closeButton
  },
  computed: {
    ...mapGetters([
      EN_HomeScreenGetters.GET_MODAL_SHOP_VISIBLE,
      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_HomeScreenMutation.HIDE_MODAL_SHOP,

      EN_PlayerDataMutation.PLUS_POINTS_LINK_SOFTWARE,
      EN_PlayerDataMutation.PLUS_POINTS_LINK_DRONE,
      EN_PlayerDataMutation.PLUS_POINTS_LINK_ROBOT,

      EN_PlayerDataMutation.BUY_EQUIPMENT,
      EN_PlayerDataMutation.SELL_HARVEST,
    ]),
    ...mapActions([
      EN_PlayerDataActions.UPDATE_PLAYER_COINS,
      EN_PlayerDataActions.UPDATE_PLAYER_EQUIPMENT,
      EN_PlayerDataActions.UPDATE_PLAYER_HARVEST
    ]),
    choiceShopA() {
      this.isShopB = false
      this.isShopA = true
      this.isShowShopB = false
      this.isShowShopA = true
    },
    choiceShopB() {
      this.isShopA = false
      this.isShopB = true
      this.isShowShopA = false
      this.isShowShopB = true
    },
    showPcCard() {
      this.isDrone = false
      this.isRobotCollector = false
      this.isPc = true
    },
    showDroneCard() {
      this.isPc = false
      this.isRobotCollector = false
      this.isDrone = true
    },
    showRobotCollectorCard() {
      this.isPc = false
      this.isDrone = false
      this.isRobotCollector = true
    },
    checkLinkSoftware() {
      if (!this.GET_PLAYER_DATA.equipment.software.available) {
        this.PLUS_POINTS_LINK_SOFTWARE()
        this.UPDATE_PLAYER_COINS()
      }
    },
    checkLinkDrone() {
      if (!this.GET_PLAYER_DATA.equipment.bpla.available) {
        this.PLUS_POINTS_LINK_DRONE()
        this.UPDATE_PLAYER_COINS()
      }
    },
    checkLinkRobot() {
      if (!this.GET_PLAYER_DATA.equipment.robot.available) {
        this.PLUS_POINTS_LINK_ROBOT()
        this.UPDATE_PLAYER_COINS()
      }
    },
    buySoftware() {
      if (this.GET_PLAYER_DATA.minigame.gameTwo.complete && !this.GET_PLAYER_DATA.equipment.software.available) {
        this.BUY_EQUIPMENT('software')
        this.UPDATE_PLAYER_EQUIPMENT(this.GET_PLAYER_DATA)
      }
    },
    buyDrone() {
      if (this.GET_PLAYER_DATA.minigame.gameThree.complete && !this.GET_PLAYER_DATA.equipment.bpla.available) {
        this.BUY_EQUIPMENT('bpla')
        this.UPDATE_PLAYER_EQUIPMENT(this.GET_PLAYER_DATA)
      }
    },
    buyRobot() {
      if (this.GET_PLAYER_DATA.minigame.gameFour.complete && !this.GET_PLAYER_DATA.equipment.robot.available) {
        this.BUY_EQUIPMENT('robot')
        this.UPDATE_PLAYER_EQUIPMENT(this.GET_PLAYER_DATA)
      }
    },
    sellHarvest() {
      if (
          this.GET_PLAYER_DATA.own_coins * 19 >= 5270 && 
          this.GET_PLAYER_DATA.own_money < 9270 && 
          this.GET_PLAYER_DATA.credit === 9000
        ) {
        this.SELL_HARVEST()
        this.UPDATE_PLAYER_HARVEST(this.GET_PLAYER_DATA)
      }
    },
    onClickOutside (event: any) {
      this.HIDE_MODAL_SHOP()
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
})
</script>

<style src='./modalShop.css' module='styles'>
  
</style>