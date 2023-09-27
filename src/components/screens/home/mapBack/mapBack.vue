<template>
  <navBar>
    <template v-slot:mapBack>
      <div :class='styles.map' data-testid='map'>
        <div :class='[
            styles.trees, 
            {[styles.beforeThirdGame]: isBeforeThirdGame},
            {[styles.beforeFifthGame]: isBeforeFifthGame} 
          ]'>
        </div>

        <modalBank/>
        <modalShop/>

        <div :class='styles.lab' @click='openFirstGame'></div>
        
        <modalHouse/>
        <div :class='[
            styles.house, 
            {[styles.houseAvailable]: isHouseAvailable}
          ]' 
          @click='openModalHouse'
          data-testid='houseGame'
        >
        </div>

        <div 
          :class='[
            styles.greenhouse, 
            {[styles.greenhouseAvailable]: isGreenhouseAvailable}
          ]' 
          @click='openThirdGame'>
        </div>

        <div 
          :class='[
            {[styles.gardenBed]: isStartGame}, 
            {[styles.afterFirstGame]: isAfterFirstGame}, 
            {[styles.afterSecondGame]: isAfterSecondGame}, 
            {[styles.beforeThirdGame]: isBeforeThirdGame},
            {[styles.beforeFourthGame]: isBeforeFourthGame},
            {[styles.beforeFifthGame]: isBeforeFifthGame} 
          ]'
        ></div>
      </div>
    </template>
  </navBar>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBar from '../navBar/navBar.vue'
import modalHouse from '../modalHouse/modalHouse.vue'
import modalBank from '../modalBank/modalBank.vue'
import { mapMutations } from 'vuex'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import modalShop from '../modalShop/modalShop.vue'

// import { ref } from 'vue'
// import { onClickOutside } from '@vueuse/core'

export default Vue.extend({
  name: 'mapBack',
  data: () => ({
    isStartGame: true,
    isAfterFirstGame: false,
    isAfterSecondGame: false,
    isBeforeThirdGame: false,
    isBeforeFourthGame: false,
    isBeforeFifthGame: false,
    // isAfterFifthGame: false,

    isGreenhouseAvailable: false,
    isHouseAvailable: true
  }),
  components: {
    navBar,
    modalHouse,
    modalBank,
    modalShop
  },
  methods: {
    ...mapMutations([EN_HomeScreenMutation.SHOW_MODAL_HOUSE]),
    openFirstGame() {
      console.log('Open First Game')
    },
    openModalHouse() {
      this.SHOW_MODAL_HOUSE()
    },
    openThirdGame() {
      console.log('Open Third Game')
    },
    nextFunc() {
      console.log('Open Third Game')
    }
  }
})
</script>

<style src='./mapBack.css' module='styles'>
  
</style>