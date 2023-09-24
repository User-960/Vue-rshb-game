<template>
  <div :class='styles.victoryBlockWrapper' v-if='GET_VICTORY_BLOCK'>
    <div :class='styles.victoryBlockGame'>
      <div :class='styles.title'>
        Победа!
      </div>

      <div :class='styles.contentText'>
        <p>
          Ты уничтожил всех вредителей и спас урожай от гибели!
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span>+30</span>
        </p>
        <div :class='styles.resultIcon'>
          <iconButton>
            Б
          </iconButton>
          <p>120</p>
        </div>
        
      </div>

      <div :class='styles.achievement'>
        <div :class='styles.achievementIcon'>
          <p :class='styles.achievementName'>
            “Гроза вредителей”
          </p>
          <iconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 1H5C3.9 1 3.01 1.9 3.01 3L3 15.93C3 16.62 3.35 17.23 3.88 17.59L12 23L20.11 17.59C20.64 17.23 20.99 16.62 20.99 15.93L21 3C21 1.9 20.1 1 19 1ZM12 20.6L5 15.94V3H19V15.93L12 20.6ZM9.99 13.18L7.41 10.59L6 12L10 16L18 8L16.58 6.58L9.99 13.18Z" fill="currentColor"/>
            </svg>
          </iconButton>
        </div>
        <p :class='styles.achievementDesc'>
          Эффективно контролировал распространение вредителей и предотвратил их размножение на всех участках
        </p>
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.btnRestart' @click='restartGame'>
          Ещё раз
        </button>

        <button :class='styles.btnMap' @click='skipToMap'>
          Далее
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
import { EPestControlGameGetters } from '@/store/modules/pestControlGame/getters'
import { EPestControlGameMutation } from '@/store/modules/pestControlGame/mutations'

export default Vue.extend({
  name: 'victoryBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([EPestControlGameGetters.GET_VICTORY_BLOCK]),
  },
  methods: {
    ...mapMutations([
      EPestControlGameMutation.HIDE_VICTORY_BLOCK
    ]),
    restartGame() {
      this.$router.push({ name: 'pest-control' })
    },
    skipToMap() {
      this.HIDE_VICTORY_BLOCK()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./victoryBlockGame.css' module='styles'>
  
</style>