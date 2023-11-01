<template>
  <layout>
    <template v-slot:default>
      <div class='imgRotatePhone'>
        <img src='../../../../../public/images/rotate-phone.png' />
        <p class='imgRotatePhoneText'>Переверните экран</p>
        <p class='imgRotatePhoneText'>Убедитесь что у вас включён автоповорот экрана.</p>
      </div>
      
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