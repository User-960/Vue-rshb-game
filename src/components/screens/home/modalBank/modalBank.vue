<template>
  <div :class='styles.modalBankWrapper' v-if='GET_MODAL_BANK_VISIBLE'>
    <div :class='styles.modalBank' data-testid='modalBank'>
      <button 
        @click="$store.commit('HIDE_MODAL_BANK')" 
        :class='styles.close' 
        aria-label='close modal window' 
        data-testid='closeModalBtn'
      >
        <svg width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fill="#e60c0cc8"></path>
        </svg>
      </button>

      <bank>

        <template v-slot:contentImg>
          <img 
            src='../../../../../public/images/bank.svg' 
            alt='bank'  
            draggable='false'
          />
        </template>

        <template v-slot:contentText>
          <p>
            Вам одобрили кредит. Процент за пользование кредитом составит 3%. Заемные средства необходимо вернуть после прохождения первой локации.
          </p>
        </template>

        <template v-slot:nextBtn>
          <skipButton @onclick="nextFunc">
            Взять деньги
          </skipButton>
        </template>

      </bank>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import linkButton from '../../../ui/button/linkButton/linkButton.vue'
import { mapGetters } from 'vuex'
import { EMapBackGetters } from '../../../../store/modules/homeScreen/getters'
import bank from '../../../ui/bank/bank.vue'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'

export default Vue.extend({
  name: 'modalBank',
  data: () => ({
    isGameAiAvailable: true,
    isGameDroneAvailable: false,
    isGameSystem: false,
  }),
  components: {
    skipButton,
    linkButton,
    bank
  },
  computed: {
    ...mapGetters([EMapBackGetters.GET_MODAL_BANK_VISIBLE]),
  },
  methods: {
    nextFunc() {
      if (this.isGameAiAvailable) {
        console.log('Open Game AI')
      }
    }
  }
})
</script>

<style src='./modalBank.css' module='styles'>
  
</style>