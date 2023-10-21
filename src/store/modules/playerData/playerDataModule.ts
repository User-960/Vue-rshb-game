import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { IPlayerDataState } from './types'
import { EN_CONFIG } from '@/config/config.player'
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
	newUniqueName: '',
	isLoading: false,

	numberMultiplier: EN_CONFIG.NUMBER_MULTIPLIER,

	playersRating: [],
	playerLiderboardRating: {
		player_id: 0,
		place: 0,
		total_players: 0,
		own_coins: 0,
		top_score: 0,
		achievement_count: 0,
		player_name: '',
		liderdoard: []
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
