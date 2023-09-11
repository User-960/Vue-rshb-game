<template>
  <layout>
    <template v-slot:default>
      <p>Параграф для основного контента.</p>
    </template>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import layout from '@/components/layout/layout.vue'

export default Vue.extend({
  name: 'mainPage',
  components: {
    layout
  },
});
</script>
