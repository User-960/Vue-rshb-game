import { GetterTree } from 'vuex'

import { IHomeScreenState } from './types'
import { IRootState } from '@/store/types'

export enum EN_HomeScreenGetters {
	GET_MODAL_HOUSE_VISIBLE = 'GET_MODAL_HOUSE_VISIBLE',
	GET_MODAL_BANK_VISIBLE = 'GET_MODAL_BANK_VISIBLE',
	GET_MODAL_SHOP_VISIBLE = 'GET_MODAL_SHOP_VISIBLE',
	GET_BACK_MUSIC_MAP = 'GET_BACK_MUSIC_MAP',

	GET_FIRST_INFO_INTRODUCTION = 'GET_FIRST_INFO_INTRODUCTION',
	GET_SECOND_INFO_INTRODUCTION = 'GET_SECOND_INFO_INTRODUCTION',
	GET_THIRD_INFO_INTRODUCTION = 'GET_THIRD_INFO_INTRODUCTION',
	GET_FOUR_INFO_INTRODUCTION = 'GET_FOUR_INFO_INTRODUCTION',
	GET_FIVE_INFO_INTRODUCTION = 'GET_FIVE_INFO_INTRODUCTION',
	GET_SIX_INFO_INTRODUCTION = 'GET_SIX_INFO_INTRODUCTION',
	GET_SEVEN_INFO_INTRODUCTION = 'GET_SEVEN_INFO_INTRODUCTION',
	GET_ARROW_UP_BANK = 'GET_ARROW_UP_BANK',
	GET_ARROW_UP_SHOP = 'GET_ARROW_UP_SHOP',

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

	[EN_HomeScreenGetters.GET_FIRST_INFO_INTRODUCTION]: state =>
		state.isFirstInfoIntroductionVisible,
	[EN_HomeScreenGetters.GET_SECOND_INFO_INTRODUCTION]: state =>
		state.isSecondInfoIntroductionVisible,
	[EN_HomeScreenGetters.GET_THIRD_INFO_INTRODUCTION]: state =>
		state.isThirdInfoIntroductionVisible,
	[EN_HomeScreenGetters.GET_FOUR_INFO_INTRODUCTION]: state =>
		state.isFourInfoIntroductionVisible,
	[EN_HomeScreenGetters.GET_FIVE_INFO_INTRODUCTION]: state =>
		state.isFiveInfoIntroductionVisible,
	[EN_HomeScreenGetters.GET_SIX_INFO_INTRODUCTION]: state =>
		state.isSixInfoIntroductionVisible,
	[EN_HomeScreenGetters.GET_SEVEN_INFO_INTRODUCTION]: state =>
		state.isSevenInfoIntroductionVisible,
	[EN_HomeScreenGetters.GET_ARROW_UP_BANK]: state => state.isArrowUpBankVisible,
	[EN_HomeScreenGetters.GET_ARROW_UP_SHOP]: state => state.isArrowUpShopVisible,

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
