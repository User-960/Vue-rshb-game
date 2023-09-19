<template>
  <div :class='styles.startBlock'>
    <form :class='styles.form' @submit='submitForm'>
      <label for='name' :class='styles.label'>Придумай имя</label>
      <input 
        id='name' 
        type='text'
        v-model='newPlayerName'
        min='2'
        :class='styles.input'
        data-testid='inputName'
      />

      <p class='error' v-if='isErrorEmptyName'>Недостаточно символов.</p>

      <div :class='styles.wrapperBtn'>
          <skipButton data-testid='formBtn'>
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
import { IUserDataForm } from '@/interfaces/player.interface'

export default Vue.extend({
  name: 'authForm',
  data: () => ({
    newPlayerName: '',
    isErrorEmptyName: false
  }),
  components: {
    skipButton
  },
  computed: {
    ...mapState({
      gender: ({ startScreen }: any): 'Female' | 'Male' => startScreen.player.gender,
      name: ({ startScreen }: any) => startScreen.player.name
    })
  },
  methods: {
    ...mapMutations([EStartScreenMutation.HIDE_AUTH_PLAYER, EStartScreenMutation.SAVE_PLAYER_NAME]),
    ...mapActions([EStartScreenActions.CREATE_PLAYER]),
    submitForm(e: Event) {
      e.preventDefault()

      let player: IUserDataForm
      this.isErrorEmptyName = false
      this.SAVE_PLAYER_NAME(this.newPlayerName)

      if (this.name.length >= 2) {
        player = {
          name: this.name,
          gender: this.gender
        }

        this.CREATE_PLAYER(player)
        this.HIDE_AUTH_PLAYER()
        this.newPlayerName = ''

        // this.$router.push({ name: 'home' })
      } else {
        this.isErrorEmptyName = true
      }
    }
  }
})
</script>

<style src='./authForm.css' module='styles'>
  
</style>