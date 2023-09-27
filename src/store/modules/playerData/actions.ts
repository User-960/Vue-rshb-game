import { ActionTree, Commit } from 'vuex'

import { IRootState } from '../../types'

import { EN_PlayerDataMutation } from './mutations'
import { IPlayerDataState } from './types'
import { IPlayer, IUserDataForm } from '@/interfaces/player.interface'
import AuthService from '@/services/auth.service'

export enum EN_PlayerDataActions {
	CREATE_PLAYER = 'CREATE_PLAYER',
	GET_PLAYER = 'GET_PLAYER'
}

export const actions: ActionTree<IPlayerDataState, IRootState> = {
	[EN_PlayerDataActions.CREATE_PLAYER](
		{ commit }: { commit: Commit },
		player: IUserDataForm
	) {
		AuthService.createUser(player.name, player.gender)
			.then((res: string | IPlayer) =>
				commit(EN_PlayerDataMutation.CREATE_PLAYER, res)
			)
			.catch(error => console.log(error))
	},
	[EN_PlayerDataActions.GET_PLAYER](
		{ commit }: { commit: Commit },
		id: string | number
	) {
		AuthService.getUser(id)
			.then((res: any) => commit(EN_PlayerDataMutation.GET_PLAYER, res))
			.catch(error => {
				console.log(error)
				return error
			})
	}
}
