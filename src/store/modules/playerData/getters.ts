import { GetterTree } from 'vuex'

import { IPlayerDataState } from './types'
import { IRootState } from '@/store/types'

export enum EPlayerDataGetters {
	GET_PLAYER_DATA = 'GET_PLAYER_DATA'
}

export const getters: GetterTree<IPlayerDataState, IRootState> = {
	[EPlayerDataGetters.GET_PLAYER_DATA]: state => state.playerData
}
