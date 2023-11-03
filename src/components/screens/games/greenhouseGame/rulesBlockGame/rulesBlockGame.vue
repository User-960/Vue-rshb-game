<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK_GH'>
    <div :class='styles.rulesBlockGame'>

      <div :class='styles.rulesContentWrapper'>
        <div :class='styles.rulesTextWrapper'>
          <div :class='styles.title'>
            Правила игры
          </div>

          <div :class='styles.contentText'>
            <p>
              Привет, я Данил!
            </p>
            <br/>
            <p>
              Сейчас мы подберём наилучшие условия для растений, что бы рост был продуктивным.
            </p>
            <br/>
            <p>
             Следуя моим подсказкам, выбирай точные показания приборов из предложенных вариантов и выполняй мои рекомендации верно. Важно, чтобы индикатор жизнеспособности растения не опускался до красного уровня, иначе оно погибнет.
            </p>
            
            <div :class='styles.rulesInfo'>
              <img :class='[styles.rulesImg, styles.rulesTerminalImg]' src='../../../../../../public/images/rulesGreenhouseTerminal.svg' alt='image of laboratory' />

              <img :class='[styles.rulesArrow]' src='../../../../../../public/images/arrowUpBank.svg' alt='image of arrow' />

              <img :class='styles.rulesImg' src='../../../../../../public/images/rulesGreenhouseTask.svg' alt='image of task' />
            </div>

          </div>
        </div>

        <img src='../../../../../../public/images/startDanil.svg' draggable alt='img of Danil'/>
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.btnMap' @click='goMap'>
          Карта
        </button>

        <button 
          :class='styles.btnStartGame' 
          @click='startGame' 
          data-testid='rulesBlockBtnGH'
        >
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
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'

export default Vue.extend({
  name: 'rulesBlockGame',
  components: {
    closeButton
  },
  computed: {
    ...mapGetters([EN_GreenhouseGameGetters.GET_RULES_BLOCK_GH]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.HIDE_RULES_BLOCK_GH, 
      EN_GreenhouseGameMutation.START_GAME_GH,
      EN_GreenhouseGameMutation.START_FINISH_TIMER_TOMATO_GH,
      EN_GreenhouseGameMutation.START_TOMATO_LEVEL_GH,
      EN_GreenhouseGameMutation.SHOW_TOMATO_SOIL_MOISTURE_CHECK_GH,
      EN_GreenhouseGameMutation.START_NEW_GAME_GH,
    ]),
    startGame() {
      this.HIDE_RULES_BLOCK_GH()
      
      this.START_NEW_GAME_GH()
      this.START_GAME_GH()

      this.START_TOMATO_LEVEL_GH()
      this.SHOW_TOMATO_SOIL_MOISTURE_CHECK_GH()
      this.START_FINISH_TIMER_TOMATO_GH()
    },
    goMap() {
      this.HIDE_RULES_BLOCK_GH()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./rulesBlockGame.css' module='styles'>
  
</style>