<template>
  <layout>
    <template v-slot:default>
      <div class='imgRotatePhone'>
        <img src='../../../../../public/images/rotate-phone.png' />
        <p class='imgRotatePhoneText'>Переверните экран</p>
        <p class='imgRotatePhoneText'>Убедитесь что у вас включён автоповорот экрана.</p>
      </div>
      
      <greenhouseGameBack/>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../../layout/layout.vue'
import greenhouseGameBack from './greenhouseGameBack/greenhouseGameBack.vue'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'
import { mapGetters, mapMutations } from 'vuex'
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_CONFIG } from './config/config'

export default Vue.extend({
  name: 'greenhouseGame',
  components: {
    layout,
    greenhouseGameBack
  },
  watch: {
    GET_START_GAME_GH() {
      if (
        !this.GET_START_GAME_GH && 
        this.GET_PLAYER_MISTAKES_GH < 2 && 
        !this.GET_INFO_LINK_BLOCK_GH &&
        !this.GET_LOSS_BLOCK_GH
      ) {
        if (this.GET_PLAYER_MISTAKES_TOMATO_GH < 2 || 
            this.GET_PLAYER_MISTAKES_PEPPER_GH < 2 || 
            this.GET_PLAYER_MISTAKES_STRAWBERRY_GH < 2
          ) {
          setTimeout(() => {
            this.SHOW_VICTORY_BLOCK_GH()
          }, EN_CONFIG.TIMING_GAME_OVER)
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_START_GAME_GH, 
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_TOMATO_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_PEPPER_GH,
      EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_STRAWBERRY_GH,
      EN_GreenhouseGameGetters.GET_INFO_LINK_BLOCK_GH,
      EN_GreenhouseGameGetters.GET_LOSS_BLOCK_GH,
    ])
  },
  methods: {
    ...mapMutations([EN_GreenhouseGameMutation.SHOW_VICTORY_BLOCK_GH])
  }
})
</script>

<style module='styles'>
  
</style>