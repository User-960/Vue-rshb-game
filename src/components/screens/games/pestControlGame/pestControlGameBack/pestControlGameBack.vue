<template>
  <navBarGamePestControl>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='pestControlGameBack'>
        <infoLinkBlockGame 
          link='https://vc.ru/future/592705-perspektivy-bespilotnyh-tehnologiy-v-selskom-hozyaystve' 
        />

        <rulesBlockGame />

        <victoryBlockGame />

        <lossBlockGame />

        <div :class='styles.screenWrapper'>
          <pestControlGameScreen/>
        </div>
      </div>
    </template>
  </navBarGamePestControl>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBarGamePestControl from '../navBarGamePestControl/navBarGamePestControl.vue'
import pestControlGameScreen from '../pestControlGameScreen/pestControlGameScreen.vue'
import infoLinkBlockGame from '../infoLinkBlockGame/infoLinkBlockGame.vue'
import rulesBlockGame from '../rulesBlockGame/rulesBlockGame.vue'
import victoryBlockGame from '../victoryBlockGame/victoryBlockGame.vue'
import lossBlockGame from '../lossBlockGame/lossBlockGame.vue'

export default Vue.extend({
  name: 'pestControlGameBack',
  components: {
    navBarGamePestControl,
    pestControlGameScreen,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame
  }
})
</script>

<style src='./pestControlGameBack.css' module='styles'>
  
</style>