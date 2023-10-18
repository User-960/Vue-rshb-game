<template>
  <div :class='styles.startBlock' v-click-outside='onClickOutside'>
    <div :class='styles.spinnerWrapper' v-if='GET_LOADING'>
      <loader/>
    </div>

    <form :class='styles.form' @submit='submitForm' v-else='!isLoading'>

      <label for='name' :class='styles.label'>Придумай имя</label>
      <input 
        id='name' 
        type='text'
        v-model='newPlayerName'
        min='3'
        :class='[styles.input, {[styles.inputError] : isErrorDuplicateName || isErrorEmptyName}]'
        data-testid='inputName'
      />

      <p class='error' v-if='newPlayerName.length < 3 && newPlayerName.length > 0'>
        Недостаточно символов.
      </p>

      <p class='error' v-if='isErrorDuplicateName'>К сожалению, данное имя уже используется.</p>

      <ul :class='styles.uniqueNames' v-if='GET_UNIQUE_NAMES.length > 0'>
        <li 
          v-if='name'
          :class='styles.uniqueName' 
          v-for='(name, i) in GET_UNIQUE_NAMES' :key='i'
          @click='chooseUniqueName(name)'
        >
          {{ name }}
        </li>
      </ul>

      <div :class='styles.wrapperBtn'>
        <button 
          :class='[styles.btnForm, {[styles.btnFormNonActive]: newPlayerName.length < 3}]' data-testid='formBtn'
        >
          Далее
        </button>
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
import vClickOutside from 'v-click-outside'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'

export default Vue.extend({
  name: 'authForm',
  data: () => ({
    newPlayerName: '',
    isErrorEmptyName: false,
    isErrorDuplicateName: false
  }),
  components: {
    skipButton,
    loader
  },
  watch: {
    GET_PLAYER_DATA() {
      if (this.GET_PLAYER_DATA.name !== null && this.GET_PLAYER_DATA.gender !== null) {
        this.HIDE_AUTH_PLAYER()
        this.$router.push({ name: 'home' })
      } else {
        this.isErrorDuplicateName = true
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_StartScreenGetters.GET_ERROR_SERVER, 
      EN_PlayerDataGetters.GET_PLAYER_DATA,
      EN_PlayerDataGetters.GET_LOADING,
      EN_PlayerDataGetters.GET_UNIQUE_NAMES,
    ]),
    ...mapState({
      gender: ({ startScreen }: any): 'Female' | 'Male' => startScreen.player.gender,
      name: ({ startScreen }: any) => startScreen.player.name
    })
  },
  methods: {
    ...mapMutations([
      EN_StartScreenMutation.HIDE_AUTH_PLAYER, 
      EN_StartScreenMutation.SAVE_PLAYER_NAME,
      EN_PlayerDataMutation.SHOW_LOADING,
      EN_PlayerDataMutation.HIDE_LOADING,
      EN_PlayerDataMutation.DELETE_UNIQUE_NAME,
    ]),
    ...mapActions([EN_PlayerDataActions.CREATE_PLAYER]),
    submitForm(e: Event) {
      e.preventDefault()
      if (this.newPlayerName.length >= 3) {
        let player: IUserDataForm
        this.SHOW_LOADING()
        this.isErrorEmptyName = false
        this.SAVE_PLAYER_NAME(this.newPlayerName)

        if (this.name.length >= 3) {
          player = {
            name: this.name,
            gender: this.gender
          }

          this.CREATE_PLAYER(player)
          this.DELETE_UNIQUE_NAME()
          this.newPlayerName = ''
        } else {
          this.isErrorEmptyName = true
        }
      }
    },
    chooseUniqueName(name: string) {
      this.newPlayerName = name
    },
    onClickOutside (event: any) {
      this.HIDE_AUTH_PLAYER()
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
})
</script>

<style src='./authForm.css' module='styles'>
  
</style>