import { MutationTree } from 'vuex'

import { ICollectorGameState } from './types'

export enum EN_CollectorGameMutation {
	OPEN_GAME_FIELD_COL = 'OPEN_GAME_FIELD_COL',
	CLOSE_GAME_FIELD_COL = 'CLOSE_GAME_FIELD_COL'
}

export const mutations: MutationTree<ICollectorGameState> = {
	[EN_CollectorGameMutation.OPEN_GAME_FIELD_COL](state) {
		state.isOpenGameField = true
	},
	[EN_CollectorGameMutation.CLOSE_GAME_FIELD_COL](state) {
		state.isOpenGameField = false
	}
}
