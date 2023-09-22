import { GetterTree } from 'vuex'

import { IPestControlGameState } from './types'
import { IRootState } from '@/store/types'

export enum EPestControlGameGetters {
	GET_OPEN_GAME_FIELD = 'GET_OPEN_GAME_FIELD'
}

export const getters: GetterTree<IPestControlGameState, IRootState> = {
	// [EPestControlGameGetters.GET_OPEN_GAME_FIELD]: state => state.isOpenGameField
}
