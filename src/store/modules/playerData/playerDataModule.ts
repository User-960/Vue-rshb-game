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
		gender: 'Male',
		own_money: 0,
		own_coins: 0,
		credit: 0,
		bank: 0,
		equipment_shop_id: 0,
		harvest_shop_id: 0,
		equipment: [],
		harvest: [],
		minigame: []
	},

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
