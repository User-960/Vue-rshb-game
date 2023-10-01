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
import victoryBlockGame from '../victoryBlockGame/victoryBlockGame.vue'
import lossBlockGame from '../lossBlockGame/lossBlockGame.vue'

export default Vue.extend({
  name: 'geneticGameBack',
  components: {
    navBarGameGenetic,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame,
    chemistryTable
  },
  methods: {}
})
</script>

<style src='./geneticGameBack.css' module='styles'>
  
</style>