<template>
  <home />
</template>

<script lang="ts">
import Vue from 'vue';
import home from '@/components/screens/home/home.vue'

export default Vue.extend({
  name: 'mainPage',
  components: {
    home
  }
});
</script>
