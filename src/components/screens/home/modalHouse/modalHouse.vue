<template>
  <div 
    v-if='$store.getters.GET_MODAL_HOUSE_VISIBLE'
    :class='styles.modalHouse'
    @click="$store.commit('HIDE_MODAL_HOUSE')"
  >
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
    },
    // closeModalHouse() {
    //   console.log('Close Modal House')
    // }
  }
})
</script>

<style src='./modalHouse.css' module='styles'>
  
</style>