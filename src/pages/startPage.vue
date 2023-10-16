<template>
  <start v-if='GET_PLAYER_DATA.name === null && GET_PLAYER_DATA.gender === null' />
</template>

<script lang="ts">
import Vue from 'vue';
import start from '@/components/screens/start/start.vue'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { mapActions, mapGetters } from 'vuex'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { EN_USER } from '@/config/app.constants'

export default Vue.extend({
  name: 'startPage',
  components: {
    start
  },
  created() {
    // const localPlayerId = localStorage.getItem(EN_USER.PLAYER_ID)
    const playerData = localStorage.getItem(EN_USER.PLAYER_DATA)

    if (playerData) {
      this.GET_PLAYER(JSON.parse(playerData).id)
    }
  },
  watch: {
    GET_PLAYER_DATA() {
      if (this.GET_PLAYER_DATA.name !== null && this.GET_PLAYER_DATA.gender !== null) {
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
});
</script>

<style>

</style>
