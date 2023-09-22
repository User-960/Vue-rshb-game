<template>
  <div :class='styles.modalHouseWrapper' v-if='GET_MODAL_HOUSE_VISIBLE' data-testid='modalHouse'>
    <div 
      :class='styles.modalHouse'
    >
      <linkButton @onclick='openGameAI' :isGameAvailable='isGameAiAvailable'>
        Искусственный интеллект
      </linkButton>

      <linkButton @onclick='openGameSystem' :isGameAvailable='isGameSystem'>
        Автоматизированные системы
      </linkButton>

      <linkButton @onclick='openGameDrone' :isGameAvailable='isGameDroneAvailable'>
        Дроны
      </linkButton>

      <div :class='styles.closeBtnWrapper'>
        <closeButton @onclick="$store.commit('HIDE_MODAL_HOUSE')"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import linkButton from '../../../ui/button/linkButton/linkButton.vue'
import closeButton from '../../../ui/button/closeButton/closeButton.vue'
import { mapGetters } from 'vuex'
import { EMapBackGetters } from '@/store/modules/homeScreen/getters'

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
    ...mapGetters([EMapBackGetters.GET_MODAL_HOUSE_VISIBLE]),
  },
  methods: {
    openGameAI() {
      if (this.isGameAiAvailable) {
        console.log('Open Game AI')
      }
    },
    openGameDrone() {
      if (this.isGameDroneAvailable) {
        this.$router.push({ name: 'robot-collector' })
      }
    },
    openGameSystem() {
      if (this.isGameSystem) {
        this.$router.push({ name: 'pest-control' })
      }
    }
  }
})
</script>

<style src='./modalHouse.css' module='styles'>
  
</style>