<template>
  <div :class='styles.infoBlock'>
    <div :class='styles.contentText'>
      <slot name="contentText"></slot>
    </div>

    <div :class='styles.wrapperBtn'>
      <slot name="nextBtn"></slot>
    </div>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'infoBlockS',
})
</script>

<style src='./infoBlockS.css' module='styles'>
  
</style>