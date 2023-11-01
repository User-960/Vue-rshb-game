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
              Предлагаю усовершенствовать наши растения с помощью генной инженерии.
            </p>
            <br/>
            <p>
              Следи за моими подсказками и перетаскивай колбы с генами на столе в область над большой ёмкостью с землёй. Необходимо вовремя успеть смешать 3 разных гена, пока происходит реакция. Следи за временем, у тебя всё получится!
            </p>

            <div :class='styles.rulesInfo'>
              <img :class='[styles.rulesImg, styles.rulesBigFlaskImg]' src='../../../../../../public/images/rulesGeneticBigFlask.svg' alt='image of big flask' />

              <img :class='[styles.rulesArrow]' src='../../../../../../public/images/arrowUpBank.svg' alt='image of arrow' />

              <img :class='styles.rulesImg' src='../../../../../../public/images/rulesGeneticFlask.svg' alt='image of flask' />

              <img :class='[styles.rulesArrow]' src='../../../../../../public/images/arrowUpBank.svg' alt='image of arrow' />

              <img :class='styles.rulesImg' src='../../../../../../public/images/rulesGeneticFlasks.svg' alt='image of flasks' />
            </div>

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
      EN_GeneticGameMutation.START_FINISH_TIMER_TOMATO_GN,
      EN_GeneticGameMutation.START_NEW_GAME_GN,
    ]),
    startGame() {
      this.HIDE_RULES_BLOCK_GN()
      this.START_NEW_GAME_GN()

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