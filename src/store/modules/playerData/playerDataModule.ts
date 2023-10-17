import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { IPlayerDataState } from './types'
import { IRootState } from '@/store/types'

const state: IPlayerDataState = {
	playerData: {
		id: 0,
		name: null,
		gender: null,
		own_money: 0,
		own_coins: 0,
		credit: 0,
		equipment: null,
		harvest: null,
		minigame: null
	},

	isAlertVisible: false,
	alertText: '',

	isTableRatingVisible: false
}

export const getDefaultPlayerDataState = () => {
	return {
		state,
		mutations,
		getters,
		actions
	}
}

export const playerData: Module<IPlayerDataState, IRootState> =
	getDefaultPlayerDataState()

// export const defaultHomeScreenState: Module<IHomeScreenState, IRootState> = {
// 	state,
// 	mutations,
// 	getters
// }
