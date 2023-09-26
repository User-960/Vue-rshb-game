import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { IPestControlGameState } from './types'
import { IRootState } from '@/store/types'

const state: IPestControlGameState = {
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
	isPlayBackMusic: false
}

export const getDefaultPestControlGameState = () => {
	return {
		state,
		mutations,
		getters,
		actions
	}
}

export const pestControlGame: Module<IPestControlGameState, IRootState> =
	getDefaultPestControlGameState()

// export const defaultHomeScreenState: Module<IHomeScreenState, IRootState> = {
// 	state,
// 	mutations,
// 	getters
// }
