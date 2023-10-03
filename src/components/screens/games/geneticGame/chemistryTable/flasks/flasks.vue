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

const flasks = [
      {
        id: 0,
        name: 'greenFlask'
      },
      {
        id: 1,
        name: 'pinkFlask'
      },
      {
        id: 2,
        name: 'yellowFlask'
      },
      {
        id: 3,
        name: 'blueFlask',
      },
      {
        id: 4,
        name: 'redFlask'
      },
      {
        id: 5,
        name: 'cyanFlask'
      },
      {
        id: 6,
        name: 'purpleFlask'
      },
      {
        id: 7,
        name: 'orangeFlask'
      },
      {
        id: 8,
        name: 'greyFlask'
      }
    ]

const flasksDropZone = [
      {
        id: 99,
        name: 'flask'
      },
    ]

export default Vue.extend({
  name: 'flasks',
  data: () => ({
    flasks,
    flasksDropZone,

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
  methods: {
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
            }, 2000)
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
            }, 2000)
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
            }, 2000)
          }
        }

        if (
          evt.draggedContext.element.name === 'yellowFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isYellowEffectActive) {
            this.isYellowFlaskRotate = true
            this.isYellowEffectActive = true
            setTimeout(() => {
              this.isYellowEffectActive = false
              this.isEmptyFlask = true
            }, 2000)
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
            }, 2000)
          }
        }

        if (
          evt.draggedContext.element.name === 'cyanFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isCyanEffectActive) {
            this.isCyanFlaskRotate = true
            this.isCyanEffectActive = true
            setTimeout(() => {
              this.isCyanEffectActive = false
              this.isEmptyFlask = true
            }, 2000)
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
            }, 2000)
          }
        }

        if (
          evt.draggedContext.element.name === 'purpleFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isPurpleEffectActive) {
            this.isPurpleFlaskRotate = true
            this.isPurpleEffectActive = true
            setTimeout(() => {
              this.isPurpleEffectActive = false
              this.isEmptyFlask = true
            }, 2000)
          }
        }

        if (
          evt.draggedContext.element.name === 'greyFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          if (!this.isPurpleEffectActive) {
            this.isGreyFlaskRotate = true
            this.isGreyEffectActive = true
            setTimeout(() => {
              this.isGreyEffectActive = false
              this.isEmptyFlask = true
            }, 2000)
          }
        }

      // console.log(evt.from.attributes['id'].nodeValue === 'flasksContainer')
      // console.log(evt.to.attributes['id'].nodeValue === 'flasksDropZone')
      // console.log(evt)
    },
    // detectMove2(evt: any){
    //    if (evt.draggedContext.element.name === 'blueFlask') {
    //     setTimeout(() => {
    //       this.isEffectActive = true
    //     }, 2000)
    //    }
    // }
  },
})
</script>

<style src='./flasks.css' module='styles'>
  
</style>