<template>
  <div :class='styles.border' data-testid='pestControlGameScreen'>
    <div :class='styles.screen'>
      <ul :class='styles.listLevels'>

        <li :class='styles.itemLevels' @click='chooseTomatoLevel'>
          <div :class='styles.pestInfo'>
            <p :class='styles.pestTitle'>Вредители</p>
            <ul :class='styles.pestImgList'>
              <img src='../../../../../../public/images/worm.svg' alt='image of first level' draggable='false' />
              <img src='../../../../../../public/images/worm.svg' alt='image of first level' draggable='false' />
              <img src='../../../../../../public/images/worm.svg' alt='image of first level' draggable='false' />
            </ul>
          </div>

          <div :class='styles.pestLevel'>
            <div :class='styles.pestLevelImgWrapper'>
              <img 
                :class='[
                  styles.pestLevelImg, 
                  {[styles.pestLevelImgActive]: GET_CHOSEN_TOMATO_LEVEL}
                ]' 
                src='../../../../../../public/images/tomatoBushGreen.svg' 
                alt='image of first level' 
                draggable='false' 
              />
              <div :class='[{[styles.ultrasound]: isUltrasoundTomatoActive}]' ></div>
            </div>

            <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <p>0</p>
                <div :class='[styles.indicatorNumber, {[styles.indicatorNumberCritical]: GET_TOMATO_LINE_CRITICAL}]'></div>
                <div :class='[styles.indicatorLine, {[styles.indicatorLineCritical]: GET_TOMATO_LINE_CRITICAL}]'></div>
              </div>
              <p>100%</p>
            </div>
          </div>
        </li>
        
        <li :class='styles.itemLevels' @click='choosePepperLevel'>
          <div :class='styles.pestInfo'>
            <p :class='styles.pestTitle'>Вредители</p>
            <ul :class='styles.pestImgList'>
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
            </ul>
          </div>

          <div :class='styles.pestLevel'>
            <div :class='styles.pestLevelImgWrapper'>
              <img :class='[styles.pestLevelImg, {[styles.pestLevelImgActive]: GET_CHOSEN_PEPPER_LEVEL}]' src='../../../../../../public/images/pepperBushGreen.svg' alt='image of first level' draggable='false' />
              <div :class='[{[styles.ultrasound]: isUltrasoundPepperActive}]' ></div>
            </div>

            <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <p>0</p>
                <div :class='[styles.indicatorNumber, {[styles.indicatorNumberCritical]: GET_PEPPER_LINE_CRITICAL}]'></div>
                <div :class='[styles.indicatorLine, {[styles.indicatorLineCritical]: GET_PEPPER_LINE_CRITICAL}]'></div>
              </div>
              <p>100%</p>
            </div>
          </div>
        </li>

        <li :class='styles.itemLevels' @click='chooseStrawberryLevel'>
          <div :class='styles.pestInfo'>
            <p :class='styles.pestTitle'>Вредители</p>
            <ul :class='styles.pestImgList'>
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
            </ul>
          </div>

          <div :class='styles.pestLevel'>
            <div :class='styles.pestLevelImgWrapper'>
              <img :class='[styles.pestLevelImg, {[styles.pestLevelImgActive]: GET_CHOSEN_STRAWBERRY_LEVEL}]' src='../../../../../../public/images/strawberryBushGreen.svg' alt='image of first level' draggable='false' />
              <div :class='[{[styles.ultrasound]: isUltrasoundStrawberryActive}]' ></div>
            </div>

            <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <p>0</p>
                <div :class='[styles.indicatorNumber, {[styles.indicatorNumberCritical]: GET_STRAWBERRY_LINE_CRITICAL}]'></div>
                <div :class='[styles.indicatorLine, {[styles.indicatorLineCritical]: GET_STRAWBERRY_LINE_CRITICAL}]'></div>
              </div>
              <p>100%</p>
            </div>
          </div>
        </li>

        <li :class='styles.itemDrone'>
          <ul :class='styles.insecticideList'>
            <li 
              :class='[
                styles.insecticide, 
                styles.insecticideBug, 
                {[styles.insecticideBugActive]: isBugActive}
              ]'
              @click='selectBug'
            ></li>

            <li 
              :class='[
                styles.insecticide, 
                styles.insecticideLocusts, 
                {[styles.insecticideLocustsActive]: isLocustsActive}
              ]'
              @click='selectLocusts'
            ></li>

            <li 
              :class='[
                styles.insecticide, 
                styles.insecticideCaterpillar, 
                {[styles.insecticideCaterpillarActive]: isCaterpillarActive}
              ]'
              @click='selectCaterpillar'
            ></li>
          </ul>

          <div 
            :class='[
              styles.drone, 
              {[styles.droneActive]: isDroneActive},
              {[styles.droneMovedTomato]: isDroneMovedTomato},
              {[styles.droneReturnTomato]: isDroneFinishWorkTomato},
              {[styles.droneMovedPepper]: isDroneMovedPepper},
              {[styles.droneReturnPepper]: isDroneFinishWorkPepper},
              {[styles.droneMovedStrawberry]: isDroneMovedStrawberry},
              {[styles.droneReturnStrawberry]: isDroneFinishWorkStrawberry},
            ]' 
            @click='selectDrone'
          ></div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { EN_PestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { EN_PestControlGameMutation } from '@/store/modules/pestControlGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_CONFIG } from '../config/config'
import { getRandomNumber } from '../helpers/helpers'
import { AUDIO_CONFIG } from '@/config/audio'

export default Vue.extend({
  name: 'pestControlGameScreen',
  data: () => ({
    // isChosenTomatoLevel: false,
    // isChosenPepperLevel: false,
    // isChosenStrawberryLevel: false,

    isUltrasoundTomatoActive: false,
    isUltrasoundPepperActive: false,
    isUltrasoundStrawberryActive: false,

    // isTomatoLineCritical: false,
    // isPepperLineCritical: false,
    // isStrawberryLineCritical: false,

    isBugActive: false,
    isLocustsActive: false,
    isCaterpillarActive: false,

    isDroneActive: false,

    isDroneMovedTomato: false,
    isDroneFinishWorkTomato: false,
    isDroneMovedPepper: false,
    isDroneFinishWorkPepper: false,
    isDroneMovedStrawberry: false,
    isDroneFinishWorkStrawberry: false
  }),
  computed: {
    ...mapGetters([
      EN_PestControlGameGetters.GET_START_GAME_PS,
      EN_PestControlGameGetters.GET_GAME_LOOP_PS,
      EN_PestControlGameGetters.GET_TOMATO_LEVEL_NUM_PS,
      EN_PestControlGameGetters.GET_PEPPER_LEVEL_NUM_PS,
      EN_PestControlGameGetters.GET_STRAWBERRY_LEVEL_NUM_PS,

      EN_PestControlGameGetters.GET_CHOSEN_TOMATO_LEVEL,
      EN_PestControlGameGetters.GET_TOMATO_LINE_CRITICAL,

      EN_PestControlGameGetters.GET_CHOSEN_PEPPER_LEVEL,
      EN_PestControlGameGetters.GET_PEPPER_LINE_CRITICAL,

      EN_PestControlGameGetters.GET_CHOSEN_STRAWBERRY_LEVEL,
      EN_PestControlGameGetters.GET_STRAWBERRY_LINE_CRITICAL,
    ]),
  },
  watch: {
    GET_GAME_LOOP_PS() {
      if (this.GET_GAME_LOOP_PS < 4 && this.GET_START_GAME_PS) {
        let numberLevel = getRandomNumber(1, 4)

        if (this.GET_TOMATO_LEVEL_NUM_PS === numberLevel) {
          this.startTomatoLevel()
        }

        if (this.GET_PEPPER_LEVEL_NUM_PS === numberLevel) {
          this.startPepperLevel()
        }

        if (this.GET_STRAWBERRY_LEVEL_NUM_PS === numberLevel) {
          this.startStrawberryLevel()
        }
      } else {
        this.FINISH_GAME_PS()
        if (!this.GET_START_GAME_PS) {
          this.SHOW_VICTORY_BLOCK_PS()
        }
      }
    },
    // Tomato Level
    GET_CHOSEN_TOMATO_LEVEL() {
      if (
        (this.isDroneActive && this.GET_TOMATO_LINE_CRITICAL) && 
        (this.isCaterpillarActive || this.isLocustsActive || this.isBugActive)
      ) {
        this.isDroneMovedTomato = true
      }

      if (this.isDroneMovedTomato) {
        setTimeout(() => {
            this.isUltrasoundTomatoActive = true
        }, EN_CONFIG.TIMING_DRONE_MOVED_TOMATO)
      }
    },
    isUltrasoundTomatoActive() {
      if (this.isCaterpillarActive) {
        if (this.isUltrasoundTomatoActive && this.GET_CHOSEN_TOMATO_LEVEL && this.GET_TOMATO_LINE_CRITICAL) {
          setTimeout(() => {
            this.isUltrasoundTomatoActive = false
            this.REMOVE_TOMATO_LINE_CRITICAL()
            this.NOT_CHOOSE_TOMATO_LEVEL()
            this.isDroneMovedTomato = false
            this.isDroneFinishWorkTomato = true
          }, EN_CONFIG.TIMING_ULTRASOUND_TOMATO)
        }
      } else {
        this.SHOW_LOSS_BLOCK_PS()
      }
    },
    isDroneFinishWorkTomato() {
      if (this.isDroneFinishWorkTomato) {
        setTimeout(() => {
            this.isDroneFinishWorkTomato = false
            this.isCaterpillarActive = false
            this.isDroneActive = false
            
            this.PLUS_POINTS_PS()
            this.GAME_LOOP_PS()
        }, EN_CONFIG.TIMING_DRONE_RETURNED_TOMATO)
      }
    },
    // Pepper Level
    GET_CHOSEN_PEPPER_LEVEL() {
      if (
        (this.isDroneActive && this.GET_PEPPER_LINE_CRITICAL) && 
        (this.isCaterpillarActive || this.isLocustsActive || this.isBugActive)
      ) {
        this.isDroneMovedPepper = true
      }

      if (this.isDroneMovedPepper) {
        setTimeout(() => {
            this.isUltrasoundPepperActive = true
        }, EN_CONFIG.TIMING_DRONE_MOVED_PEPPER)
      }
    },
    isUltrasoundPepperActive() {
      if (this.isBugActive) {
        if (this.isUltrasoundPepperActive && this.GET_CHOSEN_PEPPER_LEVEL && this.GET_PEPPER_LINE_CRITICAL) {
          setTimeout(() => {
            this.isUltrasoundPepperActive = false
            this.REMOVE_PEPPER_LINE_CRITICAL()
            this.NOT_CHOOSE_PEPPER_LEVEL()
            this.isDroneMovedPepper = false
            this.isDroneFinishWorkPepper = true
          }, EN_CONFIG.TIMING_ULTRASOUND_PEPPER)
        }
      } else {
         this.SHOW_LOSS_BLOCK_PS()
      }
    },
    isDroneFinishWorkPepper() {
      if (this.isDroneFinishWorkPepper) {
        setTimeout(() => {
            this.isDroneFinishWorkPepper = false
            this.isBugActive = false
            this.isDroneActive = false

            this.PLUS_POINTS_PS()
            this.GAME_LOOP_PS()
        }, EN_CONFIG.TIMING_DRONE_RETURNED_PEPPER)
      }
    },
    // Strawberry Level
    GET_CHOSEN_STRAWBERRY_LEVEL() {
      if (
          (this.isDroneActive && this.GET_STRAWBERRY_LINE_CRITICAL) && 
          (this.isCaterpillarActive || this.isLocustsActive || this.isBugActive)
        ) {
        this.isDroneMovedStrawberry = true
      }

      if (this.isDroneMovedStrawberry) {
        setTimeout(() => {
            this.isUltrasoundStrawberryActive = true
        }, EN_CONFIG.TIMING_DRONE_MOVED_STRAWBERRY)
      }
    },
    isUltrasoundStrawberryActive() {
      if (this.isLocustsActive) {
        if (
            this.isUltrasoundStrawberryActive && 
            this.GET_CHOSEN_STRAWBERRY_LEVEL && 
            this.GET_STRAWBERRY_LINE_CRITICAL
          )   {
          setTimeout(() => {
            this.isUltrasoundStrawberryActive = false
            this.REMOVE_STRAWBERRY_LINE_CRITICAL()
            this.NOT_CHOOSE_STRAWBERRY_LEVEL()
            this.isDroneMovedStrawberry = false
            this.isDroneFinishWorkStrawberry = true
          }, EN_CONFIG.TIMING_ULTRASOUND_STRAWBERRY)
        }
      } else {
        this.SHOW_LOSS_BLOCK_PS()
      }
    },
    isDroneFinishWorkStrawberry() {
      if (this.isDroneFinishWorkStrawberry) {
        setTimeout(() => {
            this.isDroneFinishWorkStrawberry = false
            this.isLocustsActive = false
            this.isDroneActive = false

            this.PLUS_POINTS_PS()
            this.GAME_LOOP_PS()
        }, EN_CONFIG.TIMING_DRONE_RETURNED_STRAWBERRY)
      }
    }
  },
  components: {},
  methods: {
    ...mapMutations([
      EN_PestControlGameMutation.START_GAME_PS,
      EN_PestControlGameMutation.FINISH_GAME_PS,
      EN_PestControlGameMutation.GAME_LOOP_PS,
      EN_PestControlGameMutation.PLUS_POINTS_PS,
      EN_PestControlGameMutation.SHOW_VICTORY_BLOCK_PS,
      EN_PestControlGameMutation.SHOW_LOSS_BLOCK_PS,

      EN_PestControlGameMutation.CHOOSE_TOMATO_LEVEL,
      EN_PestControlGameMutation.NOT_CHOOSE_TOMATO_LEVEL,
      EN_PestControlGameMutation.FILL_TOMATO_LINE_CRITICAL,
      EN_PestControlGameMutation.REMOVE_TOMATO_LINE_CRITICAL,

      EN_PestControlGameMutation.CHOOSE_PEPPER_LEVEL,
      EN_PestControlGameMutation.NOT_CHOOSE_PEPPER_LEVEL,
      EN_PestControlGameMutation.FILL_PEPPER_LINE_CRITICAL,
      EN_PestControlGameMutation.REMOVE_PEPPER_LINE_CRITICAL,

      EN_PestControlGameMutation.CHOOSE_STRAWBERRY_LEVEL,
      EN_PestControlGameMutation.NOT_CHOOSE_STRAWBERRY_LEVEL,
      EN_PestControlGameMutation.FILL_STRAWBERRY_LINE_CRITICAL,
      EN_PestControlGameMutation.REMOVE_STRAWBERRY_LINE_CRITICAL,
    ]),
    startTomatoLevel() {
      setTimeout(() => {
        this.FILL_TOMATO_LINE_CRITICAL()
      }, EN_CONFIG.TIMING_LINE_CRITICAL_TOMATO)
    },
    startPepperLevel() {
      setTimeout(() => {
        this.FILL_PEPPER_LINE_CRITICAL()
      }, EN_CONFIG.TIMING_LINE_CRITICAL_PEPPER)
    },
    startStrawberryLevel() {
      setTimeout(() => {
        this.FILL_STRAWBERRY_LINE_CRITICAL()
      }, EN_CONFIG.TIMING_LINE_CRITICAL_STRAWBERRY)
    },
    chooseTomatoLevel() {
      if (
          (this.isDroneActive && this.GET_TOMATO_LINE_CRITICAL) && 
          (this.isCaterpillarActive || this.isLocustsActive || this.isBugActive)
        ) {
        const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		    audio.autoplay = true
		    audio.volume = 1

        this.NOT_CHOOSE_PEPPER_LEVEL()
        this.NOT_CHOOSE_STRAWBERRY_LEVEL()
        this.CHOOSE_TOMATO_LEVEL()
      }
    },
    choosePepperLevel() {
      if (
          (this.isDroneActive && this.GET_PEPPER_LINE_CRITICAL) && 
          (this.isCaterpillarActive || this.isLocustsActive || this.isBugActive)
        ) {
        const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		    audio.autoplay = true
		    audio.volume = 1

        this.NOT_CHOOSE_TOMATO_LEVEL()
        this.NOT_CHOOSE_STRAWBERRY_LEVEL()
        this.CHOOSE_PEPPER_LEVEL()
      }
    },
    chooseStrawberryLevel() {
      if (
          (this.isDroneActive && this.GET_STRAWBERRY_LINE_CRITICAL) && 
          (this.isCaterpillarActive || this.isLocustsActive || this.isBugActive)
        ) {
        const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		    audio.autoplay = true
		    audio.volume = 1
        
        this.NOT_CHOOSE_TOMATO_LEVEL()
        this.NOT_CHOOSE_PEPPER_LEVEL()
        this.CHOOSE_STRAWBERRY_LEVEL()
      }
    },
    selectBug() {
      if ((this.GET_TOMATO_LINE_CRITICAL || this.GET_PEPPER_LINE_CRITICAL || this.GET_STRAWBERRY_LINE_CRITICAL) 
      && !this.isDroneActive) {
        this.isCaterpillarActive = false
        this.isLocustsActive = false
        this.isBugActive = true
      }
    },
    selectLocusts() {
      if ((this.GET_TOMATO_LINE_CRITICAL || this.GET_PEPPER_LINE_CRITICAL || this.GET_STRAWBERRY_LINE_CRITICAL)
      && !this.isDroneActive) {
        this.isCaterpillarActive = false
        this.isBugActive = false
        this.isLocustsActive = true
      }
    },
    selectCaterpillar() {
      if ((this.GET_TOMATO_LINE_CRITICAL || this.GET_PEPPER_LINE_CRITICAL || this.GET_STRAWBERRY_LINE_CRITICAL) 
      && !this.isDroneActive) {
        this.isLocustsActive = false
        this.isBugActive = false
        this.isCaterpillarActive = true
      }
    },
    selectDrone() {
      if (this.isBugActive || this.isLocustsActive || this.isCaterpillarActive) {
        this.isDroneActive = true
      }
    }
  }
})
</script>

<style src='./pestControlGameScreen.css' module='styles'>
  
</style>