<template>
  <div :class='styles.border' data-testid='collectorGameScreen'>
    <div :class='styles.screen'>
      <ul :class='styles.listLevels'>
        <li :class='[styles.itemLevels, {[styles.tomatoLevelActive] : isChosenTomatoLevel}]' @click='chooseTomatoLevel'>
          <img src='../../../../../../public/images/tomatoBushRed.svg' alt='image of first level' draggable='false' />
        </li>
        
        <li :class='[styles.itemLevels , {[styles.pepperLevelActive] : isChosenPepperLevel}]' @click='choosePepperLevel'>
          <img src='../../../../../../public/images/pepperBushRed.svg' alt='image of second level' draggable='false' />
        </li>

        <li :class='[styles.itemLevels, {[styles.strawberryLevelActive] : isChosenStrawberryLevel}]' @click='chooseStrawberryLevel'>
          <img src='../../../../../../public/images/strawberryBushRed.svg' alt='image of third level' draggable='false' />
        </li>
      </ul>

      <div :class='styles.robot'>
        <img 
          src='../../../../../../public/images/collectorShop.svg' 
          alt='image robot collector' 
          draggable='false' 
          :class='[
                styles.robotImg, 
                {[styles.robotImgActive]: isChosenTomatoLevel || isChosenPepperLevel || isChosenStrawberryLevel}
              ]' 
        />

        <button
          aria-label='active button for start level'
          v-if='isChosenTomatoLevel || isChosenPepperLevel || isChosenStrawberryLevel' 
          :class='[
            styles.btn, 
            {
              [styles.btnActive]: (!GET_TOMATO_LEVEL_COMPLETED_COL && isChosenTomatoLevel) ||
                (GET_TOMATO_LEVEL_COMPLETED_COL && !GET_PEPPER_LEVEL_COMPLETED_COL && isChosenPepperLevel) || 
                (GET_PEPPER_LEVEL_COMPLETED_COL && !GET_STRAWBERRY_LEVEL_COMPLETED_COL && isChosenStrawberryLevel),
              [styles.btnComplete]: (GET_TOMATO_LEVEL_COMPLETED_COL && isChosenTomatoLevel) || 
              (GET_PEPPER_LEVEL_COMPLETED_COL && isChosenPepperLevel) ||
              (GET_STRAWBERRY_LEVEL_COMPLETED_COL && isChosenStrawberryLevel),
              [styles.btnNoActive]: (!GET_TOMATO_LEVEL_COMPLETED_COL && isChosenPepperLevel) || (!GET_PEPPER_LEVEL_COMPLETED_COL && isChosenStrawberryLevel)
            }
          ]'
          @click='openGame'
        >
          <p v-if='GET_TOMATO_LEVEL_COMPLETED_COL && isChosenTomatoLevel'>Пройдено</p>

          <p v-if='GET_TOMATO_LEVEL_COMPLETED_COL && GET_PEPPER_LEVEL_COMPLETED_COL && isChosenPepperLevel'>Пройдено</p>

          <p v-if='GET_PEPPER_LEVEL_COMPLETED_COL && GET_STRAWBERRY_LEVEL_COMPLETED_COL && isChosenStrawberryLevel'>Пройдено</p>

          <p v-if='!GET_TOMATO_LEVEL_COMPLETED_COL && isChosenTomatoLevel || !GET_PEPPER_LEVEL_COMPLETED_COL && isChosenPepperLevel || !GET_STRAWBERRY_LEVEL_COMPLETED_COL && isChosenStrawberryLevel'>
            Собрать урожай
          </p>
        </button>

        <button v-else :class='styles.btn' aria-label='non active button for start level'>
          <p>Участок не выбран</p>
        </button>

      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { AUDIO_CONFIG } from '@/config/audio'
import { EN_CollectorGameGetters } from '@/store/modules/collectorGame/getters'
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

const audioButtonGame = new Audio(AUDIO_CONFIG.AUDIO_BUTTON_GAME)

export default Vue.extend({
  name: 'collectorGameScreen',
  data: () => ({
    isChosenTomatoLevel: false,
    isChosenPepperLevel: false,
    isChosenStrawberryLevel: false
  }),
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_TOMATO_LEVEL_COMPLETED_COL,
      EN_CollectorGameGetters.GET_PEPPER_LEVEL_COMPLETED_COL,
      EN_CollectorGameGetters.GET_STRAWBERRY_LEVEL_COMPLETED_COL
    ])
  },
  methods: {
    ...mapMutations([
        EN_CollectorGameMutation.OPEN_GAME_FIELD_TOMATO_COL,
        EN_CollectorGameMutation.OPEN_GAME_FIELD_PEPPER_COL,
        EN_CollectorGameMutation.OPEN_GAME_FIELD_STRAWBERRY_COL,

        EN_CollectorGameMutation.START_TOMATO_LEVEL_COL,
        EN_CollectorGameMutation.START_PEPPER_LEVEL_COL,
        EN_CollectorGameMutation.START_STRAWBERRY_LEVEL_COL
    ]),
    chooseTomatoLevel() {
      const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		  audio.autoplay = true
		  audio.volume = 1
      
      this.isChosenPepperLevel = false
      this.isChosenStrawberryLevel = false
      this.isChosenTomatoLevel = true
    },
    choosePepperLevel() {
      const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		  audio.autoplay = true
		  audio.volume = 1

      this.isChosenTomatoLevel = false
      this.isChosenStrawberryLevel = false
      this.isChosenPepperLevel = true
    },
    chooseStrawberryLevel() {
      const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		  audio.autoplay = true
		  audio.volume = 1

      this.isChosenTomatoLevel = false
      this.isChosenPepperLevel = false
      this.isChosenStrawberryLevel = true
    },
    openGame() {
      if (this.isChosenTomatoLevel && !this.GET_TOMATO_LEVEL_COMPLETED_COL) {
        audioButtonGame.volume = 1
        audioButtonGame.play()

        this.OPEN_GAME_FIELD_TOMATO_COL()
      } 

      if (
          this.isChosenPepperLevel && 
          !this.GET_PEPPER_LEVEL_COMPLETED_COL && 
          this.GET_TOMATO_LEVEL_COMPLETED_COL
      ) {
        audioButtonGame.volume = 1
        audioButtonGame.play()

        this.OPEN_GAME_FIELD_PEPPER_COL()
      }

      if (
          this.isChosenStrawberryLevel && 
          !this.GET_STRAWBERRY_LEVEL_COMPLETED_COL && 
          this.GET_PEPPER_LEVEL_COMPLETED_COL
        ) {
          audioButtonGame.volume = 1
          audioButtonGame.play()

        this.OPEN_GAME_FIELD_STRAWBERRY_COL()
      }
    }
  }
})
</script>

<style src='./collectorGameScreen.css' module='styles'>
  
</style>