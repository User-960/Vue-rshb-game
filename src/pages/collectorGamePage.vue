<template>
  <collectorGame/>
</template>

<script lang="ts">
import Vue from 'vue';
import collectorGame from '@/components/screens/games/collectorGame/collectorGame.vue'

export default Vue.extend({
  name: 'collectorGamePage',
  components: {
    collectorGame
  }
});
</script>

<style>

</style>
