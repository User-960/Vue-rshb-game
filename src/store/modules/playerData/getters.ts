import { GetterTree } from 'vuex'

import { IPlayerDataState } from './types'
import { IRootState } from '@/store/types'

export enum EN_PlayerDataGetters {
	GET_PLAYER_DATA = 'GET_PLAYER_DATA'
}

export const getters: GetterTree<IPlayerDataState, IRootState> = {
	[EN_PlayerDataGetters.GET_PLAYER_DATA]: state => state.playerData
}
