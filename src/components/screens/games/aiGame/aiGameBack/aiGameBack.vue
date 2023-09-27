<template>
  <navBarGameAi>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='aiGameBack'>

        <div :class='[styles.noteWall, {[styles.noteWallActive]: isNoteWallActive}]'></div>

        <div :class='[styles.tabletTable, {[styles.tabletTableActive]: isTabletTableActive}]'></div>

        <div :class='[styles.bookTable, {[styles.bookTableActive]: isBookTableActive}]'></div>

        <infoLinkBlockGame 
          link='https://vc.ru/flood/784533-agroteh-budushchego-ochelovechennyy-ii-i-skorostnye-biotehnologii' 
        />

        <rulesBlockGame />

        <victoryBlockGame />

        <lossBlockGame />

        <div :class='styles.screenWrapper'>
          <aiGameScreen/>
        </div>
      </div>
    </template>
  </navBarGameAi>
</template>

<script lang='ts'>
import Vue from 'vue'
import navBarGameAi from '../navBarGameAi/navBarGameAi.vue'
import aiGameScreen from '../aiGameScreen/aiGameScreen.vue'
import infoLinkBlockGame from '../infoLinkBlockGame/infoLinkBlockGame.vue'
import rulesBlockGame from '../rulesBlockGame/rulesBlockGame.vue'
import victoryBlockGame from '../victoryBlockGame/victoryBlockGame.vue'
import lossBlockGame from '../lossBlockGame/lossBlockGame.vue'

export default Vue.extend({
  name: 'aiGameBack',
  data: () => ({
    isNoteWallActive: false,
    isTabletTableActive: false,
    isBookTableActive: false,
  }),
  components: {
    navBarGameAi,
    aiGameScreen,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame
  }
})
</script>

<style src='./aiGameBack.css' module='styles'>
  
</style>