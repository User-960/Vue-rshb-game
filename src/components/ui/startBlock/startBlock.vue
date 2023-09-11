<template>
  <div :class='styles.startBlock'>
    <h3 :class='styles.title'>
      <slot name="title"></slot>
    </h3>

    <div :class='styles.content'>
      <slot name="content"></slot>
    </div>

    <button>Далее</button>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'startBlock'
})
</script>

<style src='./startBlock.css' module='styles'>
  
</style>