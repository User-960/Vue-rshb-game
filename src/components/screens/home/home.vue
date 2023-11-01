<template>
  <layout>
    <template v-slot:default>
      <div class='imgRotatePhone'>
        <img src='../../../../public/images/rotate-phone.png' />
        <p class='imgRotatePhoneText'>Переверните экран.</p>
        <p class='imgRotatePhoneRecommend'>Убедитесь что у вас включён автоповорот экрана.</p>
      </div>

      <mapBack/>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../layout/layout.vue'
import infoBlockM from '@/components/ui/infoBlock/infoBlockM/infoBlockM.vue'
import skipButton from '@/components/ui/button/skipButton/skipButton.vue'
import iconButton from '@/components/ui/button/iconButton/iconButton.vue'

import mapBack from './mapBack/mapBack.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_HomeScreenGetters } from '@/store/modules/homeScreen/getters'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'

export default Vue.extend({
  name: 'home',
  components: {
    layout,
    infoBlockM,
    skipButton,
    iconButton,
    mapBack
  },
  computed: {
    ...mapGetters([
      EN_HomeScreenGetters.GET_BACK_MUSIC_MAP,
    ]),
  },
  created() {
    this.PLAY_BACK_MUSIC_MAP()

    setTimeout(() => {
      if (this.GET_BACK_MUSIC_MAP) {
        this.START_BACK_MUSIC_MAP()
      }
    }, 5000)
  },
  methods: {
    ...mapMutations([
      EN_HomeScreenMutation.PLAY_BACK_MUSIC_MAP,
      EN_HomeScreenMutation.START_BACK_MUSIC_MAP,
    ])
  }
})
</script>

<style module='styles'>
 
</style>