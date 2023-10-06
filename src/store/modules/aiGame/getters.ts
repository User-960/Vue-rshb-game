import { GetterTree } from 'vuex'

import { IAiGameState } from './types'
import { IRootState } from '@/store/types'

export enum EN_AiGameGetters {
	GET_INFO_LINK_BLOCK_AI = 'GET_INFO_LINK_BLOCK_AI',
	GET_RULES_BLOCK_AI = 'GET_RULES_BLOCK_AI',
	GET_VICTORY_BLOCK_AI = 'GET_VICTORY_BLOCK_AI',
	GET_LOSS_BLOCK_AI = 'GET_LOSS_BLOCK_AI',

	GET_START_GAME_AI = 'GET_START_GAME_AI',
	GET_GAME_LOOP_AI = 'GET_GAME_LOOP_AI',
	GET_TOMATO_LEVEL_NUM_AI = 'GET_TOMATO_LEVEL_NUM_AI',
	GET_PEPPER_LEVEL_NUM_AI = 'GET_PEPPER_LEVEL_NUM_AI',
	GET_STRAWBERRY_LEVEL_NUM_AI = 'GET_STRAWBERRY_LEVEL_NUM_AI',
	GET_POINTS_AI = 'GET_POINTS_AI',
	GET_TIMER_AI = 'GET_TIMER_AI',

	GET_CHOSEN_BOOK_AI = 'GET_CHOSEN_BOOK_AI',
	GET_CHOSEN_NUMPAD_AI = 'GET_CHOSEN_NUMPAD_AI',

	GET_CHOSEN_TOMATO_LEVEL_AI = 'GET_CHOSEN_TOMATO_LEVEL_AI',
	GET_TOMATO_MOISTURE_LINE_CRITICAL = 'GET_TOMATO_MOISTURE_LINE_CRITICAL',
	GET_BROKE_TOMATO_SYSTEM = 'GET_BROKE_TOMATO_SYSTEM',
	GET_TOMATO_HEALTH_LINE_CRITICAL = 'GET_TOMATO_HEALTH_LINE_CRITICAL',
	GET_TOMATO_HEALTH_LINE_EMPTY = 'GET_TOMATO_HEALTH_LINE_EMPTY',
	GET_TOMATO_LEVEL_MISTAKES = 'GET_TOMATO_LEVEL_MISTAKES',

	GET_CHOSEN_PEPPER_LEVEL_AI = 'GET_CHOSEN_PEPPER_LEVEL_AI',

	GET_CHOSEN_STRAWBERRY_LEVEL_AI = 'GET_CHOSEN_STRAWBERRY_LEVEL_AI',

	GET_PEST_LINE_CRITICAL = 'GET_PEST_LINE_CRITICAL'
}

export const getters: GetterTree<IAiGameState, IRootState> = {
	[EN_AiGameGetters.GET_INFO_LINK_BLOCK_AI]: state =>
		state.isInfoLinkBlockVisible,
	[EN_AiGameGetters.GET_RULES_BLOCK_AI]: state => state.isRulesBlockVisible,
	[EN_AiGameGetters.GET_VICTORY_BLOCK_AI]: state => state.isVictoryBlockVisible,
	[EN_AiGameGetters.GET_LOSS_BLOCK_AI]: state => state.isLossBlockVisible,
	[EN_AiGameGetters.GET_START_GAME_AI]: state => state.isStartGame,
	[EN_AiGameGetters.GET_GAME_LOOP_AI]: state => state.gameLoop,
	[EN_AiGameGetters.GET_TOMATO_LEVEL_NUM_AI]: state => state.tomatoLevel,
	[EN_AiGameGetters.GET_PEPPER_LEVEL_NUM_AI]: state => state.pepperLevel,
	[EN_AiGameGetters.GET_STRAWBERRY_LEVEL_NUM_AI]: state =>
		state.strawberryLevel,
	[EN_AiGameGetters.GET_POINTS_AI]: state => state.points,
	[EN_AiGameGetters.GET_TIMER_AI]: state => state.timer,
	[EN_AiGameGetters.GET_CHOSEN_BOOK_AI]: state => state.isChosenBook,
	[EN_AiGameGetters.GET_CHOSEN_NUMPAD_AI]: state => state.isChosenNumPad,

	[EN_AiGameGetters.GET_CHOSEN_TOMATO_LEVEL_AI]: state =>
		state.isChosenTomatoLevel,
	[EN_AiGameGetters.GET_TOMATO_MOISTURE_LINE_CRITICAL]: state =>
		state.isTomatoMoistureLineCritical,
	[EN_AiGameGetters.GET_BROKE_TOMATO_SYSTEM]: state =>
		state.isTomatoSystemBroken,
	[EN_AiGameGetters.GET_TOMATO_HEALTH_LINE_CRITICAL]: state =>
		state.isTomatoHealthLineCritical,
	[EN_AiGameGetters.GET_TOMATO_HEALTH_LINE_EMPTY]: state =>
		state.isTomatoHealthLineEmpty,
	[EN_AiGameGetters.GET_TOMATO_LEVEL_MISTAKES]: state =>
		state.tomatoLevelMistakes,

	[EN_AiGameGetters.GET_CHOSEN_PEPPER_LEVEL_AI]: state =>
		state.isChosenPepperLevel,

	[EN_AiGameGetters.GET_CHOSEN_STRAWBERRY_LEVEL_AI]: state =>
		state.isChosenStrawberryLevel,

	[EN_AiGameGetters.GET_PEST_LINE_CRITICAL]: state => state.isPestLineCritical
}
