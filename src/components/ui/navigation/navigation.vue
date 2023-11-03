<template>
  <nav :class='styles.navigation'>
    <button :class='styles.btn' @click='turnOffVolume' aria-label='sound button' v-if='GET_BACK_MUSIC_MAP'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM10 8.82998V15.17L7.83 13H5V11H7.83L10 8.82998ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor"/>
      </svg>
    </button>

    <button :class='styles.btn' @click='turnOnVolume' aria-label='sound button' v-if='!GET_BACK_MUSIC_MAP'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.34018 2.93506L2.93018 4.34506L7.29018 8.70506L7.00018 9.00506H3.00018V15.0051H7.00018L12.0002 20.0051V13.4151L16.1802 17.5951C15.5302 18.0851 14.8002 18.4751 14.0002 18.7051V20.7651C15.3402 20.4651 16.5702 19.8451 17.6102 19.0151L19.6602 21.0651L21.0702 19.6551L4.34018 2.93506ZM10.0002 15.1751L7.83018 13.0051H5.00018V11.0051H7.83018L8.71018 10.1251L10.0002 11.4151V15.1751ZM19.0002 12.0051C19.0002 12.8251 18.8502 13.6151 18.5902 14.3451L20.1202 15.8751C20.6802 14.7051 21.0002 13.3951 21.0002 12.0051C21.0002 7.72506 18.0102 4.14506 14.0002 3.23506V5.29506C16.8902 6.15506 19.0002 8.83506 19.0002 12.0051ZM12.0002 4.00506L10.1202 5.88506L12.0002 7.76506V4.00506ZM16.5002 12.0051C16.5002 10.2351 15.4802 8.71506 14.0002 7.97506V9.76506L16.4802 12.2451C16.4902 12.1651 16.5002 12.0851 16.5002 12.0051Z" fill="currentColor"/>
      </svg>
    </button>

    <button :class='styles.btn' @click='openBank' aria-label='bank button' data-testid='openBankBtn'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
        <path d="M5.68421 12.65H3.15789V22.1H5.68421V12.65ZM13.2632 12.65H10.7368V22.1H13.2632V12.65ZM24 24.8H0V27.5H24V24.8ZM20.8421 12.65H18.3158V22.1H20.8421V12.65ZM12 3.551L18.5811 7.25H5.41895L12 3.551ZM12 0.5L0 7.25V9.95H24V7.25L12 0.5Z" fill="currentColor"/>
      </svg>
    </button>

    <button :class='styles.btn' @click='openShop' aria-label='shop button' data-testid='openShopBtn'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path d="M19.901 5.89L18.8507 1.52C18.6306 0.62 17.8504 0 16.9401 0H3.04562C2.14533 0 1.35507 0.63 1.145 1.52L0.094666 5.89C-0.145411 6.91 0.0746596 7.95 0.714866 8.77C0.794891 8.88 0.904927 8.96 0.994956 9.06V16C0.994956 17.1 1.89525 18 2.9956 18H17.0001C18.1005 18 19.0007 17.1 19.0007 16V9.06C19.0908 8.97 19.2008 8.88 19.2808 8.78C19.921 7.96 20.1511 6.91 19.901 5.89ZM16.9101 1.99L17.9604 6.36C18.0604 6.78 17.9704 7.2 17.7103 7.53C17.5703 7.71 17.2702 8 16.77 8C16.1598 8 15.6297 7.51 15.5596 6.86L14.9795 2L16.9101 1.99ZM10.9982 2H12.9588L13.499 6.52C13.549 6.91 13.429 7.3 13.1689 7.59C12.9488 7.85 12.6287 8 12.2186 8C11.5484 8 10.9982 7.41 10.9982 6.69V2ZM6.48672 6.52L7.0369 2H8.99753V6.69C8.99753 7.41 8.44735 8 7.70712 8C7.36701 8 7.05691 7.85 6.81683 7.59C6.56675 7.3 6.44671 6.91 6.48672 6.52ZM2.03529 6.36L3.04562 2H5.01625L4.43606 6.86C4.35604 7.51 3.83587 8 3.22567 8C2.73552 8 2.42542 7.71 2.29537 7.53C2.02529 7.21 1.93526 6.78 2.03529 6.36ZM2.9956 16V9.97C3.07563 9.98 3.14565 10 3.22567 10C4.09595 10 4.88621 9.64 5.46639 9.05C6.06659 9.65 6.86684 10 7.77714 10C8.64742 10 9.42767 9.64 10.0079 9.07C10.598 9.64 11.3983 10 12.2986 10C13.1389 10 13.9391 9.65 14.5393 9.05C15.1195 9.64 15.9098 10 16.78 10C16.8601 10 16.9301 9.98 17.0101 9.97V16H2.9956Z" fill="currentColor"/>
      </svg>
    </button>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_HomeScreenMutation } from '@/store/modules/homeScreen/mutations'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { EN_HomeScreenGetters } from '@/store/modules/homeScreen/getters'

export default Vue.extend({
  name: 'navigation',
  computed: {
    ...mapGetters([EN_HomeScreenGetters.GET_BACK_MUSIC_MAP])
  },
  methods: {
    ...mapActions([EN_PlayerDataActions.GET_PLAYER]),
    ...mapMutations([
      EN_HomeScreenMutation.SHOW_MODAL_BANK, 
      EN_HomeScreenMutation.SHOW_MODAL_SHOP, 
      EN_HomeScreenMutation.STOP_BACK_MUSIC_MAP,
      EN_HomeScreenMutation.START_BACK_MUSIC_MAP,
      EN_HomeScreenMutation.PLAY_BACK_MUSIC_MAP,
    ]),
    turnOffVolume() {
      this.STOP_BACK_MUSIC_MAP()
    },
    turnOnVolume() {
      this.START_BACK_MUSIC_MAP()
    },
    openBank() {
      this.SHOW_MODAL_BANK()
    },
    openShop() {
      this.SHOW_MODAL_SHOP()
    }
  }
})
</script>

<style src='./navigation.css' module='styles'>
  
</style>