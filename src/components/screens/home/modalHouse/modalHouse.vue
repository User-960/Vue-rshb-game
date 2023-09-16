<template>
  <div :class='styles.modalHouse'>
    <linkButton @onclick='openGameAI'>
      Искусственный интеллект
    </linkButton>

    <linkButton @onclick='openGameDrone'>
      Дроны
    </linkButton>

    <linkButton @onclick='openGameSystem'>
      Автоматизированные системы
    </linkButton>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import linkButton from '../../../ui/button/linkButton/linkButton.vue'

export default Vue.extend({
  name: 'modalHouse',
  data: () => ({}),
  components: {
    linkButton
  },
  methods: {
    openGameAI() {
      console.log('Open Game AI')
    },
    openGameDrone() {
      console.log('Open Game Drone')
    },
    openGameSystem() {
      console.log('Open Game System')
    }
  }
})
</script>

<style src='./modalHouse.css' module='styles'>
  
</style>