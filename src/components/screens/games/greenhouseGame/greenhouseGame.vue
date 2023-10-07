<template>
  <layout>
    <template v-slot:default>
      <greenhouseGameBack/>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../../layout/layout.vue'
import greenhouseGameBack from './greenhouseGameBack/greenhouseGameBack.vue'

export default Vue.extend({
  name: 'greenhouseGame',
  components: {
    layout,
    greenhouseGameBack
  },
  methods: {}
})
</script>

<style module='styles'>
  
</style>