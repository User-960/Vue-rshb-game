<template>
  <navBarGameAi>
    <template v-slot:gameBack>
      <div :class='styles.gameBack' data-testid='aiGameBack'>

        <div 
          :class='[
            styles.bookTable, 
            {
              [styles.bookTableActive]: GET_CHOSEN_BOOK_AI,
              [styles.bookTableAnimation]: 
              (GET_CHOSEN_TOMATO_LEVEL_AI && !GET_CHOSEN_BOOK_AI && !GET_BROKE_TOMATO_SYSTEM) || 
              (GET_CHOSEN_PEPPER_LEVEL_AI && !GET_CHOSEN_BOOK_AI && !GET_BROKE_PEPPER_SYSTEM) || (GET_CHOSEN_STRAWBERRY_LEVEL_AI && !GET_CHOSEN_BOOK_AI && !GET_BROKE_STRAWBERRY_SYSTEM)
            }
          ]' 
          @click='chooseBook'
        ></div>

        <div 
          :class='[
              styles.numPadTable, 
              {
                [styles.numPadTableAvailable]: GET_CHOSEN_BOOK_AI,
                [styles.numPadTableActive]: GET_CHOSEN_NUMPAD_AI,
                [styles.numPadTableAnimation]: 
                (GET_CHOSEN_BOOK_AI && GET_TOMATO_MOISTURE_LINE_CRITICAL) || 
                (GET_CHOSEN_BOOK_AI && GET_PEPPER_MOISTURE_LINE_CRITICAL) || 
                (GET_CHOSEN_BOOK_AI && GET_STRAWBERRY_MOISTURE_LINE_CRITICAL) || 
                (GET_CHOSEN_BOOK_AI && GET_STRAWBERRY_TEMPERATURE_LINE_CRITICAL)
              }
            ]'
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
      EN_AiGameGetters.GET_CHOSEN_NUMPAD_AI,

      EN_AiGameGetters.GET_CHOSEN_TOMATO_LEVEL_AI,
      EN_AiGameGetters.GET_CHOSEN_PEPPER_LEVEL_AI,
      EN_AiGameGetters.GET_CHOSEN_STRAWBERRY_LEVEL_AI,

      EN_AiGameGetters.GET_BROKE_TOMATO_SYSTEM,
      EN_AiGameGetters.GET_BROKE_PEPPER_SYSTEM,
      EN_AiGameGetters.GET_BROKE_STRAWBERRY_SYSTEM,

      EN_AiGameGetters.GET_TOMATO_MOISTURE_LINE_CRITICAL,
      EN_AiGameGetters.GET_PEPPER_MOISTURE_LINE_CRITICAL,
      EN_AiGameGetters.GET_STRAWBERRY_MOISTURE_LINE_CRITICAL,
      EN_AiGameGetters.GET_STRAWBERRY_TEMPERATURE_LINE_CRITICAL,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_AiGameMutation.CHOOSE_BOOK_AI,
      EN_AiGameMutation.NOT_CHOOSE_BOOK_AI,
      EN_AiGameMutation.CHOOSE_NUMPAD_AI,
    ]),
    chooseBook() {
      if (!this.GET_CHOSEN_BOOK_AI && this.GET_CHOSEN_TOMATO_LEVEL_AI && this.GET_TOMATO_MOISTURE_LINE_CRITICAL) {
        this.CHOOSE_BOOK_AI()
      }

      if (!this.GET_CHOSEN_BOOK_AI && this.GET_CHOSEN_PEPPER_LEVEL_AI && this.GET_PEPPER_MOISTURE_LINE_CRITICAL) {
        this.CHOOSE_BOOK_AI()
      }

      if (!this.GET_CHOSEN_BOOK_AI && this.GET_CHOSEN_STRAWBERRY_LEVEL_AI && this.GET_STRAWBERRY_MOISTURE_LINE_CRITICAL || this.GET_STRAWBERRY_TEMPERATURE_LINE_CRITICAL) {
        this.CHOOSE_BOOK_AI()
      }
    },
    chooseNumPad() {
      this.CHOOSE_NUMPAD_AI()
    }
  }
})
</script>

<style src='./aiGameBack.css' module='styles'>
  
</style>