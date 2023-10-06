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
                {[styles.insecticideBugActive]: GET_SELECT_BUG}
              ]'
              @click='selectBug'
            ></li>

            <li 
              :class='[
                styles.insecticide, 
                styles.insecticideLocusts, 
                {[styles.insecticideLocustsActive]: GET_SELECT_LOCUSTS}
              ]'
              @click='selectLocusts'
            ></li>

            <li 
              :class='[
                styles.insecticide, 
                styles.insecticideCaterpillar, 
                {[styles.insecticideCaterpillarActive]: GET_SELECT_CATERPILLAR}
              ]'
              @click='selectCaterpillar'
            ></li>
          </ul>

          <div 
            :class='[
              styles.drone, 
              {[styles.droneActive]: GET_SELECT_DRONE},
              {[styles.droneMovedTomato]: GET_MOVED_DRONE_TOMATO},
              {[styles.droneReturnTomato]: isDroneFinishWorkTomato},
              {[styles.droneMovedPepper]: GET_MOVED_DRONE_PEPPER},
              {[styles.droneReturnPepper]: isDroneFinishWorkPepper},
              {[styles.droneMovedStrawberry]: GET_MOVED_DRONE_STRAWBERRY},
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
    isUltrasoundTomatoActive: false,
    isUltrasoundPepperActive: false,
    isUltrasoundStrawberryActive: false,

    isDroneFinishWorkTomato: false,
    isDroneFinishWorkPepper: false,
    isDroneFinishWorkStrawberry: false
  }),
  computed: {
    ...mapGetters([
      EN_PestControlGameGetters.GET_START_GAME_PS,
      EN_PestControlGameGetters.GET_GAME_LOOP_PS,
      EN_PestControlGameGetters.GET_LOSS_BLOCK_PS,
      EN_PestControlGameGetters.GET_TOMATO_LEVEL_NUM_PS,
      EN_PestControlGameGetters.GET_PEPPER_LEVEL_NUM_PS,
      EN_PestControlGameGetters.GET_STRAWBERRY_LEVEL_NUM_PS,

      EN_PestControlGameGetters.GET_CHOSEN_TOMATO_LEVEL,
      EN_PestControlGameGetters.GET_TOMATO_LINE_CRITICAL,

      EN_PestControlGameGetters.GET_CHOSEN_PEPPER_LEVEL,
      EN_PestControlGameGetters.GET_PEPPER_LINE_CRITICAL,

      EN_PestControlGameGetters.GET_CHOSEN_STRAWBERRY_LEVEL,
      EN_PestControlGameGetters.GET_STRAWBERRY_LINE_CRITICAL,

      EN_PestControlGameGetters.GET_SELECT_BUG,
      EN_PestControlGameGetters.GET_SELECT_LOCUSTS,
      EN_PestControlGameGetters.GET_SELECT_CATERPILLAR,
      
      EN_PestControlGameGetters.GET_SELECT_DRONE,
      EN_PestControlGameGetters.GET_MOVED_DRONE_TOMATO,
      EN_PestControlGameGetters.GET_MOVED_DRONE_PEPPER,
      EN_PestControlGameGetters.GET_MOVED_DRONE_STRAWBERRY,
    ]),
  },
  watch: {
    GET_START_GAME_PS() {
      if (
          !this.GET_START_GAME_PS &&
          this.GET_GAME_LOOP_PS > 0 && 
          !this.GET_TOMATO_LINE_CRITICAL && 
          !this.GET_PEPPER_LINE_CRITICAL && 
          !this.GET_STRAWBERRY_LINE_CRITICAL
        ) {
        this.SHOW_VICTORY_BLOCK_PS()
      }
    },
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
      }
    },
    // Tomato Level
    GET_CHOSEN_TOMATO_LEVEL() {
      if (
        (this.GET_SELECT_DRONE && this.GET_TOMATO_LINE_CRITICAL) && 
        (this.GET_SELECT_CATERPILLAR || this.GET_SELECT_LOCUSTS || this.GET_SELECT_BUG)
      ) {
        this.MOVE_DRONE_TOMATO()
      }

      if (this.GET_MOVED_DRONE_TOMATO) {
        setTimeout(() => {
            this.isUltrasoundTomatoActive = true
        }, EN_CONFIG.TIMING_DRONE_MOVED_TOMATO)
      }
    },
    isUltrasoundTomatoActive() {
      if (this.GET_SELECT_CATERPILLAR) {
        if (this.isUltrasoundTomatoActive && this.GET_CHOSEN_TOMATO_LEVEL && this.GET_TOMATO_LINE_CRITICAL) {
          setTimeout(() => {
            this.isUltrasoundTomatoActive = false
            this.REMOVE_TOMATO_LINE_CRITICAL()
            this.NOT_CHOOSE_TOMATO_LEVEL()
            this.NOT_MOVE_DRONE_TOMATO()
            this.isDroneFinishWorkTomato = true
          }, EN_CONFIG.TIMING_ULTRASOUND_TOMATO)
        }
      } else {
        setTimeout(() => {
          this.isUltrasoundTomatoActive = false

          if (!this.GET_LOSS_BLOCK_PS && this.GET_START_GAME_PS) {
            this.SHOW_LOSS_BLOCK_PS()
          }
        }, EN_CONFIG.TIMING_ULTRASOUND_TOMATO)
      }
    },
    isDroneFinishWorkTomato() {
      if (this.isDroneFinishWorkTomato) {
        setTimeout(() => {
            this.isDroneFinishWorkTomato = false
            this.NOT_SELECT_CATERPILLAR()
            this.NOT_SELECT_DRONE()
            
            this.PLUS_POINTS_PS()
            this.GAME_LOOP_PS()
        }, EN_CONFIG.TIMING_DRONE_RETURNED_TOMATO)
      }
    },
    // Pepper Level
    GET_CHOSEN_PEPPER_LEVEL() {
      if (
        (this.GET_SELECT_DRONE && this.GET_PEPPER_LINE_CRITICAL) && 
        (this.GET_SELECT_CATERPILLAR || this.GET_SELECT_LOCUSTS || this.GET_SELECT_BUG)
      ) {
        this.MOVE_DRONE_PEPPER()
      }

      if (this.GET_MOVED_DRONE_PEPPER) {
        setTimeout(() => {
            this.isUltrasoundPepperActive = true
        }, EN_CONFIG.TIMING_DRONE_MOVED_PEPPER)
      }
    },
    isUltrasoundPepperActive() {
      if (this.GET_SELECT_BUG) {
        if (this.isUltrasoundPepperActive && this.GET_CHOSEN_PEPPER_LEVEL && this.GET_PEPPER_LINE_CRITICAL) {
          setTimeout(() => {
            this.isUltrasoundPepperActive = false
            this.REMOVE_PEPPER_LINE_CRITICAL()
            this.NOT_CHOOSE_PEPPER_LEVEL()
            this.NOT_MOVE_DRONE_PEPPER()
            this.isDroneFinishWorkPepper = true
          }, EN_CONFIG.TIMING_ULTRASOUND_PEPPER)
        }
      } else {
        setTimeout(() => {
          this.isUltrasoundPepperActive = false

          if (!this.GET_LOSS_BLOCK_PS && this.GET_START_GAME_PS) {
            this.SHOW_LOSS_BLOCK_PS()
          }
        }, EN_CONFIG.TIMING_ULTRASOUND_TOMATO)
      }
    },
    isDroneFinishWorkPepper() {
      if (this.isDroneFinishWorkPepper) {
        setTimeout(() => {
            this.isDroneFinishWorkPepper = false
            this.NOT_SELECT_BUG()
            this.NOT_SELECT_DRONE()

            this.PLUS_POINTS_PS()
            this.GAME_LOOP_PS()
        }, EN_CONFIG.TIMING_DRONE_RETURNED_PEPPER)
      }
    },
    // Strawberry Level
    GET_CHOSEN_STRAWBERRY_LEVEL() {
      if (
          (this.GET_SELECT_DRONE && this.GET_STRAWBERRY_LINE_CRITICAL) && 
          (this.GET_SELECT_CATERPILLAR || this.GET_SELECT_LOCUSTS || this.GET_SELECT_BUG)
        ) {
        this.MOVE_DRONE_STRAWBERRY()
      }

      if (this.GET_MOVED_DRONE_STRAWBERRY) {
        setTimeout(() => {
            this.isUltrasoundStrawberryActive = true
        }, EN_CONFIG.TIMING_DRONE_MOVED_STRAWBERRY)
      }
    },
    isUltrasoundStrawberryActive() {
      if (this.GET_SELECT_LOCUSTS) {
        if (
            this.isUltrasoundStrawberryActive && 
            this.GET_CHOSEN_STRAWBERRY_LEVEL && 
            this.GET_STRAWBERRY_LINE_CRITICAL
          )   {
          setTimeout(() => {
            this.isUltrasoundStrawberryActive = false
            this.REMOVE_STRAWBERRY_LINE_CRITICAL()
            this.NOT_CHOOSE_STRAWBERRY_LEVEL()
            this.NOT_MOVE_DRONE_STRAWBERRY()
            this.isDroneFinishWorkStrawberry = true
          }, EN_CONFIG.TIMING_ULTRASOUND_STRAWBERRY)
        }
      } else {
        setTimeout(() => {
          this.isUltrasoundStrawberryActive = false

          if (!this.GET_LOSS_BLOCK_PS && this.GET_START_GAME_PS) {
            this.SHOW_LOSS_BLOCK_PS()
          }
        }, EN_CONFIG.TIMING_ULTRASOUND_TOMATO)
      }
    },
    isDroneFinishWorkStrawberry() {
      if (this.isDroneFinishWorkStrawberry) {
        setTimeout(() => {
            this.isDroneFinishWorkStrawberry = false
            this.NOT_SELECT_LOCUSTS()
            this.NOT_SELECT_DRONE()

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

      EN_PestControlGameMutation.SELECT_BUG,
      EN_PestControlGameMutation.NOT_SELECT_BUG,
      EN_PestControlGameMutation.SELECT_LOCUSTS,
      EN_PestControlGameMutation.NOT_SELECT_LOCUSTS,
      EN_PestControlGameMutation.SELECT_CATERPILLAR,
      EN_PestControlGameMutation.NOT_SELECT_CATERPILLAR,

      EN_PestControlGameMutation.SELECT_DRONE,
      EN_PestControlGameMutation.NOT_SELECT_DRONE,
      EN_PestControlGameMutation.MOVE_DRONE_TOMATO,
      EN_PestControlGameMutation.NOT_MOVE_DRONE_TOMATO,
      EN_PestControlGameMutation.MOVE_DRONE_PEPPER,
      EN_PestControlGameMutation.NOT_MOVE_DRONE_PEPPER,
      EN_PestControlGameMutation.MOVE_DRONE_STRAWBERRY,
      EN_PestControlGameMutation.NOT_MOVE_DRONE_STRAWBERRY,
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
          (this.GET_SELECT_DRONE && this.GET_TOMATO_LINE_CRITICAL) && 
          (this.GET_SELECT_CATERPILLAR || this.GET_SELECT_LOCUSTS || this.GET_SELECT_BUG)
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
          (this.GET_SELECT_DRONE && this.GET_PEPPER_LINE_CRITICAL) && 
          (this.GET_SELECT_CATERPILLAR || this.GET_SELECT_LOCUSTS || this.GET_SELECT_BUG)
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
          (this.GET_SELECT_DRONE && this.GET_STRAWBERRY_LINE_CRITICAL) && 
          (this.GET_SELECT_CATERPILLAR || this.GET_SELECT_LOCUSTS || this.GET_SELECT_BUG)
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
      && !this.GET_SELECT_DRONE) {
        this.NOT_SELECT_CATERPILLAR()
        this.NOT_SELECT_LOCUSTS()
        this.SELECT_BUG()
      }
    },
    selectLocusts() {
      if ((this.GET_TOMATO_LINE_CRITICAL || this.GET_PEPPER_LINE_CRITICAL || this.GET_STRAWBERRY_LINE_CRITICAL)
      && !this.GET_SELECT_DRONE) {
        this.NOT_SELECT_CATERPILLAR()
        this.NOT_SELECT_BUG()
        this.SELECT_LOCUSTS()
      }
    },
    selectCaterpillar() {
      if ((this.GET_TOMATO_LINE_CRITICAL || this.GET_PEPPER_LINE_CRITICAL || this.GET_STRAWBERRY_LINE_CRITICAL) 
      && !this.GET_SELECT_DRONE) {
        this.NOT_SELECT_LOCUSTS()
        this.NOT_SELECT_BUG()
        this.SELECT_CATERPILLAR()
      }
    },
    selectDrone() {
      if (this.GET_SELECT_BUG || this.GET_SELECT_LOCUSTS || this.GET_SELECT_CATERPILLAR) {
        this.SELECT_DRONE()
      }
    }
  }
})
</script>

<style src='./pestControlGameScreen.css' module='styles'>
  
</style>