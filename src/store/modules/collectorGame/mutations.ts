import { MutationTree } from 'vuex'

import { ICollectorGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_CollectorGameMutation {
	RESTART_GAME_COL = 'RESTART_GAME_COL',

	SHOW_INFO_LINK_BLOCK_COL = 'SHOW_INFO_LINK_BLOCK_COL',
	HIDE_INFO_LINK_BLOCK_COL = 'HIDE_INFO_LINK_BLOCK_COL',
	SHOW_RULES_BLOCK_COL = 'SHOW_RULES_BLOCK_COL',
	HIDE_RULES_BLOCK_COL = 'HIDE_RULES_BLOCK_COL',
	SHOW_VICTORY_BLOCK_COL = 'SHOW_VICTORY_BLOCK_COL',
	HIDE_VICTORY_BLOCK_COL = 'HIDE_VICTORY_BLOCK_COL',
	SHOW_LOSS_BLOCK_COL = 'SHOW_LOSS_BLOCK_COL',
	HIDE_LOSS_BLOCK_COL = 'HIDE_LOSS_BLOCK_COL',

	PLUS_POINTS_COL = 'PLUS_POINTS_COL',
	PLUS_POINTS_LINK_COL = 'PLUS_POINTS_LINK_COL',
	MINUS_POINTS_COL = 'MINUS_POINTS_COL',
	PLUS_POINTS_TOMATO_GREEN_COL = 'PLUS_POINTS_TOMATO_GREEN_COL',
	PLUS_POINTS_TOMATO_RED_COL = 'PLUS_POINTS_TOMATO_RED_COL',
	PLUS_POINTS_TOMATO_DARK_GREEN_COL = 'PLUS_POINTS_TOMATO_DARK_GREEN_COL',

	START_GAME_COL = 'START_GAME_COL',
	FINISH_GAME_COL = 'FINISH_GAME_COL',

	START_FINISH_TIMER_TOMATO_COL = 'START_FINISH_TIMER_TOMATO_COL',
	STOP_TIMER_TOMATO_COL = 'STOP_TIMER_TOMATO_COL',

	OPEN_GAME_FIELD_TOMATO_COL = 'OPEN_GAME_FIELD_TOMATO_COL',
	CLOSE_GAME_FIELD_TOMATO_COL = 'CLOSE_GAME_FIELD_TOMATO_COL',
	START_TOMATO_LEVEL_COL = 'START_TOMATO_LEVEL_COL',
	FINISH_TOMATO_LEVEL_COL = 'FINISH_TOMATO_LEVEL_COL',
	START_FINISH_ALL_TOMATOES_INTERVAL_COL = 'START_FINISH_ALL_TOMATOES_INTERVAL_COL',
	FINISH_ALL_TOMATOES_INTERVAL_COL = 'FINISH_ALL_TOMATOES_INTERVAL_COL',
	GENERATE_TOMATO_GREEN_COL = 'GENERATE_TOMATO_GREEN_COL',
	NOT_GENERATE_TOMATO_GREEN_COL = 'NOT_GENERATE_TOMATO_GREEN_COL',
	GENERATE_TOMATO_RED_COL = 'GENERATE_TOMATO_RED_COL',
	NOT_GENERATE_TOMATO_RED_COL = 'NOT_GENERATE_TOMATO_RED_COL',
	GENERATE_TOMATO_DARK_GREEN_COL = 'GENERATE_TOMATO_DARK_GREEN_COL',
	NOT_GENERATE_TOMATO_DARK_GREEN_COL = 'NOT_GENERATE_TOMATO_DARK_GREEN_COL',
	GENERATE_COLLECTOR_COL = 'GENERATE_COLLECTOR_COL',
	NOT_GENERATE_COLLECTOR_COL = 'NOT_GENERATE_COLLECTOR_COL',
	SHOW_VICTORY_BLOCK_TOMATO_COL = 'SHOW_VICTORY_BLOCK_TOMATO_COL',
	HIDE_VICTORY_BLOCK_TOMATO_COL = 'HIDE_VICTORY_BLOCK_TOMATO_COL',

	OPEN_GAME_FIELD_PEPPER_COL = 'OPEN_GAME_FIELD_PEPPER_COL',
	CLOSE_GAME_FIELD_PEPPER_COL = 'CLOSE_GAME_FIELD_PEPPER_COL',

	OPEN_GAME_FIELD_STRAWBERRY_COL = 'OPEN_GAME_FIELD_STRAWBERRY_COL',
	CLOSE_GAME_FIELD_STRAWBERRY_COL = 'CLOSE_GAME_FIELD_STRAWBERRY_COL'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)
let timerTomato: any = null
let tomatoesInterval: any = null

export const mutations: MutationTree<ICollectorGameState> = {
	[EN_CollectorGameMutation.RESTART_GAME_COL](state) {
		state.isInfoLinkBlockVisible = true
		state.isRulesBlockVisible = false
		state.isVictoryBlockVisible = false
		state.isLossBlockVisible = false
		state.isStartGame = false
		state.points = 0

		state.timerTomato = 30
		state.isOpenGameFieldTomato = false
		state.isTomatoLevel = false
		state.isGenerateTomatoGreen = false
		state.isGenerateTomatoRed = false
		state.isGenerateTomatoDarkGreen = false
		state.isGenerateCollector = false
		state.isVictoryTomatoBlockVisible = false

		state.isOpenGameFieldPepper = false

		state.isOpenGameFieldStrawberry = false
	},
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
	[EN_CollectorGameMutation.PLUS_POINTS_LINK_COL](state) {
		if (state.points === 0) {
			state.points += 5
		}
	},
	[EN_CollectorGameMutation.PLUS_POINTS_TOMATO_GREEN_COL](state) {
		state.points += 1
	},
	[EN_CollectorGameMutation.PLUS_POINTS_TOMATO_RED_COL](state) {
		state.points += 4
	},
	[EN_CollectorGameMutation.PLUS_POINTS_TOMATO_DARK_GREEN_COL](state) {
		state.points += 2
	},
	[EN_CollectorGameMutation.MINUS_POINTS_COL](state) {
		if (state.points === 0) {
			state.points = 0
		} else {
			state.points -= 5
		}
	},
	[EN_CollectorGameMutation.START_FINISH_TIMER_TOMATO_COL](state) {
		if (
			state.timerTomato > 0 &&
			state.isStartGame &&
			!state.isLossBlockVisible &&
			!state.isVictoryBlockVisible
		) {
			if (timerTomato) {
				clearInterval(timerTomato)
			}

			timerTomato = setInterval(() => {
				state.timerTomato -= 1
			}, 1000)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timerTomato)
		}

		if (state.isVictoryBlockVisible) {
			clearInterval(timerTomato)
		}

		if (!state.isTomatoLevel) {
			clearInterval(timerTomato)
		}

		if (state.isInfoLinkBlockVisible) {
			clearInterval(timerTomato)
		}

		if (state.timerTomato === 0) {
			clearInterval(timerTomato)
		}
	},
	[EN_CollectorGameMutation.STOP_TIMER_TOMATO_COL](state) {
		if (timerTomato) {
			clearInterval(timerTomato)
		}
	},
	[EN_CollectorGameMutation.START_FINISH_ALL_TOMATOES_INTERVAL_COL](state) {
		if (!state.isTomatoLevel) {
			console.log('Int not work')
			clearInterval(tomatoesInterval)
			return
		}

		tomatoesInterval = setInterval(() => {
			console.log('Int work')
			state.isGenerateTomatoGreen = true

			setTimeout(() => {
				state.isGenerateTomatoRed = true
			}, 1500)

			setTimeout(() => {
				state.isGenerateTomatoDarkGreen = true
			}, 2700)
		}, 7000)
	},
	// [EN_CollectorGameMutation.FINISH_ALL_TOMATOES_INTERVAL_COL](state) {
	// 	if (!state.isTomatoLevel) {
	// 		console.log('Int not work')
	// 		clearInterval(tomatoesInterval)
	// 	}
	// },

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
	},
	[EN_CollectorGameMutation.START_TOMATO_LEVEL_COL](state) {
		state.isTomatoLevel = true
	},
	[EN_CollectorGameMutation.FINISH_TOMATO_LEVEL_COL](state) {
		state.isTomatoLevel = false
	},
	[EN_CollectorGameMutation.GENERATE_TOMATO_GREEN_COL](state) {
		state.isGenerateTomatoGreen = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_TOMATO_GREEN_COL](state) {
		state.isGenerateTomatoGreen = false
	},
	[EN_CollectorGameMutation.GENERATE_TOMATO_RED_COL](state) {
		state.isGenerateTomatoRed = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_TOMATO_RED_COL](state) {
		state.isGenerateTomatoRed = false
	},
	[EN_CollectorGameMutation.GENERATE_TOMATO_DARK_GREEN_COL](state) {
		state.isGenerateTomatoDarkGreen = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_TOMATO_DARK_GREEN_COL](state) {
		state.isGenerateTomatoDarkGreen = false
	},
	[EN_CollectorGameMutation.GENERATE_COLLECTOR_COL](state) {
		state.isGenerateCollector = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_COLLECTOR_COL](state) {
		state.isGenerateCollector = false
	},
	[EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_TOMATO_COL](state) {
		state.isVictoryTomatoBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_VICTORY_BLOCK_TOMATO_COL](state) {
		state.isVictoryTomatoBlockVisible = false
	},

	[EN_CollectorGameMutation.OPEN_GAME_FIELD_PEPPER_COL](state) {
		state.isOpenGameFieldPepper = true
	},
	[EN_CollectorGameMutation.CLOSE_GAME_FIELD_PEPPER_COL](state) {
		state.isOpenGameFieldPepper = false
	},

	[EN_CollectorGameMutation.OPEN_GAME_FIELD_STRAWBERRY_COL](state) {
		state.isOpenGameFieldStrawberry = true
	},
	[EN_CollectorGameMutation.CLOSE_GAME_FIELD_STRAWBERRY_COL](state) {
		state.isOpenGameFieldStrawberry = false
	}
}
