<template>
  <layout>
    <template v-slot:default>
      <!-- <infoBlockM>
        <template v-slot:contentText>
          <p>
            Ты – молодой специалист, который недавно завершил обучение на перспективном направлении «Плодово-ягодные культуры» в сельскохозяйственной школе <span>“Своё фермерство”</span>.
          </p>
          <br/>
          <p>
          Ты учился с большим интересом и почерпнул много полезной информации из агросферы. Тебе не терпится применить полученные знания в реальном деле.
          </p>
        </template>

        <template v-slot:nextBtn>
          <skipButton @onclick="nextFunc">
            Далее
          </skipButton>
        </template>
      </infoBlockM>

      <infoBlockS>
        <template v-slot:contentText>
          <p>Кликни на первую локацию</p>
        </template>

        <template v-slot:nextBtn>
          <skipButton @onclick="nextFunc">
            Далее
          </skipButton>
        </template>
      </infoBlockS>

      -->

      <mapBack/>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../layout/layout.vue'
import infoBlockM from '@/components/ui/infoBlock/infoBlockM/infoBlockM.vue'
import infoBlockS from '@/components/ui/infoBlock/infoBlockS/infoBlockS.vue'
import skipButton from '@/components/ui/button/skipButton/skipButton.vue'
import iconButton from '@/components/ui/button/iconButton/iconButton.vue'

import mapBack from './mapBack/mapBack.vue'

export default Vue.extend({
  name: 'home',
  components: {
    layout,
    infoBlockM,
    infoBlockS,
    skipButton,
    iconButton,
    mapBack
  },
  methods: {
    nextFunc() {
      console.log('Next step')
    }
  }
})
</script>

<style module='styles'>
  
</style>