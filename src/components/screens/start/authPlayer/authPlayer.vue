<template >
  <div 
    :class='styles.authPlayerWrapper' 
    v-if='GET_AUTH_PLAYER_VISIBLE' 
    data-testid='authPlayer'
  >
    <authForm/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'
import authForm from '../../../ui/form/authForm.vue'

export default Vue.extend({
  name: 'authPlayer',
  data: () => ({
    isChooseWomen: false,
    isChooseMen: false,
    GET_AUTH_PLAYER_VISIBLE: true
  }),
  components: {
    authForm,
    skipButton
  },
   methods: {
    nextFunc() {
      console.log('Next step')
    }
  }
})
</script>

<style src='./authPlayer.css' module='styles'>
  
</style>