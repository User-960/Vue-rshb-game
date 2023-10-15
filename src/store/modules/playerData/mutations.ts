import { MutationTree } from 'vuex'

import { IPlayerDataState } from './types'
import { IPlayer, IUserDataForm } from '@/interfaces/player.interface'

export enum EN_PlayerDataMutation {
	CREATE_PLAYER = 'CREATE_PLAYER',
	GET_PLAYER = 'GET_PLAYER',

	TAKE_CREDIT = 'TAKE_CREDIT',
	RETURN_CREDIT = 'RETURN_CREDIT',

	SHOW_TABLE_RATING = 'SHOW_TABLE_RATING',
	HIDE_TABLE_RATING = 'HIDE_TABLE_RATING'
}

export const mutations: MutationTree<IPlayerDataState> = {
	[EN_PlayerDataMutation.CREATE_PLAYER](state, player: IPlayer) {
		state.playerData = player
	},
	[EN_PlayerDataMutation.GET_PLAYER](state, player: IPlayer) {},

	[EN_PlayerDataMutation.TAKE_CREDIT](state, player: IPlayer) {
		state.playerData.own_money = 9000
	},
	[EN_PlayerDataMutation.RETURN_CREDIT](state, player: IPlayer) {
		if (state.playerData.own_money >= 9270) {
			state.playerData.own_money -= 9270
		}
	},

	[EN_PlayerDataMutation.SHOW_TABLE_RATING](state, player: IPlayer) {
		state.isTableRatingVisible = true
	},
	[EN_PlayerDataMutation.HIDE_TABLE_RATING](state, player: IPlayer) {
		state.isTableRatingVisible = false
	}
}
