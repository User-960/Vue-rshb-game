import { MutationTree } from 'vuex'

import { ICollectorGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_CollectorGameMutation {
	SHOW_INFO_LINK_BLOCK_COL = 'SHOW_INFO_LINK_BLOCK_COL',
	HIDE_INFO_LINK_BLOCK_COL = 'HIDE_INFO_LINK_BLOCK_COL',
	SHOW_RULES_BLOCK_COL = 'SHOW_RULES_BLOCK_COL',
	HIDE_RULES_BLOCK_COL = 'HIDE_RULES_BLOCK_COL',
	SHOW_VICTORY_BLOCK_COL = 'SHOW_VICTORY_BLOCK_COL',
	HIDE_VICTORY_BLOCK_COL = 'HIDE_VICTORY_BLOCK_COL',
	SHOW_LOSS_BLOCK_COL = 'SHOW_LOSS_BLOCK_COL',
	HIDE_LOSS_BLOCK_COL = 'HIDE_LOSS_BLOCK_COL',
	PLUS_POINTS_COL = 'PLUS_POINTS_COL',
	MINUS_POINTS_COL = 'MINUS_POINTS_COL',
	START_GAME_COL = 'START_GAME_COL',
	FINISH_GAME_COL = 'FINISH_GAME_COL',

	OPEN_GAME_FIELD_TOMATO_COL = 'OPEN_GAME_FIELD_TOMATO_COL',
	CLOSE_GAME_FIELD_TOMATO_COL = 'CLOSE_GAME_FIELD_TOMATO_COL'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)

export const mutations: MutationTree<ICollectorGameState> = {
	[EN_CollectorGameMutation.SHOW_INFO_LINK_BLOCK_COL](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isInfoLinkBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_INFO_LINK_BLOCK_COL](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EN_CollectorGameMutation.SHOW_RULES_BLOCK_COL](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isRulesBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_RULES_BLOCK_COL](state) {
		state.isRulesBlockVisible = false
	},
	[EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_COL](state) {
		audioVictory.autoplay = true
		audioVictory.volume = 1

		state.isVictoryBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_VICTORY_BLOCK_COL](state) {
		audioVictory.autoplay = false

		state.isVictoryBlockVisible = false
	},
	[EN_CollectorGameMutation.SHOW_LOSS_BLOCK_COL](state) {
		state.isLossBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_LOSS_BLOCK_COL](state) {
		state.isLossBlockVisible = false
	},
	[EN_CollectorGameMutation.PLUS_POINTS_COL](state) {
		state.points += 5
	},
	[EN_CollectorGameMutation.MINUS_POINTS_COL](state) {
		state.points -= 5
	},
	[EN_CollectorGameMutation.START_GAME_COL](state) {
		state.isStartGame = true
	},
	[EN_CollectorGameMutation.FINISH_GAME_COL](state) {
		state.isStartGame = false
	},

	[EN_CollectorGameMutation.OPEN_GAME_FIELD_TOMATO_COL](state) {
		state.isOpenGameFieldTomato = true
	},
	[EN_CollectorGameMutation.CLOSE_GAME_FIELD_TOMATO_COL](state) {
		state.isOpenGameFieldTomato = false
	}
}
