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

	GET_EXIT_TOMATO_LEVEL = 'GET_EXIT_TOMATO_LEVEL',

	GET_TIMER_TOMATO_COL = 'GET_TIMER_TOMATO_COL',
	GET_POINTS_TOMATO_COL = 'GET_POINTS_TOMATO_COL',
	GET_OPEN_GAME_FIELD_TOMATO_COL = 'GET_OPEN_GAME_FIELD_TOMATO_COL',
	GET_TOMATO_LEVEL_COL = 'GET_TOMATO_LEVEL_COL',
	GET_GENERATE_TOMATO_GREEN_COL = 'GET_GENERATE_TOMATO_GREEN_COL',
	GET_GENERATE_TOMATO_RED_COL = 'GET_GENERATE_TOMATO_RED_COL',
	GET_GENERATE_TOMATO_DARK_GREEN_COL = 'GET_GENERATE_TOMATO_DARK_GREEN_COL',
	GET_GENERATE_COLLECTOR_TOMATO_COL = 'GET_GENERATE_COLLECTOR_TOMATO_COL',
	GET_VICTORY_BLOCK_TOMATO_COL = 'GET_VICTORY_BLOCK_TOMATO_COL',
	GET_lOSS_BLOCK_TOMATO_COL = 'GET_lOSS_BLOCK_TOMATO_COL',
	GET_TOMATO_LEVEL_COMPLETED_COL = 'GET_TOMATO_LEVEL_COMPLETED_COL',

	GET_TIMER_PEPPER_COL = 'GET_TIMER_PEPPER_COL',
	GET_POINTS_PEPPER_COL = 'GET_POINTS_PEPPER_COL',
	GET_OPEN_GAME_FIELD_PEPPER_COL = 'GET_OPEN_GAME_FIELD_PEPPER_COL',
	GET_PEPPER_LEVEL_COL = 'GET_PEPPER_LEVEL_COL',
	GET_GENERATE_PEPPER_GREEN_COL = 'GET_GENERATE_PEPPER_GREEN_COL',
	GET_GENERATE_PEPPER_RED_COL = 'GET_GENERATE_PEPPER_RED_COL',
	GET_GENERATE_PEPPER_DARK_GREEN_COL = 'GET_GENERATE_PEPPER_DARK_GREEN_COL',
	GET_GENERATE_COLLECTOR_PEPPER_COL = 'GET_GENERATE_COLLECTOR_PEPPER_COL',
	GET_VICTORY_BLOCK_PEPPER_COL = 'GET_VICTORY_BLOCK_PEPPER_COL',
	GET_lOSS_BLOCK_PEPPER_COL = 'GET_lOSS_BLOCK_PEPPER_COL',
	GET_PEPPER_LEVEL_COMPLETED_COL = 'GET_PEPPER_LEVEL_COMPLETED_COL',

	GET_TIMER_STRAWBERRY_COL = 'GET_TIMER_STRAWBERRY_COL',
	GET_POINTS_STRAWBERRY_COL = 'GET_POINTS_STRAWBERRY_COL',
	GET_OPEN_GAME_FIELD_STRAWBERRY_COL = 'GET_OPEN_GAME_FIELD_STRAWBERRY_COL',
	GET_STRAWBERRY_LEVEL_COL = 'GET_STRAWBERRY_LEVEL_COL',
	GET_GENERATE_STRAWBERRY_GREEN_COL = 'GET_GENERATE_STRAWBERRY_GREEN_COL',
	GET_GENERATE_STRAWBERRY_RED_COL = 'GET_GENERATE_STRAWBERRY_RED_COL',
	GET_GENERATE_STRAWBERRY_DARK_GREEN_COL = 'GET_GENERATE_STRAWBERRY_DARK_GREEN_COL',
	GET_GENERATE_COLLECTOR_STRAWBERRY_COL = 'GET_GENERATE_COLLECTOR_STRAWBERRY_COL',
	GET_VICTORY_BLOCK_STRAWBERRY_COL = 'GET_VICTORY_BLOCK_STRAWBERRY_COL',
	GET_lOSS_BLOCK_STRAWBERRY_COL = 'GET_lOSS_BLOCK_STRAWBERRY_COL',
	GET_STRAWBERRY_LEVEL_COMPLETED_COL = 'GET_STRAWBERRY_LEVEL_COMPLETED_COL',

	GET_COMPLETE_COLLECTOR_GAME = 'GET_COMPLETE_COLLECTOR_GAME'
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
	[EN_CollectorGameGetters.GET_EXIT_TOMATO_LEVEL]: state =>
		state.isExitTomatoLevel,

	[EN_CollectorGameGetters.GET_TIMER_TOMATO_COL]: state => state.timerTomato,
	[EN_CollectorGameGetters.GET_POINTS_TOMATO_COL]: state => state.pointsTomato,
	[EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL]: state =>
		state.isOpenGameFieldTomato,
	[EN_CollectorGameGetters.GET_TOMATO_LEVEL_COL]: state => state.isTomatoLevel,
	[EN_CollectorGameGetters.GET_GENERATE_TOMATO_GREEN_COL]: state =>
		state.isGenerateTomatoGreen,
	[EN_CollectorGameGetters.GET_GENERATE_TOMATO_RED_COL]: state =>
		state.isGenerateTomatoRed,
	[EN_CollectorGameGetters.GET_GENERATE_TOMATO_DARK_GREEN_COL]: state =>
		state.isGenerateTomatoDarkGreen,
	[EN_CollectorGameGetters.GET_GENERATE_COLLECTOR_TOMATO_COL]: state =>
		state.isGenerateCollectorTomato,
	[EN_CollectorGameGetters.GET_VICTORY_BLOCK_TOMATO_COL]: state =>
		state.isVictoryTomatoBlockVisible,
	[EN_CollectorGameGetters.GET_lOSS_BLOCK_TOMATO_COL]: state =>
		state.isLossTomatoBlockVisible,
	[EN_CollectorGameGetters.GET_TOMATO_LEVEL_COMPLETED_COL]: state =>
		state.isTomatoLevelCompleted,

	[EN_CollectorGameGetters.GET_TIMER_PEPPER_COL]: state => state.timerPepper,
	[EN_CollectorGameGetters.GET_POINTS_PEPPER_COL]: state => state.pointsPepper,
	[EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_PEPPER_COL]: state =>
		state.isOpenGameFieldPepper,
	[EN_CollectorGameGetters.GET_PEPPER_LEVEL_COL]: state => state.isPepperLevel,
	[EN_CollectorGameGetters.GET_GENERATE_PEPPER_GREEN_COL]: state =>
		state.isGeneratePepperGreen,
	[EN_CollectorGameGetters.GET_GENERATE_PEPPER_RED_COL]: state =>
		state.isGeneratePepperRed,
	[EN_CollectorGameGetters.GET_GENERATE_PEPPER_DARK_GREEN_COL]: state =>
		state.isGeneratePepperDarkGreen,
	[EN_CollectorGameGetters.GET_GENERATE_COLLECTOR_PEPPER_COL]: state =>
		state.isGenerateCollectorPepper,
	[EN_CollectorGameGetters.GET_VICTORY_BLOCK_PEPPER_COL]: state =>
		state.isVictoryPepperBlockVisible,
	[EN_CollectorGameGetters.GET_lOSS_BLOCK_PEPPER_COL]: state =>
		state.isLossPepperBlockVisible,
	[EN_CollectorGameGetters.GET_PEPPER_LEVEL_COMPLETED_COL]: state =>
		state.isPepperLevelCompleted,

	[EN_CollectorGameGetters.GET_TIMER_STRAWBERRY_COL]: state =>
		state.timerStrawberry,
	[EN_CollectorGameGetters.GET_POINTS_STRAWBERRY_COL]: state =>
		state.pointsStrawberry,
	[EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_STRAWBERRY_COL]: state =>
		state.isOpenGameFieldStrawberry,
	[EN_CollectorGameGetters.GET_STRAWBERRY_LEVEL_COL]: state =>
		state.isStrawberryLevel,
	[EN_CollectorGameGetters.GET_GENERATE_STRAWBERRY_GREEN_COL]: state =>
		state.isGenerateStrawberryGreen,
	[EN_CollectorGameGetters.GET_GENERATE_STRAWBERRY_RED_COL]: state =>
		state.isGenerateStrawberryRed,
	[EN_CollectorGameGetters.GET_GENERATE_STRAWBERRY_DARK_GREEN_COL]: state =>
		state.isGenerateStrawberryDarkGreen,
	[EN_CollectorGameGetters.GET_GENERATE_COLLECTOR_STRAWBERRY_COL]: state =>
		state.isGenerateCollectorStrawberry,
	[EN_CollectorGameGetters.GET_VICTORY_BLOCK_STRAWBERRY_COL]: state =>
		state.isVictoryStrawberryBlockVisible,
	[EN_CollectorGameGetters.GET_lOSS_BLOCK_STRAWBERRY_COL]: state =>
		state.isLossStrawberryBlockVisible,
	[EN_CollectorGameGetters.GET_STRAWBERRY_LEVEL_COMPLETED_COL]: state =>
		state.isStrawberryLevelCompleted,

	[EN_CollectorGameGetters.GET_COMPLETE_COLLECTOR_GAME]: state =>
		state.isCollectorGameCompleted
}
