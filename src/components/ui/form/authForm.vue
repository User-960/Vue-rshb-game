<template>
  <div :class='styles.startBlock'>
    <div :class='styles.spinnerWrapper' v-if='isLoading'>
      <loader/>
    </div>

    <form :class='styles.form' @submit='submitForm' v-else='!isLoading'>

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
import loader from '@/components/ui/loader/loader.vue'
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import { EN_StartScreenMutation } from '@/store/modules/startScreen/mutations'
import { IUserDataForm } from '@/interfaces/player.interface'
import { EN_StartScreenGetters } from '@/store/modules/startScreen/getters'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'authForm',
  data: () => ({
    newPlayerName: '',
    isErrorEmptyName: false,
    isErrorDuplicateName: false,
    isLoading: false
  }),
  components: {
    skipButton,
    loader
  },
  watch: {
    GET_PLAYER_DATA() {
      if (this.GET_PLAYER_DATA.name !== null && this.GET_PLAYER_DATA.name) {
        this.$router.push({ name: 'home' })
      } else {
        this.isLoading = false
        this.isErrorDuplicateName = true
      }
    }
  },
  computed: {
    ...mapGetters([EN_StartScreenGetters.GET_ERROR_SERVER, EN_PlayerDataGetters.GET_PLAYER_DATA]),
    ...mapState({
      gender: ({ startScreen }: any): 'Female' | 'Male' => startScreen.player.gender,
      name: ({ startScreen }: any) => startScreen.player.name
    })
  },
  methods: {
    ...mapMutations([
      EN_StartScreenMutation.HIDE_AUTH_PLAYER, 
      EN_StartScreenMutation.SAVE_PLAYER_NAME
    ]),
    ...mapActions([EN_PlayerDataActions.CREATE_PLAYER]),
    submitForm(e: Event) {
      e.preventDefault()
      let player: IUserDataForm

      this.isLoading = true
      this.isErrorEmptyName = false
      this.SAVE_PLAYER_NAME(this.newPlayerName)

      if (this.name.length >= 2) {
        player = {
          name: this.name,
          gender: this.gender
        }
        
        this.CREATE_PLAYER(player)

        this.newPlayerName = ''
      } else {
        this.isErrorEmptyName = true
      }
    }
  }
})
</script>

<style src='./authForm.css' module='styles'>
  
</style>