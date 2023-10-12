import { GetterTree } from 'vuex'

import { ICollectorGameState } from './types'
import { IRootState } from '@/store/types'

export enum EN_CollectorGameGetters {
	GET_INFO_LINK_BLOCK_COL = 'GET_INFO_LINK_BLOCK_COL',
	GET_RULES_BLOCK_COL = 'GET_RULES_BLOCK_COL',
	GET_VICTORY_BLOCK_COL = 'GET_VICTORY_BLOCK_COL',
	GET_LOSS_BLOCK_COL = 'GET_LOSS_BLOCK_COL',
	GET_POINTS_COL = 'GET_POINTS_COL',
	GET_START_GAME_COL = 'GET_START_GAME_COL',

	GET_TIMER_TIMER_COL = 'GET_TIMER_TIMER_COL',
	GET_OPEN_GAME_FIELD_TOMATO_COL = 'GET_OPEN_GAME_FIELD_TOMATO_COL',
	GET_TOMATO_LEVEL_COL = 'GET_TOMATO_LEVEL_COL',
	GET_GENERATE_TOMATO_GREEN_COL = 'GET_GENERATE_TOMATO_GREEN_COL',
	GET_GENERATE_TOMATO_RED_COL = 'GET_GENERATE_TOMATO_RED_COL',
	GET_GENERATE_TOMATO_DARK_GREEN_COL = 'GET_GENERATE_TOMATO_DARK_GREEN_COL',
	GET_GENERATE_COLLECTOR_COL = 'GET_GENERATE_COLLECTOR_COL',
	GET_VICTORY_BLOCK_TOMATO_COL = 'GET_VICTORY_BLOCK_TOMATO_COL',
	GET_lOSS_BLOCK_TOMATO_COL = 'GET_lOSS_BLOCK_TOMATO_COL',
	GET_TOMATO_LEVEL_COMPLETED_COL = 'GET_TOMATO_LEVEL_COMPLETED_COL'
}

export const getters: GetterTree<ICollectorGameState, IRootState> = {
	[EN_CollectorGameGetters.GET_INFO_LINK_BLOCK_COL]: state =>
		state.isInfoLinkBlockVisible,
	[EN_CollectorGameGetters.GET_RULES_BLOCK_COL]: state =>
		state.isRulesBlockVisible,
	[EN_CollectorGameGetters.GET_VICTORY_BLOCK_COL]: state =>
		state.isVictoryBlockVisible,
	[EN_CollectorGameGetters.GET_LOSS_BLOCK_COL]: state =>
		state.isLossBlockVisible,
	[EN_CollectorGameGetters.GET_POINTS_COL]: state => state.points,
	[EN_CollectorGameGetters.GET_START_GAME_COL]: state => state.isStartGame,
	[EN_CollectorGameGetters.GET_TIMER_TIMER_COL]: state => state.timerTomato,

	[EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL]: state =>
		state.isOpenGameFieldTomato,
	[EN_CollectorGameGetters.GET_TOMATO_LEVEL_COL]: state => state.isTomatoLevel,
	[EN_CollectorGameGetters.GET_GENERATE_TOMATO_GREEN_COL]: state =>
		state.isGenerateTomatoGreen,
	[EN_CollectorGameGetters.GET_GENERATE_TOMATO_RED_COL]: state =>
		state.isGenerateTomatoRed,
	[EN_CollectorGameGetters.GET_GENERATE_TOMATO_DARK_GREEN_COL]: state =>
		state.isGenerateTomatoDarkGreen,
	[EN_CollectorGameGetters.GET_GENERATE_COLLECTOR_COL]: state =>
		state.isGenerateCollector,
	[EN_CollectorGameGetters.GET_VICTORY_BLOCK_TOMATO_COL]: state =>
		state.isVictoryTomatoBlockVisible,
	[EN_CollectorGameGetters.GET_lOSS_BLOCK_TOMATO_COL]: state =>
		state.isLossTomatoBlockVisible,
	[EN_CollectorGameGetters.GET_TOMATO_LEVEL_COMPLETED_COL]: state =>
		state.isTomatoLevelCompleted
}
