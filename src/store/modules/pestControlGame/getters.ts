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
	GET_STRAWBERRY_LINE_CRITICAL = 'GET_STRAWBERRY_LINE_CRITICAL',

	GET_SELECT_BUG = 'GET_SELECT_BUG',
	GET_SELECT_LOCUSTS = 'GET_SELECT_LOCUSTS',
	GET_SELECT_CATERPILLAR = 'GET_SELECT_CATERPILLAR',

	GET_SELECT_DRONE = 'GET_SELECT_DRONE',
	GET_MOVED_DRONE_TOMATO = 'GET_MOVED_DRONE_TOMATO',
	GET_MOVED_DRONE_PEPPER = 'GET_MOVED_DRONE_PEPPER',
	GET_MOVED_DRONE_STRAWBERRY = 'GET_MOVED_DRONE_STRAWBERRY',

	GET_COMPLETE_PEST_CONTROL_GAME = 'GET_COMPLETE_PEST_CONTROL_GAME'
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
		state.isStrawberryLineCritical,

	[EN_PestControlGameGetters.GET_SELECT_BUG]: state => state.isBugActive,
	[EN_PestControlGameGetters.GET_SELECT_LOCUSTS]: state =>
		state.isLocustsActive,
	[EN_PestControlGameGetters.GET_SELECT_CATERPILLAR]: state =>
		state.isCaterpillarActive,

	[EN_PestControlGameGetters.GET_SELECT_DRONE]: state => state.isDroneActive,
	[EN_PestControlGameGetters.GET_MOVED_DRONE_TOMATO]: state =>
		state.isDroneMovedTomato,
	[EN_PestControlGameGetters.GET_MOVED_DRONE_PEPPER]: state =>
		state.isDroneMovedPepper,
	[EN_PestControlGameGetters.GET_MOVED_DRONE_STRAWBERRY]: state =>
		state.isDroneMovedStrawberry,

	[EN_PestControlGameGetters.GET_COMPLETE_PEST_CONTROL_GAME]: state =>
		state.isPestControlGameCompleted
}
