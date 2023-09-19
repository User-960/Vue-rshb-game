<template>
  <div :class='styles.startBlock'>
    <form :class='styles.form' @submit='submitForm'>
      <label for='name' :class='styles.label'>Придумай имя</label>
      <input 
        id='name' 
        type='text'
        v-model='newPlayerName'
        min='2'
        :class='[styles.input, {[styles.inputError] : isErrorDuplicateName || isErrorEmptyName}]'
        data-testid='inputName'
      />

      <p class='error' v-if='isErrorEmptyName'>Недостаточно символов.</p>
      <p class='error' v-if='isErrorDuplicateName'>К сожалению, данное имя уже используется.</p>

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
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import { EStartScreenMutation } from '@/store/modules/startScreen/mutations'
import { IUserDataForm } from '@/interfaces/player.interface'
import { EStartScreenGetters } from '@/store/modules/startScreen/getters'
import { EPlayerDataActions } from '@/store/modules/playerData/actions'
import { EPlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'authForm',
  data: () => ({
    newPlayerName: '',
    isErrorEmptyName: false,
    isErrorDuplicateName: false
  }),
  components: {
    skipButton
  },
  watch: {
    GET_PLAYER_DATA() {
      if (this.GET_PLAYER_DATA.name !== null && this.GET_PLAYER_DATA.name) {
        this.$router.push({ name: 'home' })
      } else {
        this.isErrorDuplicateName = true
      }
    }
  },
  computed: {
    ...mapGetters([EStartScreenGetters.GET_ERROR_SERVER, EPlayerDataGetters.GET_PLAYER_DATA]),
    ...mapState({
      gender: ({ startScreen }: any): 'Female' | 'Male' => startScreen.player.gender,
      name: ({ startScreen }: any) => startScreen.player.name
    })
  },
  methods: {
    ...mapMutations([
      EStartScreenMutation.HIDE_AUTH_PLAYER, 
      EStartScreenMutation.SAVE_PLAYER_NAME,
      EStartScreenMutation.HIDE_ERROR_SERVER,
    ]),
    ...mapActions([EPlayerDataActions.CREATE_PLAYER]),
    submitForm(e: Event) {
      e.preventDefault()

      let player: IUserDataForm
      this.isErrorEmptyName = false
      this.SAVE_PLAYER_NAME(this.newPlayerName)

      if (this.name.length >= 2) {
        // this.HIDE_ERROR_SERVER()

        player = {
          name: this.name,
          gender: this.gender
        }
        
        this.CREATE_PLAYER(player)

        // this.HIDE_AUTH_PLAYER()
        this.newPlayerName = ''
        // this.$router.push({ name: 'main' })
      } else {
        this.isErrorEmptyName = true
      }
    }
  }
})
</script>

<style src='./authForm.css' module='styles'>
  
</style>