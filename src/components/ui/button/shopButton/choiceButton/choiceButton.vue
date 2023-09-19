<template>
  <button :class='styles.btn' @click="$emit('onclick')" aria-label='choice button'>
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'choiceButton',
  methods: {}
})
</script>

<style src='./choiceButton.css' module='styles'>
  
</style>