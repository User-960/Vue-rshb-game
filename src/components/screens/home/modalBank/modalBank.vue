<template>
  <div :class='styles.modalBankWrapper' v-if='GET_MODAL_BANK_VISIBLE'>
     <div 
      :class='styles.modalBank' 
      data-testid='modalBank' 
      v-click-outside='onClickOutside' 
      v-if='!GET_FIVE_INFO_INTRODUCTION && !GET_SIX_INFO_INTRODUCTION'
    >
      <bank v-if='isFirstCredit && GET_PLAYER_DATA.credit === 0 && GET_PLAYER_DATA.own_coins === 0'>
        <template v-slot:contentImg>
          <img 
            src='../../../../../public/images/bank.svg' 
            alt='bank'  
            draggable='false'
          />
        </template>

        <template v-slot:contentText>
          <p>
            Вам  одобрен кредит 9000 гринкоинов под 3% на весь срок. Заёмные средства необходимо вернуть после получения прибыли от собранного урожая.
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

      <bank 
        v-if='isReturnCredit && 
        !isCongrats && 
        GET_PLAYER_DATA.own_coins >= 0 && 
        GET_PLAYER_DATA.credit === 9000'
      >
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
            Срок кредита подошёл к концу. Можно вернуть займ в полном объёме.
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

      <bank 
        v-if='GET_PLAYER_DATA.minigame.gameFive.complete && 
        GET_PLAYER_DATA.own_coins > 0 && 
        GET_PLAYER_DATA.credit === 0'
      >
        <template v-slot:contentImg>
          <img 
            src='../../../../../public/images/flowers.svg' 
            alt='bank'  
            draggable='false'
          />
        </template>

        <template v-slot:contentText>
          <p>
            Благодарим, что выбрали наш банк!
          </p>
        </template>

        <template v-slot:nextBtn>
          <button 
            :class='styles.finishBtn' 
            @click='finishGame'
          >
            Завершить
          </button>
        </template>
      </bank>
    </div>

    <infoBlockM v-click-outside='skipInfoIntroduction' v-if='GET_FIVE_INFO_INTRODUCTION'>
      <template v-slot:contentText>
        <p>
          Теперь Вы можете получить гринкоины - это цифровая валюта, с помощью которой Вы можете совершать покупки нового оборудования в магазине и заплатить своим друзьям за помощь.
        </p>
        <br/>
        <p>  
          Заработать больше гринкоинов можно после продажи урожая, использовав их для возврата кредита банку.
        </p>
      </template>
      <template v-slot:nextBtn>
        <skipButton @onclick="skipInfoIntroduction">
          Далее
        </skipButton>
      </template>
    </infoBlockM>

    <infoBlockM v-click-outside='skipInfoIntroduction' v-if='GET_SIX_INFO_INTRODUCTION'>
      <template v-slot:contentText>
        <p>
          В магазине можно приобрести необходимое оборудование, которое потребуется для прохождения мини игр в локации Дом.
        </p>
        <br/>
        <p>  
          Использование современной агротехники поможет повысить урожайность, сократить издержки, качественно и быстро собрать урожай.
        </p>
      </template>
      <template v-slot:nextBtn>
        <skipButton @onclick="skipInfoIntroduction">
          Далее
        </skipButton>
      </template>
    </infoBlockM>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import linkButton from '../../../ui/button/linkButton/linkButton.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import { EN_HomeScreenGetters } from '../../../../store/modules/homeScreen/getters'
import { EN_HomeScreenMutation } from '../../../../store/modules/homeScreen/mutations'
import bank from '../../../ui/bank/bank.vue'
import skipButton from '../../../ui/button/skipButton/skipButton.vue'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import vClickOutside from 'v-click-outside'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import infoBlockM from '@/components/ui/infoBlock/infoBlockM/infoBlockM.vue'

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
    infoBlockM
  },
  watch: {
    GET_MODAL_BANK_VISIBLE() {
      if (
        this.GET_MODAL_BANK_VISIBLE && 
        this.GET_PLAYER_DATA.credit === 0 && 
        this.GET_PLAYER_DATA.own_money === 0
      ) {
        this.SHOW_FIVE_INFO_INTRODUCTION()
      }
    },
  },
  computed: {
    ...mapGetters([
      EN_HomeScreenGetters.GET_MODAL_BANK_VISIBLE,
      EN_HomeScreenGetters.GET_FIVE_INFO_INTRODUCTION,
      EN_HomeScreenGetters.GET_SIX_INFO_INTRODUCTION,

      EN_PlayerDataGetters.GET_PLAYER_DATA,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_HomeScreenMutation.HIDE_MODAL_BANK,
      EN_HomeScreenMutation.SHOW_FIVE_INFO_INTRODUCTION,
      EN_HomeScreenMutation.HIDE_FIVE_INFO_INTRODUCTION,
      EN_HomeScreenMutation.SHOW_SIX_INFO_INTRODUCTION,
      EN_HomeScreenMutation.HIDE_SIX_INFO_INTRODUCTION,

      EN_HomeScreenMutation.SHOW_ARROW_UP_SHOP,

      EN_PlayerDataMutation.TAKE_CREDIT,
      EN_PlayerDataMutation.RETURN_CREDIT,
    ]),
    ...mapActions([
      EN_PlayerDataActions.UPDATE_PLAYER_CREDIT
    ]),
    takeCredit() {
      if (this.isFirstCredit && !this.GET_PLAYER_DATA.minigame.gameFive.complete) {
        this.TAKE_CREDIT()
        this.UPDATE_PLAYER_CREDIT(this.GET_PLAYER_DATA)

        this.isFirstCredit = false
        this.isCongrats = true
      }
    },
    skipCongrats() {
      if (this.isCongrats) {
        this.isCongrats = false

        if (!this.GET_SIX_INFO_INTRODUCTION) {
          this.SHOW_SIX_INFO_INTRODUCTION()
        }
      }
    },
    returnCredit() {
      if (this.isReturnCredit && this.GET_PLAYER_DATA.own_money >= 9270) {
        this.RETURN_CREDIT()
        this.UPDATE_PLAYER_CREDIT(this.GET_PLAYER_DATA)

        this.isReturnCredit = false
      }
    },
    finishGame() {
      this.HIDE_MODAL_BANK()
      this.$router.push({ name: 'finish' })
    },
    skipInfoIntroduction() {
      if (this.GET_FIVE_INFO_INTRODUCTION) {
        this.HIDE_FIVE_INFO_INTRODUCTION() 
        return
      }

      if (this.GET_SIX_INFO_INTRODUCTION) {
        this.HIDE_SIX_INFO_INTRODUCTION() 
        this.HIDE_MODAL_BANK()
        this.SHOW_ARROW_UP_SHOP()
        return
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