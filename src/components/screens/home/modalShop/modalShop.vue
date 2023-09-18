<template>
    <div :class='styles.modalShop'>
      <div></div>
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
</template>

<script lang='ts'>
import Vue from 'vue'
import card from './card/card.vue'
import choiceButton from '../../../ui/button/shopButton/choiceButton/choiceButton.vue'
import shopLinkButton from '../../../ui/button/shopButton/shopLinkButton/shopLinkButton.vue'

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
    isPc: false,
    isDrone: false,
    isRobotCollector: true
  }),
  components: {
    card,
    shopLinkButton
  },
  computed: {},
  methods: {
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