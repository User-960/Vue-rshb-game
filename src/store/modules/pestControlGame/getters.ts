import { GetterTree } from 'vuex'

import { IPestControlGameState } from './types'
import { IRootState } from '@/store/types'

export enum EPestControlGameGetters {
	GET_INFO_LINK_BLOCK = 'GET_INFO_LINK_BLOCK',
	GET_RULES_BLOCK = 'GET_RULES_BLOCK',
	GET_VICTORY_BLOCK = 'GET_VICTORY_BLOCK',
	GET_START_GAME = 'GET_START_GAME',
	GET_GAME_LOOP = 'GET_GAME_LOOP',
	GET_TOMATO_LEVEL_NUM = 'GET_TOMATO_LEVEL_NUM',
	GET_PEPPER_LEVEL_NUM = 'GET_PEPPER_LEVEL_NUM',
	GET_STRAWBERRY_LEVEL_NUM = 'GET_STRAWBERRY_LEVEL_NUM'
}

export const getters: GetterTree<IPestControlGameState, IRootState> = {
	[EPestControlGameGetters.GET_INFO_LINK_BLOCK]: state =>
		state.isInfoLinkBlockVisible,
	[EPestControlGameGetters.GET_RULES_BLOCK]: state => state.isRulesBlockVisible,
	[EPestControlGameGetters.GET_VICTORY_BLOCK]: state =>
		state.isVictoryBlockVisible,
	[EPestControlGameGetters.GET_START_GAME]: state => state.isStartGame,
	[EPestControlGameGetters.GET_GAME_LOOP]: state => state.gameLoop,
	[EPestControlGameGetters.GET_TOMATO_LEVEL_NUM]: state => state.tomatoLevel,
	[EPestControlGameGetters.GET_PEPPER_LEVEL_NUM]: state => state.pepperLevel,
	[EPestControlGameGetters.GET_STRAWBERRY_LEVEL_NUM]: state =>
		state.strawberryLevel
}
