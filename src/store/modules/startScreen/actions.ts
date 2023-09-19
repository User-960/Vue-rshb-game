import { ActionTree, Commit } from 'vuex'

import { IRootState } from '../../types'

import { EStartScreenMutation } from './mutations'
import { IStartScreenState } from './types'
import { IUserDataForm } from '@/interfaces/player.interface'
import AuthService from '@/services/auth.service'

export enum EStartScreenActions {
	GET_PHOTOS_FROM_API = 'GET_PHOTOS_FROM_API',
	CREATE_PLAYER = 'CREATE_PLAYER'
}

export const actions: ActionTree<IStartScreenState, IRootState> = {
	[EStartScreenActions.CREATE_PLAYER](
		{ commit }: { commit: Commit },
		player: IUserDataForm
	) {
		AuthService.createUser(player.name, player.gender)
			.then((res: any) => commit(EStartScreenMutation.CREATE_PLAYER, res))
			.catch(error => {
				console.log(error)
				return error
			})
	}
}
