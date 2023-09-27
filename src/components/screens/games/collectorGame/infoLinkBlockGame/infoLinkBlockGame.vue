<template>
  <div :class='styles.infoLinkWrapper' v-if='GET_INFO_LINK_BLOCK_COL'>
    <div :class='styles.infoLinkBlockGame'>
      <div :class='styles.title'>
        Искусственный интеллект в сельском хозяйстве
        <div :class='styles.closeBtnWrapper'>
          <closeButton @onclick='closeBlock'/>
        </div>
      </div>

      <div :class='styles.contentText'>
        <p>
          Использование искусственного интеллекта (ИИ) в различных сферах нашей жизни — уже состоявшийся факт настоящего. В обычном порядке вещей сейчас для ИИ на основе собранных больших данных предсказать сельскохозяйственную производительность, рыночный спрос на выращиваемый фермерский продукт, удой молока, погодные условия и климатические флуктуации. 
        </p>
        <br/>
        <p>
          В текущий момент ИИ используется и в агророботах, которые собирают урожай, борются с вредителями, дозированно распыляя средства защиты растений, эффективно вычищают посредством компьютерного зрения фермерское поле от сорняков — функционал чрезвычайно широкий.
        </p>
      </div>

      <div :class='styles.awardLink'>
        <div :class='styles.link' @click='checkFollowLink'>
          <a :href='link' target='_blank'>
            Подробнее
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6961 22.1017L19.5945 14.2033V21.1047C19.5945 21.6562 20.0471 22.1088 20.5986 22.1088C21.1501 22.1088 21.5956 21.6633 21.5956 21.1118L21.5956 11.7921C21.5956 11.2406 21.1501 10.7951 20.5986 10.7951L11.2789 10.7809C11.0144 10.7806 10.7607 10.8856 10.5736 11.0726C10.3866 11.2597 10.2816 11.5134 10.2819 11.778C10.2819 12.3295 10.7274 12.775 11.2789 12.775L18.1803 12.7891L10.2819 20.6875C9.89301 21.0764 9.89301 21.7128 10.2819 22.1017C10.6708 22.4906 11.3072 22.4906 11.6961 22.1017Z" fill="#89E159"/>
          </svg>
          </a>
        </div>
        <p>+ 5 баллов</p>
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
  name: 'infoLinkBlockGame',
  components: {
    closeButton
  },
  created() {
    this.SHOW_INFO_LINK_BLOCK_AI()
  },
  computed: {
    ...mapGetters([EN_CollectorGameGetters.GET_INFO_LINK_BLOCK_COL]),
  },
  props: {
    link: {
      type: String,
      required: true,
      default: '/'
    }
  },
  methods: {
    ...mapMutations([
      EN_CollectorGameMutation.SHOW_INFO_LINK_BLOCK_COL, 
      EN_CollectorGameMutation.HIDE_INFO_LINK_BLOCK_COL, 
      EN_CollectorGameMutation.SHOW_RULES_BLOCK_COL,
      EN_CollectorGameMutation.PLUS_POINTS_COL
    ]),
    checkFollowLink() {
      this.PLUS_POINTS_AI()
    },
    closeBlock() {
      this.HIDE_INFO_LINK_BLOCK_AI()
      
      if (!this.GET_INFO_LINK_BLOCK_AI) {
        this.SHOW_RULES_BLOCK_AI()
      }
    }
  }
})
</script>

<style src='./infoLinkBlockGame.css' module='styles'>
  
</style>