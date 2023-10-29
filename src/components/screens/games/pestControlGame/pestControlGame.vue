<template>
  <layout>
    <template v-slot:default>
      <div class='imgRotatePhone'>
        <img src='../../../../../public/images/rotate-phone.png' />
        <p class='imgRotatePhoneText'>Переверните экран</p>
      </div>
      
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