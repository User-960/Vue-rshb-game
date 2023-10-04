<template>
  <div :class='styles.wrapper'>
    <div :class='styles.columns'>
      
      <div :class='styles.dropZoneContainer'>
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

        <draggable :list="flasksDropZone" group="flasks" :move="detectMove" id='flasksDropZone' :class='styles.listDrop'>
          <div v-for="flaskItem in flasksDropZone" :key="flaskItem.id">
            <!-- <div :class='styles.flask'></div> -->
          </div>
        </draggable>
      </div>

      <div :class='styles.flasksContainer'>
          <draggable :list="flasks" group="flasks" :move="detectMove" id='flasksContainer' :class='styles.flasksList'>
            <div v-for="flaskItem in flasks" :key="flaskItem.id">
              <div :class='[styles.flask,
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
import { EN_CONFIG, flasksStrawberry, flasksDropZoneStrawberry } from '../../config/config'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'

export default Vue.extend({
  name: 'flasksStrawberry',
  data: () => ({
    flasks: flasksStrawberry,
    flasksDropZone: flasksDropZoneStrawberry,

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
      EN_GeneticGameGetters.GET_STRAWBERRY_SPROUT,
      EN_GeneticGameGetters.GET_STRAWBERRY_COLOR,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.SHOW_STRAWBERRY_SPROUT,
      EN_GeneticGameMutation.HIDE_STRAWBERRY_SPROUT,
      EN_GeneticGameMutation.SHOW_STRAWBERRY_COLOR,
      EN_GeneticGameMutation.HIDE_STRAWBERRY_COLOR,
      EN_GeneticGameMutation.SHOW_STRAWBERRY_MODIFIED,
      EN_GeneticGameMutation.START_FINISH_TIMER_STRAWBERRY_GN,
      EN_GeneticGameMutation.UPDATE_TIMER_STRAWBERRY_GN,

      EN_GeneticGameMutation.INCREASE_PLAYER_MISTAKES_GN,
      EN_GeneticGameMutation.SHOW_FIRST_MISTAKE_GN,
      EN_GeneticGameMutation.HIDE_FIRST_MISTAKE_GN,
      EN_GeneticGameMutation.SHOW_SECOND_MISTAKE_GN,
      EN_GeneticGameMutation.HIDE_SECOND_MISTAKE_GN,

      EN_GeneticGameMutation.FINISH_GAME_GN,
    ]),
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
            this.isGreenFlaskRotate = true
            this.isGreenEffectActive = true
            setTimeout(() => {
              this.isGreenEffectActive = false
              this.isEmptyFlask = true

              this.INCREASE_PLAYER_MISTAKES_GN()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_STRAWBERRY_GN()
                  this.START_FINISH_TIMER_STRAWBERRY_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.FINISH_GAME_GN()
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
            this.isBlueFlaskRotate = true
            this.isBlueEffectActive = true
            setTimeout(() => {
              this.isBlueEffectActive = false
              this.isEmptyFlask = true

              this.INCREASE_PLAYER_MISTAKES_GN()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_STRAWBERRY_GN()
                  this.START_FINISH_TIMER_STRAWBERRY_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.FINISH_GAME_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'pinkFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isPinkEffectActive) {
            this.isPinkFlaskRotate = true
            this.isPinkEffectActive = true
            setTimeout(() => {
              this.isPinkEffectActive = false
              this.isEmptyFlask = true

              this.INCREASE_PLAYER_MISTAKES_GN()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_STRAWBERRY_GN()
                  this.START_FINISH_TIMER_STRAWBERRY_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.FINISH_GAME_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'yellowFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isYellowEffectActive) {
            this.isYellowFlaskRotate = true
            this.isYellowEffectActive = true

            if (this.GET_STRAWBERRY_SPROUT) {
              setTimeout(() => {
                this.HIDE_STRAWBERRY_SPROUT()
                this.SHOW_STRAWBERRY_COLOR()            
              }, 1000);

              setTimeout(() => {
                this.isYellowEffectActive = false
                this.isEmptyFlask = true

                this.START_FINISH_TIMER_STRAWBERRY_GN()
                this.UPDATE_TIMER_STRAWBERRY_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
              }, EN_CONFIG.TIMING_EFFECT_FLASK)
            } else {
              setTimeout(() => {
                this.isYellowEffectActive = false
                this.isEmptyFlask = true

                this.INCREASE_PLAYER_MISTAKES_GN()
                this.INCREASE_PLAYER_MISTAKES_GN()

                if (this.GET_PLAYER_MISTAKES_GN === 2) {
                  this.SHOW_SECOND_MISTAKE_GN()
                  this.START_FINISH_TIMER_STRAWBERRY_GN()
                  setTimeout(() => {
                    this.FINISH_GAME_GN()
                  }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
                }
              }, EN_CONFIG.TIMING_EFFECT_FLASK)
            }
          }
        }

        if (
          evt.draggedContext.element.name === 'redFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isRedEffectActive) {
            this.isRedFlaskRotate = true
            this.isRedEffectActive = true
            setTimeout(() => {
              this.isRedEffectActive = false
              this.isEmptyFlask = true

              this.INCREASE_PLAYER_MISTAKES_GN()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_STRAWBERRY_GN()
                  this.START_FINISH_TIMER_STRAWBERRY_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.FINISH_GAME_GN()
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
            this.isCyanFlaskRotate = true
            this.isCyanEffectActive = true

            if (this.GET_STRAWBERRY_COLOR) {
              setTimeout(() => {
                this.HIDE_STRAWBERRY_COLOR()
                this.SHOW_STRAWBERRY_MODIFIED()
              }, 1000)

              setTimeout(() => {
                this.isCyanEffectActive = false
                this.isEmptyFlask = true
                
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                this.FINISH_GAME_GN()
              }, EN_CONFIG.TIMING_EFFECT_FLASK)
            } else {
              setTimeout(() => {
                this.isCyanEffectActive = false
                this.isEmptyFlask = true

                this.INCREASE_PLAYER_MISTAKES_GN()
                this.INCREASE_PLAYER_MISTAKES_GN()

                if (this.GET_PLAYER_MISTAKES_GN === 2) {
                  this.SHOW_SECOND_MISTAKE_GN()
                  this.START_FINISH_TIMER_STRAWBERRY_GN()
                  setTimeout(() => {
                    this.FINISH_GAME_GN()
                  }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
                }
              }, EN_CONFIG.TIMING_EFFECT_FLASK)
            }
          }
        }

        if (
          evt.draggedContext.element.name === 'orangeFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isOrangeEffectActive) {
            this.isOrangeFlaskRotate = true
            this.isOrangeEffectActive = true
            setTimeout(() => {
              this.isOrangeEffectActive = false
              this.isEmptyFlask = true

              this.INCREASE_PLAYER_MISTAKES_GN()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_STRAWBERRY_GN()
                  this.START_FINISH_TIMER_STRAWBERRY_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.FINISH_GAME_GN()
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
            this.isPurpleFlaskRotate = true
            this.isPurpleEffectActive = true

            this.SHOW_STRAWBERRY_SPROUT()
            setTimeout(() => {
              this.isPurpleEffectActive = false
              this.isEmptyFlask = true

              this.START_FINISH_TIMER_STRAWBERRY_GN()
              this.UPDATE_TIMER_STRAWBERRY_GN()
              this.START_FINISH_TIMER_STRAWBERRY_GN()
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }

        if (
          evt.draggedContext.element.name === 'greyFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isGreyEffectActive) {
            this.isGreyFlaskRotate = true
            this.isGreyEffectActive = true
            setTimeout(() => {
              this.isGreyEffectActive = false
              this.isEmptyFlask = true

              this.INCREASE_PLAYER_MISTAKES_GN()

              if (this.GET_PLAYER_MISTAKES_GN === 1) {
                this.SHOW_FIRST_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.HIDE_FIRST_MISTAKE_GN()
                  this.UPDATE_TIMER_STRAWBERRY_GN()
                  this.START_FINISH_TIMER_STRAWBERRY_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }

              if (this.GET_PLAYER_MISTAKES_GN === 2) {
                this.SHOW_SECOND_MISTAKE_GN()
                this.START_FINISH_TIMER_STRAWBERRY_GN()
                setTimeout(() => {
                  this.FINISH_GAME_GN()
                }, EN_CONFIG.TIMING_ERROR_TEXT_MARIA)
              }
            }, EN_CONFIG.TIMING_EFFECT_FLASK)
          }
        }
    }
  },
})
</script>

<style src='./flasks.css' module='styles'>
  
</style>