<template>
  <div :class='styles.border' data-testid='pestControlGameScreen'>
    <div :class='styles.screen'>
      <ul :class='styles.listLevels'>

        <li :class='[styles.itemLevels, {[styles.tomatoLevelActive] : isChosenTomatoLevel}]' @click='chooseTomatoLevel'>
          <div :class='styles.pestInfo'>
            <p :class='styles.pestTitle'>Вредители</p>
            <ul :class='styles.pestImgList'>
              <img src='../../../../../../public/images/worm.svg' alt='image of first level' draggable='false' />
              <img src='../../../../../../public/images/worm.svg' alt='image of first level' draggable='false' />
              <img src='../../../../../../public/images/worm.svg' alt='image of first level' draggable='false' />
            </ul>
          </div>

          <div :class='styles.pestLevel'>
            <img :class='styles.pestLevelImg' src='../../../../../../public/images/tomatoBushGreen.svg' alt='image of first level' draggable='false' />

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
        
        <li :class='[styles.itemLevels, {[styles.tomatoLevelActive] : isChosenTomatoLevel}]' @click='chooseTomatoLevel'>
          <div :class='styles.pestInfo'>
            <p :class='styles.pestTitle'>Вредители</p>
            <ul :class='styles.pestImgList'>
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
              <img src='../../../../../../public/images/locusts.svg' alt='image of second level' draggable='false' />
            </ul>
          </div>

          <div :class='styles.pestLevel'>
            <img :class='styles.pestLevelImg' src='../../../../../../public/images/pepperBushGreen.svg' alt='image of first level' draggable='false' />

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

        <li :class='[styles.itemLevels, {[styles.tomatoLevelActive] : isChosenTomatoLevel}]' @click='chooseTomatoLevel'>
          <div :class='styles.pestInfo'>
            <p :class='styles.pestTitle'>Вредители</p>
            <ul :class='styles.pestImgList'>
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
              <img src='../../../../../../public/images/bug.svg' alt='image of third level' draggable='false' />
            </ul>
          </div>

          <div :class='styles.pestLevel'>
            <img :class='styles.pestLevelImg' src='../../../../../../public/images/strawberryBushGreen.svg' alt='image of first level' draggable='false' />

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
              :class='[styles.insecticide, styles.insecticideBug, {[styles.insecticideBugActive]: isBugActive}]'
              @click='selectBug'
            ></li>

            <li 
              :class='[styles.insecticide, styles.insecticideLocusts, {[styles.insecticideLocustsActive]: isLocustsActive}]'
              @click='selectLocusts'
            ></li>

            <li 
              :class='[styles.insecticide, styles.insecticideCaterpillar, {[styles.insecticideCaterpillarActive]: isCaterpillarActive}]'
              @click='selectCaterpillar'
            ></li>
          </ul>

          <div :class='[styles.drone, {[styles.droneActive]: isDroneActive}]' @click='selectDrone'></div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'pestControlGameScreen',
  data: () => ({
    isChosenTomatoLevel: false,
    isChosenPepperLevel: false,
    isChosenStrawberryLevel: false,
    isTomatoLineCritical: false,
    isPepperLineCritical: false,
    isStrawberryLineCritical: false,

    isBugActive: false,
    isLocustsActive: false,
    isCaterpillarActive: false,

    isDroneActive: false,
  }),
  components: {},
  methods: {
    chooseTomatoLevel() {
      this.isChosenPepperLevel = false
      this.isChosenStrawberryLevel = false
      this.isChosenTomatoLevel = true
    },
    choosePepperLevel() {
      this.isChosenTomatoLevel = false
      this.isChosenStrawberryLevel = false
      this.isChosenPepperLevel = true
    },
    chooseStrawberryLevel() {
      this.isChosenTomatoLevel = false
      this.isChosenPepperLevel = false
      this.isChosenStrawberryLevel = true
    },
    selectBug() {
      this.isCaterpillarActive = false
      this.isLocustsActive = false
      this.isBugActive = true

      this.isTomatoLineCritical = true
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
      this.isDroneActive = true
    }
  }
})
</script>

<style src='./pestControlGameScreen.css' module='styles'>
  
</style>