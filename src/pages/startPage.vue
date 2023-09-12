<template>
  <div>
    <startBlock>
      <template v-slot:title>
        Дорогой друг,
      </template>

      <template v-slot:contentText>
        <p>
          Приветствую тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает!
        </p>
        <br/>
        <p>
          Помоги главному герою оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.
        </p>
      </template>

      <template v-slot:nextBtn>
        <startButton @onclick="nextFunc">
          Далее
        </startButton>
      </template>
    </startBlock>

    <startBlock>
      <template v-slot:title>
        Выбери своего персонажа
      </template>

      <template v-slot:contentImg>
        <img 
          src='../../public/images/characterAvatarWomen.png' 
          alt='character avatar'  
          draggable='false'
          @click='chooseWomen'
          :class='{selectWomen: isChooseWomen}'
        />

        <img 
          src='../../public/images/characterAvatarMen.png' 
          alt='character avatar'
          draggable='false'
          @click='chooseMen'
          :class='{selectMen: isChooseMen}'
        />
      </template>

      <template v-slot:nextBtn>
        <startButton @onclick="nextFunc">
          Далее
        </startButton>
      </template>
    </startBlock>

    <authForm/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import startBlock from '@/components/ui/startBlock/startBlock.vue'
import authForm from '@/components/ui/form/authForm.vue'
import startButton from '@/components/ui/button/startButton/startButton.vue'

export default Vue.extend({
  name: 'aboutPage',
  data: () => ({
    isChooseWomen: false,
    isChooseMen: false
  }),
  components: {
    startBlock,
    authForm,
    startButton
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
});
</script>

<style>
.selectWomen {
	border-color: var(--primary-green) !important;
}

.selectMen {
	border-color: var(--primary-green) !important;
}
</style>
