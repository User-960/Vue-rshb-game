import { Module } from 'vuex'

import { getters } from './getters'
import { mutations } from './mutations'
import { IHomeScreenState } from './types'
import { IRootState } from '@/store/types'

const state: IHomeScreenState = {
	isModalHouseVisible: false,
	isModalBankVisible: false,
	isModalShopVisible: false,
	isPlayMusic: true,

	isFirstInfoIntroductionVisible: false,
	isSecondInfoIntroductionVisible: false,
	isThirdInfoIntroductionVisible: false,
	isFourInfoIntroductionVisible: false,
	isFiveInfoIntroductionVisible: false,
	isSixInfoIntroductionVisible: false,
	isSevenInfoIntroductionVisible: false,
	isArrowUpBankVisible: true,
	isArrowUpShopVisible: true,

	isStartGame: true,
	isAfterFirstGame: false,
	isAfterSecondGame: false,
	isBeforeThirdGame: false,
	isBeforeFourthGame: false,
	isBeforeFifthGame: false
}

export const getDefaultHomeScreenState = () => {
	return {
		state,
		mutations,
		getters
	}
}

export const homeScreen: Module<IHomeScreenState, IRootState> =
	getDefaultHomeScreenState()

// export const defaultHomeScreenState: Module<IHomeScreenState, IRootState> = {
// 	state,
// 	mutations,
// 	getters
// }
