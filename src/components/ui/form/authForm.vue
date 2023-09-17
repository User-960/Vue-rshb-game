<template>
  <div :class='styles.startBlock'>
    <form :class='styles.form'>
      <label for='name' :class='styles.label'>Придумай имя</label>
      <input id='name' type='text' value='' name='username' :class='styles.input'/>

      <div :class='styles.wrapperBtn'>
        <skipButton @onclick="submitName">
          Далее
        </skipButton>
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import skipButton from '@/components/ui/button/skipButton/skipButton.vue'
import { mapMutations, mapActions, mapState } from 'vuex'
import { EStartScreenMutation } from '@/store/modules/startScreen/mutations'
import { EStartScreenActions } from '@/store/modules/startScreen/actions'
import { IPlayer } from '@/interfaces/player.interface'

export default Vue.extend({
  name: 'authForm',
  components: {
    skipButton
  },
  computed: {
    ...mapState({
      playerGender: ({ startScreen }: any): 'women' | 'men' => startScreen.playerGender,
    })
  },
  methods: {
    ...mapMutations([EStartScreenMutation.HIDE_AUTH_PLAYER]),
    ...mapActions([EStartScreenActions.CREATE_PLAYER]),
    submitName() {

      let player: IPlayer = {
        id: Date.now(),
        playerName: 'ivan123',
        playerGender: this.playerGender
      }

      this.CREATE_PLAYER(player)
      this.HIDE_AUTH_PLAYER()
      console.log(player)
      console.log('Submit Name')
    }
  },
})
</script>

<style src='./authForm.css' module='styles'>
  
</style>