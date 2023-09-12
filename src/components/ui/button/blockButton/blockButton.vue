<template>
  <div :class='styles.blockBtn'>
    <slot name="contentIconBtn"></slot>
    
    <div :class='styles.indicator'>
      <slot name="contentIndicator"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'blockButton',
  methods: {}
})
</script>

<style src='./blockButton.css' module='styles'>
  
</style>