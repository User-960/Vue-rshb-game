<template>
  <navBarGameCollector v-if='GET_OPEN_GAME_FIELD'>
    <template v-slot:gameBack>
      <collectorGameField/>
    </template>
  </navBarGameCollector>

  <navBarGameCollector v-else>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='gameBack'>
        <div :class='styles.screenWrapper'>
          <collectorGameScreen/>
        </div>
      </div>
    </template>
  </navBarGameCollector>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBarGameCollector from '../navBarGameCollector/navBarGameCollector.vue'
import collectorGameScreen from '../collectorGameScreen/collectorGameScreen.vue'
import collectorGameField from '../collectorGameField/collectorGameField.vue'
import { mapGetters } from 'vuex'
import { ECollectorGameGetters } from '@/store/modules/collectorGame/getters'

export default Vue.extend({
  name: 'collectorGameBack',
  components: {
    navBarGameCollector,
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