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

          <chooseCharacter />

          <authPlayer/>

        </div>
      </template>
    </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import skipButton from '../../ui/button/skipButton/skipButton.vue'
import topSection from '../../ui/section/topSection/topSection.vue'
import layout from '../../layout/layout.vue'
import chooseCharacter from './chooseCharacter/chooseCharacter.vue'
import authPlayer from './authPlayer/authPlayer.vue'

export default Vue.extend({
  name: 'start',
  data: () => ({}),
  components: {
    layout,
    skipButton,
    topSection,
    chooseCharacter,
    authPlayer
  },
  methods: {
    nextFunc() {
      console.log('Next step')
    }
  }
});
</script>

<style src='./start.css' module='styles'>

</style>