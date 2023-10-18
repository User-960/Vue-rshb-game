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
		equipment: {
			software: {
				available: false
			},
			bpla: {
				available: false
			},
			robot: {
				available: false
			}
		},
		harvest: {
			tomatoes: {
				harvest_amount: 0,
				available: false,
				gen_modified: false
			},
			peppers: {
				harvest_amount: 0,
				available: false,
				gen_modified: false
			},
			strawberries: {
				harvest_amount: 0,
				available: false,
				gen_modified: false
			}
		},
		minigame: {
			gameOne: {
				achievement: false,
				available: false,
				complete: false,
				score: 0
			},
			gameTwo: {
				achievement: false,
				available: false,
				complete: false,
				score: 0
			},
			gameThree: {
				achievement: false,
				available: false,
				complete: false,
				score: 0
			},
			gameFour: {
				achievement: false,
				available: false,
				complete: false,
				score: 0
			},
			gameFive: {
				achievement: false,
				available: false,
				complete: false,
				score: 0
			}
		}
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
