<template>
    <layout>
      <template v-slot:default v-if='GET_TABLE_RATING'>
        <ratingTable/>
      </template>

      <template v-slot:default v-else-if='!GET_TABLE_RATING'>
        <div :class='styles.finishScreen'>
          <topSection/>

          <section :class='styles.statSection'>
            <div :class='styles.blockTitle'>
              <h2 :class='styles.title'>Статистика</h2>
              <social/>
            </div>

            <ul :class='styles.statBlock'>
              <li :class='styles.result'>Затраты:<span>2000 гринкоинов</span></li>
              <li :class='styles.result'>В т.ч. заемные средства:<span>1000 гринкоинов</span></li>
              <li :class='styles.result'>Прибыль:<span>300 гринкоинов</span></li>

              <li :class='styles.result'>Награды:
                <span>
                  <iconButton @onclick="showAwardsFunc">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17 10.43V2H7V10.43C7 10.78 7.18 11.11 7.49 11.29L11.67 13.8L10.68 16.14L7.27 16.43L9.86 18.67L9.07 22L12 20.23L14.93 22L14.15 18.67L16.74 16.43L13.33 16.14L12.34 13.8L16.52 11.29C16.82 11.11 17 10.79 17 10.43ZM11 11.07L9 9.87V4H11V11.07ZM15 9.87L13 11.07V4H15V9.87Z" fill="currentColor"/>
                    </svg>
                  </iconButton>
                </span>
                <span>5/5</span>
              </li>
            </ul>
          </section>

          <section :class='styles.navSection'>
            <div :class='styles.exitButton'>
              <exitButton/>
            </div>

            <div :class='styles.wrapperBtn'>
              <skipButton @onclick="restartFunc">
                Начать заново
              </skipButton>
            </div>
          </section>
        </div>
      </template>
    </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import skipButton from '../../ui/button/skipButton/skipButton.vue'
import topSection from '../../ui/section/topSection/topSection.vue'
import layout from '../../layout/layout.vue'
import iconButton from '../../ui/button/iconButton/iconButton.vue'
import exitButton from '../../ui/button/exitButton/exitButton.vue'
import ratingTable from '../../ratingTable/ratingTable.vue'
import social from '../../ui/social/social.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_PlayerDataMutation } from '@/store/modules/playerData/mutations'
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'

export default Vue.extend({
  name: 'finish',
  data: () => ({}),
  components: {
    layout,
    skipButton,
    topSection,
    iconButton,
    exitButton,
    social,
    ratingTable
  },
  computed: {
    ...mapGetters([EN_PlayerDataGetters.GET_TABLE_RATING])
  },
  methods: {
    ...mapMutations([EN_PlayerDataMutation.SHOW_TABLE_RATING]),
    restartFunc() {
      this.SHOW_TABLE_RATING()
    },
    showAwardsFunc() {
      console.log('Show Awards')
    }
  }
});
</script>

<style src='./finish.css' module='styles'>

</style>