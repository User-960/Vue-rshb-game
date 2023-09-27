<template>
  <navBarGameCollector v-if='GET_OPEN_GAME_FIELD_COL'>
    <template v-slot:gameBack>
      <collectorGameField/>
    </template>
  </navBarGameCollector>

  <navBarGameCollector v-else>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='collectorGameBack'>
        <infoLinkBlockGame 
          link='https://vc.ru/flood/722021-pomoshchniki-dlya-sbora-yagod' 
        />

        <rulesBlockGame />

        <victoryBlockGame />

        <lossBlockGame />

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
import { EN_CollectorGameGetters } from '@/store/modules/collectorGame/getters'
import infoLinkBlockGame from '../infoLinkBlockGame/infoLinkBlockGame.vue'
import rulesBlockGame from '../rulesBlockGame/rulesBlockGame.vue'
import victoryBlockGame from '../victoryBlockGame/victoryBlockGame.vue'
import lossBlockGame from '../lossBlockGame/lossBlockGame.vue'

export default Vue.extend({
  name: 'collectorGameBack',
  components: {
    navBarGameCollector,
    collectorGameScreen,
    collectorGameField,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame
  },
  computed: {
    ...mapGetters([EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_COL]),
  },
  methods: {}
})
</script>

<style src='./collectorGameBack.css' module='styles'>
  
</style>