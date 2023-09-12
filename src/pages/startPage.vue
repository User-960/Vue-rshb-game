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
        <img src='../../public/images/characterAvatarWomen.png' 
          alt='character avatar'  
          draggable='false'
          @click='chooseWomen'
        />

        <img 
          src='../../public/images/characterAvatarMen.png' 
          alt='character avatar'
          draggable='false'
          @click='chooseMen'
        />
      </template>

      <template v-slot:nextBtn>
        <startButton @onclick="nextFunc">
          Далее
        </startButton>
      </template>
    </startBlock>

    <startBlock>
      <template v-slot:title>
        Придумай имя
      </template>

      <template v-slot:contentText>
        <p>
          Приветствую тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает!
        </p>

      </template>

      <template v-slot:submitBtn>
        <startButton @onclick="submitName">
          Далее
        </startButton>
      </template>
    </startBlock>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import startBlock from '@/components/ui/startBlock/startBlock.vue'
import startButton from '@/components/ui/button/startButton/startButton.vue'

export default Vue.extend({
  name: 'aboutPage',
  components: {
    startBlock,
    startButton
  },
  methods: {
    chooseWomen() {
      console.log('Choose women avatar')
    },
    chooseMen() {
      console.log('Choose men avatar')
    },
    nextFunc() {
      console.log('Next step')
    },
    submitName() {
      console.log('Submit Name')
    }
  }
});
</script>
