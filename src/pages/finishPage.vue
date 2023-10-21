<template>
  <finish v-if='GET_PLAYER_DATA.credit === 0 && GET_PLAYER_DATA.minigame.gameFive.complete' />

  <alert v-else />
</template>

<script lang="ts">
import Vue from 'vue';
import finish from '@/components/screens/finish/finish.vue'
import { mapActions, mapGetters } from 'vuex'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { EN_USER } from '@/config/app.constants'
import alert from '../components/ui/alert/alert.vue'

export default Vue.extend({
  name: 'finishPage',
  components: {
    finish,
    alert
  },
  created() {
    const playerData = localStorage.getItem(EN_USER.PLAYER_DATA)

    if (playerData) {
      this.GET_PLAYER(JSON.parse(playerData).id)
    } else {
      this.$router.push({ name: 'start' })
    }

    if (playerData) {
      if (
          JSON.parse(playerData).minigame.gameOne.complete !== true && 
          JSON.parse(playerData).minigame.gameTwo.complete !== true && 
          JSON.parse(playerData).minigame.gameThree.complete !== true && 
          JSON.parse(playerData).minigame.gameFour.complete !== true && 
          JSON.parse(playerData).minigame.gameFive.complete !== true
         ) {
        this.$router.push({ name: 'home' })
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_PlayerDataGetters.GET_PLAYER_DATA
    ])
  },
  methods: {
    ...mapActions([
      EN_PlayerDataActions.GET_PLAYER
    ])
  }
})
</script>

<style>

</style>
