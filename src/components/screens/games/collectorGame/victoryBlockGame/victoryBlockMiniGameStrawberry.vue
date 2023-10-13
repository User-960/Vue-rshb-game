<template>
  <div :class='styles.victoryBlockStrawberryLevelWrapper' v-if='GET_VICTORY_BLOCK_STRAWBERRY_COL'>
    <div :class='styles.victoryBlockStrawberryLevel'>
      <div :class='styles.title'>
        Выполнено!
      </div>

      <div :class='styles.contentText'>
        <p>
          Ты умело управлял роботом - собирателем урожая, и все зрелые ягоды клубники успешно собраны. 
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span>+ {{ GET_POINTS_STRAWBERRY_COL }}</span>
        </p>
        <div :class='styles.resultIcon'>
          <iconButton>
            Б
          </iconButton>
          <p>120</p>
        </div>
        
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.btnRestart' @click='skipToMap'>
          Карта
        </button>

        <button :class='styles.btnMap' @click='nextLevel'>
          Следующий уровень
        </button>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import closeButton from '../../../../ui/button/closeButton/closeButton.vue'
import iconButton from '../../../../ui/button/iconButton/iconButton.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_CollectorGameGetters } from '@/store/modules/collectorGame/getters'
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'

export default Vue.extend({
  name: 'victoryBlockMiniGameStrawberry',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_POINTS_STRAWBERRY_COL,
      EN_CollectorGameGetters.GET_VICTORY_BLOCK_STRAWBERRY_COL,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.HIDE_VICTORY_BLOCK_STRAWBERRY_COL,
      EN_CollectorGameMutation.CLOSE_GAME_FIELD_STRAWBERRY_COL,
    ]),
    skipToMap() {
      this.HIDE_VICTORY_BLOCK_STRAWBERRY_COL()
      this.$router.push({ name: 'home' })
    },
    nextLevel() {
      this.CLOSE_GAME_FIELD_STRAWBERRY_COL()
      this.HIDE_VICTORY_BLOCK_STRAWBERRY_COL()
    }
  }
})
</script>

<style src='./victoryBlockGame.css' module='styles'>
  
</style>