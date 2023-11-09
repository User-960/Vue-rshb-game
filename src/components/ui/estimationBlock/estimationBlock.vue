<template>
  <div :class='styles.estimationBlockWrapper' v-if='GET_ESTIMATION_BLOCK_VISIBLE'>
    <div :class='styles.estimationBlock'>

      <div :class='styles.contentWrapper'>
        <div :class='styles.contentText'>
          <p>
            Оцените игру от 1 до 5
          </p>
        </div>
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.skipBtn' @click='skipGame'>
          Пропустить
        </button>

        <button :class='styles.estimateBtn' @click='estimateGame' data-testid='estimateBtn'>
          Оценить
        </button>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import closeButton from '../button/closeButton/closeButton.vue'
import iconButton from '../button/iconButton/iconButton.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EN_FinishScreenGetters } from '../../../store/modules/finishScreen/getters'

export default Vue.extend({
  name: 'estimationBlock',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([EN_FinishScreenGetters.GET_ESTIMATION_BLOCK_VISIBLE])
  },
  methods: {
    skipGame() {
      console.log(1)
    },
    estimateGame() {
      console.log(2)
    }
  }
})
</script>

<style src='./estimationBlock.css' module='styles'>
  
</style>