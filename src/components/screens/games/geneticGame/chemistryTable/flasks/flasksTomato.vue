<template>
  <div :class='styles.wrapper'>
    <div :class='styles.columns'>
      
      <div :class='[styles.dropZoneContainer, {[styles.dropZoneContainerActive]: isDropZoneActive}]'>
        <div :class='[
            styles.effect, 
            {
              [styles.blueStars]: isBlueEffectActive,
              [styles.greenStars]: isGreenEffectActive,
              [styles.redStars]: isRedEffectActive,
              [styles.yellowStars]: isYellowEffectActive,
              [styles.pinkStars]: isPinkEffectActive,
              [styles.cyanStars]: isCyanEffectActive,
              [styles.orangeStars]: isOrangeEffectActive,
              [styles.purpleStars]: isPurpleEffectActive,
              [styles.greyStars]: isGreyEffectActive,
            }
          ]'
        ></div>

        <draggable :list="GET_FLASKS_DROPZONE_TOMATO_GN" group="flasks" :move="detectMove" id='flasksDropZone' :class='styles.listDrop'>
          <div v-for="flaskItem in GET_FLASKS_DROPZONE_TOMATO_GN" :key="flaskItem.id">
            <!-- <div :class='styles.flask'></div> -->
          </div>
        </draggable>
      </div>

      <div :class='styles.flasksContainer'>
          <draggable :list="GET_FLASKS_TOMATO_GN" group="flasks" :move="detectMove" id='flasksContainer' :class='styles.flasksList'>
            <div v-for="flaskItem in GET_FLASKS_TOMATO_GN" :key="flaskItem.id">
              <div @mousedown='showDropZone' :title="checkFlaskName(flaskItem)" :class='[styles.flask,
                {
                  [styles.greenFlask]: flaskItem.name === "greenFlask",
                  [styles.pinkFlask]: flaskItem.name === "pinkFlask",
                  [styles.yellowFlask]: flaskItem.name === "yellowFlask",
                  [styles.blueFlask]: flaskItem.name === "blueFlask",
                  [styles.redFlask]: flaskItem.name === "redFlask",
                  [styles.cyanFlask]: flaskItem.name === "cyanFlask",
                  [styles.purpleFlask]: flaskItem.name === "purpleFlask",
                  [styles.orangeFlask]: flaskItem.name === "orangeFlask",
                  [styles.greyFlask]: flaskItem.name === "greyFlask",
                  [styles.greenFlaskRotate]: isGreenFlaskRotate,
                  [styles.blueFlaskRotate]: isBlueFlaskRotate,
                  [styles.pinkFlaskRotate]: isPinkFlaskRotate,
                  [styles.yellowFlaskRotate]: isYellowFlaskRotate,
                  [styles.redFlaskRotate]: isRedFlaskRotate,
                  [styles.cyanFlaskRotate]: isCyanFlaskRotate,
                  [styles.orangeFlaskRotate]: isOrangeFlaskRotate,
                  [styles.purpleFlaskRotate]: isPurpleFlaskRotate,
                  [styles.greyFlaskRotate]: isGreyFlaskRotate,
                  [styles.emptyFlask]: isEmptyFlask,
                }
              ]'></div>
            </div>
          </draggable>
          <div :class='styles.flasksBox'></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import draggable from 'vuedraggable'
import { EN_CONFIG } from '../../config/config'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'

import { AUDIO_CONFIG } from '@/config/audio'
import { IFlask } from '@/store/modules/geneticGame/types'

const audioSuccessFlask = new Audio(AUDIO_CONFIG.AUDIO_SUCCESS_FLASK)
const audioMistake = new Audio(AUDIO_CONFIG.AUDIO_MISTAKE)

