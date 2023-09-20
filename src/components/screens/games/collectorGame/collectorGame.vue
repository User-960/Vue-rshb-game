<template>
  <layout>
    <template v-slot:default>
      <collectorGameBack/>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../../layout/layout.vue'

import collectorGameBack from './collectorGameBack/collectorGameBack.vue'

export default Vue.extend({
  name: 'home',
  components: {
    layout,
    collectorGameBack
  },
  methods: {}
})
</script>

<style module='styles'>
  
</style>