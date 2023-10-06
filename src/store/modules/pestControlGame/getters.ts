import { GetterTree } from 'vuex'

import { IPestControlGameState } from './types'
import { IRootState } from '@/store/types'

export enum EN_PestControlGameGetters {
	GET_INFO_LINK_BLOCK_PS = 'GET_INFO_LINK_BLOCK_PS',
	GET_RULES_BLOCK_PS = 'GET_RULES_BLOCK_PS',
	GET_VICTORY_BLOCK_PS = 'GET_VICTORY_BLOCK_PS',
	GET_LOSS_BLOCK_PS = 'GET_LOSS_BLOCK_PS',

	GET_START_GAME_PS = 'GET_START_GAME_PS',
	GET_GAME_LOOP_PS = 'GET_GAME_LOOP_PS',
	GET_TOMATO_LEVEL_NUM_PS = 'GET_TOMATO_LEVEL_NUM_PS',
	GET_PEPPER_LEVEL_NUM_PS = 'GET_PEPPER_LEVEL_NUM_PS',
	GET_STRAWBERRY_LEVEL_NUM_PS = 'GET_STRAWBERRY_LEVEL_NUM_PS',
	GET_POINTS_PS = 'GET_POINTS_PS',

	GET_CHOSEN_TOMATO_LEVEL = 'GET_CHOSEN_TOMATO_LEVEL',
	GET_TOMATO_LINE_CRITICAL = 'GET_TOMATO_LINE_CRITICAL',

	GET_CHOSEN_PEPPER_LEVEL = 'GET_CHOSEN_PEPPER_LEVEL',
	GET_PEPPER_LINE_CRITICAL = 'GET_PEPPER_LINE_CRITICAL',

	GET_CHOSEN_STRAWBERRY_LEVEL = 'GET_CHOSEN_STRAWBERRY_LEVEL',
	GET_STRAWBERRY_LINE_CRITICAL = 'GET_STRAWBERRY_LINE_CRITICAL'
}

export const getters: GetterTree<IPestControlGameState, IRootState> = {
	[EN_PestControlGameGetters.GET_INFO_LINK_BLOCK_PS]: state =>
		state.isInfoLinkBlockVisible,
	[EN_PestControlGameGetters.GET_RULES_BLOCK_PS]: state =>
		state.isRulesBlockVisible,
	[EN_PestControlGameGetters.GET_VICTORY_BLOCK_PS]: state =>
		state.isVictoryBlockVisible,
	[EN_PestControlGameGetters.GET_LOSS_BLOCK_PS]: state =>
		state.isLossBlockVisible,

	[EN_PestControlGameGetters.GET_START_GAME_PS]: state => state.isStartGame,
	[EN_PestControlGameGetters.GET_GAME_LOOP_PS]: state => state.gameLoop,
	[EN_PestControlGameGetters.GET_TOMATO_LEVEL_NUM_PS]: state =>
		state.tomatoLevel,
	[EN_PestControlGameGetters.GET_PEPPER_LEVEL_NUM_PS]: state =>
		state.pepperLevel,
	[EN_PestControlGameGetters.GET_STRAWBERRY_LEVEL_NUM_PS]: state =>
		state.strawberryLevel,
	[EN_PestControlGameGetters.GET_POINTS_PS]: state => state.points,

	[EN_PestControlGameGetters.GET_CHOSEN_TOMATO_LEVEL]: state =>
		state.isChosenTomatoLevel,
	[EN_PestControlGameGetters.GET_TOMATO_LINE_CRITICAL]: state =>
		state.isTomatoLineCritical,

	[EN_PestControlGameGetters.GET_CHOSEN_PEPPER_LEVEL]: state =>
		state.isChosenPepperLevel,
	[EN_PestControlGameGetters.GET_PEPPER_LINE_CRITICAL]: state =>
		state.isPepperLineCritical,

	[EN_PestControlGameGetters.GET_CHOSEN_STRAWBERRY_LEVEL]: state =>
		state.isChosenStrawberryLevel,
	[EN_PestControlGameGetters.GET_STRAWBERRY_LINE_CRITICAL]: state =>
		state.isStrawberryLineCritical
}
