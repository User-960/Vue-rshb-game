<template>
  <navBarGamePestControl>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='pestControlGameBack'>
        <infoLinkBlockGame link='link-vc' />

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

export default Vue.extend({
  name: 'pestControlGameBack',
  components: {
    navBarGamePestControl,
    pestControlGameScreen,
    infoLinkBlockGame
  },
  methods: {}
})
</script>

<style src='./pestControlGameBack.css' module='styles'>
  
</style>