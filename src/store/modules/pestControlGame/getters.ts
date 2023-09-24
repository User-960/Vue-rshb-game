import { GetterTree } from 'vuex'

import { IPestControlGameState } from './types'
import { IRootState } from '@/store/types'

export enum EPestControlGameGetters {
	GET_INFO_LINK_BLOCK = 'GET_INFO_LINK_BLOCK',
	GET_RULES_BLOCK = 'GET_RULES_BLOCK',
	GET_START_GAME = 'GET_START_GAME',
	GET_TOMATO_LEVEL_NUM = 'GET_TOMATO_LEVEL_NUM',
	GET_TOMATO_LEVEL = 'GET_TOMATO_LEVEL',
	GET_PEPPER_LEVEL_NUM = 'GET_PEPPER_LEVEL_NUM',
	GET_PEPPER_LEVEL = 'GET_PEPPER_LEVEL',
	GET_STRAWBERRY_LEVEL_NUM = 'GET_STRAWBERRY_LEVEL_NUM',
	GET_STRAWBERRY_LEVEL = 'GET_STRAWBERRY_LEVEL'
}

export const getters: GetterTree<IPestControlGameState, IRootState> = {
	[EPestControlGameGetters.GET_INFO_LINK_BLOCK]: state =>
		state.isInfoLinkBlockVisible,
	[EPestControlGameGetters.GET_RULES_BLOCK]: state => state.isRulesBlockVisible,
	[EPestControlGameGetters.GET_START_GAME]: state => state.isStartGame,
	[EPestControlGameGetters.GET_TOMATO_LEVEL_NUM]: state => state.tomatoLevel,
	[EPestControlGameGetters.GET_TOMATO_LEVEL]: state => state.isTomatoLevel,
	[EPestControlGameGetters.GET_PEPPER_LEVEL_NUM]: state => state.pepperLevel,
	[EPestControlGameGetters.GET_PEPPER_LEVEL]: state => state.isPepperLevel,
	[EPestControlGameGetters.GET_STRAWBERRY_LEVEL_NUM]: state =>
		state.strawberryLevel,
	[EPestControlGameGetters.GET_STRAWBERRY_LEVEL]: state =>
		state.isStrawberryLevel
}
