import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { IAiGameState } from './types'
import { IRootState } from '@/store/types'

const state: IAiGameState = {
	isInfoLinkBlockVisible: false,
	isRulesBlockVisible: false,
	isVictoryBlockVisible: false,
	isLossBlockVisible: false,
	isStartGame: false,
	gameLoop: 0,
	tomatoLevel: 1,
	pepperLevel: 2,
	strawberryLevel: 3,
	points: 0,
	isPlayBackMusic: false,
	timer: 90,
	isChosenBook: false,
	isChosenNumPad: false,
	isChosenTomatoLevel: false,
	isChosenPepperLevel: false,
	isChosenStrawberryLevel: false
}

export const getDefaultAiGameState = () => {
	return {
		state,
		mutations,
		getters,
		actions
	}
}

export const aiGame: Module<IAiGameState, IRootState> = getDefaultAiGameState()

// export const defaultHomeScreenState: Module<IHomeScreenState, IRootState> = {
// 	state,
// 	mutations,
// 	getters
// }
