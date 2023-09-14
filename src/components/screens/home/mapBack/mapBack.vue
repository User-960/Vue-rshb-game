<template>
  <div :class='styles.map'>
    <div :class='styles.lab'></div>
    <div :class='[styles.house, {available: isHouseGameAvailable}]'></div>
    <div :class='[styles.greenhouse, {available: isGreenHouseGameAvailable}]'></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'mapBack',
  data: () => ({
    isHouseGameAvailable: false,
    isGreenHouseGameAvailable: false,
  })
})
</script>

<style src='./mapBack.css' module='styles'>
  
</style>