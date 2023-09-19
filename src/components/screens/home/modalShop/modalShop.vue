<template>
  <div :class='styles.modalHouseWrapper' v-if='GET_MODAL_SHOP_VISIBLE'>

    <div :class='styles.modalShop'>
      <div :class='styles.navShop'>
        <div :class='styles.closeBtnWrapper'>
          <closeButton @onclick="$store.commit('HIDE_MODAL_SHOP')"/>
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

      <div :class='styles.shop'>
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
          <img :class='styles.img' src='/' alt='photo of robot'/>
          <p :class='styles.text'>
            Собирает и обрабатывает информацию о растениях и почве
          </p>
          
          <shopLinkButton link='/vc.ru'/>

          <button :class='styles.buyBtn'>Купить за 1000</button>
        </div>

        <div :class='[styles.description, {[styles.descActive] : isDrone}]'>
          <img :class='styles.img' src='/' alt='photo of robot'/>
          <p :class='styles.text'>
            Эффективно и быстро производит опрыскивание растений средствами защиты
          </p>

          <shopLinkButton link='/vc.ru'/>

          <button :class='styles.buyBtn'>Купить за 1000</button>
        </div>

        <div :class='[styles.description, {[styles.descActive] : isRobotCollector}]'>
          <img :class='styles.img' src='/' alt='photo of robot'/>
          <p :class='styles.text'>
            Автоматически собирает фрукты или овощи с помощью датчиков и робозахвата
          </p>

          <shopLinkButton link='/vc.ru'/>

          <button :class='styles.buyBtn'>Купить за 1000</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import card from './card/card.vue'
import choiceButton from '../../../ui/button/shopButton/choiceButton/choiceButton.vue'
import shopLinkButton from '../../../ui/button/shopButton/shopLinkButton/shopLinkButton.vue'
import closeButton from '../../../ui/button/closeButton/closeButton.vue'
import { mapGetters } from 'vuex'
import { EMapBackGetters } from '@/store/modules/homeScreen/getters'

const mockData = [
  {
    id: 1,
    name: 'Программное обеспечение',
    description: 'Собирает и обрабатывает информацию о растениях и почве',
    img: '/',
    price: 1000
  },
  {
    id: 2,
    name: 'Беспилотный летательный аппарат',
    description: 'Эффективно и быстро производит опрыскивание растений средствами защиты',
    img: '/',
    price: 1000
  },
  {
    id: 3,
    name: 'Робот-собиратель урожая',
    description: 'Автоматически собирает фрукты или овощи с помощью датчиков и робозахвата',
    img: '/',
    price: 1000
  }
]

export default Vue.extend({
  name: 'modalShop',
  data: () => ({
    mockData: mockData,
    isShopA: true,
    isShopB: false,
    isPc: true,
    isDrone: false,
    isRobotCollector: false
  }),
  components: {
    card,
    shopLinkButton,
    closeButton
  },
  computed: {
    ...mapGetters([EMapBackGetters.GET_MODAL_SHOP_VISIBLE]),
  },
  methods: {
    choiceShopA() {
      this.isShopB = false
      this.isShopA = true
    },
    choiceShopB() {
      this.isShopA = false
      this.isShopB = true
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
    }
  },
})
</script>

<style src='./modalShop.css' module='styles'>
  
</style>