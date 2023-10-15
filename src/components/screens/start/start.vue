<template>
    <layout>
      <template v-slot:default>
        <div :class='styles.startScreen'>
          <topSection/>

          <section :class='styles.textSection'>
            <h2 :class='styles.textTitle'>Дорогой друг!</h2>
              <div :class='[styles.textBlock, styles.firstP]'>
                <p>
                  Приветствуем тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает!
                </p>
                <img src='../../../../public/images/drone.svg' draggable='false' alt='drone' />
              </div>
              <br/>
              <div :class='[styles.textBlock, styles.secondP]'>
                <p >
                  Помоги главному герою оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.
                </p>
                <img src='../../../../public/images/collector.svg' draggable='false' alt='collector robot' />
              </div>

              <div :class='styles.wrapperBtn'>
                <skipButton @onclick="openBlockChooseCharacter" data-testid='startGameBtn'>
                  Начать игру
                </skipButton>
              </div>
          </section>

          <chooseCharacter />

          <authPlayer/>

        </div>
      </template>
    </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import skipButton from '../../ui/button/skipButton/skipButton.vue'
import topSection from '../../ui/section/topSection/topSection.vue'
import layout from '../../layout/layout.vue'
import chooseCharacter from './chooseCharacter/chooseCharacter.vue'
import authPlayer from './authPlayer/authPlayer.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_StartScreenMutation } from '@/store/modules/startScreen/mutations'
import { EN_PlayerDataActions } from '@/store/modules/playerData/actions'
import { EN_USER } from '@/config/app.constants'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'start',
  data: () => ({}),
  components: {
    layout,
    skipButton,
    topSection,
    chooseCharacter,
    authPlayer
  },
  created() {
    // const localPlayerId = localStorage.getItem(EN_USER.PLAYER_ID)
    const playerData = localStorage.getItem(EN_USER.PLAYER_DATA)

    if (playerData) {
      this.GET_PLAYER(JSON.parse(playerData).id)
    }
  },
  watch: {
    GET_PLAYER_DATA() {
      if (this.GET_PLAYER_DATA.name !== null && this.GET_PLAYER_DATA.gender !== null) {
        this.$router.push({ name: 'home' })
      }
    }
  },
  computed: {
    ...mapGetters([
      EN_PlayerDataGetters.GET_PLAYER_DATA
    ])
  },
  methods: {
    ...mapMutations([EN_StartScreenMutation.SHOW_CHOOSE_CHARACTER]),
    ...mapActions([EN_PlayerDataActions.GET_PLAYER]),
    openBlockChooseCharacter() {
      this.SHOW_CHOOSE_CHARACTER()
    }
  }
});
</script>

<style src='./start.css' module='styles'>

</style>