<template >
  <div 
    :class='styles.chooseCharacterWrapper' 
    v-if='GET_CHOOSE_CHARACTER_VISIBLE' 
  >
    <startBlock data-testid='chooseCharacter' v-click-outside='onClickOutside'>
      <template v-slot:title>
        Выбери своего персонажа
      </template>
    
      <template v-slot:contentImg>
        <img 
          src='../../../../../public/images/characterAvatarWomen.png' 
          alt='character avatar'  
          draggable='false'
          @click='chooseWomen'
          :class='{[styles.selectWomen]: isChooseWomen}'
          data-testid='chooseWomenGender'
        />
      
        <img 
          src='../../../../../public/images/characterAvatarMen.png' 
          alt='character avatar'
          draggable='false'
          @click='chooseMen'
          :class='{[styles.selectMen]: isChooseMen}'
          data-testid='chooseMenGender'
        />
      </template>

      <template v-slot:nextBtn>
        <skipButton @onclick="hideBlockChooseCharacter" data-testid='chooseCharacterBtn'>
          Далее
        </skipButton>

        <p class='error' v-if='isError'>вы не выбрали персонажа...</p>
      </template>
    </startBlock>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import startBlock from '../../../ui/startBlock/startBlock.vue'
import { EN_StartScreenGetters } from '@/store/modules/startScreen/getters'
import { startScreen } from '@/store/modules/startScreen/startScreenModule'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_StartScreenMutation } from '@/store/modules/startScreen/mutations'
import vClickOutside from 'v-click-outside'

export default Vue.extend({
  name: 'chooseCharacter',
  data: () => ({
    isChooseWomen: false,
    isChooseMen: false,
    isError: false
  }),
  components: {
    startBlock,
    skipButton
  },
  computed: {
    ...mapGetters([
      EN_StartScreenGetters.GET_CHOOSE_CHARACTER_VISIBLE, 
      EN_StartScreenGetters.GET_PLAYER_GENDER
    ])
  },
   methods: {
    ...mapMutations([
      EN_StartScreenMutation.HIDE_CHOOSE_CHARACTER, 
      EN_StartScreenMutation.SHOW_AUTH_PLAYER,
      EN_StartScreenMutation.SELECT_GENDER_WOMEN,
      EN_StartScreenMutation.SELECT_GENDER_MEN,
    ]),
    chooseWomen() {
      this.isError = false
      this.isChooseMen= false
      this.isChooseWomen = true
      this.SELECT_GENDER_WOMEN()
    },
    chooseMen() {
      this.isError = false
      this.isChooseWomen = false
      this.isChooseMen= true
      this.SELECT_GENDER_MEN()
    },
    hideBlockChooseCharacter() {
      if (this.GET_PLAYER_GENDER !== null && (this.isChooseWomen || this.isChooseMen)) {
        this.HIDE_CHOOSE_CHARACTER()
        this.SHOW_AUTH_PLAYER()
      } 
      
      if (!this.isChooseWomen || !this.isChooseMen) {
        this.isError = true
      }
    },
    onClickOutside (event: any) {
      this.HIDE_CHOOSE_CHARACTER()
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
})
</script>

<style src='./chooseCharacter.css' module='styles'>
  
</style>