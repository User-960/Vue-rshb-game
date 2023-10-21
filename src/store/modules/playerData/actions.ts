import { ActionTree, Commit } from 'vuex'

import { IRootState } from '../../types'

import { EN_PlayerDataMutation } from './mutations'
import { IPlayerDataState } from './types'
import {
	IPlayer,
	IPlayerLiderboard,
	IPlayerLiderboardRanking,
	IUserDataForm
} from '@/interfaces/player.interface'
import AuthService from '@/services/auth.service'

export enum EN_PlayerDataActions {
	CREATE_PLAYER = 'CREATE_PLAYER',
	GET_PLAYER = 'GET_PLAYER',
	UPDATE_PLAYER_MONEY = 'UPDATE_PLAYER_MONEY',
	UPDATE_PLAYER_COINS = 'UPDATE_PLAYER_COINS',
	UPDATE_PLAYER_CREDIT = 'UPDATE_PLAYER_CREDIT',

	UPDATE_PLAYER_MINI_GAME = 'UPDATE_PLAYER_MINI_GAME',
	UPDATE_PLAYER_EQUIPMENT = 'UPDATE_PLAYER_EQUIPMENT',
	UPDATE_PLAYER_HARVEST = 'UPDATE_PLAYER_HARVEST',

	GET_PLAYERS_RATING = 'GET_PLAYERS_RATING',
	GET_PLAYER_LIDERBOARD_RATING = 'GET_PLAYER_LIDERBOARD_RATING',

	GET_PLAYER_NEW_GAME = 'GET_PLAYER_NEW_GAME'
}

export const actions: ActionTree<IPlayerDataState, IRootState> = {
	[EN_PlayerDataActions.CREATE_PLAYER](
		{ commit }: { commit: Commit },
		player: IUserDataForm
	) {
		AuthService.createUser(player.name, player.gender)
			.then((res: IPlayer | string | string[]) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.CREATE_PLAYER, res)
					: commit(EN_PlayerDataMutation.FIND_UNIQUE_NAME, res)
			})
			.catch(error => console.log(error))
	},

	[EN_PlayerDataActions.GET_PLAYER](
		{ commit }: { commit: Commit },
		id: string | number
	) {
		AuthService.getUser(id)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.GET_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => {
				return error
			})
	},

	[EN_PlayerDataActions.UPDATE_PLAYER_MONEY](
		{ commit }: { commit: Commit },
		player: IPlayer
	) {
		AuthService.updatePlayerMoney(player.id, player.own_money)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.UPDATE_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => console.log(error))
	},

	[EN_PlayerDataActions.UPDATE_PLAYER_CREDIT](
		{ commit }: { commit: Commit },
		player: IPlayer
	) {
		AuthService.updatePlayerCredit(
			player.id,
			player.own_money,
			player.credit,
			player.minigame
		)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.UPDATE_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => console.log(error))
	},

	[EN_PlayerDataActions.UPDATE_PLAYER_COINS](
		{ commit }: { commit: Commit },
		player: IPlayer
	) {
		AuthService.updatePlayerCoins(player.id, player.own_coins)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.UPDATE_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => console.log(error))
	},

	[EN_PlayerDataActions.UPDATE_PLAYER_MINI_GAME](
		{ commit }: { commit: Commit },
		player: IPlayer
	) {
		AuthService.updatePlayerMiniGame(
			player.id,
			player.own_money,
			player.own_coins,
			player.minigame
		)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.UPDATE_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => console.log(error))
	},

	[EN_PlayerDataActions.UPDATE_PLAYER_EQUIPMENT](
		{ commit }: { commit: Commit },
		player: IPlayer
	) {
		AuthService.updatePlayerEquipment(
			player.id,
			player.equipment,
			player.own_money
		)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.UPDATE_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => console.log(error))
	},

	[EN_PlayerDataActions.UPDATE_PLAYER_HARVEST](
		{ commit }: { commit: Commit },
		player: IPlayer
	) {
		AuthService.updatePlayerMoney(player.id, player.own_money)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.UPDATE_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => console.log(error))
	},

	[EN_PlayerDataActions.GET_PLAYERS_RATING]({ commit }: { commit: Commit }) {
		AuthService.getUsersRating()
			.then((res: IPlayerLiderboard[] | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.GET_PLAYERS_RATING, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => {
				return error
			})
	},

	[EN_PlayerDataActions.GET_PLAYER_NEW_GAME](
		{ commit }: { commit: Commit },
		id: string | number
	) {
		AuthService.getUserNewGame(id)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.GET_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => {
				return error
			})
	},

	[EN_PlayerDataActions.GET_PLAYER_LIDERBOARD_RATING](
		{ commit }: { commit: Commit },
		id: string | number
	) {
		AuthService.getUserLiderboardRanking(id)
			.then((res: IPlayerLiderboardRanking | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.GET_PLAYER_LIDERBOARD_RANKING, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
			})
			.catch(error => {
				return error
			})
	}
}
