<template>
  <button :class='styles.shopLinkButton'>
    <a :class='styles.link' :href='link'>Подробнее</a> 
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6961 22.1017L19.5945 14.2033V21.1047C19.5945 21.6562 20.0471 22.1088 20.5986 22.1088C21.1501 22.1088 21.5956 21.6633 21.5956 21.1118L21.5956 11.7921C21.5956 11.2406 21.1501 10.7951 20.5986 10.7951L11.2789 10.7809C11.0144 10.7806 10.7607 10.8856 10.5736 11.0726C10.3866 11.2597 10.2816 11.5134 10.2819 11.778C10.2819 12.3295 10.7274 12.775 11.2789 12.775L18.1803 12.7891L10.2819 20.6875C9.89301 21.0764 9.89301 21.7128 10.2819 22.1017C10.6708 22.4906 11.3072 22.4906 11.6961 22.1017Z" fill="#89E159"/>
    </svg>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'shopLinkButton',
  props: {
    link: {
      type: String,
      required: true,
      default: '/'
    }
  }
})
</script>

<style src='./shopLinkButton.css' module='styles'>
  
</style>