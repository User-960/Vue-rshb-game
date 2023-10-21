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
  name: 'infoBlockM',
})
</script>

<style src='./infoBlockM.css' module='styles'>
  
</style>