import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { ICollectorGameState } from './types'
import { IRootState } from '@/store/types'

const state: ICollectorGameState = {
	isOpenGameField: false
}

export const getDefaultCollectorGameState = () => {
	return {
		state,
		mutations,
		getters,
		actions
	}
}

export const collectorGame: Module<ICollectorGameState, IRootState> =
	getDefaultCollectorGameState()

// export const defaultHomeScreenState: Module<IHomeScreenState, IRootState> = {
// 	state,
// 	mutations,
// 	getters
// }
