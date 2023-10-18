<template>
  <div :class='styles.modalBankWrapper' v-if='GET_MODAL_BANK_VISIBLE'>
    <div :class='styles.modalBank' data-testid='modalBank' v-click-outside='onClickOutside'>
      <div :class='styles.closeBtnWrapper'>
        <closeButton @onclick='HIDE_MODAL_BANK'/>
      </div>

      <bank v-if='isFirstCredit && GET_PLAYER_DATA.credit === 0'>
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
            Взять гринкоины
          </skipButton>
        </template>

      </bank>

      <bank v-if='!isFirstCredit && isCongrats && GET_PLAYER_DATA.credit === 9000'>
        <template v-slot:contentImg>
          <img 
            src='../../../../../public/images/flowers.svg' 
            alt='bank'  
            draggable='false'
          />
        </template>

        <template v-slot:contentText>
          <p>
            Благодарим, что выбрали наш банк! Гринкоины будут перечислены на ваш счет.
          </p>
        </template>

        <template v-slot:nextBtn>
          <skipButton @onclick="skipCongrats">
            Выйти
          </skipButton>
        </template>
      </bank>

      <bank v-if='isReturnCredit && !isCongrats && GET_PLAYER_DATA.credit > 0'>
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
            <span>3% за пользование заемными средствами</span>
          </div>
        </template>

        <template v-slot:contentText>
          <p>
            Срок вашего кредитование подошел к концу, просим вернуть ссуженные средства.
          </p>
        </template>

        <template v-slot:nextBtn>
          <button 
            :class='[
              styles.returnCreditBtn,
              {[styles.returnCreditBtnNonActive]: GET_PLAYER_DATA.own_money < 9270}
            ]' 
            @click='returnCredit'
          >
            Вернуть деньги
          </button>
        </template>
      </bank>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import linkButton from '../../../ui/button/linkButton/linkButton.vue'
import closeButton from '../../../ui/button/closeButton/closeButton.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import { EN_HomeScreenGetters } from '../../../../store/modules/homeScreen/getters'
import { EN_HomeScreenMutation } from '../../../../store/modules/homeScreen/mutations'
import bank from '../../../ui/bank/bank.vue'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import vClickOutside from 'v-click-outside'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'

export default Vue.extend({
  name: 'modalBank',
  data: () => ({
    isFirstCredit: true,
    isReturnCredit: true,
    isCongrats: false,
  }),
  components: {
    skipButton,
    linkButton,
    bank,
    closeButton
  },
  computed: {
    ...mapGetters([
      EN_HomeScreenGetters.GET_MODAL_BANK_VISIBLE,

      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {
    ...mapMutations([
      EN_HomeScreenMutation.HIDE_MODAL_BANK,

      EN_PlayerDataMutation.TAKE_CREDIT,
      EN_PlayerDataMutation.RETURN_CREDIT,
    ]),
    ...mapActions([
      EN_PlayerDataActions.UPDATE_PLAYER_CREDIT
    ]),
    takeCredit() {
      if (this.isFirstCredit) {
        this.TAKE_CREDIT()
        this.UPDATE_PLAYER_CREDIT(this.GET_PLAYER_DATA)

        this.isFirstCredit = false
        this.isCongrats = true
      }
    },
    skipCongrats() {
      if (this.isCongrats) {
        this.HIDE_MODAL_BANK()
        this.isCongrats = false
      }
    },
    returnCredit() {
      if (this.isReturnCredit && this.GET_PLAYER_DATA.own_money >= 9270) {
        this.RETURN_CREDIT()
        this.UPDATE_PLAYER_CREDIT(this.GET_PLAYER_DATA)

        this.isReturnCredit = false
      }
    },
    onClickOutside (event: any) {
      this.HIDE_MODAL_BANK()
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
})
</script>

<style src='./modalBank.css' module='styles'>
  
</style>