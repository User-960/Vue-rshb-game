import { GetterTree } from 'vuex'

import { ICollectorGameState } from './types'
import { IRootState } from '@/store/types'

export enum EN_CollectorGameGetters {
	GET_OPEN_GAME_FIELD_COL = 'GET_OPEN_GAME_FIELD_COL'
}

export const getters: GetterTree<ICollectorGameState, IRootState> = {
	[EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_COL]: state =>
		state.isOpenGameField
}
