import { MutationTree } from 'vuex'

import { IPestControlGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EPestControlGameMutation {
	SHOW_INFO_LINK_BLOCK = 'SHOW_INFO_LINK_BLOCK',
	HIDE_INFO_LINK_BLOCK = 'HIDE_INFO_LINK_BLOCK',
	SHOW_RULES_BLOCK = 'SHOW_RULES_BLOCK',
	HIDE_RULES_BLOCK = 'HIDE_RULES_BLOCK',
	SHOW_VICTORY_BLOCK = 'SHOW_VICTORY_BLOCK',
	HIDE_VICTORY_BLOCK = 'HIDE_VICTORY_BLOCK',
	SHOW_LOSS_BLOCK = 'SHOW_LOSS_BLOCK',
	HIDE_LOSS_BLOCK = 'HIDE_LOSS_BLOCK',
	START_GAME = 'START_GAME',
	FINISH_GAME = 'FINISH_GAME',
	GAME_LOOP = 'GAME_LOOP',
	PLUS_POINTS = 'PLUS_POINTS',
	MINUS_POINTS = 'MINUS_POINTS',
	PLAY_BACK_MUSIC_PEST_CONTROL_GAME = 'PLAY_BACK_MUSIC_PEST_CONTROL_GAME',
	STOP_BACK_MUSIC_PEST_CONTROL_GAME = 'STOP_BACK_MUSIC_PEST_CONTROL_GAME'
}

const audio = AUDIO_CONFIG.AUDIO_BACK_MUSIC_PEST_CONTROL_GAME

export const mutations: MutationTree<IPestControlGameState> = {
	[EPestControlGameMutation.SHOW_INFO_LINK_BLOCK](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isInfoLinkBlockVisible = true
	},
	[EPestControlGameMutation.HIDE_INFO_LINK_BLOCK](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EPestControlGameMutation.SHOW_RULES_BLOCK](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isRulesBlockVisible = true
	},
	[EPestControlGameMutation.HIDE_RULES_BLOCK](state) {
		state.isRulesBlockVisible = false
	},
	[EPestControlGameMutation.SHOW_VICTORY_BLOCK](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)
		audio.autoplay = true
		audio.volume = 1

		state.isVictoryBlockVisible = true
	},
	[EPestControlGameMutation.SHOW_LOSS_BLOCK](state) {
		state.isLossBlockVisible = true
	},
	[EPestControlGameMutation.HIDE_LOSS_BLOCK](state) {
		state.isLossBlockVisible = false
	},
	[EPestControlGameMutation.START_GAME](state) {
		state.isStartGame = true
	},
	[EPestControlGameMutation.FINISH_GAME](state) {
		state.isStartGame = false
	},
	[EPestControlGameMutation.GAME_LOOP](state) {
		state.gameLoop += 1
	},
	[EPestControlGameMutation.PLUS_POINTS](state) {
		state.points += 5
	},
	[EPestControlGameMutation.MINUS_POINTS](state) {
		state.gameLoop -= 5
	},
	[EPestControlGameMutation.PLAY_BACK_MUSIC_PEST_CONTROL_GAME](state) {
		state.isPlayBackMusic = true

		if (state.isPlayBackMusic) {
			audio.autoplay = true
			audio.volume = 0.1
		}
	},
	[EPestControlGameMutation.STOP_BACK_MUSIC_PEST_CONTROL_GAME](state) {
		state.isPlayBackMusic = false

		if (!state.isPlayBackMusic) {
			audio.autoplay = false
		}
	}
}
