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
                  {[styles.pestLevelImgActive]: isChosenTomatoLevel}
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
                <div :class='[styles.indicatorNumber, {[styles.indicatorNumberCritical]: isTomatoLineCritical}]'></div>
                <div :class='[styles.indicatorLine, {[styles.indicatorLineCritical]: isTomatoLineCritical}]'></div>
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
              <img :class='[styles.pestLevelImg, {[styles.pestLevelImgActive]: isChosenPepperLevel}]' src='../../../../../../public/images/pepperBushGreen.svg' alt='image of first level' draggable='false' />
              <div :class='[{[styles.ultrasound]: isUltrasoundPepperActive}]' ></div>
            </div>

            <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <p>0</p>
                <div :class='[styles.indicatorNumber, {[styles.indicatorNumberCritical]: isPepperLineCritical}]'></div>
                <div :class='[styles.indicatorLine, {[styles.indicatorLineCritical]: isPepperLineCritical}]'></div>
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
              <img :class='[styles.pestLevelImg, {[styles.pestLevelImgActive]: isChosenStrawberryLevel}]' src='../../../../../../public/images/strawberryBushGreen.svg' alt='image of first level' draggable='false' />
              <div :class='[{[styles.ultrasound]: isUltrasoundStrawberryActive}]' ></div>
            </div>

            <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <p>0</p>
                <div :class='[styles.indicatorNumber, {[styles.indicatorNumberCritical]: isStrawberryLineCritical}]'></div>
                <div :class='[styles.indicatorLine, {[styles.indicatorLineCritical]: isStrawberryLineCritical}]'></div>
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
import { EPestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { EPestControlGameMutation } from '@/store/modules/pestControlGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export default Vue.extend({
  name: 'pestControlGameScreen',
  data: () => ({
    isStartGame: false,

    isChosenTomatoLevel: false,
    isChosenPepperLevel: false,
    isChosenStrawberryLevel: false,

    isUltrasoundTomatoActive: false,
    isUltrasoundPepperActive: false,
    isUltrasoundStrawberryActive: false,

    isTomatoLineCritical: false,
    isPepperLineCritical: false,
    isStrawberryLineCritical: false,

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
      EPestControlGameGetters.GET_START_GAME, 
      EPestControlGameGetters.GET_TOMATO_LEVEL_NUM,
      EPestControlGameGetters.GET_PEPPER_LEVEL_NUM,
      EPestControlGameGetters.GET_STRAWBERRY_LEVEL_NUM,
      EPestControlGameGetters.GET_TOMATO_LEVEL,
      EPestControlGameGetters.GET_PEPPER_LEVEL,
      EPestControlGameGetters.GET_STRAWBERRY_LEVEL,
    ]),
  },
  watch: {
    GET_START_GAME() {
      if (this.GET_START_GAME) {

        let numberLevel = getRandomNumber(1, 4)
        console.log(numberLevel)

        if (this.GET_TOMATO_LEVEL_NUM === numberLevel) {
          this.START_TOMATO_LEVEL()
        }

        if (this.GET_PEPPER_LEVEL_NUM === numberLevel) {
          this.START_PEPPER_LEVEL()
        }

        if (this.GET_STRAWBERRY_LEVEL_NUM === numberLevel) {
          this.START_STRAWBERRY_LEVEL()
        }
      }
    },
    GET_TOMATO_LEVEL() {
      if (this.GET_TOMATO_LEVEL) {
        setTimeout(() => {
          this.isTomatoLineCritical = true
        }, 3000)
      }
    },
    GET_PEPPER_LEVEL() {
      if (this.GET_PEPPER_LEVEL) {
        setTimeout(() => {
          this.isPepperLineCritical = true
        }, 3000)
      }
    },
    GET_STRAWBERRY_LEVEL() {
      if (this.GET_STRAWBERRY_LEVEL) {
        setTimeout(() => {
          this.isStrawberryLineCritical = true
        }, 3000)
      }
    },
    // Tomato Level
    isChosenTomatoLevel() {
      if (this.isDroneActive && this.isCaterpillarActive && this.isTomatoLineCritical) {
        this.isDroneMovedTomato = true
      }

      if (this.isDroneMovedTomato) {
        setTimeout(() => {
            this.isUltrasoundTomatoActive = true
        }, 7000)
      }
    },
    isUltrasoundTomatoActive() {
      if (this.isUltrasoundTomatoActive && this.isChosenTomatoLevel && this.isTomatoLineCritical) {
        setTimeout(() => {
          this.isUltrasoundTomatoActive = false
          this.isTomatoLineCritical = false
          this.isChosenTomatoLevel = false
          this.isDroneMovedTomato = false
          this.isDroneFinishWorkTomato = true
        }, 3000)
      }
    },
    isDroneFinishWorkTomato() {
      if (this.isDroneFinishWorkTomato) {
        setTimeout(() => {
            this.isDroneFinishWorkTomato = false
            this.isCaterpillarActive = false
            this.isDroneActive = false
        }, 7000)
      }
    },
    // Pepper Level
    isChosenPepperLevel() {
      if (this.isDroneActive && this.isBugActive  && this.isPepperLineCritical) {
        this.isDroneMovedPepper = true
      }

      if (this.isDroneMovedPepper) {
        setTimeout(() => {
            this.isUltrasoundPepperActive = true
        }, 7000)
      }
    },
    isUltrasoundPepperActive() {
      if (this.isUltrasoundPepperActive && this.isChosenPepperLevel && this.isPepperLineCritical) {
        setTimeout(() => {
          this.isUltrasoundPepperActive = false
          this.isPepperLineCritical = false
          this.isChosenPepperLevel = false
          this.isDroneMovedPepper = false
          this.isDroneFinishWorkPepper = true
        }, 3000)
      }
    },
    isDroneFinishWorkPepper() {
      if (this.isDroneFinishWorkPepper) {
        setTimeout(() => {
            this.isDroneFinishWorkPepper = false
            this.isBugActive = false
            this.isDroneActive = false
        }, 7000)
      }
    },
    // Strawberry Level
    isChosenStrawberryLevel() {
      if (this.isDroneActive && this.isLocustsActive && this.isStrawberryLineCritical) {
        this.isDroneMovedStrawberry = true
      }

      if (this.isDroneMovedStrawberry) {
        setTimeout(() => {
            this.isUltrasoundStrawberryActive = true
        }, 7000)
      }
    },
    isUltrasoundStrawberryActive() {
      if (this.isUltrasoundStrawberryActive && this.isChosenStrawberryLevel && this.isStrawberryLineCritical) {
        setTimeout(() => {
          this.isUltrasoundStrawberryActive = false
          this.isStrawberryLineCritical = false
          this.isChosenStrawberryLevel = false
          this.isDroneMovedStrawberry = false
          this.isDroneFinishWorkStrawberry = true
        }, 3000)
      }
    },
    isDroneFinishWorkStrawberry() {
      if (this.isDroneFinishWorkStrawberry) {
        setTimeout(() => {
            this.isDroneFinishWorkStrawberry = false
            this.isLocustsActive = false
            this.isDroneActive = false
        }, 7000)
      }
    }
  },
  components: {},
  methods: {
    ...mapMutations([
      EPestControlGameMutation.START_TOMATO_LEVEL,
      EPestControlGameMutation.START_PEPPER_LEVEL,
      EPestControlGameMutation.START_STRAWBERRY_LEVEL,
    ]),
    chooseTomatoLevel() {
      if (this.isDroneActive && this.isCaterpillarActive && this.isTomatoLineCritical) {
        this.isChosenPepperLevel = false
        this.isChosenStrawberryLevel = false
        this.isChosenTomatoLevel = true
      }
    },
    choosePepperLevel() {
      if (this.isDroneActive && this.isBugActive && this.isPepperLineCritical) {
        this.isChosenTomatoLevel = false
        this.isChosenStrawberryLevel = false
        this.isChosenPepperLevel = true
      }
    },
    chooseStrawberryLevel() {
      if (this.isDroneActive && this.isLocustsActive && this.isStrawberryLineCritical) {
        this.isChosenTomatoLevel = false
        this.isChosenPepperLevel = false
        this.isChosenStrawberryLevel = true
      }
    },
    selectBug() {
      if (this.isPepperLineCritical) {
        this.isCaterpillarActive = false
        this.isLocustsActive = false
        this.isBugActive = true
      }
    },
    selectLocusts() {
      if (this.isStrawberryLineCritical) {
        this.isCaterpillarActive = false
        this.isBugActive = false
        this.isLocustsActive = true
      }
    },
    selectCaterpillar() {
      if (this.isTomatoLineCritical) {
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