<template>
  <div :class='styles.startBlock'>
    <form :class='styles.form' @submit='submitForm'>
      <label for='name' :class='styles.label'>Придумай имя</label>
      <input 
        id='name' 
        type='text'
        v-model='playerName'
        min='2'
        :class='styles.input'
      />

      <p class='error' v-if='isErrorEmptyName'>Недостаточно символов.</p>

      <div :class='styles.wrapperBtn'>
        <skipButton>
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
  data: () => ({
    playerName: '',
    isErrorEmptyName: false
  }),
  components: {
    skipButton
  },
  computed: {
    ...mapState({
      playerGender: ({ startScreen }: any): 'women' | 'men' => startScreen.playerGender
    })
  },
  methods: {
    ...mapMutations([EStartScreenMutation.HIDE_AUTH_PLAYER]),
    ...mapActions([EStartScreenActions.CREATE_PLAYER]),
    submitForm(e: Event) {
      e.preventDefault()

      let player: IPlayer
      this.isErrorEmptyName = false

      if (this.playerName.length >= 2) {
        player = {
          id: Date.now(),
          playerName: this.playerName,
          playerGender: this.playerGender
        }

        this.CREATE_PLAYER(player)
        this.HIDE_AUTH_PLAYER()
        this.playerName = ''
      } else {
        this.isErrorEmptyName = true
      }
    }
  },
})
</script>

<style src='./authForm.css' module='styles'>
  
</style>