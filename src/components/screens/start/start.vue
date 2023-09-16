<template>
    <layout>
      <template v-slot:default>
        <div :class='styles.startScreen'>
          <section :class='styles.topSection'>
            <div :class='styles.logo'>
              <img src='../../../assets/logo.png' draggable='false' alt='logo' />
            </div>

            <div :class='styles.topBlock'>
              <h1 :class='styles.topTitle'>Цифровая ферма</h1>
              <span :class='styles.topData'>2025</span>
            </div>
          </section>

          <section :class='styles.textSection'>
            <h2 :class='styles.textTitle'>Дорогой друг!</h2>
              <p :class='styles.textBlock'>
                Приветствуем тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает!
              </p>
              <br/>
              <p :class='styles.textBlock'>
                Помоги главному герою оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.
              </p>
          </section>

    <!-- <startBlock>
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
        <skipButton @onclick="nextFunc">
          Далее
        </skipButton>
      </template>
    </startBlock> -->

    <!-- <startBlock>
      <template v-slot:title>
        Выбери своего персонажа
      </template>

      <template v-slot:contentImg>
        <img 
          src='../../../../public/images/characterAvatarWomen.png' 
          alt='character avatar'  
          draggable='false'
          @click='chooseWomen'
          :class='{selectWomen: isChooseWomen}'
        />

        <img 
          src='../../../../public/images/characterAvatarMen.png' 
          alt='character avatar'
          draggable='false'
          @click='chooseMen'
          :class='{selectMen: isChooseMen}'
        />
      </template>

      <template v-slot:nextBtn>
        <skipButton @onclick="nextFunc">
          Далее
        </skipButton>
      </template>
    </startBlock>

    <authForm/> -->
        </div>
      </template>
    </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import startBlock from '../../ui/startBlock/startBlock.vue'
import authForm from '../../ui/form/authForm.vue'
import skipButton from '../../ui/button/skipButton/skipButton.vue'
import layout from '../../layout/layout.vue'

export default Vue.extend({
  name: 'start',
  data: () => ({
    isChooseWomen: false,
    isChooseMen: false
  }),
  components: {
    layout,
    startBlock,
    authForm,
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
});
</script>

<style src='./start.css' module='styles'>
.selectWomen {
	border-color: var(--primary-green) !important;
}

.selectMen {
	border-color: var(--primary-green) !important;
}
</style>