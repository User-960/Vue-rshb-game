<template>
  <div :class='styles.wrapper'>
    <div :class='styles.columns'>
      
      <div :class='styles.dropZoneContainer'>
        <div :class='[
            styles.effect, 
            {
              [styles.blueStars]: isMagicActive,
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
        isInDroppedZone: false,
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

    isMagicActive: false,
    isBlueFlaskRotate: false,
    isGreenFlaskRotate: false,
    isPinkFlaskRotate: false
  }),
  components: {
    draggable,
  },
  methods: {
    detectMove(evt: any){
       if (
          evt.draggedContext.element.name === 'greenFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          evt.draggedContext.element.isInDroppedZone = true
          if (!this.isMagicActive && evt.draggedContext.element.isInDroppedZone) {
            this.isGreenFlaskRotate = true
            this.isMagicActive = true
            setTimeout(() => {
              this.isMagicActive = false

              // if (!this.isMagicActive) {
              //   this.isGreenFlaskRotate = false
              // }
            }, 2000)
          }
        }

        if (
          evt.draggedContext.element.name === 'blueFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          evt.draggedContext.element.isInDroppedZone = true
          if (!this.isMagicActive && evt.draggedContext.element.isInDroppedZone) {
            this.isBlueFlaskRotate = true
            this.isMagicActive = true
            setTimeout(() => {
              this.isMagicActive = false

              // if (!this.isMagicActive) {
              //   this.isBlueFlaskRotate = false
              // }
            }, 2000)
          }
        }

        if (
          evt.draggedContext.element.name === 'pinkFlask' && 
          evt.to.attributes['id'].nodeValue === 'flasksDropZone'
        ) {
          evt.draggedContext.element.isInDroppedZone = true
          if (!this.isMagicActive && evt.draggedContext.element.isInDroppedZone) {
            this.isPinkFlaskRotate = true
            this.isMagicActive = true
            setTimeout(() => {
              this.isMagicActive = false

              // if (!this.isMagicActive) {
              //   this.isPinkFlaskRotate = false
              // }
            }, 2000)
          }
        }

      // console.log(evt.from.attributes['id'].nodeValue === 'flasksContainer')
      // console.log(evt.to.attributes['id'].nodeValue === 'flasksDropZone')
      // console.log(evt)
    },
    detectMove2(evt: any){
       if (evt.draggedContext.element.name === 'blueFlask') {
        setTimeout(() => {
          this.isMagicActive = true
        }, 2000)
       }
    }
  },
})
</script>

<style src='./flasks.css' module='styles'>
  
</style>