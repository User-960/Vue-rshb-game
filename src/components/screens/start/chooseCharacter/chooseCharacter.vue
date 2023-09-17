<template >
  <div 
    :class='styles.chooseCharacterWrapper' 
    v-if='GET_CHOOSE_CHARACTER_VISIBLE' 
    data-testid='chooseCharacter'
  >
    <startBlock>
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
        <skipButton @onclick="hideBlockChooseCharacter">
          Далее
        </skipButton>
      </template>
    </startBlock>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import startBlock from '../../../ui/startBlock/startBlock.vue'
import { EStartScreenGetters } from '@/store/modules/startScreen/getters'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EStartScreenMutation } from '@/store/modules/startScreen/mutations'

export default Vue.extend({
  name: 'chooseCharacter',
  data: () => ({
    isChooseWomen: false,
    isChooseMen: false
  }),
  components: {
    startBlock,
    skipButton
  },
  computed: {
    ...mapGetters([EStartScreenGetters.GET_CHOOSE_CHARACTER_VISIBLE]),
  },
   methods: {
    ...mapMutations([
      EStartScreenMutation.HIDE_CHOOSE_CHARACTER, 
      EStartScreenMutation.SHOW_AUTH_PLAYER
    ]),
    chooseWomen() {
      this.isChooseMen= false
      this.isChooseWomen = true
      console.log('Choose women avatar')
    },
    chooseMen() {
      this.isChooseWomen = false
      this.isChooseMen= true
      console.log('Choose men avatar')
    },
    hideBlockChooseCharacter() {
      this.HIDE_CHOOSE_CHARACTER()
      this.SHOW_AUTH_PLAYER()
    }
  }
})
</script>

<style src='./chooseCharacter.css' module='styles'>
  
</style>