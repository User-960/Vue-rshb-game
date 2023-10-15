<template>
  <navBar>
    <template v-slot:mapBack>
      <div :class='styles.map' data-testid='map'>
        <div :class='[
            styles.trees, 
            {[styles.beforeThirdGame]: GET_MAP_BEFORE_THIRD_GAME},
            {[styles.beforeFifthGame]: GET_MAP_BEFORE_FIFTH_GAME} 
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
          @click='openSecondGame'>
        </div>

        <div 
          :class='[
            styles.gardenBed,
            {[styles.startGame]: GET_MAP_START_GAME}, 
            {[styles.afterFirstGame]: GET_MAP_AFTER_FIRST_GAME}, 
            {[styles.afterSecondGame]: GET_MAP_AFTER_SECOND_GAME}, 
            {[styles.beforeThirdGame]: GET_MAP_BEFORE_THIRD_GAME},
            {[styles.beforeFourthGame]: GET_MAP_BEFORE_FOURTH_GAME},
            {[styles.beforeFifthGame]: GET_MAP_BEFORE_FIFTH_GAME} 
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
import { mapGetters, mapMutations } from 'vuex'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import modalShop from '../modalShop/modalShop.vue'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_HomeScreenGetters } from '@/store/modules/homeScreen/getters'

// import { ref } from 'vue'
// import { onClickOutside } from '@vueuse/core'

export default Vue.extend({
  name: 'mapBack',
  data: () => ({
    isGreenhouseAvailable: true,
    isHouseAvailable: true
  }),
  components: {
    navBar,
    modalHouse,
    modalBank,
    modalShop
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_COMPLETE_GENETIC_GAME,

      EN_HomeScreenGetters.GET_MAP_START_GAME,
      EN_HomeScreenGetters.GET_MAP_AFTER_FIRST_GAME,
      EN_HomeScreenGetters.GET_MAP_AFTER_SECOND_GAME,
      EN_HomeScreenGetters.GET_MAP_BEFORE_THIRD_GAME,
      EN_HomeScreenGetters.GET_MAP_BEFORE_FOURTH_GAME,
      EN_HomeScreenGetters.GET_MAP_BEFORE_FIFTH_GAME,
    ])
  },
  methods: {
    ...mapMutations([
      EN_HomeScreenMutation.SHOW_MODAL_HOUSE,
    ]),
    openFirstGame() {
      this.$router.push({ name: 'genetic-game' })
    },
    openModalHouse() {
      this.SHOW_MODAL_HOUSE()
    },
    openSecondGame() {
      this.$router.push({ name: 'greenhouse-game' })
    }
  }
})
</script>

<style src='./mapBack.css' module='styles'>
  
</style>