<template>
  <div :class='styles.modalHouseWrapper' v-if='GET_MODAL_HOUSE_VISIBLE' data-testid='modalHouse'>
    <div 
      :class='styles.modalHouse'
      v-click-outside='onClickOutside'
    >
      <linkButton @onclick='openGameAI' :isGameAvailable='isGameAiAvailable'>
        Искусственный интеллект
      </linkButton>

      <linkButton @onclick='openGameDrone' :isGameAvailable='isGameDroneAvailable'>
        Дроны
      </linkButton>

      <linkButton @onclick='openGameSystem' :isGameAvailable='isGameSystem'>
        Автоматизированные системы
      </linkButton>

      <div :class='styles.closeBtnWrapper'>
        <closeButton @onclick='HIDE_MODAL_HOUSE'/>
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
    ...mapMutations([EN_HomeScreenMutation.HIDE_MODAL_HOUSE]),
    openGameAI() {
      // if (this.isGameAiAvailable) {
      //   this.$router.push({ name: 'ai-game' })
      //   this.HIDE_MODAL_HOUSE()
      // }

      if (
        this.GET_PLAYER_DATA.minigame.gameTwo.complete && 
        this.GET_PLAYER_DATA.equipment.software.available
      ) {
        this.$router.push({ name: 'ai-game' })
        this.HIDE_MODAL_HOUSE()
      }
    },
    openGameDrone() {
      // if (this.isGameDroneAvailable) {
      //   this.$router.push({ name: 'pest-control' })
      //   this.HIDE_MODAL_HOUSE()
      // }

      if (
        this.GET_PLAYER_DATA.minigame.gameThree.complete && 
        this.GET_PLAYER_DATA.equipment.bpla.available
      ) {
        this.$router.push({ name: 'pest-control' })
        this.HIDE_MODAL_HOUSE()
      }
    },
    openGameSystem() {
      // if (this.isGameSystem) {
      //   this.$router.push({ name: 'robot-collector' })
      //   this.HIDE_MODAL_HOUSE()
      // }

      if (
        this.GET_PLAYER_DATA.minigame.gameFour.complete && 
        this.GET_PLAYER_DATA.equipment.robot.available
      ) {
        this.$router.push({ name: 'robot-collector' })
        this.HIDE_MODAL_HOUSE()
      }
    },
    onClickOutside (event: any) {
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