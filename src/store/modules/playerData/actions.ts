import { ActionTree, Commit } from 'vuex'

import { IRootState } from '../../types'

import { EPlayerDataMutation } from './mutations'
import { IPlayerDataState } from './types'
import { IPlayer, IUserDataForm } from '@/interfaces/player.interface'
import AuthService from '@/services/auth.service'

export enum EPlayerDataActions {
	CREATE_PLAYER = 'CREATE_PLAYER',
	GET_PLAYER = 'GET_PLAYER'
}

export const actions: ActionTree<IPlayerDataState, IRootState> = {
	[EPlayerDataActions.CREATE_PLAYER](
		{ commit }: { commit: Commit },
		player: IUserDataForm
	) {
		AuthService.createUser(player.name, player.gender)
			.then((res: string | IPlayer) =>
				commit(EPlayerDataMutation.CREATE_PLAYER, res)
			)
			.catch(error => console.log(error))
	},
	[EPlayerDataActions.GET_PLAYER](
		{ commit }: { commit: Commit },
		id: string | number
	) {
		AuthService.getUser(id)
			.then((res: any) => commit(EPlayerDataMutation.GET_PLAYER, res))
			.catch(error => {
				console.log(error)
				return error
			})
	}
}
