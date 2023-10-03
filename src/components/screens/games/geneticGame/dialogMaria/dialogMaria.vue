<template>
  <div :class='styles.dialogMaria'>
    <div :class='styles.dialog'>

      <div :class='styles.textContent'>
        <div v-if='GET_TOMATO_LEVEL'>
          <p :class='styles.text' 
            v-if='!GET_TOMATO_SPROUT && !GET_TOMATO_COLOR && !GET_TOMATO_MODIFIED'
          >
            Давай сделаем помидор устойчивым к вредителям. Используй для этого синюю колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_TOMATO_SPROUT && !GET_TOMATO_COLOR && !GET_TOMATO_MODIFIED'
          >
            Теперь предлагаю усилить структуру плода. Используй для этого серую колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_TOMATO_COLOR && !GET_TOMATO_MODIFIED && !GET_TOMATO_SPROUT'
          >
            Давай увеличим содержание антиоксидантов. Используй для этого розовую колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_TOMATO_MODIFIED'
          >
            Помидор модифицирован!
          </p>
        </div>

        <div v-else-if='GET_PEPPER_LEVEL'>
          <p :class='styles.text' 
            v-if='!GET_PEPPER_SPROUT && !GET_PEPPER_COLOR && !GET_PEPPER_MODIFIED'
          >
            Нужно увеличить срок хранения перца. Используй для этого красную колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_PEPPER_SPROUT && !GET_PEPPER_COLOR && !GET_PEPPER_MODIFIED'
          >
            Теперь предлагаю усилить структуру плода. Используй для этого серую колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_PEPPER_COLOR && !GET_PEPPER_MODIFIED && !GET_PEPPER_SPROUT'
          >
            Давай увеличим содержание антиоксидантов. Используй для этого розовую колбу.
          </p>
        </div>

        <div v-else-if='GET_STRAWBERRY_LEVEL'>
          <p :class='styles.text' 
            v-if='!GET_STRAWBERRY_SPROUT && !GET_STRAWBERRY_COLOR && !GET_STRAWBERRY_MODIFIED'
          >
            Давай сделаем помидор устойчивым к вредителям. Используй для этого синюю колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_STRAWBERRY_SPROUT && !GET_STRAWBERRY_COLOR && !GET_STRAWBERRY_MODIFIED'
          >
            Теперь предлагаю усилить структуру плода. Используй для этого серую колбу.
          </p>

          <p :class='styles.text' 
            v-else-if='GET_STRAWBERRY_COLOR && !GET_STRAWBERRY_MODIFIED && !GET_STRAWBERRY_SPROUT'
          >
            Давай увеличим содержание антиоксидантов. Используй для этого розовую колбу.
          </p>
        </div>

          <div :class='styles.timer' v-if='!GET_TOMATO_MODIFIED'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#89E159"/>
          </svg>
          <span>0:05</span>
        </div>
      </div>

    </div>

    <div :class='[
      styles.maria, 
      {
        [styles.taskMaria]: isTaskMaria,
        [styles.mistakeMaria]: isMistakeMaria,
        [styles.correctMaria]: isCorrectMaria
      }
      ]'
    ></div>
  </div>
</template>

<script lang='ts'>
import { EN_GeneticGameGetters } from '@/store/modules/geneticGame/getters'
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'dialogMaria',
  data: () => ({
    isTaskMaria: true,
    isMistakeMaria: false,
    isCorrectMaria: false,
  }),
  computed: {
    ...mapGetters([
      EN_GeneticGameGetters.GET_TOMATO_LEVEL,
      EN_GeneticGameGetters.GET_TOMATO_SPROUT,
      EN_GeneticGameGetters.GET_TOMATO_COLOR,
      EN_GeneticGameGetters.GET_TOMATO_MODIFIED,

      EN_GeneticGameGetters.GET_PEPPER_LEVEL,
      EN_GeneticGameGetters.GET_PEPPER_SPROUT,
      EN_GeneticGameGetters.GET_PEPPER_COLOR,
      EN_GeneticGameGetters.GET_PEPPER_MODIFIED,

      EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL,
      EN_GeneticGameGetters.GET_STRAWBERRY_SPROUT,
      EN_GeneticGameGetters.GET_STRAWBERRY_COLOR,
      EN_GeneticGameGetters.GET_STRAWBERRY_MODIFIED,
    ]),
  },
})
</script>

<style src='./dialogMaria.css' module='styles'>
  
</style>