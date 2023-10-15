<template>
  <div :class='styles.bonusBlockWrapper' v-if='GET_BONUS_BLOCK_PAYED_GH'>
    <div :class='styles.bonusBlock'>

      <div :class='styles.contentWrapper'>
        <div :class='styles.contentText'>
          <p>
            За твой благородный поступок тебе было дополнительно начислено 100 баллов!
          </p>
        </div>
      
        <div :class='styles.balance'>
          <p>
            Накоплено баллов: <span>+ {{ GET_POINTS_GH }}</span>
          </p>
          <div :class='styles.balanceIcon'>
            <iconButton>
              Б
            </iconButton>
            <p>120</p>
          </div>
        
        </div>
      </div>

      <div :class='styles.btnWrapper'>
        <button :class='styles.btnMap' @click='skipToMap'>
          Карта
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
import { EN_GreenhouseGameGetters } from '@/store/modules/greenhouseGame/getters'
import { EN_GreenhouseGameMutation } from '@/store/modules/greenhouseGame/mutations'

export default Vue.extend({
  name: 'bonusBlockPayed',
  components: {
    closeButton,
    iconButton
  },
  computed: {
    ...mapGetters([
      EN_GreenhouseGameGetters.GET_BONUS_BLOCK_PAYED_GH,
      EN_GreenhouseGameGetters.GET_POINTS_GH,
    ]),
  },
  methods: {
    ...mapMutations([
      EN_GreenhouseGameMutation.HIDE_BONUS_BLOCK_PAYED_GH,
      EN_GreenhouseGameMutation.RESTART_GAME_GH,
    ]),
    skipToMap() {
      this.HIDE_BONUS_BLOCK_PAYED_GH()
      this.RESTART_GAME_GH()

      this.$router.push({ name: 'home' })
    }
  }
})
</script>

<style src='./bonusBlock.css' module='styles'>
  
</style>