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
	GET_BACK_MUSIC_GAME_AI = 'GET_BACK_MUSIC_GAME_AI'
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
	[EN_AiGameGetters.GET_BACK_MUSIC_GAME_AI]: state => state.isPlayBackMusic
}
