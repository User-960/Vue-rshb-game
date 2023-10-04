<template>
  <navBarGameGenetic>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='geneticGameBack'>
        <infoLinkBlockGame 
          link='https://vc.ru/future/595401-biotehnologii-razvitie-produktivnosti-i-kachestva-selskohozyaystvennyh-kultur' 
        />

        <rulesBlockGame />

        <victoryBlockGame />

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
import { mapGetters } from 'vuex'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'

export default Vue.extend({
  name: 'geneticGameBack',
  components: {
    navBarGameGenetic,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame,
    chemistryTable,
    dialogMariaTomato,
    dialogMariaPepper,
    dialogMariaStrawberry
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_TOMATO_LEVEL,

      EN_GeneticGameGetters.GET_PEPPER_LEVEL,

      EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL,
    ]),
  },
  methods: {}
})
</script>

<style src='./geneticGameBack.css' module='styles'>
  
</style>