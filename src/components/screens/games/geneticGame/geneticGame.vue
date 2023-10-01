<template>
  <layout>
    <template v-slot:default>
      <geneticGameBack/>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../../layout/layout.vue'
import geneticGameBack from './geneticGameBack/geneticGameBack.vue'

export default Vue.extend({
  name: 'geneticGame',
  components: {
    layout,
    geneticGameBack
  },
  methods: {}
})
</script>

<style module='styles'>
  
</style>