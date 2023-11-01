<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK_COL'>
    <div :class='styles.rulesBlockGame'>
      <div :class='styles.title'>
        Правила игры
      </div>

      <div :class='styles.contentText'>
        <p>
          Управляя роботом - собирателем необходимо выбирать спелые плоды для отправки на склад. Для успешного сбора роботу необходимо находиться неподвижно над плодом во время его падения. Плод должен упасть в область над головой робота. Руками робот плоды не собирает.
        </p>
        <br/>
        <p>
          Робот движется вправо и влево по нажатию кнопок на клавиатуре A и D соответственно или нажатием левой и правой грани экрана. Наибольшее количество баллов приносят спелые красные плоды - 4 балла, а зелёные и тёмно - зелёные по 1 и 2 баллам соответсвенно.
        </p>

        <div :class='styles.rulesInfo'>
          <img :class='[styles.rulesImg, styles.rulesAImg]' src='../../../../../../public/images/rulesA.png' alt='image of key A' />
          <img :class='[styles.rulesImg, styles.rulesDImg]' src='../../../../../../public/images/rulesD.png' alt='image of key d' />

          <div :class='styles.rulesTextImg'>или</div>

          <img :class='[styles.rulesImg, styles.rulesSmartphone]' src='../../../../../../public/images/rulesCollectorSmartphone.svg' alt='image of bush' />
        </div>

        <p>
          Старайся собрать по больше спелых плодов в отведённое время!
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
import { EN_CollectorGameGetters } from '../../../../../store/modules/collectorGame/getters'
import { EN_CollectorGameMutation } from '../../../../../store/modules/collectorGame/mutations'

export default Vue.extend({
  name: 'rulesBlockGame',
  components: {
    closeButton
  },
  computed: {
    ...mapGetters([EN_CollectorGameGetters.GET_RULES_BLOCK_COL]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.HIDE_RULES_BLOCK_COL, 
      EN_CollectorGameMutation.START_GAME_COL
    ]),
    startGame() {
      this.HIDE_RULES_BLOCK_COL()
      this.START_GAME_COL()
    },
    goMap() {
      this.HIDE_RULES_BLOCK_COL()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./rulesBlockGame.css' module='styles'>
  
</style>