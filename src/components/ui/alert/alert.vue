<template>
  <div :class='[styles.alert, styles.error, styles.checked]' v-if='GET_ALERT'>
		<p :class='styles.alertText'>{{ GET_ALERT_TEXT }}</p>
		<div :class='styles.alertProgress'></div>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'alert',
  computed: {
    ...mapGetters([
      EN_PlayerDataGetters.GET_ALERT,
      EN_PlayerDataGetters.GET_ALERT_TEXT,
    ])
  },
})
</script>

<style src='./alert.css' module='styles'>
  
</style>