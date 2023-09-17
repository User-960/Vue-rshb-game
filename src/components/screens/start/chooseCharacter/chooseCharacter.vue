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
        <skipButton @onclick="nextFunc">
          Далее
        </skipButton>
      </template>
    </startBlock>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import startBlock from '../../../ui/startBlock/startBlock.vue'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'

export default Vue.extend({
  name: 'chooseCharacter',
  data: () => ({
    isChooseWomen: false,
    isChooseMen: false,
    GET_CHOOSE_CHARACTER_VISIBLE: false
  }),
  components: {
    startBlock,
    skipButton
  },
   methods: {
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
    nextFunc() {
      console.log('Next step')
    }
  }
})
</script>

<style src='./chooseCharacter.css' module='styles'>
  
</style>