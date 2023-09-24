import { GetterTree } from 'vuex'

import { IPestControlGameState } from './types'
import { IRootState } from '@/store/types'

export enum EPestControlGameGetters {
	GET_INFO_LINK_BLOCK = 'GET_INFO_LINK_BLOCK',
	GET_RULES_BLOCK = 'GET_RULES_BLOCK',
	GET_START_GAME = 'GET_START_GAME',
	GET_TOMATO_LEVEL = 'GET_TOMATO_LEVEL',
	GET_PEPPER_LEVEL = 'GET_PEPPER_LEVEL',
	GET_STRAWBERRY_LEVEL = 'GET_STRAWBERRY_LEVEL'
}

export const getters: GetterTree<IPestControlGameState, IRootState> = {
	[EPestControlGameGetters.GET_INFO_LINK_BLOCK]: state =>
		state.isInfoLinkBlockVisible,
	[EPestControlGameGetters.GET_RULES_BLOCK]: state => state.isRulesBlockVisible,
	[EPestControlGameGetters.GET_START_GAME]: state => state.isStartGame,
	[EPestControlGameGetters.GET_TOMATO_LEVEL]: state => state.tomatoLevel,
	[EPestControlGameGetters.GET_PEPPER_LEVEL]: state => state.pepperLevel,
	[EPestControlGameGetters.GET_STRAWBERRY_LEVEL]: state => state.strawberryLevel
}
