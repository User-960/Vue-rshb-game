import { MutationTree } from 'vuex'

import { IPlayerDataState } from './types'
import { IPlayer, IUserDataForm } from '@/interfaces/player.interface'

export enum EN_PlayerDataMutation {
	CREATE_PLAYER = 'CREATE_PLAYER',
	GET_PLAYER = 'GET_PLAYER',
	UPDATE_PLAYER = 'UPDATE_PLAYER',

	TAKE_CREDIT = 'TAKE_CREDIT',
	RETURN_CREDIT = 'RETURN_CREDIT',

	PAY_MONEY_MARIA = 'PAY_MONEY_MARIA',
	PAY_MONEY_DANIL = 'PAY_MONEY_DANIL',

	SHOW_TABLE_RATING = 'SHOW_TABLE_RATING',
	HIDE_TABLE_RATING = 'HIDE_TABLE_RATING',

	SHOW_ALERT = 'SHOW_ALERT'
}

export const mutations: MutationTree<IPlayerDataState> = {
	[EN_PlayerDataMutation.CREATE_PLAYER](state, player: IPlayer) {
		state.playerData = player
	},
	[EN_PlayerDataMutation.GET_PLAYER](state, player: IPlayer) {
		state.playerData = player
	},
	[EN_PlayerDataMutation.UPDATE_PLAYER](state, player: IPlayer) {
		state.playerData = player
	},

	[EN_PlayerDataMutation.TAKE_CREDIT](state, player: IPlayer) {
		state.playerData.own_money = 9000
	},
	[EN_PlayerDataMutation.RETURN_CREDIT](state, player: IPlayer) {
		if (state.playerData.own_money >= 9270) {
			state.playerData.own_money -= 9270
		}
	},

	[EN_PlayerDataMutation.PAY_MONEY_MARIA](state, player: IPlayer) {
		if (state.playerData?.own_money !== 0) {
			state.playerData.own_money -= 100
		}
	},
	[EN_PlayerDataMutation.PAY_MONEY_DANIL](state, player: IPlayer) {
		if (state.playerData.own_money !== 0) {
			state.playerData.own_money -= 100
		}
	},

	[EN_PlayerDataMutation.SHOW_TABLE_RATING](state, player: IPlayer) {
		state.isTableRatingVisible = true
	},
	[EN_PlayerDataMutation.HIDE_TABLE_RATING](state, player: IPlayer) {
		state.isTableRatingVisible = false
	},

	[EN_PlayerDataMutation.SHOW_ALERT](state, text: string) {
		state.alertText = text
		state.isAlertVisible = true

		setTimeout(() => {
			state.isAlertVisible = false
		}, 3200)
	}
}
