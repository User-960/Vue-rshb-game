import { ActionTree, Commit } from 'vuex'

import { IRootState } from '../../types'

import { EStartScreenMutation } from './mutations'
import { IStartScreenState } from './types'
import { IPlayer } from '@/interfaces/player.interface'

export enum EStartScreenActions {
	GET_PHOTOS_FROM_API = 'GET_PHOTOS_FROM_API',
	CREATE_PLAYER = 'CREATE_PLAYER'
}

export const actions: ActionTree<IStartScreenState, IRootState> = {
	// [EPhotoActions.GET_PHOTOS_FROM_API]({ commit }: { commit: Commit }) {
	// 	UsersService.getUsers('https://jsonplaceholder.typicode.com')
	// 		.then((res: IPhoto[]) => commit(EPhotoMutation.SET_PHOTOS, res))
	// 		.catch(error => {
	// 			console.log(error)
	// 			return error
	// 		})
	// },
	[EStartScreenActions.CREATE_PLAYER](
		{ commit }: { commit: Commit },
		player: IPlayer
	) {
		commit(EStartScreenMutation.CREATE_PLAYER, player)
	}
}
