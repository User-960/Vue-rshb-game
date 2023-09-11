<template>
  <button :class='styles.btn' @click.left='nextFunc'>
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'startButton',
  methods: {
    nextFunc() {
      console.log(1)
    }
  },
})
</script>

<style src='./startButton.css' module='styles'>
  
</style>