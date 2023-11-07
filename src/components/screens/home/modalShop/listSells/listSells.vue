<template>
  <ul :class='styles.listSells'>
    <li :class='styles.card'>
      <h6 :class='styles.name'>Помидоры</h6>
      <span v-if='GET_PLAYER_DATA.minigame.gameFive.complete' :class='styles.weight'>65 кг</span>
      <img :class='styles.img' src='../../../../../../public/images/tomato.svg' alt='image of vegetable' draggable='false'/>
    </li>
    <li :class='styles.card'>
      <h6 :class='styles.name'>Перцы</h6>
      <span v-if='GET_PLAYER_DATA.minigame.gameFive.complete' :class='styles.weight'>65 кг</span>
      <img :class='styles.img' src='../../../../../../public/images/pepper.svg' alt='image of vegetable' draggable='false'/>
    </li>
    <li :class='styles.card'>
      <h6 :class='styles.name'>Клубника</h6>
      <span v-if='GET_PLAYER_DATA.minigame.gameFive.complete' :class='styles.weight'>60 кг</span>
      <img :class='styles.img' src='../../../../../../public/images/strawberry.svg' alt='image of vegetable' draggable='false'/>
    </li>
  </ul>
</template>

<script lang='ts'>
import { EN_PlayerDataGetters } from '@/store/modules/playerData/getters'
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'listSells',
  computed: {
    ...mapGetters([
      EN_PlayerDataGetters.GET_PLAYER_DATA
    ]),
  },
  methods: {},
})
</script>

<style src='./listSells.css' module='styles'>
  
</style>