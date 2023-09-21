import { MutationTree } from 'vuex'

import { ICollectorGameState } from './types'

export enum ECollectorGameMutation {
	OPEN_GAME_FIELD = 'OPEN_GAME_FIELD',
	CLOSE_GAME_FIELD = 'CLOSE_GAME_FIELD'
}

export const mutations: MutationTree<ICollectorGameState> = {
	[ECollectorGameMutation.OPEN_GAME_FIELD](state) {
		state.isOpenGameField = true
	},
	[ECollectorGameMutation.CLOSE_GAME_FIELD](state) {
		state.isOpenGameField = false
	}
}
