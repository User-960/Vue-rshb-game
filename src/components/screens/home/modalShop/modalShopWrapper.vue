<template>
  <div :class='styles.modalHouseWrapper'>
    <modalShop/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import modalShop from './modalShop.vue'

export default Vue.extend({
  name: 'modalShopWrapper',
  components: {
    modalShop
  },
  computed: {},
  methods: {},
})
</script>

<style src='./modalShop.css' module='styles'>
  
</style>