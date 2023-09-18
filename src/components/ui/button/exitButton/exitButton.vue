<template>
  <div :class='styles.exitBtn'>
    <iconButton @onclick="exit">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
        <path d="M8.892 12.355L4.596 8.16667L19.2 8.16667V5.83333L4.596 5.83333L8.904 1.645L7.2 0L0 7L7.2 14L8.892 12.355ZM24 14V0H21.6V14H24Z" fill="currentColor"/>
      </svg>
    </iconButton>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import iconButton from '../iconButton/iconButton.vue'

export default Vue.extend({
  name: 'exitButton',
  components: {
    iconButton
  },
  methods: {
    exit() {
      this.$router.go(-1)
    }
  }
})
</script>

<style src='./exitButton.css' module='styles'>
  
</style>