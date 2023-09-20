<template>
  <navBarGameBack>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='gameBack'>
        <div :class='styles.screenWrapper'>
          <collectorGameScreen/>
        </div>
      </div>
    </template>
  </navBarGameBack>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBarGameBack from '../../../../ui/navBarGame/navBarGameBack/navBarGameBack.vue'
import collectorGameScreen from '../collectorGameScreen/collectorGameScreen.vue'

export default Vue.extend({
  name: 'collectorGameBack',
  components: {
    navBarGameBack,
    collectorGameScreen
  },
  methods: {}
})
</script>

<style src='./collectorGameBack.css' module='styles'>
  
</style>