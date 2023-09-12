<template>
  <div :class='styles.bank'>
    <h4 :class='styles.title'>
      Банк
    </h4>

    <div :class='styles.contentImg'>
      <slot name="contentImg"></slot>
    </div>

    <div :class='styles.contentImgs'>
      <slot name="contentImgs"></slot>
    </div>

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
  name: 'bank',
})
</script>

<style src='./bank.css' module='styles'>
  
</style>