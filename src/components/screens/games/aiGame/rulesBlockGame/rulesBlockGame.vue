<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK_AI'>
    <div :class='styles.rulesBlockGame'>
      <div :class='styles.title'>
        Правила игры
      </div>

      <div :class='styles.contentText'>
        <p>
          Установленная автоматизированная система контроля влажности почвы и температуры воздуха нуждается в настройке. Необходимо настроить работу датчиков используя записи в блокноте Данила.
        </p>
        <br/>
        <p>
          Когда один из индикаторов участка стал красным, кликни на участок, а затем на блокнот и на клавиатуру. Показатели сразу нормализуются. 
        </p>

        <div :class='styles.rulesInfo'>
          <img :class='[styles.rulesImg, styles.rulesImgLevel]' src='../../../../../../public/images/tomatoBushGreen.svg' alt='image of bush' />
          
          <img :class='[styles.rulesArrow]' src='../../../../../../public/images/arrowUpBank.svg' alt='image of arrow' />

          <img :class='styles.rulesImg' src='../../../../../../public/images/bookTable.svg' alt='image of book' />

          <img :class='[styles.rulesArrow]' src='../../../../../../public/images/arrowUpBank.svg' alt='image of arrow' />

          <img :class='styles.rulesImg' src='../../../../../../public/images/numPad.svg' alt='image of numpad' />
        </div>

        <!-- <p>
          При появлении проблемы системы на участке, в правом нижнем углу экрана, необходимо нажать на выделенный красным цветом участок и нажать кнопку перезапуска системы под ним.
        </p> -->
        <p>
          При ошибке в системе, кликни на участок, а затем на кнопку.
        </p>

        <div :class='styles.rulesInfo'>
          <img :class='[styles.rulesWarningImg]' src='../../../../../../public/images/rulesAiSystem.svg' alt='image of warning' />
          
          <img :class='[styles.rulesArrow]' src='../../../../../../public/images/arrowUpBank.svg' alt='image of arrow' />

          <img :class='styles.rulesImg' src='../../../../../../public/images/rulesAiBtn.svg' alt='image of button' />
        </div>
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.btnMap' @click='goMap'>
          Карта
        </button>

        <button :class='styles.btnStartGame' @click='startGame'>
          Играть
        </button>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import closeButton from '../../../../ui/button/closeButton/closeButton.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_AiGameGetters } from '@/store/modules/aiGame/getters'
import { EN_AiGameMutation } from '@/store/modules/aiGame/mutations'

export default Vue.extend({
  name: 'rulesBlockGame',
  components: {
    closeButton
  },
  computed: {
    ...mapGetters([EN_AiGameGetters.GET_RULES_BLOCK_AI, EN_AiGameGetters.GET_START_GAME_AI]),
  },
  methods: {
    ...mapMutations([
      EN_AiGameMutation.HIDE_RULES_BLOCK_AI, 
      EN_AiGameMutation.START_GAME_AI,
      EN_AiGameMutation.GAME_LOOP_AI,
      EN_AiGameMutation.START_FINISH_TIMER_AI,
      EN_AiGameMutation.START_NEW_GAME_AI,
    ]),
    startGame() {
      this.HIDE_RULES_BLOCK_AI()

      this.START_NEW_GAME_AI()
      this.START_GAME_AI()
      this.GAME_LOOP_AI()
      this.START_FINISH_TIMER_AI()
    },
    goMap() {
      this.HIDE_RULES_BLOCK_AI()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./rulesBlockGame.css' module='styles'>
  
</style>