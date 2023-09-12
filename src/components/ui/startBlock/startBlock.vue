<template>
  <div :class='styles.startBlock'>
    <h3 :class='styles.title'>
      <slot name="title"></slot>
    </h3>

    <div :class='styles.contentText'>
      <slot name="contentText"></slot>
    </div>

    <div :class='styles.contentImg'>
      <slot name="contentImg"></slot>
    </div>

    <div :class='styles.wrapperBtn'>
      <slot name="nextBtn"></slot>
      <slot name="submitBtn"></slot>
    </div>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'startBlock',
})
</script>

<style src='./startBlock.css' module='styles'>
  
</style>