<template>
  <div :class='styles.wrapper'>

    <div v-for='category in categories'
      :key='category.id'
      @drop='onDrop($event, category.id)'
      :class='styles.droppableZone'
      @dragover.prevent
      @dragenter.prevent
    >
      <h4>{{ category.title }}</h4>

      <div v-for='item in items.filter(x => x.categoryId === category.id)'
           @dragstart='onDragStart($event, item)'
           :class='styles.draggableWrapper'
           draggable='true'
        >
        <h5>{{ item.title }}</h5>
      </div>
      
    </div>


    <!-- <div :class='styles.flasks'></div> -->
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { ref } from 'vue'

export default Vue.extend({
  name: 'flasks',
  setup() {
    const items: any = ref([
      {
        id: 0,
        title: 'Audi',
        categoryId: 0
      },
      {
        id: 1,
        title: 'BMW',
        categoryId: 0
      },
      {
        id: 2,
        title: 'Cat',
        categoryId: 0
      },
    ])
    const categories: any = ref([
      {
        id: 0,
        title: 'Cars'
      },
      {
        id: 1,
        title: 'Animals'
      }
    ])

    const onDragStart = (e: DragEvent, item: any) => {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('itemId', item.id.toString())
      }
    }

    const onDrop = (e: DragEvent, categoryId: number) => {
      if (e.dataTransfer) {
        const itemId = parseInt(e.dataTransfer.getData('itemId'))
        items.value = items.value.map((x: any) => {
          if (x.id == itemId) {
            x.categoryId = categoryId
            console.log(x.title)
          }
          return x
        })
      }
    }

    return {
      items,
      categories,
      onDragStart,
      onDrop
    }
  }
})
</script>

<style src='./flasks.css' module='styles'>
  
</style>