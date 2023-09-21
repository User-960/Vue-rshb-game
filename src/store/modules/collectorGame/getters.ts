import { GetterTree } from 'vuex'

import { ICollectorGameState } from './types'
import { IRootState } from '@/store/types'

export enum ECollectorGameGetters {
	GET_OPEN_GAME_FIELD = 'GET_OPEN_GAME_FIELD'
}

export const getters: GetterTree<ICollectorGameState, IRootState> = {
	[ECollectorGameGetters.GET_OPEN_GAME_FIELD]: state => state.isOpenGameField
}
