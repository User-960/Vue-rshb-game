<template>
  <layout>
    <template v-slot:default>
      <p>Home</p>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../layout/layout.vue'

export default Vue.extend({
  name: 'home',
  components: {
    layout
  },
})
</script>

<style module='styles'>
  
</style>