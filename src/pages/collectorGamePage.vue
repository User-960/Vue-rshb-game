<template>
  <collectorGame v-if='GET_PLAYER_DATA.minigame.gameFour.complete && GET_PLAYER_DATA.equipment.robot.available' />

  <alert v-else />
</template>

<script lang="ts">
import Vue from 'vue';
import collectorGame from '@/components/screens/games/collectorGame/collectorGame.vue'
import { EN_USER } from '@/config/app.constants'
import { mapActions, mapGetters } from 'vuex'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import alert from '../components/ui/alert/alert.vue'

export default Vue.extend({
  name: 'collectorGamePage',
  components: {
    collectorGame,
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
          JSON.parse(playerData).minigame.gameFour.complete !== true && 
          JSON.parse(playerData).equipment.robot.available !== true
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
