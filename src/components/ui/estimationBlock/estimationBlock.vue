<template>
  <div :class='styles.estimationBlockWrapper' v-if='GET_ESTIMATION_BLOCK_VISIBLE'>
    <div :class='styles.estimationBlock'>

      <div :class='styles.contentWrapper'>
        <div :class='styles.contentText'>
          <p>
            Оцените игру от 1 до 5
          </p>
        </div>
      </div>

      <div :class='styles.starWrapper'>
        <div  
          @click='chooseFirstStar' 
          :class='[styles.star, styles.firstStar, {[styles.checkedFirstStar]: isCheckedFirstStar}]'
        ></div>

        <div 
          @click='chooseSecondStar' 
          :class='[styles.star, styles.secondStar, {[styles.checkedSecondStar]: isCheckedSecondStar}]'
        ></div>

        <div 
          @click='chooseThirdStar' 
          :class='[styles.star, styles.thirdStar, {[styles.checkedThirdStar]: isCheckedThirdStar}]'
        ></div>

        <div 
          @click='chooseFourthStar' 
          :class='[styles.star, styles.fourthStar, {[styles.checkedFourthStar]: isCheckedFourthStar}]'
        ></div>

        <div 
          @click='chooseFifthStar' 
          :class='[styles.star, styles.fifthStar, {[styles.checkedFifthStar]: isCheckedFifthStar}]'
        ></div>
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.skipBtn' @click='skipGame'>
          Пропустить
        </button>

        <button 
          :class='[styles.estimateBtn, {[styles.estimateNonBtn]: !isCheckedFirstStar}]' 
          @click='estimateGame' 
          data-testid='estimateBtn'
        >
          Оценить
        </button>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import closeButton from '../button/closeButton/closeButton.vue'
import iconButton from '../button/iconButton/iconButton.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_FinishScreenGetters } from '../../../store/modules/finishScreen/getters'
import { EN_FinishScreenMutation } from '@/store/modules/finishScreen/mutations'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'

export default Vue.extend({
  name: 'estimationBlock',
  data: () => ({
    isCheckedFirstStar: false,
    isCheckedSecondStar: false,
    isCheckedThirdStar: false,
    isCheckedFourthStar: false,
    isCheckedFifthStar: false,
  }),
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_FinishScreenGetters.GET_ESTIMATION_BLOCK_VISIBLE,
      EN_PlayerDataGetters.GET_PLAYER_DATA
    ])
  },
  methods: {
    ...mapActions([EN_PlayerDataActions.UPDATE_PLAYER_ESTIMATE]),
    ...mapMutations([
      EN_FinishScreenMutation.HIDE_ESTIMATION_BLOCK, 
      EN_PlayerDataMutation.ESTIMATE_GAME
    ]),
    skipGame() {
      this.HIDE_ESTIMATION_BLOCK()
    },
    estimateGame() {
      if (this.isCheckedFirstStar) {
        this.UPDATE_PLAYER_ESTIMATE(this.GET_PLAYER_DATA)
        this.HIDE_ESTIMATION_BLOCK()
      }
    },
    chooseFirstStar() {
      this.isCheckedFirstStar = true
      this.isCheckedSecondStar = false
      this.isCheckedThirdStar = false
      this.isCheckedFourthStar = false
      this.isCheckedFifthStar = false

      this.ESTIMATE_GAME(1)
    },
    chooseSecondStar() {
      this.isCheckedFirstStar = true
      this.isCheckedSecondStar = true
      this.isCheckedThirdStar = false
      this.isCheckedFourthStar = false
      this.isCheckedFifthStar = false

      this.ESTIMATE_GAME(2)
    },
    chooseThirdStar() {
      this.isCheckedFirstStar = true
      this.isCheckedSecondStar = true
      this.isCheckedThirdStar = true
      this.isCheckedFourthStar = false
      this.isCheckedFifthStar = false

      this.ESTIMATE_GAME(3)
    },
    chooseFourthStar() {
      this.isCheckedFirstStar = true
      this.isCheckedSecondStar = true
      this.isCheckedThirdStar = true
      this.isCheckedFourthStar = true
      this.isCheckedFifthStar = false

      this.ESTIMATE_GAME(4)
    },
    chooseFifthStar() {
      this.isCheckedFirstStar = true
      this.isCheckedSecondStar = true
      this.isCheckedThirdStar = true
      this.isCheckedFourthStar = true
      this.isCheckedFifthStar = true

      this.ESTIMATE_GAME(5)
    }
  }
})
</script>

<style src='./estimationBlock.css' module='styles'>
  
</style>