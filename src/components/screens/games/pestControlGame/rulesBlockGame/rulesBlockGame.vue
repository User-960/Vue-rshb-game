<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK_PS'>
    <div :class='styles.rulesBlockGame'>
      <div :class='styles.title'>
        Правила игры
      </div>

      <div :class='styles.contentText'>
        <p>
          На твои грядки напали вредители. Используй дрона, чтобы защитить растения от насекомых. С его помощью ты сможешь распылять защитные средства более продуктивно, управляя агророботом прямо из-за своего рабочего стола.
        </p>
        <br/>
        <p>
          Если индикатор стал красным, кликни сначала один раз на дрона, затем один раз на необходимое защитное средство, потом выбери зараженный участок.
        </p>
        <br/>
        <p>
          Будь внимателен, для каждого вида вредителей подходит определенный инсектицид.
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
import { EN_PestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { EN_PestControlGameMutation } from '@/store/modules/pestControlGame/mutations'

export default Vue.extend({
  name: 'rulesBlockGame',
  components: {
    closeButton
  },
  computed: {
    ...mapGetters([EN_PestControlGameGetters.GET_RULES_BLOCK_PS]),
  },
  methods: {
    ...mapMutations([
      EN_PestControlGameMutation.HIDE_RULES_BLOCK_PS, 
      EN_PestControlGameMutation.START_GAME_PS,
      EN_PestControlGameMutation.GAME_LOOP_PS
    ]),
    startGame() {
      this.HIDE_RULES_BLOCK_PS()
      this.START_GAME_PS()
      this.GAME_LOOP_PS()
    },
    goMap() {
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./rulesBlockGame.css' module='styles'>
  
</style>