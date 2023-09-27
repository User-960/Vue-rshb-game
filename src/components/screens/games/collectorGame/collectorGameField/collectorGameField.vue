<template>
  <div>
    <div :class='[styles.blackScreen, {[styles.blackScreenNon]: isBlackScreenShow}]'></div>

    <div :class='styles.gameWrapper'>
      <div :class='styles.border'>
        <div :class='styles.gameField'>
          Collector Game
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { EN_CollectorGameGetters } from '@/store/modules/collectorGame/getters'
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'collectorGameField',
  data: () => ({
    isBlackScreenShow: false
  }),
  components: {},
  created() {
    setTimeout(() => {
      this.isBlackScreenShow = true
    }, 2350)
  },
  computed: {
    ...mapGetters([EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_COL]),
  },
  methods: {}
})
</script>

<style src='./collectorGameField.css' module='styles'>
  
</style>