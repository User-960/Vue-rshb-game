<template>
  <div :class='styles.infoLinkWrapper' v-if='GET_INFO_LINK_BLOCK_AI'>
    <div :class='styles.infoLinkBlockGame'>
      <div :class='styles.title'>
        Искусственный интеллект в сельском хозяйстве
      </div>

      <div :class='styles.contentText'>
        <p>
          Установленная автоматизированная система контроля влажности почвы и температуры воздуха нуждается в настройке. Необходимо настроить работу датчиков используя записи в блокноте Данила. 
        </p>
        <br/>
        <p>
          Когда один из индикаторов участка стал красным, то кликни сначала один раз на участок, затем один раз на блокнот и один раз на клавиатуру. Показатели сразу нормализуются. Когда появится проблема системы на участке в правом нижнем углу экрана, то надо перезагрузить систему по кнопке расположенной под участком.
        </p>
      </div>

      <div :class='styles.awardLinkWrapper'>
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

        <div :class='styles.skipButtonWrapper'>
          <button :class='styles.skipButton' @click='closeBlock'>
            Далее
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import closeButton from '../../../../ui/button/closeButton/closeButton.vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_AiGameGetters } from '@/store/modules/aiGame/getters'
import { EN_AiGameMutation } from '@/store/modules/aiGame/mutations'

export default Vue.extend({
  name: 'infoLinkBlockGame',
  components: {
    closeButton
  },
  created() {
    this.SHOW_INFO_LINK_BLOCK_AI()
  },
  computed: {
    ...mapGetters([EN_AiGameGetters.GET_INFO_LINK_BLOCK_AI]),
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
      EN_AiGameMutation.SHOW_INFO_LINK_BLOCK_AI, 
      EN_AiGameMutation.HIDE_INFO_LINK_BLOCK_AI, 
      EN_AiGameMutation.SHOW_RULES_BLOCK_AI,
      EN_AiGameMutation.PLUS_POINTS_LINK_AI
    ]),
    checkFollowLink() {
      this.PLUS_POINTS_LINK_AI()
    },
    closeBlock() {
      this.HIDE_INFO_LINK_BLOCK_AI()
      
      if (!this.GET_INFO_LINK_BLOCK_AI) {
        this.SHOW_RULES_BLOCK_AI()
      }
    },
    onClickOutside (event: any) {
      this.closeBlock()
    }
  }
})
</script>

<style src='./infoLinkBlockGame.css' module='styles'>
  
</style>