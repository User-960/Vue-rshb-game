<template>
  <layout>
    <template v-slot:default>
      <pestControlGameBack/>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../../layout/layout.vue'

import pestControlGameBack from './pestControlGameBack/pestControlGameBack.vue'

export default Vue.extend({
  name: 'pestControlGame',
  components: {
    layout,
    pestControlGameBack
  },
  methods: {}
})
</script>

<style module='styles'>
  
</style>