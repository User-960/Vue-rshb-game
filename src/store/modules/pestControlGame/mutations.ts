import { MutationTree } from 'vuex'

import { IPestControlGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_PestControlGameMutation {
	SHOW_INFO_LINK_BLOCK_PS = 'SHOW_INFO_LINK_BLOCK_PS',
	HIDE_INFO_LINK_BLOCK_PS = 'HIDE_INFO_LINK_BLOCK_PS',
	SHOW_RULES_BLOCK_PS = 'SHOW_RULES_BLOCK_PS',
	HIDE_RULES_BLOCK_PS = 'HIDE_RULES_BLOCK_PS',
	SHOW_VICTORY_BLOCK_PS = 'SHOW_VICTORY_BLOCK_PS',
	HIDE_VICTORY_BLOCK_PS = 'HIDE_VICTORY_BLOCK_PS',
	SHOW_LOSS_BLOCK_PS = 'SHOW_LOSS_BLOCK_PS',
	HIDE_LOSS_BLOCK_PS = 'HIDE_LOSS_BLOCK_PS',
	START_GAME_PS = 'START_GAME_PS',
	FINISH_GAME_PS = 'FINISH_GAME_PS',
	GAME_LOOP_PS = 'GAME_LOOP_PS',
	PLUS_POINTS_PS = 'PLUS_POINTS_PS',
	MINUS_POINTS_PS = 'MINUS_POINTS_PS',
	PLAY_BACK_MUSIC_GAME_PS = 'PLAY_BACK_MUSIC_GAME_PS',
	STOP_BACK_MUSIC_GAME_PS = 'STOP_BACK_MUSIC_GAME_PS'
}

const audioBackPs = new Audio(AUDIO_CONFIG.AUDIO_BACK_MUSIC_PEST_CONTROL_GAME)
const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)

export const mutations: MutationTree<IPestControlGameState> = {
	[EN_PestControlGameMutation.SHOW_INFO_LINK_BLOCK_PS](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isInfoLinkBlockVisible = true
	},
	[EN_PestControlGameMutation.HIDE_INFO_LINK_BLOCK_PS](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EN_PestControlGameMutation.SHOW_RULES_BLOCK_PS](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isRulesBlockVisible = true
	},
	[EN_PestControlGameMutation.HIDE_RULES_BLOCK_PS](state) {
		state.isRulesBlockVisible = false
	},
	[EN_PestControlGameMutation.SHOW_VICTORY_BLOCK_PS](state) {
		audioVictory.autoplay = true
		audioVictory.volume = 1

		state.isVictoryBlockVisible = true
	},
	[EN_PestControlGameMutation.HIDE_VICTORY_BLOCK_PS](state) {
		audioVictory.autoplay = false

		state.isVictoryBlockVisible = false
	},
	[EN_PestControlGameMutation.SHOW_LOSS_BLOCK_PS](state) {
		state.isLossBlockVisible = true
	},
	[EN_PestControlGameMutation.HIDE_LOSS_BLOCK_PS](state) {
		state.isLossBlockVisible = false
	},
	[EN_PestControlGameMutation.START_GAME_PS](state) {
		state.isStartGame = true
	},
	[EN_PestControlGameMutation.FINISH_GAME_PS](state) {
		state.isStartGame = false
	},
	[EN_PestControlGameMutation.GAME_LOOP_PS](state) {
		state.gameLoop += 1
	},
	[EN_PestControlGameMutation.PLUS_POINTS_PS](state) {
		state.points += 10
	},
	[EN_PestControlGameMutation.MINUS_POINTS_PS](state) {
		state.gameLoop -= 5
	},
	[EN_PestControlGameMutation.PLAY_BACK_MUSIC_GAME_PS](state) {
		state.isPlayBackMusic = true

		if (state.isPlayBackMusic) {
			audioBackPs.autoplay = true
			audioBackPs.volume = 0.1
		}
	},
	[EN_PestControlGameMutation.STOP_BACK_MUSIC_GAME_PS](state) {
		state.isPlayBackMusic = false

		if (!state.isPlayBackMusic) {
			audioBackPs.autoplay = false
		}
	}
}
