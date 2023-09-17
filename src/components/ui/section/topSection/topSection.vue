<template >
  <section :class='styles.topSection'>
    <div :class='styles.logo'>
      <img src='../../../../assets/logo.png' draggable='false' alt='logo' />
    </div>

    <div :class='styles.topBlock'>
      <h1 :class='styles.topTitle'>Цифровая ферма</h1>
      <span :class='styles.topData'>2025</span>
    </div>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'topSection'
  
})
</script>

<style src='./topSection.css' module='styles'>
  
</style>