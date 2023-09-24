import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { IPestControlGameState } from './types'
import { IRootState } from '@/store/types'

const state: IPestControlGameState = {
	isInfoLinkBlockVisible: true,
	isRulesBlockVisible: false,
	isStartGame: false,
	tomatoLevel: 1,
	pepperLevel: 2,
	strawberryLevel: 3
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
