<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK_AI'>
    <div :class='styles.rulesBlockGame'>

      <div :class='styles.rulesContentWrapper'>
        <div :class='styles.rulesTextWrapper'>
          <div :class='styles.title'>
            Правила игры
          </div>

          <div :class='styles.contentText'>
            <p>
              Привет, я Маша!
            </p>
            <br/>
            <p>
              Предлагаю усовершенствовать наши растения с помощью генной инженерии.
            </p>
            <br/>
            <p>
              Следуя моим подсказкам, смешивай различные гены растений для получения модифицированных овощей и фруктов. Следи за временем, желаю удачи!
            </p>
          </div>
        </div>

        <img src='../../../../../../public/images/startMaria.svg' draggable alt='img of Maria'/>
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