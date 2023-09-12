<template>
  <button :class='styles.btn' @click="$emit('onclick')" aria-label='navigate button'>
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'iconButton',
  methods: {}
})
</script>

<style src='./iconButton.css' module='styles'>
  
</style>