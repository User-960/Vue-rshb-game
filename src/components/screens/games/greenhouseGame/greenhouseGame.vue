<template>
  <layout>
    <template v-slot:default>
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

export default Vue.extend({
  name: 'greenhouseGame',
  components: {
    layout,
    greenhouseGameBack
  },
  watch: {
    GET_START_GAME_GH() {
      if (!this.GET_START_GAME_GH) {
        setTimeout(() => {
          this.SHOW_VICTORY_BLOCK_GH()
        }, 2000)
      }
    }
  },
  computed: {
    ...mapGetters([EN_GreenhouseGameGetters.GET_START_GAME_GH])
  },
  methods: {
    ...mapMutations([EN_GreenhouseGameMutation.SHOW_VICTORY_BLOCK_GH])
  }
})
</script>

<style module='styles'>
  
</style>