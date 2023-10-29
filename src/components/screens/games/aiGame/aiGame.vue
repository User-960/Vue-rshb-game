<template>
  <layout>
    <template v-slot:default>
      <div class='imgRotatePhone'>
        <img src='../../../../../public/images/rotate-phone.png' />
        <p class='imgRotatePhoneText'>Переверните экран</p>
      </div>

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