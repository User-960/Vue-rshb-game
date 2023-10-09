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

        <div :class='styles.dialogTaskWrapper'>
          <dialogTaskTomato v-if='GET_TOMATO_LEVEL_GH' />
          <dialogTaskPepper v-else-if='GET_PEPPER_LEVEL_GH' />
          <dialogTaskStrawberry v-else-if='GET_STRAWBERRY_LEVEL_GH' />
        </div>

        <div :class='styles.machineCharacteristicsWrapper'>
          <machineCharacteristics/>
        </div>

        <div :class='styles.dialogDanilWrapper'>
          <dialogDanilTomato v-if='GET_TOMATO_LEVEL_GH' />
          <dialogDanilPepper v-else-if='GET_PEPPER_LEVEL_GH' />
          <dialogDanilStrawberry v-else-if='GET_STRAWBERRY_LEVEL_GH' />
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
import dialogTaskTomato from '../dialogTask/dialogTaskTomato.vue'
import dialogTaskPepper from '../dialogTask/dialogTaskPepper.vue'
import dialogTaskStrawberry from '../dialogTask/dialogTaskStrawberry.vue'
import dialogDanilTomato from '../dialogDanil/dialogDanilTomato.vue'
import dialogDanilPepper from '../dialogDanil/dialogDanilPepper.vue'
import dialogDanilStrawberry from '../dialogDanil/dialogDanilStrawberry.vue'
import victoryBlockGame from '../victoryBlockGame/victoryBlockGame.vue'
import lossBlockGame from '../lossBlockGame/lossBlockGame.vue'
import { mapGetters } from 'vuex'
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'

export default Vue.extend({
  name: 'greenhouseGameBack',
  components: {
    navBarGameGreenhouse,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame,
    machineCharacteristics,
    dialogTaskTomato,
    dialogTaskPepper,
    dialogTaskStrawberry,
    dialogDanilTomato,
    dialogDanilPepper,
    dialogDanilStrawberry
  },
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameGetters.GET_LOSS_BLOCK_GH,
      EN_GreenhouseGameGetters.GET_TOMATO_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_PEPPER_LEVEL_GH,
      EN_GreenhouseGameGetters.GET_STRAWBERRY_LEVEL_GH
    ]),
  }
})
</script>

<style src='./greenhouseGameBack.css' module='styles'>
  
</style>