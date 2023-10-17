<template>
  <geneticGame v-if='GET_PLAYER_DATA.name !== null && GET_PLAYER_DATA.gender !== null' />
</template>

<script lang="ts">
import Vue from 'vue';
import geneticGame from '@/components/screens/games/geneticGame/geneticGame.vue'
import { EN_USER } from '@/config/app.constants'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { mapActions, mapGetters } from 'vuex'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'

export default Vue.extend({
  name: 'geneticGamePage',
  components: {
    geneticGame
  },
  created() {
    const playerData = localStorage.getItem(EN_USER.PLAYER_DATA)

    if (playerData) {
      this.GET_PLAYER(JSON.parse(playerData).id)
    } else {
      this.$router.push({ name: 'start' })
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
