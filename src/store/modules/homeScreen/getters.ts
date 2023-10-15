import { GetterTree } from 'vuex'

import { IHomeScreenState } from './types'
import { IRootState } from '@/store/types'

export enum EN_HomeScreenGetters {
	GET_MODAL_HOUSE_VISIBLE = 'GET_MODAL_HOUSE_VISIBLE',
	GET_MODAL_BANK_VISIBLE = 'GET_MODAL_BANK_VISIBLE',
	GET_MODAL_SHOP_VISIBLE = 'GET_MODAL_SHOP_VISIBLE',
	GET_BACK_MUSIC_MAP = 'GET_BACK_MUSIC_MAP',

	GET_MAP_START_GAME = 'GET_MAP_START_GAME',
	GET_MAP_AFTER_FIRST_GAME = 'GET_MAP_AFTER_FIRST_GAME',
	GET_MAP_AFTER_SECOND_GAME = 'GET_MAP_AFTER_SECOND_GAME',
	GET_MAP_BEFORE_THIRD_GAME = 'GET_MAP_BEFORE_THIRD_GAME',
	GET_MAP_BEFORE_FOURTH_GAME = 'GET_MAP_BEFORE_FOURTH_GAME',
	GET_MAP_BEFORE_FIFTH_GAME = 'GET_MAP_BEFORE_FIFTH_GAME'
}

export const getters: GetterTree<IHomeScreenState, IRootState> = {
	[EN_HomeScreenGetters.GET_MODAL_HOUSE_VISIBLE]: state =>
		state.isModalHouseVisible,
	[EN_HomeScreenGetters.GET_MODAL_BANK_VISIBLE]: state =>
		state.isModalBankVisible,
	[EN_HomeScreenGetters.GET_MODAL_SHOP_VISIBLE]: state =>
		state.isModalShopVisible,
	[EN_HomeScreenGetters.GET_BACK_MUSIC_MAP]: state => state.isPlayMusic,

	[EN_HomeScreenGetters.GET_MAP_AFTER_FIRST_GAME]: state =>
		state.isAfterFirstGame,
	[EN_HomeScreenGetters.GET_MAP_AFTER_SECOND_GAME]: state =>
		state.isAfterSecondGame,
	[EN_HomeScreenGetters.GET_MAP_BEFORE_THIRD_GAME]: state =>
		state.isBeforeThirdGame,
	[EN_HomeScreenGetters.GET_MAP_BEFORE_FOURTH_GAME]: state =>
		state.isBeforeFourthGame,
	[EN_HomeScreenGetters.GET_MAP_BEFORE_FIFTH_GAME]: state =>
		state.isBeforeFifthGame,
	[EN_HomeScreenGetters.GET_MAP_START_GAME]: state => state.isStartGame
}
