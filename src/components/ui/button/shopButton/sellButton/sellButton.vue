<template>
  <button :class='styles.btn' @click="$emit('onclick')" aria-label='button sell'>
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'sellButton',
  methods: {}
})
</script>

<style src='./sellButton.css' module='styles'>
  
</style>