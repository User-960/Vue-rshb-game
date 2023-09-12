<template>
  <button :class='styles.btn' @click="$emit('onclick')" aria-label='next step button'>
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'startButton',
  methods: {
    submit() {
      this.$emit('click')
    }
  }
})
</script>

<style src='./startButton.css' module='styles'>
  
</style>