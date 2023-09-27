<template>
  <div :class='styles.rulesBlockWrapper' v-if='GET_RULES_BLOCK_COL'>
    <div :class='styles.rulesBlockGame'>
      <div :class='styles.title'>
        Правила игры
      </div>

      <div :class='styles.contentText'>
        <p>
          Управляй роботом - собирателем урожая (двигай его влево или вправо). За разные плоды ты получаешь разное количество очков. За красные - 4 очка, за тёмно-зеленые - 2 очка, за зеленые - 1.
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