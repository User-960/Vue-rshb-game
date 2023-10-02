<template>
  <div :class='styles.wrapper'>
    <div :class='styles.columns'>
      
      <div :class='styles.column'>
        <h4 class="mb-3">Draggable 1</h4>
        <draggable :list="myArray2" group="flasks" :move="detectMove" :class='styles.flasksBox'>
          <div v-for="element in flasks" :key="element.id">
            <div :class='[{[styles.blueFlask]: element.name === "blueFlask"}]'></div>
          </div>
        </draggable>
        <!-- <draggable :list="flasks" group="flasks" :move="detectMove" :class='styles.flasksBox'>
            <div v-for="element in flasks" :key="element.id">
              <div :class='[
                {
                  [styles.blueFlask]: element.name === "blueFlask",
                  [styles.greenFlask]: element.name === "greenFlask"
                }
              ]'></div>
            </div>
          </draggable> -->
      </div>

      <div :class='[{[styles.magic]: isMagicActive}]'></div>

      <div :class='styles.column'>
          <h4>Draggable 2</h4>
          <draggable :list="flasks" group="flasks" :move="detectMove" :class='styles.flasksBox'>
            <div v-for="element in flasks" :key="element.id">
              <div :class='[
                {
                  [styles.blueFlask]: element.name === "blueFlask",
                  [styles.greenFlask]: element.name === "greenFlask"
                }
              ]'></div>
            </div>
          </draggable>
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
        name: 'blueFlask'
      },
      {
        id: 1,
        name: 'greenFlask'
      },
      {
        id: 2,
        name: 'Cat'
      },
    ]

const myArray2 = [
      {
        id: 3,
        title: 'Mercedes',
        categoryId: 0
      }
    ]

export default Vue.extend({
  name: 'flasks',
  data: () => ({
    flasks,
    myArray2,
    isMagicActive: false
  }),
  components: {
    draggable,
  },
  methods: {
    detectMove(evt: any){
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