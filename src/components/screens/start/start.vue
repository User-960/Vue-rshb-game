<template>
    <layout>
      <template v-slot:default>
        <div :class='styles.startScreen'>
          <topSection/>

          <section :class='styles.textSection'>
            <h2 :class='styles.textTitle'>Дорогой друг!</h2>
              <div :class='[styles.textBlock, styles.firstP]'>
                <p>
                  Приветствуем тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает!
                </p>
                <img src='../../../../public/images/drone.svg' draggable='false' alt='drone' />
              </div>
              <br/>
              <div :class='[styles.textBlock, styles.secondP]'>
                <p >
                  Помоги главному герою оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.
                </p>
                <img src='../../../../public/images/collector.svg' draggable='false' alt='collector robot' />
              </div>

              <div :class='styles.wrapperBtn'>
                <skipButton @onclick="nextFunc">
                  Начать игру
                </skipButton>
              </div>
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
import topSection from '../../ui/section/topSection/topSection.vue'
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
    skipButton,
    topSection
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