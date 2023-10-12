<template>
  <div :class='styles.victoryBlockWrapper' v-if='GET_VICTORY_BLOCK_COL'>
    <div :class='styles.victoryBlockGame'>
      <div :class='styles.title'>
        Победа!
      </div>

      <div :class='styles.contentText'>
        <p>
          Ты умело управлял роботом - собирателем урожая, и все зрелые плоды успешно собраны. 
        </p>
      </div>

      <div :class='styles.result'>
        <p>
          Накоплено баллов: <span>+ {{ GET_POINTS_COL }}</span>
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
            “Великий сборщик”
          </p>
          <iconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
              <path d="M19.9861 7.41088C18.1601 6.33952 15.2053 4.35167 11.0664 6.92294C10.4578 6.10666 8.75675 5.45546 7.17425 6.43499C5.19613 7.6594 4.05288 9.09495 3.44423 10.0133C2.83558 10.9316 -2.13774 20.9112 6.68772 23.5131C13.7481 25.5946 19.1131 24.3612 20.6348 23.1878C22.6636 22.1164 25.5 20.3311 25.5 16.5192C25.5 12.7073 23.4859 6.79868 19.9861 7.41088Z" stroke="#89E159" stroke-width="2"/>
              <path d="M7.15768 12.7428C6.71513 14.8232 6.12108 16.0838 5.47428 15.9463C4.82749 15.8088 4.58694 14.3452 5.02949 12.2648C5.47204 10.1845 6.95523 8.24551 7.89805 8.89244C8.84088 9.53936 7.60023 10.6625 7.15768 12.7428Z" fill="#89E159"/>
              <path d="M14.0023 6.88653C13.8087 8.27676 14.312 8.2975 14.7876 8.28258C15.9185 8.04915 15.8806 7.49812 15.6689 6.97791L14.9617 5.0214L14.3527 3.36441C14.2613 3.90743 14.2032 5.44338 14.0023 6.88653Z" fill="#89E159" stroke="#89E159" stroke-width="2"/>
              <path d="M13.6339 7.55311C14.2157 8.33671 14.458 8.5845 14.8826 8.37749C15.8121 7.70171 15.5669 7.21479 15.1643 6.81867L13.7213 5.31094L12.4901 4.03812C12.6276 4.57849 12.7616 6.37819 13.6339 7.55311Z" fill="#89E159" stroke="#89E159" stroke-width="2"/>
              <path d="M14.6688 8.14382C13.7516 7.50979 14.7083 5.39673 19.0526 3.93359C18.2801 5.68935 15.2961 8.6803 14.6688 8.14382Z" fill="#89E159" stroke="#89E159" stroke-width="2"/>
            </svg>
          </iconButton>
        </div>
        <p :class='styles.achievementDesc'>
          Собрано более 85% спелых плодов.
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
import { EN_CollectorGameGetters } from '@/store/modules/collectorGame/getters'
import { EN_CollectorGameMutation } from '@/store/modules/collectorGame/mutations'

export default Vue.extend({
  name: 'victoryBlockGame',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_CollectorGameGetters.GET_VICTORY_BLOCK_COL,
      EN_CollectorGameGetters.GET_POINTS_COL
    ]),
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.HIDE_VICTORY_BLOCK_COL,
      EN_CollectorGameMutation.RESTART_GAME_COL,
    ]),
    restartGame() {
      this.RESTART_GAME_COL()
    },
    skipToMap() {
      this.HIDE_VICTORY_BLOCK_COL()
      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./victoryBlockGame.css' module='styles'>
  
</style>