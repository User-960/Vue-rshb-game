<template>
  <navBarGameGreenhouse>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='greenhouseGameBack'>
        <infoLinkBlockGame 
          link='https://vc.ru/rshb/674688-sredstva-zashchity-rasteniy' 
        />

        <rulesBlockGame />

        <victoryBlockGame />

        <lossBlockGame />

        <div :class='styles.machineCharacteristicsWrapper'>
          <machineCharacteristics/>
        </div>

        <div :class='styles.dialogDanilWrapper'>
          <dialogDanilTomato v-if='GET_TOMATO_LEVEL' />
          <dialogDanilPepper v-else-if='GET_PEPPER_LEVEL' />
          <dialogDanilStrawberry v-else-if='GET_STRAWBERRY_LEVEL' />
        </div>
      </div>
    </template>
  </navBarGameGreenhouse>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBarGameGreenhouse from '../navBarGameGreenhouse/navBarGameGreenhouse.vue'
import infoLinkBlockGame from '../infoLinkBlockGame/infoLinkBlockGame.vue'
import rulesBlockGame from '../rulesBlockGame/rulesBlockGame.vue'
import machineCharacteristics from '../machineCharacteristics/machineCharacteristics.vue'
import dialogDanilTomato from '../dialogDanil/dialogDanilTomato.vue'
import dialogDanilPepper from '../dialogDanil/dialogDanilPepper.vue'
import dialogDanilStrawberry from '../dialogDanil/dialogDanilStrawberry.vue'
import victoryBlockGame from '../victoryBlockGame/victoryBlockGame.vue'
import lossBlockGame from '../lossBlockGame/lossBlockGame.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'

export default Vue.extend({
  name: 'greenhouseGameBack',
  components: {
    navBarGameGreenhouse,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame,
    machineCharacteristics,
    dialogDanilTomato,
    dialogDanilPepper,
    dialogDanilStrawberry
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_PLAYER_MISTAKES_GN,
      EN_GeneticGameGetters.GET_LOSS_BLOCK_GN,
      EN_GeneticGameGetters.GET_TOMATO_LEVEL,
      EN_GeneticGameGetters.GET_PEPPER_LEVEL,
      EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL,
      EN_GeneticGameGetters.GET_TOMATO_MODIFIED,
      EN_GeneticGameGetters.GET_PEPPER_MODIFIED,
      EN_GeneticGameGetters.GET_STRAWBERRY_MODIFIED,
    ]),
  }
})
</script>

<style src='./greenhouseGameBack.css' module='styles'>
  
</style>