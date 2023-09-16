<template>
  <div :class='styles.linkButton' @click="$emit('onclick')" aria-label='link button for game'>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'linkButton',
  data: () => ({}),
  components: {},
  methods: {}
})
</script>

<style src='./linkButton.css' module='styles'>
  
</style>