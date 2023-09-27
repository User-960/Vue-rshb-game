<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK_AI'>
    <div :class='styles.rulesBlockGame'>
      <div :class='styles.title'>
        Правила игры
      </div>

      <div :class='styles.contentText'>
        <p>
          Здорово, ты установил на своих грядках автоматизированные системы по контролю за влажностью почвы и температурой воздуха.
        </p>
        <br/>
        <p>
          Теперь тебе необходимо  проследить за работой датчиков и вовремя исправить ошибки, когда они возникнут.
        </p>
        <br/>
        <p>
          Если индикатор стал красным, кликни сначала один раз на участок, затем один раз на инструкцию, и показатели сразу нормализуются.
        </p>
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
    ...mapGetters([EN_AiGameGetters.GET_RULES_BLOCK_AI]),
  },
  methods: {
    ...mapMutations([
      EN_AiGameMutation.HIDE_RULES_BLOCK_AI, 
      EN_AiGameMutation.START_GAME_AI,
      EN_AiGameMutation.GAME_LOOP_AI,
      EN_AiGameMutation.START_FINISH_TIMER_AI
    ]),
    startGame() {
      this.HIDE_RULES_BLOCK_AI()
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