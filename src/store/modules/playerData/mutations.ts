import { MutationTree } from 'vuex'

import { IPlayerDataState } from './types'
import { IPlayer, IUserDataForm } from '@/interfaces/player.interface'

export enum EPlayerDataMutation {
	CREATE_PLAYER = 'CREATE_PLAYER',
	GET_PLAYER = 'GET_PLAYER'
}

export const mutations: MutationTree<IPlayerDataState> = {
	[EPlayerDataMutation.CREATE_PLAYER](state, player: IPlayer) {
		state.playerData = player
		console.log(state.playerData)
	},
	[EPlayerDataMutation.GET_PLAYER](state, player: IPlayer) {
		console.log(player)
	}
}
