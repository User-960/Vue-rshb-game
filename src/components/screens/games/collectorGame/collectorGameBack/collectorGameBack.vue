<template>
  <navBarGameBack>
    <template v-slot:gameBack>
      <collectorGameField v-if='GET_OPEN_GAME_FIELD'/>

      <div :class='styles.gameBack' v-else data-testid='gameBack'>
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
import collectorGameField from '../collectorGameField/collectorGameField.vue'
import { mapGetters } from 'vuex'
import { ECollectorGameGetters } from '@/store/modules/collectorGame/getters'

export default Vue.extend({
  name: 'collectorGameBack',
  components: {
    navBarGameBack,
    collectorGameScreen,
    collectorGameField
  },
  computed: {
    ...mapGetters([ECollectorGameGetters.GET_OPEN_GAME_FIELD]),
  },
  methods: {}
})
</script>

<style src='./collectorGameBack.css' module='styles'>
  
</style>