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
            <!-- <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <label for='indicator'>0</label>
                <input id='indicator' name='indicator' type='range' value=0>
              </div>
              <p>100%</p>
            </div> -->

            <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <p>0</p>
                <div :class='styles.indicatorNumber'>0</div>
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

            <!-- <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <label for='indicator'>0</label>
                <input id='indicator' name='indicator' type='range' value=0>
              </div>
              <p>100%</p>
            </div> -->

            <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <p>0</p>
                <div :class='styles.indicatorNumber'>0</div>
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

            <!-- <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <label for='indicator'>0</label>
                <input id='indicator' name='indicator' type='range' value=0>
              </div>
              <p>100%</p>
            </div> -->

            <div :class='styles.pestIndicator'>
              <p>0%</p>
              <div :class='styles.indicatorWrapper'>
                <p>0</p>
                <div :class='styles.indicatorNumber'>0</div>
              </div>
              <p>100%</p>
            </div>
          </div>
        </li>
      </ul>

      <!-- <div :class='styles.robot'>
        <img src='../../../../../../public/images/collectorShop.svg' alt='image robot collector' draggable='false' />
        <button 
          :class='[
            styles.btn, 
            {[styles.btnActive] : isChosenTomatoLevel || 
            isChosenPepperLevel || 
            isChosenStrawberryLevel
          }]'
          @click=''
        >
          Собрать урожай
        </button>
      </div> -->
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

    isOpenTomatoLevel: false,
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
    }
  }
})
</script>

<style src='./pestControlGameScreen.css' module='styles'>
  
</style>