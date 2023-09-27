import { MutationTree } from 'vuex'

import { IAiGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_AiGameMutation {
	SHOW_INFO_LINK_BLOCK_AI = 'SHOW_INFO_LINK_BLOCK_AI',
	HIDE_INFO_LINK_BLOCK_AI = 'HIDE_INFO_LINK_BLOCK_AI',
	SHOW_RULES_BLOCK_AI = 'SHOW_RULES_BLOCK_AI',
	HIDE_RULES_BLOCK_AI = 'HIDE_RULES_BLOCK_AI',
	SHOW_VICTORY_BLOCK_AI = 'SHOW_VICTORY_BLOCK_AI',
	HIDE_VICTORY_BLOCK_AI = 'HIDE_VICTORY_BLOCK_AI',
	SHOW_LOSS_BLOCK_AI = 'SHOW_LOSS_BLOCK_AI',
	HIDE_LOSS_BLOCK_AI = 'HIDE_LOSS_BLOCK_AI',
	START_GAME_AI = 'START_GAME_AI',
	FINISH_GAME_AI = 'FINISH_GAME_AI',
	GAME_LOOP_AI = 'GAME_LOOP_AI',
	PLUS_POINTS_AI = 'PLUS_POINTS_AI',
	MINUS_POINTS_AI = 'MINUS_POINTS_AI',
	PLAY_BACK_MUSIC_GAME_AI = 'PLAY_BACK_MUSIC_GAME_AI',
	STOP_BACK_MUSIC_GAME_AI = 'STOP_BACK_MUSIC_GAME_AI'
}

const audioBackAi = new Audio(AUDIO_CONFIG.AUDIO_BACK_MUSIC_PEST_CONTROL_GAME)
const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)

export const mutations: MutationTree<IAiGameState> = {
	[EN_AiGameMutation.SHOW_INFO_LINK_BLOCK_AI](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isInfoLinkBlockVisible = true
	},
	[EN_AiGameMutation.HIDE_INFO_LINK_BLOCK_AI](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EN_AiGameMutation.SHOW_RULES_BLOCK_AI](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isRulesBlockVisible = true
	},
	[EN_AiGameMutation.HIDE_RULES_BLOCK_AI](state) {
		state.isRulesBlockVisible = false
	},
	[EN_AiGameMutation.SHOW_VICTORY_BLOCK_AI](state) {
		audioVictory.autoplay = true
		audioVictory.volume = 1

		state.isVictoryBlockVisible = true
	},
	[EN_AiGameMutation.HIDE_VICTORY_BLOCK_AI](state) {
		audioVictory.autoplay = false

		state.isVictoryBlockVisible = false
	},
	[EN_AiGameMutation.SHOW_LOSS_BLOCK_AI](state) {
		state.isLossBlockVisible = true
	},
	[EN_AiGameMutation.HIDE_LOSS_BLOCK_AI](state) {
		state.isLossBlockVisible = false
	},
	[EN_AiGameMutation.START_GAME_AI](state) {
		state.isStartGame = true
	},
	[EN_AiGameMutation.FINISH_GAME_AI](state) {
		state.isStartGame = false
	},
	[EN_AiGameMutation.GAME_LOOP_AI](state) {
		state.gameLoop += 1
	},
	[EN_AiGameMutation.PLUS_POINTS_AI](state) {
		state.points += 5
	},
	[EN_AiGameMutation.MINUS_POINTS_AI](state) {
		state.gameLoop -= 5
	},
	[EN_AiGameMutation.PLAY_BACK_MUSIC_GAME_AI](state) {
		state.isPlayBackMusic = true

		if (state.isPlayBackMusic) {
			audioBackAi.autoplay = true
			audioBackAi.volume = 0.1
		}
	},
	[EN_AiGameMutation.STOP_BACK_MUSIC_GAME_AI](state) {
		state.isPlayBackMusic = false

		if (!state.isPlayBackMusic) {
			audioBackAi.autoplay = false
		}
	}
}
