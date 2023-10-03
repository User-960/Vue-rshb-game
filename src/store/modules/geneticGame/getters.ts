import { GetterTree } from 'vuex'

import { IGeneticGameState } from './types'
import { IRootState } from '@/store/types'

export enum EN_GeneticGameGetters {
	GET_INFO_LINK_BLOCK_GN = 'GET_INFO_LINK_BLOCK_GN',
	GET_RULES_BLOCK_GN = 'GET_RULES_BLOCK_GN',
	GET_VICTORY_BLOCK_GN = 'GET_VICTORY_BLOCK_GN',
	GET_LOSS_BLOCK_GN = 'GET_LOSS_BLOCK_GN',
	GET_START_GAME_GN = 'GET_START_GAME_GN',
	GET_GAME_LOOP_GN = 'GET_GAME_LOOP_GN',
	GET_TOMATO_LEVEL_NUM_GN = 'GET_TOMATO_LEVEL_NUM_GN',
	GET_PEPPER_LEVEL_NUM_GN = 'GET_PEPPER_LEVEL_NUM_GN',
	GET_STRAWBERRY_LEVEL_NUM_GN = 'GET_STRAWBERRY_LEVEL_NUM_GN',
	GET_POINTS_GN = 'GET_POINTS_GN',
	GET_TIMER_GN = 'GET_TIMER_GN',
	GET_BACK_MUSIC_GAME_GN = 'GET_BACK_MUSIC_GAME_GN',
	GET_CHOSEN_BOOK_GN = 'GET_CHOSEN_BOOK_GN',
	GET_CHOSEN_NUMPAD_GN = 'GET_CHOSEN_NUMPAD_GN',
	GET_CHOSEN_TOMATO_LEVEL_GN = 'GET_CHOSEN_TOMATO_LEVEL_GN',
	GET_CHOSEN_PEPPER_LEVEL_GN = 'GET_CHOSEN_PEPPER_LEVEL_GN',
	GET_CHOSEN_STRAWBERRY_LEVEL_GN = 'GET_CHOSEN_STRAWBERRY_LEVEL_GN',

	GET_TOMATO_LEVEL = 'GET_TOMATO_LEVEL',
	GET_TOMATO_SPROUT = 'GET_TOMATO_SPROUT',
	GET_TOMATO_COLOR = 'GET_TOMATO_COLOR',
	GET_TOMATO_MODIFIED = 'GET_TOMATO_MODIFIED',

	GET_PEPPER_LEVEL = 'GET_PEPPER_LEVEL',
	GET_PEPPER_SPROUT = 'GET_PEPPER_SPROUT',
	GET_PEPPER_COLOR = 'GET_PEPPER_COLOR',
	GET_PEPPER_MODIFIED = 'GET_PEPPER_MODIFIED',

	GET_STRAWBERRY_LEVEL = 'GET_STRAWBERRY_LEVEL',
	GET_STRAWBERRY_SPROUT = 'GET_STRAWBERRY_SPROUT',
	GET_STRAWBERRY_COLOR = 'GET_STRAWBERRY_COLOR',
	GET_STRAWBERRY_MODIFIED = 'GET_STRAWBERRY_MODIFIED'
}

export const getters: GetterTree<IGeneticGameState, IRootState> = {
	[EN_GeneticGameGetters.GET_INFO_LINK_BLOCK_GN]: state =>
		state.isInfoLinkBlockVisible,
	[EN_GeneticGameGetters.GET_RULES_BLOCK_GN]: state =>
		state.isRulesBlockVisible,
	[EN_GeneticGameGetters.GET_VICTORY_BLOCK_GN]: state =>
		state.isVictoryBlockVisible,
	[EN_GeneticGameGetters.GET_LOSS_BLOCK_GN]: state => state.isLossBlockVisible,
	[EN_GeneticGameGetters.GET_START_GAME_GN]: state => state.isStartGame,
	[EN_GeneticGameGetters.GET_GAME_LOOP_GN]: state => state.gameLoop,
	[EN_GeneticGameGetters.GET_TOMATO_LEVEL_NUM_GN]: state => state.tomatoLevel,
	[EN_GeneticGameGetters.GET_PEPPER_LEVEL_NUM_GN]: state => state.pepperLevel,
	[EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL_NUM_GN]: state =>
		state.strawberryLevel,
	[EN_GeneticGameGetters.GET_POINTS_GN]: state => state.points,
	[EN_GeneticGameGetters.GET_TIMER_GN]: state => state.timer,
	[EN_GeneticGameGetters.GET_BACK_MUSIC_GAME_GN]: state =>
		state.isPlayBackMusic,

	[EN_GeneticGameGetters.GET_TOMATO_LEVEL]: state => state.isTomatoLevel,
	[EN_GeneticGameGetters.GET_TOMATO_SPROUT]: state => state.isTomatoSprout,
	[EN_GeneticGameGetters.GET_TOMATO_COLOR]: state => state.isTomatoColor,
	[EN_GeneticGameGetters.GET_TOMATO_MODIFIED]: state => state.isTomatoModified,

	[EN_GeneticGameGetters.GET_PEPPER_LEVEL]: state => state.isPepperLevel,
	[EN_GeneticGameGetters.GET_PEPPER_SPROUT]: state => state.isPepperSprout,
	[EN_GeneticGameGetters.GET_PEPPER_COLOR]: state => state.isPepperColor,
	[EN_GeneticGameGetters.GET_PEPPER_MODIFIED]: state => state.isPepperModified,

	[EN_GeneticGameGetters.GET_STRAWBERRY_LEVEL]: state =>
		state.isStrawberryLevel,
	[EN_GeneticGameGetters.GET_STRAWBERRY_SPROUT]: state =>
		state.isStrawberrySprout,
	[EN_GeneticGameGetters.GET_STRAWBERRY_COLOR]: state =>
		state.isStrawberryColor,
	[EN_GeneticGameGetters.GET_STRAWBERRY_MODIFIED]: state =>
		state.isStrawberryModified
}
