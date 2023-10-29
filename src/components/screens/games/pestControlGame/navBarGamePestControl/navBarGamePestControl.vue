<template>
  <div :class='styles.navBarGamePestControl' class='navBar'>
    <div :class='styles.exitButtonWrapper' @click='exitGame'>
      <exitButton/>
    </div>

    <div :class='styles.blockButtonTimer'>
      <blockButton>
      <template v-slot:contentIconBtn>
        <iconButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
          </svg>
        </iconButton>
      </template>

      <template v-slot:contentIndicator>
        {{ GET_TIMER_PS }}
      </template>
      </blockButton>
    </div>

    <div :class='styles.blockButtonWallet'>
      <blockButton>
      <template v-slot:contentIconBtn>
        <iconButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18.9474 5.01778V2.61111C18.9474 1.45 18 0.5 16.8421 0.5H2.10526C0.936842 0.5 0 1.45 0 2.61111V17.3889C0 18.55 0.936842 19.5 2.10526 19.5H16.8421C18 19.5 18.9474 18.55 18.9474 17.3889V14.9822C19.5684 14.6128 20 13.9478 20 13.1667V6.83333C20 6.05222 19.5684 5.38722 18.9474 5.01778ZM17.8947 6.83333V13.1667H10.5263V6.83333H17.8947ZM2.10526 17.3889V2.61111H16.8421V4.72222H10.5263C9.36842 4.72222 8.42105 5.67222 8.42105 6.83333V13.1667C8.42105 14.3278 9.36842 15.2778 10.5263 15.2778H16.8421V17.3889H2.10526Z" fill="currentColor"/>
            <path d="M13.6842 11.5833C14.5562 11.5833 15.2632 10.8745 15.2632 10C15.2632 9.12555 14.5562 8.41667 13.6842 8.41667C12.8122 8.41667 12.1053 9.12555 12.1053 10C12.1053 10.8745 12.8122 11.5833 13.6842 11.5833Z" fill="currentColor"/>
          </svg>
        </iconButton>
      </template>

      <template v-slot:contentIndicator>
        {{ GET_PLAYER_DATA.own_money }}
      </template>
      </blockButton>
    </div>

    <div :class='styles.blockButtonPoints'>
      <blockButton>
      <template v-slot:contentIconBtn>
        <iconButton>
          Б
        </iconButton>
      </template>

      <template v-slot:contentIndicator>
        {{ GET_POINTS_PS }}
      </template>
      </blockButton>
    </div>

    <div :class='styles.gameBack'>
      <slot name='gameBack'></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import exitButton from '../../../../ui/button/exitButton/exitButton.vue'
import blockButton from '../../../../ui/button/blockButton/blockButton.vue'
import iconButton from '../../../../ui/button/iconButton/iconButton.vue'
import { EN_PestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { mapGetters, mapMutations } from 'vuex'
import { EN_PestControlGameMutation } from '@/store/modules/pestControlGame/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'navBarGamePestControl',
  components: {
    exitButton,
    blockButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_PestControlGameGetters.GET_POINTS_PS,
      EN_PestControlGameGetters.GET_TIMER_PS,

      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_PestControlGameMutation.RESTART_GAME_PS,
      EN_PestControlGameMutation.FINISH_GAME_PS,
    ]),
    exitGame() {
      this.RESTART_GAME_PS()
      this.FINISH_GAME_PS()
    }
  }
})
</script>

<style src='./navBarGamePestControl.css' module='styles'>
  
</style>