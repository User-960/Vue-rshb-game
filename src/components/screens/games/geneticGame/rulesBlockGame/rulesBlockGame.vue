<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK_GN'>
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
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import { EN_GeneticGameMutation } from '@/store/modules/geneticGame/mutations'

export default Vue.extend({
  name: 'rulesBlockGame',
  components: {
    closeButton
  },
  computed: {
    ...mapGetters([EN_GeneticGameGetters.GET_RULES_BLOCK_GN]),
  },
  methods: {
    ...mapMutations([
      EN_GeneticGameMutation.HIDE_RULES_BLOCK_GN, 
      EN_GeneticGameMutation.START_GAME_GN,
      EN_GeneticGameMutation.START_FINISH_TIMER_TOMATO_GN
    ]),
    startGame() {
      this.HIDE_RULES_BLOCK_GN()
      this.START_GAME_GN()

      this.START_FINISH_TIMER_TOMATO_GN()
    },
    goMap() {
      this.HIDE_RULES_BLOCK_GN()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./rulesBlockGame.css' module='styles'>
  
</style>