<template>
  <navBarGameGenetic>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='geneticGameBack'>
        <infoLinkBlockGame 
          link='https://vc.ru/future/595401-biotehnologii-razvitie-produktivnosti-i-kachestva-selskohozyaystvennyh-kultur' 
        />

        <rulesBlockGame />

        <victoryBlockGame />

        <bonusBlock />

        <bonusBlockPayed />

        <lossBlockGame />

        <div :class='styles.chemistryTableWrapper'>
          <chemistryTable/>
        </div>

        <div :class='styles.dialogMariaWrapper'>
          <dialogMariaTomato v-if='GET_TOMATO_LEVEL' />
          <dialogMariaPepper v-else-if='GET_PEPPER_LEVEL' />
          <dialogMariaStrawberry v-else-if='GET_STRAWBERRY_LEVEL' />
        </div>
      </div>
    </template>
  </navBarGameGenetic>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBarGameGenetic from '../navBarGameGenetic/navBarGameGenetic.vue'
import infoLinkBlockGame from '../infoLinkBlockGame/infoLinkBlockGame.vue'
import rulesBlockGame from '../rulesBlockGame/rulesBlockGame.vue'
import chemistryTable from '../chemistryTable/chemistryTable.vue'
import dialogMariaTomato from '../dialogMaria/dialogMariaTomato.vue'
import dialogMariaPepper from '../dialogMaria/dialogMariaPepper.vue'
import dialogMariaStrawberry from '../dialogMaria/dialogMariaStrawberry.vue'
import victoryBlockGame from '../victoryBlockGame/victoryBlockGame.vue'
import lossBlockGame from '../lossBlockGame/lossBlockGame.vue'
import bonusBlock from '../bonusBlock/bonusBlock.vue'
import bonusBlockPayed from '../bonusBlock/bonusBlockPayed.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'

export default Vue.extend({
  name: 'geneticGameBack',
  components: {
    navBarGameGenetic,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame,
    bonusBlock,
    bonusBlockPayed,
    chemistryTable,
    dialogMariaTomato,
    dialogMariaPepper,
    dialogMariaStrawberry
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

<style src='./geneticGameBack.css' module='styles'>
  
</style>