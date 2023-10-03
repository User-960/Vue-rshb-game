import { MutationTree } from 'vuex'

import { IGeneticGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_GeneticGameMutation {
	SHOW_INFO_LINK_BLOCK_GN = 'SHOW_INFO_LINK_BLOCK_GN',
	HIDE_INFO_LINK_BLOCK_GN = 'HIDE_INFO_LINK_BLOCK_GN',
	SHOW_RULES_BLOCK_GN = 'SHOW_RULES_BLOCK_GN',
	HIDE_RULES_BLOCK_GN = 'HIDE_RULES_BLOCK_GN',
	SHOW_VICTORY_BLOCK_GN = 'SHOW_VICTORY_BLOCK_GN',
	HIDE_VICTORY_BLOCK_GN = 'HIDE_VICTORY_BLOCK_GN',
	SHOW_LOSS_BLOCK_GN = 'SHOW_LOSS_BLOCK_GN',
	HIDE_LOSS_BLOCK_GN = 'HIDE_LOSS_BLOCK_GN',
	START_GAME_GN = 'START_GAME_GN',
	FINISH_GAME_GN = 'FINISH_GAME_GN',
	GAME_LOOP_GN = 'GAME_LOOP_GN',
	PLUS_POINTS_GN = 'PLUS_POINTS_GN',
	MINUS_POINTS_GN = 'MINUS_POINTS_GN',
	START_FINISH_TIMER_GN = 'START_FINISH_TIMER_GN',
	PLAY_BACK_MUSIC_GAME_GN = 'PLAY_BACK_MUSIC_GAME_GN',
	STOP_BACK_MUSIC_GAME_GN = 'STOP_BACK_MUSIC_GAME_GN',

	SHOW_TOMATO_SPROUT = 'SHOW_TOMATO_SPROUT',
	HIDE_TOMATO_SPROUT = 'HIDE_TOMATO_SPROUT',
	SHOW_TOMATO_COLOR = 'SHOW_TOMATO_COLOR',
	HIDE_TOMATO_COLOR = 'HIDE_TOMATO_COLOR',
	SHOW_TOMATO_MODIFIED = 'SHOW_TOMATO_MODIFIED',
	HIDE_TOMATO_MODIFIED = 'HIDE_TOMATO_MODIFIED'
}

const audioBackAi = new Audio(AUDIO_CONFIG.AUDIO_BACK_MUSIC_PEST_CONTROL_GAME)
const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)

let timer: any

export const mutations: MutationTree<IGeneticGameState> = {
	[EN_GeneticGameMutation.SHOW_INFO_LINK_BLOCK_GN](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isInfoLinkBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_INFO_LINK_BLOCK_GN](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EN_GeneticGameMutation.SHOW_RULES_BLOCK_GN](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isRulesBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_RULES_BLOCK_GN](state) {
		state.isRulesBlockVisible = false
	},
	[EN_GeneticGameMutation.SHOW_VICTORY_BLOCK_GN](state) {
		audioVictory.autoplay = true
		audioVictory.volume = 1

		state.isVictoryBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_VICTORY_BLOCK_GN](state) {
		audioVictory.autoplay = false

		state.isVictoryBlockVisible = false
	},
	[EN_GeneticGameMutation.SHOW_LOSS_BLOCK_GN](state) {
		state.isLossBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_LOSS_BLOCK_GN](state) {
		state.isLossBlockVisible = false
	},
	[EN_GeneticGameMutation.START_GAME_GN](state) {
		state.isStartGame = true
	},
	[EN_GeneticGameMutation.FINISH_GAME_GN](state) {
		state.isStartGame = false
	},
	[EN_GeneticGameMutation.GAME_LOOP_GN](state) {
		state.gameLoop += 1
	},
	[EN_GeneticGameMutation.PLUS_POINTS_GN](state) {
		state.points += 10
	},
	[EN_GeneticGameMutation.MINUS_POINTS_GN](state) {
		state.points -= 5
	},
	[EN_GeneticGameMutation.START_FINISH_TIMER_GN](state) {
		if (state.timer > 0 && !state.isLossBlockVisible) {
			timer = setInterval(() => {
				state.timer -= 1
			}, 1000)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timer)
		}

		if (state.timer === 0) {
			clearInterval(timer)
		}
	},
	[EN_GeneticGameMutation.PLAY_BACK_MUSIC_GAME_GN](state) {
		state.isPlayBackMusic = true

		if (state.isPlayBackMusic) {
			audioBackAi.autoplay = true
			audioBackAi.volume = 0.1
		}
	},
	[EN_GeneticGameMutation.STOP_BACK_MUSIC_GAME_GN](state) {
		state.isPlayBackMusic = false

		if (!state.isPlayBackMusic) {
			audioBackAi.autoplay = false
		}
	},
	[EN_GeneticGameMutation.SHOW_TOMATO_SPROUT](state) {
		state.isTomatoSprout = true
	},
	[EN_GeneticGameMutation.HIDE_TOMATO_SPROUT](state) {
		state.isTomatoSprout = false
	},
	[EN_GeneticGameMutation.SHOW_TOMATO_COLOR](state) {
		state.isTomatoColor = true
	},
	[EN_GeneticGameMutation.HIDE_TOMATO_COLOR](state) {
		state.isTomatoColor = false
	},
	[EN_GeneticGameMutation.SHOW_TOMATO_MODIFIED](state) {
		state.isTomatoModified = true
	},
	[EN_GeneticGameMutation.HIDE_TOMATO_MODIFIED](state) {
		state.isTomatoModified = false
	}
}
