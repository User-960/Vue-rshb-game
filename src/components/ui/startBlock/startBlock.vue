<template>
  <div :class='styles.startBlock'>
    <h3 :class='styles.title'>
      <slot name="title"></slot>
    </h3>

    <div :class='styles.content'>
      <slot name="content"></slot>
    </div>

    <div :class='styles.wrapperBtn'>
      <startButton>
        Далее
      </startButton>
    </div>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import startButton from '../button/startButton/startButton.vue'

export default Vue.extend({
  name: 'startBlock',
  components: {
    startButton
  }
})
</script>

<style src='./startBlock.css' module='styles'>
  
</style>