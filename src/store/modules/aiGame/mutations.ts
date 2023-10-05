import { MutationTree } from 'vuex'

import { IAiGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_AiGameMutation {
	RESTART_GAME_AI = 'RESTART_GAME_AI',
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
	PLUS_POINTS_LINK_AI = 'PLUS_POINTS_LINK_AI',
	MINUS_POINTS_AI = 'MINUS_POINTS_AI',

	START_FINISH_TIMER_AI = 'START_FINISH_TIMER_AI',

	CHOOSE_BOOK_AI = 'CHOOSE_BOOK_AI',
	NOT_CHOOSE_BOOK_AI = 'NOT_CHOOSE_BOOK_AI',
	CHOOSE_NUMPAD_AI = 'CHOOSE_NUMPAD_AI',
	NOT_CHOOSE_NUMPAD_AI = 'NOT_CHOOSE_NUMPAD_AI',
	CHOOSE_TOMATO_LEVEL_AI = 'CHOOSE_TOMATO_LEVEL_AI',
	NOT_CHOOSE_TOMATO_LEVEL_AI = 'NOT_CHOOSE_TOMATO_LEVEL_AI',
	CHOOSE_PEPPER_LEVEL_AI = 'CHOOSE_PEPPER_LEVEL_AI',
	NOT_CHOOSE_PEPPER_LEVEL_AI = 'NOT_CHOOSE_PEPPER_LEVEL_AI',
	CHOOSE_STRAWBERRY_LEVEL_AI = 'CHOOSE_STRAWBERRY_LEVEL_AI',
	NOT_CHOOSE_STRAWBERRY_LEVEL_AI = 'NOT_CHOOSE_STRAWBERRY_LEVEL_AI'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)

let timer: any

export const mutations: MutationTree<IAiGameState> = {
	[EN_AiGameMutation.RESTART_GAME_AI](state) {
		;(state.isInfoLinkBlockVisible = true),
			(state.isRulesBlockVisible = false),
			(state.isVictoryBlockVisible = false),
			(state.isLossBlockVisible = false),
			(state.isStartGame = false),
			(state.gameLoop = 0),
			(state.tomatoLevel = 1),
			(state.pepperLevel = 2),
			(state.strawberryLevel = 3),
			(state.points = 0),
			(state.timer = 30),
			(state.isChosenBook = false),
			(state.isChosenNumPad = false),
			(state.isChosenTomatoLevel = false),
			(state.isChosenPepperLevel = false),
			(state.isChosenStrawberryLevel = false)
	},
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
		state.points += 10
	},
	[EN_AiGameMutation.PLUS_POINTS_LINK_AI](state) {
		state.points += 5
	},
	[EN_AiGameMutation.MINUS_POINTS_AI](state) {
		state.points -= 5
	},

	[EN_AiGameMutation.START_FINISH_TIMER_AI](state) {
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
	// [EN_AiGameMutation.STOP_TIMER_AI](state) {
	// 	clearInterval(() => {
	// 		state.timer -= 1
	// 	}, 1000)
	// },
	[EN_AiGameMutation.CHOOSE_BOOK_AI](state) {
		if (!state.isChosenNumPad) {
			state.isChosenBook = true
		}
	},
	[EN_AiGameMutation.NOT_CHOOSE_BOOK_AI](state) {
		state.isChosenBook = false
	},
	[EN_AiGameMutation.CHOOSE_NUMPAD_AI](state) {
		if (
			(state.isChosenBook && state.isChosenTomatoLevel) ||
			(state.isChosenBook && state.isChosenPepperLevel) ||
			(state.isChosenBook && state.isChosenStrawberryLevel)
		) {
			state.isChosenNumPad = true
		}
	},
	[EN_AiGameMutation.NOT_CHOOSE_NUMPAD_AI](state) {
		state.isChosenNumPad = false
	},
	[EN_AiGameMutation.CHOOSE_TOMATO_LEVEL_AI](state) {
		state.isChosenTomatoLevel = true
	},
	[EN_AiGameMutation.NOT_CHOOSE_TOMATO_LEVEL_AI](state) {
		state.isChosenTomatoLevel = false
	},
	[EN_AiGameMutation.CHOOSE_PEPPER_LEVEL_AI](state) {
		state.isChosenPepperLevel = true
	},
	[EN_AiGameMutation.NOT_CHOOSE_PEPPER_LEVEL_AI](state) {
		state.isChosenPepperLevel = false
	},
	[EN_AiGameMutation.CHOOSE_STRAWBERRY_LEVEL_AI](state) {
		state.isChosenStrawberryLevel = true
	},
	[EN_AiGameMutation.NOT_CHOOSE_STRAWBERRY_LEVEL_AI](state) {
		state.isChosenStrawberryLevel = false
	}
}
