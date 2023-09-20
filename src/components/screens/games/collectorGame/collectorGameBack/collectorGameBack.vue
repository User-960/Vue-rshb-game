<template>
  <navBarGameBack>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='map'>
        Fifth Game
      </div>
    </template>
  </navBarGameBack>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBarGameBack from '../../../../ui/navBarGame/navBarGameBack/navBarGameBack.vue'

export default Vue.extend({
  name: 'collectorGameBack',
  components: {
    navBarGameBack
  },
  methods: {}
})
</script>

<style src='./collectorGameBack.css' module='styles'>
  
</style>