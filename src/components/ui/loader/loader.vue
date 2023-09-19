<template >
  <div :class='styles.spinner'>
    <img src='../../../../public/images/spinner.svg' alt='spinner' draggable='false'/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'loader'
})
</script>

<style src='./loader.css' module='styles'>
  
</style>