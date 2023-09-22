<template>
  <navBarGamePestControl>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='pestControlGameBack'>
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

export default Vue.extend({
  name: 'pestControlGameBack',
  components: {
    navBarGamePestControl,
    pestControlGameScreen
  },
  methods: {}
})
</script>

<style src='./pestControlGameBack.css' module='styles'>
  
</style>