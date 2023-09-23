import { GetterTree } from 'vuex'

import { IPestControlGameState } from './types'
import { IRootState } from '@/store/types'

export enum EPestControlGameGetters {
	GET_INFO_LINK_BLOCK = 'GET_INFO_LINK_BLOCK',
	GET_RULES_BLOCK = 'GET_RULES_BLOCK',
	GET_START_GAME = 'GET_START_GAME'
}

export const getters: GetterTree<IPestControlGameState, IRootState> = {
	[EPestControlGameGetters.GET_INFO_LINK_BLOCK]: state =>
		state.isInfoLinkBlockVisible,
	[EPestControlGameGetters.GET_RULES_BLOCK]: state => state.isRulesBlockVisible,
	[EPestControlGameGetters.GET_START_GAME]: state => state.isStartGame
}
