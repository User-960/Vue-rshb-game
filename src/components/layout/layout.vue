<template>
  <div :class='styles.mainWrapper'>
    <header>
      <slot name="header"></slot>
    </header>

    <main :class='styles.contentWrapper'>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'layout',
})
</script>

<style src="./layout.css" module='styles'>

</style>
