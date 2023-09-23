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
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
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
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
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
              {[styles.droneMoved]: isDroneMoved},
              {[styles.droneReturned]: isDroneFinishWork},
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
import Vue from 'vue'
import { mapGetters } from 'vuex'

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
    isDroneMoved: false,
    isDroneFinishWork: false
  }),
  computed: {
    ...mapGetters([EPestControlGameGetters.GET_START_GAME]),
  },
  watch: {
    GET_START_GAME() {
      setTimeout(() => {
        this.isTomatoLineCritical = true
      }, 4000)
    },
    isDroneMoved() {
      setTimeout(() => {
        this.isUltrasoundTomatoActive = true
      }, 7000)
    },
    isDroneFinishWork() {
      setTimeout(() => {
        this.isDroneFinishWork = false
        this.isBugActive = false
        this.isDroneActive = false
        this.isUltrasoundTomatoActive = false
      }, 7000)
    }
  },
  components: {},
  methods: {
    chooseTomatoLevel() {
      if (this.isDroneActive) {
        this.isChosenPepperLevel = false
        this.isChosenStrawberryLevel = false
        this.isChosenTomatoLevel = true

        this.isDroneMoved = true

        setTimeout(() => {
          this.isTomatoLineCritical = false
          this.isUltrasoundTomatoActive = false
          this.isChosenTomatoLevel = false
          this.isDroneMoved = false
          this.isDroneFinishWork = true
        }, 10000)
      }
    },
    choosePepperLevel() {
      if (this.isDroneActive) {
        this.isChosenTomatoLevel = false
        this.isChosenStrawberryLevel = false
        this.isChosenPepperLevel = true
      }
    },
    chooseStrawberryLevel() {
      if (this.isDroneActive) {
        this.isChosenTomatoLevel = false
        this.isChosenPepperLevel = false
        this.isChosenStrawberryLevel = true
      }
    },
    selectBug() {
      if (this.isTomatoLineCritical) {
        this.isCaterpillarActive = false
        this.isLocustsActive = false
        this.isBugActive = true
      }
    },
    selectLocusts() {
      this.isCaterpillarActive = false
      this.isBugActive = false
      this.isLocustsActive = true

      this.isPepperLineCritical = true
    },
    selectCaterpillar() {
      this.isLocustsActive = false
      this.isBugActive = false
      this.isCaterpillarActive = true

      this.isStrawberryLineCritical = true
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