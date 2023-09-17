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
import { EStartScreenGetters } from '@/store/modules/startScreen/getters'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'authPlayer',
  data: () => ({
    isChooseWomen: false,
    isChooseMen: false
  }),
  components: {
    authForm,
    skipButton
  },
  computed: {
    ...mapGetters([EStartScreenGetters.GET_AUTH_PLAYER_VISIBLE]),
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