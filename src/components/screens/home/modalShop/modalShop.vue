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
          <img :class='styles.img' src='../../../../../public/images/systemShop.svg' alt='photo of robot'/>
          <p :class='styles.text'>
            Собирает и обрабатывает информацию о растениях и почве
          </p>
          
          <shopLinkButton link='/vc.ru'/>

          <button :class='styles.buyBtn'>Купить за 1000</button>
        </div>

        <div :class='[styles.description, {[styles.descActive] : isDrone}]'>
          <img :class='styles.img' src='../../../../../public/images/droneShop.svg' alt='photo of robot'/>
          <p :class='styles.text'>
            Эффективно и быстро производит опрыскивание растений средствами защиты
          </p>

          <shopLinkButton link='/vc.ru'/>

          <button :class='styles.buyBtn'>Купить за 1000</button>
        </div>

        <div :class='[styles.description, {[styles.descActive] : isRobotCollector}]'>
          <img :class='styles.img' src='../../../../../public/images/collectorShop.svg' alt='photo of robot'/>
          <p :class='styles.text'>
            Автоматически собирает фрукты или овощи с помощью датчиков и робозахвата
          </p>

          <shopLinkButton link='/vc.ru'/>

          <button :class='styles.buyBtn'>Купить за 1000</button>
        </div>
      </div>

      <div :class='[styles.shopB, {[styles.shopBActive] : isShowShopB}]'>
        <div :class='styles.listSellsWrapper'>
          <listSells />
        </div>

        <div :class='styles.sellBtnWrapper'>
          <sellButton>
            Продать за 1000
          </sellButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import listSells from './listSells/listSells.vue'
import shopLinkButton from '../../../ui/button/shopButton/shopLinkButton/shopLinkButton.vue'
import sellButton from '../../../ui/button/shopButton/sellButton/sellButton.vue'
import closeButton from '../../../ui/button/closeButton/closeButton.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_HomeScreenGetters } from '@/store/modules/homeScreen/getters'
import vClickOutside from 'v-click-outside'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'

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

const mockDataCards = [
  {
    id: 4,
    name: 'Помидоры',
    weight: '65',
    img: ''
  },
  {
    id: 5,
    name: 'Перцы',
    weight: '65',
    img: '/'
  },
  {
    id: 6,
    name: 'Клубника',
    weight: '65',
    img: '/'
  }
]

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
    closeButton,
    sellButton
  },
  computed: {
    ...mapGetters([EN_HomeScreenGetters.GET_MODAL_SHOP_VISIBLE]),
  },
  methods: {
    ...mapMutations([EN_HomeScreenMutation.HIDE_MODAL_SHOP]),
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