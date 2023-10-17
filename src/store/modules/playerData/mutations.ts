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

	SUM_COINS = 'SUM_COINS',
	COMPLETE_MINI_GAME = 'COMPLETE_MINI_GAME',
	PERFORM_ACHIEVEMENT = 'PERFORM_ACHIEVEMENT',
	SAVE_SCORE_MINI_GAME_ONE = 'SAVE_SCORE_MINI_GAME_ONE',
	SAVE_SCORE_MINI_GAME_TWO = 'SAVE_SCORE_MINI_GAME_TWO',

	SHOW_ALERT = 'SHOW_ALERT',

	SHOW_TABLE_RATING = 'SHOW_TABLE_RATING',
	HIDE_TABLE_RATING = 'HIDE_TABLE_RATING'
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
		state.playerData.credit = 9000
	},
	[EN_PlayerDataMutation.RETURN_CREDIT](state, player: IPlayer) {
		if (state.playerData.own_money >= 9270) {
			state.playerData.own_money -= 9270
		}
	},

	[EN_PlayerDataMutation.PAY_MONEY_MARIA](state) {
		state.playerData.own_money -= 100
	},
	[EN_PlayerDataMutation.PAY_MONEY_DANIL](state) {
		state.playerData.own_money -= 100
	},

	[EN_PlayerDataMutation.SUM_COINS](state, coins: number) {
		state.playerData.own_coins += coins
	},
	[EN_PlayerDataMutation.COMPLETE_MINI_GAME](state, miniGame: string) {
		if (miniGame === 'gameOne' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameOne.complete = true
		}

		if (miniGame === 'gameTwo' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameTwo.complete = true
		}
	},
	[EN_PlayerDataMutation.PERFORM_ACHIEVEMENT](state, miniGame: string) {
		if (miniGame === 'gameOne' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameOne.achievement = true
		}

		if (miniGame === 'gameTwo' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameTwo.achievement = true
		}
	},
	[EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_ONE](state, coins: number) {
		if (state.playerData.minigame !== null) {
			state.playerData.minigame.gameOne.score = coins
		}
	},
	[EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_TWO](state, coins: number) {
		if (state.playerData.minigame !== null) {
			state.playerData.minigame.gameTwo.score = coins
		}
	},

	[EN_PlayerDataMutation.SHOW_ALERT](state, text: string) {
		state.alertText = text
		state.isAlertVisible = true

		setTimeout(() => {
			state.isAlertVisible = false
		}, 3200)
	},

	[EN_PlayerDataMutation.SHOW_TABLE_RATING](state, player: IPlayer) {
		state.isTableRatingVisible = true
	},
	[EN_PlayerDataMutation.HIDE_TABLE_RATING](state, player: IPlayer) {
		state.isTableRatingVisible = false
	}
}
