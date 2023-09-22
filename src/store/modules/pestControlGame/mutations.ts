import { MutationTree } from 'vuex'

import { IPestControlGameState } from './types'

export enum EPestControlGameMutation {
	OPEN_GAME_FIELD = 'OPEN_GAME_FIELD',
	CLOSE_GAME_FIELD = 'CLOSE_GAME_FIELD'
}

export const mutations: MutationTree<IPestControlGameState> = {
	[EPestControlGameMutation.OPEN_GAME_FIELD](state) {
		state.isOpenGameField = true
	},
	[EPestControlGameMutation.CLOSE_GAME_FIELD](state) {
		state.isOpenGameField = false
	}
}
