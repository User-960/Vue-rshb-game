<template>
  <div :class='styles.modalBankWrapper' v-if='GET_MODAL_BANK_VISIBLE'>
    <div :class='styles.modalBank' data-testid='modalBank'>
      <closeButton @onclick="$store.commit('HIDE_MODAL_BANK')"/>

      <bank v-if='isFirstCredit'>
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
          <skipButton @onclick="takeCredit">
            Взять деньги
          </skipButton>
        </template>

      </bank>

      <bank v-if='isCongrats'>
        <template v-slot:contentImg>
          <img 
            src='../../../../../public/images/flowers.svg' 
            alt='bank'  
            draggable='false'
          />
        </template>

        <template v-slot:contentText>
          <p>
            Благодарим, что выбрали наш банк! Денежные средства будут перечислены на ваш счет.
          </p>
        </template>

        <template v-slot:nextBtn>
          <skipButton @onclick="skipCongrats">
            Выйти
          </skipButton>
        </template>
      </bank>

      <bank v-if='isReturnCredit'>
        <template v-slot:contentImgs>
          <div>
            <img 
              src='../../../../../public/images/bank.svg' 
              alt='bank'  
              draggable='false'
            />
            <span>Кредит</span>
          </div>
          <div>
            <img 
              src='../../../../../public/images/plus.svg' 
              alt='bank'  
              draggable='false'
            />
          </div>
          <div>
            <img 
              src='../../../../../public/images/bankPercent.svg' 
              alt='bank'  
              draggable='false'
            />
            <span>% за пользование заемными средствами</span>
          </div>
        </template>

        <template v-slot:contentText>
          <p>
            Срок вашего кредитование подошел к концу, просим вернуть ссуженные средства.
          </p>
        </template>

        <template v-slot:nextBtn>
          <skipButton @onclick="returnCredit">
            Вернуть деньги
          </skipButton>
        </template>
      </bank>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import linkButton from '../../../ui/button/linkButton/linkButton.vue'
import closeButton from '../../../ui/button/closeButton/closeButton.vue'
import { mapMutations, mapGetters } from 'vuex'
import { EMapBackGetters } from '../../../../store/modules/homeScreen/getters'
import { EHomeScreenMutation } from '../../../../store/modules/homeScreen/mutations'
import bank from '../../../ui/bank/bank.vue'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'

export default Vue.extend({
  name: 'modalBank',
  data: () => ({
    isFirstCredit: true,
    isReturnCredit: false,
    isCongrats: false,
  }),
  components: {
    skipButton,
    linkButton,
    bank,
    closeButton
  },
  computed: {
    ...mapGetters([EMapBackGetters.GET_MODAL_BANK_VISIBLE]),
  },
  methods: {
    ...mapMutations([EHomeScreenMutation.HIDE_MODAL_BANK]),
    takeCredit() {
      if (this.isFirstCredit) {
        this.isFirstCredit = false
        this.isCongrats = true
      }
    },
    skipCongrats() {
      if (this.isCongrats) {
        this.isCongrats = false
        this.isReturnCredit = true
      }
    },
    returnCredit() {
      if (this.isReturnCredit) {
        this.isReturnCredit = false
        this.isFirstCredit = true
        this.HIDE_MODAL_BANK()
      }
    }
  }
})
</script>

<style src='./modalBank.css' module='styles'>
  
</style>