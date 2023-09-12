<template>
  <div :class='styles.startBlock'>
    <form :class='styles.form'>
      <label for='name' :class='styles.label'>Придумай имя</label>
      <input id='name' type='text' value='' name='username' :class='styles.input'/>

      <div :class='styles.wrapperBtn'>
        <startButton @onclick="submitName">
          Далее
        </startButton>
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import startButton from '@/components/ui/button/startButton/startButton.vue'

export default Vue.extend({
  name: 'authForm',
  components: {
    startButton
  },
  methods: {
    submitName() {
      console.log('Submit Name')
    }
  },
})
</script>

<style src='./authForm.css' module='styles'>
  
</style>