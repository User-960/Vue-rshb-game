<template>
  <layout>
    <template v-slot:default>
      <aiGameBack/>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../../layout/layout.vue'
import aiGameBack from './aiGameBack/aiGameBack.vue'

export default Vue.extend({
  name: 'aiGame',
  components: {
    layout,
    aiGameBack
  },
  methods: {}
})
</script>

<style module='styles'>
  
</style>