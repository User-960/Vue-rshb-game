<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK'>
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
import { EPestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { EPestControlGameMutation } from '@/store/modules/pestControlGame/mutations'

export default Vue.extend({
  name: 'rulesBlockGame',
  components: {
    closeButton
  },
  computed: {
    ...mapGetters([EPestControlGameGetters.GET_RULES_BLOCK]),
  },
  methods: {
    ...mapMutations([EPestControlGameMutation.HIDE_RULES_BLOCK]),
    startGame() {
      this.HIDE_RULES_BLOCK()
    },
    goMap() {
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./rulesBlockGame.css' module='styles'>
  
</style>