export default Vue.extend({
  name: 'flasksTomato',
  data: () => ({
    isDropZoneActive: false,

    isBlueEffectActive: false,
    isGreenEffectActive: false,
    isRedEffectActive: false,
    isYellowEffectActive: false,
    isPinkEffectActive: false,
    isCyanEffectActive: false,
    isOrangeEffectActive: false,
    isPurpleEffectActive: false,
    isGreyEffectActive: false,

    isBlueFlaskRotate: false,
    isGreenFlaskRotate: false,
    isPinkFlaskRotate: false,
    isYellowFlaskRotate: false,
    isRedFlaskRotate: false,
    isCyanFlaskRotate: false,
    isOrangeFlaskRotate: false,
    isPurpleFlaskRotate: false,
    isGreyFlaskRotate: false,

    isEmptyFlask: false,
  }),
  components: {
    draggable,
  },
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_PLAYER_MISTAKES_GN,
      EN_GeneticGameGetters.GET_FLASKS_TOMATO_GN,
      EN_GeneticGameGetters.GET_FLASKS_DROPZONE_TOMATO_GN,
      EN_GeneticGameGetters.GET_TOMATO_SPROUT,
      EN_GeneticGameGetters.GET_TOMATO_COLOR,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.SHOW_TOMATO_SPROUT,
      EN_GeneticGameMutation.HIDE_TOMATO_SPROUT,
      EN_GeneticGameMutation.SHOW_TOMATO_COLOR,
      EN_GeneticGameMutation.HIDE_TOMATO_COLOR,
      EN_GeneticGameMutation.SHOW_TOMATO_MODIFIED,
      EN_GeneticGameMutation.START_FINISH_TIMER_TOMATO_GN,
      EN_GeneticGameMutation.STOP_TIMER_TOMATO_GN,
      EN_GeneticGameMutation.UPDATE_TIMER_TOMATO_GN,

      EN_GeneticGameMutation.INCREASE_PLAYER_MISTAKES_GN,
      EN_GeneticGameMutation.SHOW_FIRST_MISTAKE_GN,
      EN_GeneticGameMutation.HIDE_FIRST_MISTAKE_GN,
      EN_GeneticGameMutation.SHOW_SECOND_MISTAKE_GN,
      EN_GeneticGameMutation.HIDE_SECOND_MISTAKE_GN,

      EN_GeneticGameMutation.FINISH_GAME_GN,
      EN_GeneticGameMutation.SHOW_LOSS_BLOCK_GN,
      EN_GeneticGameMutation.PLUS_POINTS_GN,
      EN_GeneticGameMutation.MINUS_POINTS_GN
    ]),
    checkFlaskName(flask: IFlask) {
	    let flasksName: string = ''

	    if (flask.name === 'greenFlask') {
	    	flasksName = 'зелёная колба'
	    }
    
	    if (flask.name === 'pinkFlask') {
	    	flasksName = 'розовая колба'
	    }
    
	    if (flask.name === 'yellowFlask') {
	    	flasksName = 'жёлтая колба'
	    }
    
	    if (flask.name === 'blueFlask') {
	    	flasksName = 'синяя колба'
	    }
    
	    if (flask.name === 'redFlask') {
	    	flasksName = 'красная колба'
	    }
    
	    if (flask.name === 'cyanFlask') {
	    	flasksName = 'голубая колба'
	    }
    
	    if (flask.name === 'purpleFlask') {
	    	flasksName = 'фиолетовая колба'
	    }
    
	    if (flask.name === 'orangeFlask') {
	    	flasksName = 'оранжевая колба'
	    }
    
	    if (flask.name === 'greyFlask') {
	    	flasksName = 'серая колба'
	    }

	    return flasksName
    },
    showDropZone() {
      this.isDropZoneActive = true
    },
    detectMove(evt: any){
      this.isGreenFlaskRotate = false
      this.isBlueFlaskRotate = false
      this.isPinkFlaskRotate = false
      this.isYellowFlaskRotate = false
      this.isRedFlaskRotate = false
      this.isCyanFlaskRotate = false
      this.isOrangeFlaskRotate = false
      this.isPurpleFlaskRotate = false
      this.isGreyFlaskRotate = false
      this.isEmptyFlask = false

       if (
          evt.draggedContext.element.name === 'greenFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isGreenEffectActive) {
            this.isDropZoneActive = false
            this.isGreenFlaskRotate = true
            this.isGreenEffectActive = true
            setTimeout(() => {
              this.isGreenEffectActive = false
              this.isEmptyFlask = true

              this.MINUS_POINTS_GN()
              this.INCREASE_PLAYER_MISTAKES_GN()

              audioMistake.volume = 1
              audioMistake.play()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isGreenFlaskRotate = false
                  this.isEmptyFlask = false

                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_TOMATO_GN()
                  this.START_FINISH_TIMER_TOMATO_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isGreenFlaskRotate = false
                  this.isEmptyFlask = false

                  this.FINISH_GAME_GN()
                  this.SHOW_LOSS_BLOCK_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'blueFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isBlueEffectActive) {
            this.isDropZoneActive = false
            this.isBlueFlaskRotate = true
            this.isBlueEffectActive = true

            this.SHOW_TOMATO_SPROUT()
            this.PLUS_POINTS_GN()

            audioSuccessFlask.volume = 1
            audioSuccessFlask.play()
            setTimeout(() => {
              this.isBlueEffectActive = false
              this.isEmptyFlask = true

              this.START_FINISH_TIMER_TOMATO_GN()
              this.UPDATE_TIMER_TOMATO_GN()
              this.START_FINISH_TIMER_TOMATO_GN()

              setTimeout(() => {
                this.isBlueFlaskRotate = false
                this.isEmptyFlask = false
              }, EN_CONFIG.TIMING_EMPTY_FLASK)
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'pinkFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isPinkEffectActive) {
            this.isDropZoneActive = false
            this.isPinkFlaskRotate = true
            this.isPinkEffectActive = true

            if (this.GET_TOMATO_COLOR) {
              setTimeout(() => {
                this.HIDE_TOMATO_COLOR()
                this.SHOW_TOMATO_MODIFIED()
                this.PLUS_POINTS_GN()

                audioSuccessFlask.volume = 1
                audioSuccessFlask.play()
              }, EN_CONFIG.TIMING_GROW_PLANT)

              setTimeout(() => {
                this.isPinkEffectActive = false
                this.isEmptyFlask = true
                
                this.START_FINISH_TIMER_TOMATO_GN()
                this.STOP_TIMER_TOMATO_GN()
                this.FINISH_GAME_GN()

                setTimeout(() => {
                  this.isPinkFlaskRotate = false
                  this.isEmptyFlask = false
                }, EN_CONFIG.TIMING_EMPTY_FLASK)
              }, EN_CONFIG.TIMING_EFFECT_FLASK)
            } else {
              setTimeout(() => {
                this.isDropZoneActive = false
                this.isPinkEffectActive = false
                this.isEmptyFlask = true

                this.MINUS_POINTS_GN()
                this.INCREASE_PLAYER_MISTAKES_GN()
                this.INCREASE_PLAYER_MISTAKES_GN()

                audioMistake.volume = 1
                audioMistake.play()

                if (this.GET_PLAYER_MISTAKES_GN >= 2) {
                  this.SHOW_SECOND_MISTAKE_GN()
                  this.START_FINISH_TIMER_TOMATO_GN()
                  setTimeout(() => {
                    this.isPinkFlaskRotate = false
                    this.isEmptyFlask = false

                    this.FINISH_GAME_GN()
                    this.SHOW_LOSS_BLOCK_GN()
                  }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
                }
              }, EN_CONFIG.TIMING_EFFECT_FLASK)
            }
          }
        }

        if (
          evt.draggedContext.element.name === 'yellowFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isYellowEffectActive) {
            this.isDropZoneActive = false
            this.isYellowFlaskRotate = true
            this.isYellowEffectActive = true
            setTimeout(() => {
              this.isYellowEffectActive = false
              this.isEmptyFlask = true

              this.MINUS_POINTS_GN()
              this.INCREASE_PLAYER_MISTAKES_GN()

              audioMistake.volume = 1
              audioMistake.play()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isYellowFlaskRotate = false
                  this.isEmptyFlask = false

                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_TOMATO_GN()
                  this.START_FINISH_TIMER_TOMATO_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isYellowFlaskRotate = false
                  this.isEmptyFlask = false

                  this.FINISH_GAME_GN()
                  this.SHOW_LOSS_BLOCK_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'redFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isRedEffectActive) {
            this.isDropZoneActive = false
            this.isRedFlaskRotate = true
            this.isRedEffectActive = true
            setTimeout(() => {
              this.isRedEffectActive = false
              this.isEmptyFlask = true

              this.MINUS_POINTS_GN()
              this.INCREASE_PLAYER_MISTAKES_GN()

              audioMistake.volume = 1
              audioMistake.play()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isRedFlaskRotate = false
                  this.isEmptyFlask = false

                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_TOMATO_GN()
                  this.START_FINISH_TIMER_TOMATO_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isRedFlaskRotate = false
                  this.isEmptyFlask = false

                  this.FINISH_GAME_GN()
                  this.SHOW_LOSS_BLOCK_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'cyanFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isCyanEffectActive) {
            this.isDropZoneActive = false
            this.isCyanFlaskRotate = true
            this.isCyanEffectActive = true
            setTimeout(() => {
              this.isCyanEffectActive = false
              this.isEmptyFlask = true

              this.MINUS_POINTS_GN()
              this.INCREASE_PLAYER_MISTAKES_GN()

              audioMistake.volume = 1
              audioMistake.play()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isCyanFlaskRotate = false
                  this.isEmptyFlask = false

                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_TOMATO_GN()
                  this.START_FINISH_TIMER_TOMATO_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isCyanFlaskRotate = false
                  this.isEmptyFlask = false

                  this.FINISH_GAME_GN()
                  this.SHOW_LOSS_BLOCK_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'orangeFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isOrangeEffectActive) {
            this.isDropZoneActive = false
            this.isOrangeFlaskRotate = true
            this.isOrangeEffectActive = true
            setTimeout(() => {
              this.isOrangeEffectActive = false
              this.isEmptyFlask = true

              this.MINUS_POINTS_GN()
              this.INCREASE_PLAYER_MISTAKES_GN()

              audioMistake.volume = 1
              audioMistake.play()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isOrangeFlaskRotate = false
                  this.isEmptyFlask = false

                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_TOMATO_GN()
                  this.START_FINISH_TIMER_TOMATO_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isOrangeFlaskRotate = false
                  this.isEmptyFlask = false

                  this.FINISH_GAME_GN()
                  this.SHOW_LOSS_BLOCK_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'purpleFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isPurpleEffectActive) {
            this.isDropZoneActive = false
            this.isPurpleFlaskRotate = true
            this.isPurpleEffectActive = true
            setTimeout(() => {
              this.isPurpleEffectActive = false
              this.isEmptyFlask = true

              this.MINUS_POINTS_GN()
              this.INCREASE_PLAYER_MISTAKES_GN()

              audioMistake.volume = 1
              audioMistake.play()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isPurpleFlaskRotate = false
                  this.isEmptyFlask = false

                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_TOMATO_GN()
                  this.START_FINISH_TIMER_TOMATO_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_TOMATO_GN()
                setTimeout(() => {
                  this.isPurpleFlaskRotate = false
                  this.isEmptyFlask = false

                  this.FINISH_GAME_GN()
                  this.SHOW_LOSS_BLOCK_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'greyFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isPurpleEffectActive) {
            this.isDropZoneActive = false
            this.isGreyFlaskRotate = true
            this.isGreyEffectActive = true

            if (this.GET_TOMATO_SPROUT) {
              setTimeout(() => {
                this.HIDE_TOMATO_SPROUT()
                this.SHOW_TOMATO_COLOR()  
                this.PLUS_POINTS_GN()
                
                audioSuccessFlask.volume = 1
                audioSuccessFlask.play()
              }, EN_CONFIG.TIMING_GROW_PLANT)

              setTimeout(() => {
                this.isGreyEffectActive = false
                this.isEmptyFlask = true

                this.START_FINISH_TIMER_TOMATO_GN()
                this.UPDATE_TIMER_TOMATO_GN()
                this.START_FINISH_TIMER_TOMATO_GN()

                setTimeout(() => {
                  this.isGreyFlaskRotate = false
                  this.isEmptyFlask = false
                }, EN_CONFIG.TIMING_EMPTY_FLASK)
              }, EN_CONFIG.TIMING_EFFECT_FLASK)
            } else {
              setTimeout(() => {
                this.isGreyEffectActive = false
                this.isEmptyFlask = true

                this.MINUS_POINTS_GN()
                this.INCREASE_PLAYER_MISTAKES_GN()
                this.INCREASE_PLAYER_MISTAKES_GN()

                audioMistake.volume = 1
                audioMistake.play()

                if (this.GET_PLAYER_MISTAKES_GN >= 2) {
                  this.SHOW_SECOND_MISTAKE_GN()
                  this.START_FINISH_TIMER_TOMATO_GN()
                  setTimeout(() => {
                    this.isGreyFlaskRotate = false
                    this.isEmptyFlask = false

                    this.FINISH_GAME_GN()
                    this.SHOW_LOSS_BLOCK_GN()
                  }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
                }
              }, EN_CONFIG.TIMING_EFFECT_FLASK)
            }
          }
        }
    }
  },
})
</script>

<style src='./flasks.css' module='styles'>
  
</style>