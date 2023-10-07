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
              Привет, я Данил!
            </p>
            <br/>
            <p>
              Предлагаю подобрать наилучшие условия для растений, чтобы они выросли быстрее.
            </p>
            <br/>
            <p>
              Следуя моим подсказкам, меняй показания на приборе. Важно, чтобы индикатор жизнеспособности растения не опускался до красного уровня. Желаю удачи!
            </p>
          </div>
        </div>

        <img src='../../../../../../public/images/startDanil.svg' draggable alt='img of Danil'/>
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