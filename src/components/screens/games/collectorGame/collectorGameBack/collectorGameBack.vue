<template>
  <navBarGameCollector v-if='GET_OPEN_GAME_FIELD_TOMATO_COL'>
    <template v-slot:gameBack>
      <collectorGameFieldTomato/>
    </template>
  </navBarGameCollector>
  
  <navBarGameCollector v-else-if='GET_OPEN_GAME_FIELD_PEPPER_COL'>
    <template v-slot:gameBack>
      <collectorGameFieldPepper/>
    </template>
  </navBarGameCollector>

  <navBarGameCollector v-else-if='GET_OPEN_GAME_FIELD_STRAWBERRY_COL'>
    <template v-slot:gameBack>
      <collectorGameFieldStrawberry/>
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
import collectorGameFieldTomato from '../collectorGameField/collectorGameFieldTomato.vue'
import collectorGameFieldPepper from '../collectorGameField/collectorGameFieldPepper.vue'
import collectorGameFieldStrawberry from '../collectorGameField/collectorGameFieldStrawberry.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_CollectorGameGetters } from '@/store/modules/collectorGame/getters'
import infoLinkBlockGame from '../infoLinkBlockGame/infoLinkBlockGame.vue'
import rulesBlockGame from '../rulesBlockGame/rulesBlockGame.vue'
import victoryBlockGame from '../victoryBlockGame/victoryBlockGame.vue'
import lossBlockGame from '../lossBlockGame/lossBlockGame.vue'
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'

export default Vue.extend({
  name: 'collectorGameBack',
  components: {
    navBarGameCollector,
    collectorGameScreen,
    collectorGameFieldTomato,
    collectorGameFieldPepper,
    collectorGameFieldStrawberry,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame
  },
  watch: {
    GET_START_GAME_COL() {
      if (
        !this.GET_START_GAME_COL &&
        this.GET_TOMATO_LEVEL_COMPLETED_COL && 
        this.GET_PEPPER_LEVEL_COMPLETED_COL && 
        this.GET_STRAWBERRY_LEVEL_COMPLETED_COL
      ) {
        setTimeout(() => {
          this.SHOW_VICTORY_BLOCK_COL()
        }, 1000)
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL,
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_PEPPER_COL,
      EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_STRAWBERRY_COL,

      EN_CollectorGameGetters.GET_TOMATO_LEVEL_COMPLETED_COL,
      EN_CollectorGameGetters.GET_PEPPER_LEVEL_COMPLETED_COL,
      EN_CollectorGameGetters.GET_STRAWBERRY_LEVEL_COMPLETED_COL,

      EN_CollectorGameGetters.GET_START_GAME_COL,
    ]),
  },
  methods: {
    ...mapMutations([
        EN_CollectorGameMutation.OPEN_GAME_FIELD_TOMATO_COL,
        EN_CollectorGameMutation.OPEN_GAME_FIELD_PEPPER_COL,
        EN_CollectorGameMutation.OPEN_GAME_FIELD_STRAWBERRY_COL,

        EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_COL,
    ]),
  }
})
</script>

<style src='./collectorGameBack.css' module='styles'>
  
</style>