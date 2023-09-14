<template>
  <div :class='styles.map'>
    <div :class='[styles.trees, {[styles.thirdGame]: isThirdGameGameAvailable} ]'></div>
    <div :class='styles.lab'></div>
    <div :class='[styles.house, {[styles.available]: isHouseGameAvailable}]'></div>
    <div :class='[styles.greenhouse, {[styles.available]: isGreenHouseGameAvailable}]'></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'mapBack',
  data: () => ({
    isHouseGameAvailable: false,
    isGreenHouseGameAvailable: false,
    isThirdGameGameAvailable: false
  })
})
</script>

<style src='./mapBack.css' module='styles'>
  
</style>