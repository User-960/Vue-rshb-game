<template>
  <ul :class='styles.listSells'>
    <li :class='styles.card'>
      <h6 :class='styles.name'>Помидоры</h6>
      <span :class='styles.weight'>65 кг</span>
      <img :class='styles.img' src='../../../../../../public/images/tomato.svg' alt='image of vegetable' draggable='false'/>
    </li>
    <li :class='styles.card'>
      <h6 :class='styles.name'>Перцы</h6>
      <span :class='styles.weight'>65 кг</span>
      <img :class='styles.img' src='../../../../../../public/images/pepper.svg' alt='image of vegetable' draggable='false'/>
    </li>
    <li :class='styles.card'>
      <h6 :class='styles.name'>Клубника</h6>
      <span :class='styles.weight'>60 кг</span>
      <img :class='styles.img' src='../../../../../../public/images/strawberry.svg' alt='image of vegetable' draggable='false'/>
    </li>
  </ul>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'listSells',
  // props: {
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   weight: {
  //     type: String,
  //     required: true
  //   },
  //   img: {
  //     type: String,
  //     required: true
  //   }
  // },
  computed: {},
  methods: {},
})
</script>

<style src='./listSells.css' module='styles'>
  
</style>