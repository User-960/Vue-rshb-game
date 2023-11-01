<template>
  <div :class='styles.modalHouseWrapper' v-if='GET_MODAL_HOUSE_VISIBLE' data-testid='modalHouse'>
    <div 
      :class='styles.modalHouse'
    >
      <linkButton @onclick='openGameAI' :isGameAvailable='GET_PLAYER_DATA.equipment.software.available'>
        Искусственный интеллект
      </linkButton>

      <linkButton @onclick='openGameDrone' :isGameAvailable='GET_PLAYER_DATA.equipment.bpla.available'>
        Дроны
      </linkButton>

      <linkButton @onclick='openGameCollector' :isGameAvailable='GET_PLAYER_DATA.equipment.robot.available'>
        Автоматизированные системы
      </linkButton>

      <div :class='styles.infoText' v-if='isInfoTextVisible'>
        <p>У вас нет соответствующего оборудования</p>
        <button :class='styles.goShop' @click='goShop'>Перейти в магазин</button>
      </div>

      <div :class='styles.closeBtnWrapper'>
        <closeButton @onclick='onClickOutside'/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import linkButton from '../../../ui/button/linkButton/linkButton.vue'
import closeButton from '../../../ui/button/closeButton/closeButton.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_HomeScreenGetters } from '@/store/modules/homeScreen/getters'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import vClickOutside from 'v-click-outside'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'modalHouse',
  data: () => ({
    isGameAiAvailable: true,
    isGameSystem: true,
    isGameDroneAvailable: true,

    isInfoTextVisible: false
  }),
  components: {
    linkButton,
    closeButton
  },
  computed: {
    ...mapGetters([
      EN_PlayerDataGetters.GET_PLAYER_DATA,
      EN_HomeScreenGetters.GET_MODAL_HOUSE_VISIBLE
    ]),
  },
  methods: {
    ...mapMutations([
      EN_HomeScreenMutation.HIDE_MODAL_HOUSE,
      EN_HomeScreenMutation.SHOW_MODAL_SHOP,
    ]),
    openGameAI() {
      if (
        this.GET_PLAYER_DATA.minigame.gameTwo.complete && 
        this.GET_PLAYER_DATA.equipment.software.available
      ) {
        this.$router.push({ name: 'ai-game' })
        this.HIDE_MODAL_HOUSE()
      }
      
      if (!this.GET_PLAYER_DATA.equipment.software.available) {
        this.isInfoTextVisible = true
      }
    },
    openGameDrone() {
      if (
        this.GET_PLAYER_DATA.minigame.gameThree.complete && 
        this.GET_PLAYER_DATA.equipment.bpla.available
      ) {
        this.$router.push({ name: 'pest-control' })
        this.HIDE_MODAL_HOUSE()
      } 

      if (!this.GET_PLAYER_DATA.equipment.bpla.available) {
        this.isInfoTextVisible = true
      }
    },
    openGameCollector() {
      if (
        this.GET_PLAYER_DATA.minigame.gameFour.complete && 
        this.GET_PLAYER_DATA.equipment.robot.available
      ) {
        this.$router.push({ name: 'robot-collector' })
        this.HIDE_MODAL_HOUSE()
      } 

      if (!this.GET_PLAYER_DATA.equipment.robot.available) {
        this.isInfoTextVisible = true
      }
    },
    goShop() {
      this.isInfoTextVisible = false

      this.HIDE_MODAL_HOUSE()
      this.SHOW_MODAL_SHOP()
    },
    onClickOutside (event: any) {
      if (this.isInfoTextVisible) {
        this.isInfoTextVisible = false
      }

      this.HIDE_MODAL_HOUSE()
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
})
</script>

<style src='./modalHouse.css' module='styles'>
  
</style>