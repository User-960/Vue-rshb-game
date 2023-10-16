import { ActionTree, Commit } from 'vuex'

import { IRootState } from '../../types'

import { EN_PlayerDataMutation } from './mutations'
import { IPlayerDataState } from './types'
import { IPlayer, IUserDataForm } from '@/interfaces/player.interface'
import AuthService from '@/services/auth.service'

export enum EN_PlayerDataActions {
	CREATE_PLAYER = 'CREATE_PLAYER',
	GET_PLAYER = 'GET_PLAYER',
	UPDATE_PLAYER_MONEY = 'UPDATE_PLAYER_MONEY',
	UPDATE_PLAYER_COINS = 'UPDATE_PLAYER_COINS'
}

export const actions: ActionTree<IPlayerDataState, IRootState> = {
	[EN_PlayerDataActions.CREATE_PLAYER](
		{ commit }: { commit: Commit },
		player: IUserDataForm
	) {
		AuthService.createUser(player.name, player.gender)
			.then((res: IPlayer | string) => {
				typeof res !== 'string'
					? commit(EN_PlayerDataMutation.CREATE_PLAYER, res)
					: commit(EN_PlayerDataMutation.SHOW_ALERT, res)
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
	}
}
