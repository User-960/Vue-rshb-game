<template >
  <div 
    :class='styles.chooseCharacterWrapper' 
    v-if='GET_CHOOSE_CHARACTER_VISIBLE' 
  >
    <startBlock data-testid='chooseCharacter'>
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
        />
      
        <img 
          src='../../../../../public/images/characterAvatarMen.png' 
          alt='character avatar'
          draggable='false'
          @click='chooseMen'
          :class='{[styles.selectMen]: isChooseMen}'
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
import { EStartScreenGetters } from '@/store/modules/startScreen/getters'
import { startScreen } from '@/store/modules/startScreen/startScreenModule'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EStartScreenMutation } from '@/store/modules/startScreen/mutations'

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
      EStartScreenGetters.GET_CHOOSE_CHARACTER_VISIBLE, 
      EStartScreenGetters.GET_PLAYER_GENDER
    ])
  },
   methods: {
    ...mapMutations([
      EStartScreenMutation.HIDE_CHOOSE_CHARACTER, 
      EStartScreenMutation.SHOW_AUTH_PLAYER,
      EStartScreenMutation.SELECT_GENDER_WOMEN,
      EStartScreenMutation.SELECT_GENDER_MEN,
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
      if (this.GET_PLAYER_GENDER !== null) {
        this.HIDE_CHOOSE_CHARACTER()
        this.SHOW_AUTH_PLAYER()
      } else {
        this.isError = true
      }
    }
  }
})
</script>

<style src='./chooseCharacter.css' module='styles'>
  
</style>