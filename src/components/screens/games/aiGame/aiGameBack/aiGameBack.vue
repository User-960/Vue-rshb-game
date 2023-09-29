<template>
  <navBarGameAi>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='aiGameBack'>

        <div :class='[styles.noteWall, {[styles.noteWallActive]: isNoteWallActive}]'></div>

        <div :class='[styles.tabletTable, {[styles.tabletTableActive]: isTabletTableActive}]'></div>

        <div 
          :class='[styles.bookTable, {[styles.bookTableActive]: GET_CHOSEN_BOOK_AI}]' @click='chooseBook'
        ></div>

        <div 
          :class='[styles.numPadTable, {[styles.numPadTableActive]: GET_CHOSEN_NUMPAD_AI}]'
          @click='chooseNumPad'
        ></div>

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
import { EN_AiGameGetters } from '@/store/modules/aiGame/getters'
import { mapGetters, mapMutations } from 'vuex'
import { EN_AiGameMutation } from '@/store/modules/aiGame/mutations'

export default Vue.extend({
  name: 'aiGameBack',
  data: () => ({
    isNoteWallActive: false,
    isTabletTableActive: false
  }),
  components: {
    navBarGameAi,
    aiGameScreen,
    infoLinkBlockGame,
    rulesBlockGame,
    victoryBlockGame,
    lossBlockGame
  },
  computed: {
    ...mapGetters([
      EN_AiGameGetters.GET_CHOSEN_BOOK_AI,
      EN_AiGameGetters.GET_CHOSEN_NUMPAD_AI
    ]),
  },
  methods: {
    ...mapMutations([
      EN_AiGameMutation.CHOOSE_BOOK_AI,
      EN_AiGameMutation.CHOOSE_NUMPAD_AI,
    ]),
    chooseBook() {
      this.CHOOSE_BOOK_AI()
    },
    chooseNumPad() {
      this.CHOOSE_NUMPAD_AI()
    }
  }
})
</script>

<style src='./aiGameBack.css' module='styles'>
  
</style>