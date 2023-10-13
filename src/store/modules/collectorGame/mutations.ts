import { MutationTree } from 'vuex'

import { EN_CONFIG } from '@/components/screens/games/collectorGame/config/config'

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

	START_GAME_COL = 'START_GAME_COL',
	FINISH_GAME_COL = 'FINISH_GAME_COL',

	OPEN_GAME_FIELD_TOMATO_COL = 'OPEN_GAME_FIELD_TOMATO_COL',
	CLOSE_GAME_FIELD_TOMATO_COL = 'CLOSE_GAME_FIELD_TOMATO_COL',
	START_FINISH_TIMER_TOMATO_COL = 'START_FINISH_TIMER_TOMATO_COL',
	STOP_TIMER_TOMATO_COL = 'STOP_TIMER_TOMATO_COL',
	PLUS_POINTS_TOMATO_GREEN_COL = 'PLUS_POINTS_TOMATO_GREEN_COL',
	PLUS_POINTS_TOMATO_RED_COL = 'PLUS_POINTS_TOMATO_RED_COL',
	PLUS_POINTS_TOMATO_DARK_GREEN_COL = 'PLUS_POINTS_TOMATO_DARK_GREEN_COL',
	START_TOMATO_LEVEL_COL = 'START_TOMATO_LEVEL_COL',
	FINISH_TOMATO_LEVEL_COL = 'FINISH_TOMATO_LEVEL_COL',
	PLUS_POINTS_TOMATO_COL = 'PLUS_POINTS_TOMATO_COL',
	START_FINISH_ALL_TOMATOES_INTERVAL_COL = 'START_FINISH_ALL_TOMATOES_INTERVAL_COL',
	FINISH_ALL_TOMATOES_INTERVAL_COL = 'FINISH_ALL_TOMATOES_INTERVAL_COL',
	GENERATE_TOMATO_GREEN_COL = 'GENERATE_TOMATO_GREEN_COL',
	NOT_GENERATE_TOMATO_GREEN_COL = 'NOT_GENERATE_TOMATO_GREEN_COL',
	GENERATE_TOMATO_RED_COL = 'GENERATE_TOMATO_RED_COL',
	NOT_GENERATE_TOMATO_RED_COL = 'NOT_GENERATE_TOMATO_RED_COL',
	GENERATE_TOMATO_DARK_GREEN_COL = 'GENERATE_TOMATO_DARK_GREEN_COL',
	NOT_GENERATE_TOMATO_DARK_GREEN_COL = 'NOT_GENERATE_TOMATO_DARK_GREEN_COL',
	GENERATE_COLLECTOR_TOMATO_COL = 'GENERATE_COLLECTOR_TOMATO_COL',
	NOT_GENERATE_COLLECTOR_TOMATO_COL = 'NOT_GENERATE_COLLECTOR_TOMATO_COL',
	SHOW_VICTORY_BLOCK_TOMATO_COL = 'SHOW_VICTORY_BLOCK_TOMATO_COL',
	HIDE_VICTORY_BLOCK_TOMATO_COL = 'HIDE_VICTORY_BLOCK_TOMATO_COL',
	SHOW_LOSS_BLOCK_TOMATO_COL = 'SHOW_LOSS_BLOCK_TOMATO_COL',
	HIDE_LOSS_BLOCK_TOMATO_COL = 'HIDE_LOSS_BLOCK_TOMATO_COL',
	COMPLETE_TOMATO_LEVEL_COL = 'COMPLETE_TOMATO_LEVEL_COL',
	NOT_COMPLETE_TOMATO_LEVEL_COL = 'NOT_COMPLETE_TOMATO_LEVEL_COL',
	RESTART_TOMATO_LEVEL_COL = 'RESTART_TOMATO_LEVEL_COL',

	OPEN_GAME_FIELD_PEPPER_COL = 'OPEN_GAME_FIELD_PEPPER_COL',
	CLOSE_GAME_FIELD_PEPPER_COL = 'CLOSE_GAME_FIELD_PEPPER_COL',
	START_FINISH_TIMER_PEPPER_COL = 'START_FINISH_TIMER_PEPPER_COL',
	STOP_TIMER_PEPPER_COL = 'STOP_TIMER_PEPPER_COL',
	PLUS_POINTS_PEPPER_GREEN_COL = 'PLUS_POINTS_PEPPER_GREEN_COL',
	PLUS_POINTS_PEPPER_RED_COL = 'PLUS_POINTS_PEPPER_RED_COL',
	PLUS_POINTS_PEPPER_DARK_GREEN_COL = 'PLUS_POINTS_PEPPER_DARK_GREEN_COL',
	START_PEPPER_LEVEL_COL = 'START_PEPPER_LEVEL_COL',
	FINISH_PEPPER_LEVEL_COL = 'FINISH_PEPPER_LEVEL_COL',
	PLUS_POINTS_PEPPER_COL = 'PLUS_POINTS_PEPPER_COL',
	START_FINISH_ALL_PEPPERS_INTERVAL_COL = 'START_FINISH_ALL_PEPPERS_INTERVAL_COL',
	FINISH_ALL_PEPPERS_INTERVAL_COL = 'FINISH_ALL_PEPPERS_INTERVAL_COL',
	GENERATE_PEPPER_GREEN_COL = 'GENERATE_PEPPER_GREEN_COL',
	NOT_GENERATE_PEPPER_GREEN_COL = 'NOT_GENERATE_PEPPER_GREEN_COL',
	GENERATE_PEPPER_RED_COL = 'GENERATE_PEPPER_RED_COL',
	NOT_GENERATE_PEPPER_RED_COL = 'NOT_GENERATE_PEPPER_RED_COL',
	GENERATE_PEPPER_DARK_GREEN_COL = 'GENERATE_PEPPER_DARK_GREEN_COL',
	NOT_GENERATE_PEPPER_DARK_GREEN_COL = 'NOT_GENERATE_PEPPER_DARK_GREEN_COL',
	GENERATE_COLLECTOR_PEPPER_COL = 'GENERATE_COLLECTOR_PEPPER_COL',
	NOT_GENERATE_COLLECTOR_PEPPER_COL = 'NOT_GENERATE_COLLECTOR_PEPPER_COL',
	SHOW_VICTORY_BLOCK_PEPPER_COL = 'SHOW_VICTORY_BLOCK_PEPPER_COL',
	HIDE_VICTORY_BLOCK_PEPPER_COL = 'HIDE_VICTORY_BLOCK_PEPPER_COL',
	SHOW_LOSS_BLOCK_PEPPER_COL = 'SHOW_LOSS_BLOCK_PEPPER_COL',
	HIDE_LOSS_BLOCK_PEPPER_COL = 'HIDE_LOSS_BLOCK_PEPPER_COL',
	COMPLETE_PEPPER_LEVEL_COL = 'COMPLETE_PEPPER_LEVEL_COL',
	NOT_COMPLETE_PEPPER_LEVEL_COL = 'NOT_COMPLETE_PEPPER_LEVEL_COL',
	RESTART_PEPPER_LEVEL_COL = 'RESTART_PEPPER_LEVEL_COL',

	OPEN_GAME_FIELD_STRAWBERRY_COL = 'OPEN_GAME_FIELD_STRAWBERRY_COL',
	CLOSE_GAME_FIELD_STRAWBERRY_COL = 'CLOSE_GAME_FIELD_STRAWBERRY_COL'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)
let timerTomato: any = null
let tomatoesInterval: any = null

let timerPepper: any = null
let peppersInterval: any = null

export const mutations: MutationTree<ICollectorGameState> = {
	[EN_CollectorGameMutation.RESTART_GAME_COL](state) {
		state.isInfoLinkBlockVisible = true
		state.isRulesBlockVisible = false
		state.isVictoryBlockVisible = false
		state.isLossBlockVisible = false
		state.isStartGame = false
		state.points = 0

		state.timerTomato = 30
		state.pointsTomato = 0
		state.isOpenGameFieldTomato = false
		state.isTomatoLevel = false
		state.isGenerateTomatoGreen = false
		state.isGenerateTomatoRed = false
		state.isGenerateTomatoDarkGreen = false
		state.isGenerateCollectorTomato = false
		state.isVictoryTomatoBlockVisible = false
		state.isTomatoLevelCompleted = false

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
		if (state.pointsTomato > 15 && state.isTomatoLevel) {
			state.points += state.pointsTomato
		}

		if (state.pointsPepper > 15 && state.isPepperLevel) {
			state.points += state.pointsPepper
		}
	},
	[EN_CollectorGameMutation.PLUS_POINTS_LINK_COL](state) {
		if (state.points === 0) {
			state.points += 5
		}
	},
	[EN_CollectorGameMutation.MINUS_POINTS_COL](state) {
		if (state.points === 0) {
			state.points = 0
		} else {
			state.points -= 5
		}
	},
	[EN_CollectorGameMutation.START_GAME_COL](state) {
		state.isStartGame = true
	},
	[EN_CollectorGameMutation.FINISH_GAME_COL](state) {
		state.isStartGame = false
	},

	[EN_CollectorGameMutation.RESTART_TOMATO_LEVEL_COL](state) {
		state.timerTomato = 30
		state.pointsTomato = 0
		state.isOpenGameFieldTomato = false
		state.isTomatoLevel = false
		state.isGenerateTomatoGreen = false
		state.isGenerateTomatoRed = false
		state.isGenerateTomatoDarkGreen = false
		state.isGenerateCollectorTomato = false
		state.isVictoryTomatoBlockVisible = false
		state.isTomatoLevelCompleted = false
	},
	[EN_CollectorGameMutation.PLUS_POINTS_TOMATO_GREEN_COL](state) {
		state.pointsTomato += 1
	},
	[EN_CollectorGameMutation.PLUS_POINTS_TOMATO_RED_COL](state) {
		state.pointsTomato += 4
	},
	[EN_CollectorGameMutation.PLUS_POINTS_TOMATO_DARK_GREEN_COL](state) {
		state.pointsTomato += 2
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

		if (state.timerTomato < 0) {
			state.timerTomato = 0
			clearInterval(timerTomato)
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
			}, EN_CONFIG.TIMING_GENERATE_TIMEOUT_TOMATO_RED)

			setTimeout(() => {
				state.isGenerateTomatoDarkGreen = true
			}, EN_CONFIG.TIMING_GENERATE_TIMEOUT_TOMATO_DARK_GREEN)
		}, EN_CONFIG.TIMING_GENERATE_ALL_TOMATOES_INTERVAL)
	},
	// [EN_CollectorGameMutation.FINISH_ALL_TOMATOES_INTERVAL_COL](state) {
	// 	if (!state.isTomatoLevel) {
	// 		console.log('Int not work')
	// 		clearInterval(tomatoesInterval)
	// 	}
	// },
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
	[EN_CollectorGameMutation.GENERATE_COLLECTOR_TOMATO_COL](state) {
		state.isGenerateCollectorTomato = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_COLLECTOR_TOMATO_COL](state) {
		state.isGenerateCollectorTomato = false
	},
	[EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_TOMATO_COL](state) {
		state.isVictoryTomatoBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_VICTORY_BLOCK_TOMATO_COL](state) {
		state.isVictoryTomatoBlockVisible = false
	},
	[EN_CollectorGameMutation.SHOW_LOSS_BLOCK_TOMATO_COL](state) {
		state.isLossTomatoBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_LOSS_BLOCK_TOMATO_COL](state) {
		state.isLossTomatoBlockVisible = false
	},
	[EN_CollectorGameMutation.COMPLETE_TOMATO_LEVEL_COL](state) {
		state.isTomatoLevelCompleted = true
	},
	[EN_CollectorGameMutation.NOT_COMPLETE_TOMATO_LEVEL_COL](state) {
		state.isTomatoLevelCompleted = false
	},

	[EN_CollectorGameMutation.RESTART_PEPPER_LEVEL_COL](state) {
		state.timerPepper = 30
		state.pointsPepper = 0
		state.isOpenGameFieldPepper = false
		state.isPepperLevel = false
		state.isGeneratePepperGreen = false
		state.isGeneratePepperRed = false
		state.isGeneratePepperDarkGreen = false
		state.isGenerateCollectorPepper = false
		state.isVictoryPepperBlockVisible = false
		state.isPepperLevelCompleted = false
	},
	[EN_CollectorGameMutation.PLUS_POINTS_PEPPER_GREEN_COL](state) {
		state.pointsPepper += 1
	},
	[EN_CollectorGameMutation.PLUS_POINTS_PEPPER_RED_COL](state) {
		state.pointsPepper += 4
	},
	[EN_CollectorGameMutation.PLUS_POINTS_PEPPER_DARK_GREEN_COL](state) {
		state.pointsPepper += 2
	},
	[EN_CollectorGameMutation.START_FINISH_TIMER_PEPPER_COL](state) {
		if (
			state.timerPepper > 0 &&
			state.isStartGame &&
			!state.isLossBlockVisible &&
			!state.isVictoryBlockVisible
		) {
			if (timerPepper) {
				clearInterval(timerPepper)
			}

			timerPepper = setInterval(() => {
				state.timerPepper -= 1
			}, 1000)
		}

		if (state.timerPepper < 0) {
			state.timerPepper = 0
			clearInterval(timerPepper)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timerPepper)
		}

		if (state.isVictoryBlockVisible) {
			clearInterval(timerPepper)
		}

		if (!state.isPepperLevel) {
			clearInterval(timerPepper)
		}

		if (state.isInfoLinkBlockVisible) {
			clearInterval(timerPepper)
		}

		if (state.timerPepper === 0) {
			clearInterval(timerPepper)
		}
	},
	[EN_CollectorGameMutation.STOP_TIMER_PEPPER_COL](state) {
		if (timerPepper) {
			clearInterval(timerPepper)
		}
	},
	[EN_CollectorGameMutation.START_FINISH_ALL_PEPPERS_INTERVAL_COL](state) {
		if (!state.isPepperLevel) {
			clearInterval(peppersInterval)
			return
		}

		peppersInterval = setInterval(() => {
			state.isGeneratePepperGreen = true

			setTimeout(() => {
				state.isGeneratePepperRed = true
			}, EN_CONFIG.TIMING_GENERATE_TIMEOUT_PEPPER_RED)

			setTimeout(() => {
				state.isGeneratePepperDarkGreen = true
			}, EN_CONFIG.TIMING_GENERATE_TIMEOUT_PEPPER_DARK_GREEN)
		}, EN_CONFIG.TIMING_GENERATE_ALL_PEPPERS_INTERVAL)
	},
	[EN_CollectorGameMutation.OPEN_GAME_FIELD_PEPPER_COL](state) {
		state.isOpenGameFieldPepper = true
	},
	[EN_CollectorGameMutation.CLOSE_GAME_FIELD_PEPPER_COL](state) {
		state.isOpenGameFieldPepper = false
	},
	[EN_CollectorGameMutation.START_PEPPER_LEVEL_COL](state) {
		state.isPepperLevel = true
	},
	[EN_CollectorGameMutation.FINISH_PEPPER_LEVEL_COL](state) {
		state.isPepperLevel = false
	},
	[EN_CollectorGameMutation.GENERATE_PEPPER_GREEN_COL](state) {
		state.isGeneratePepperGreen = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_PEPPER_GREEN_COL](state) {
		state.isGeneratePepperGreen = false
	},
	[EN_CollectorGameMutation.GENERATE_PEPPER_RED_COL](state) {
		state.isGeneratePepperRed = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_PEPPER_RED_COL](state) {
		state.isGeneratePepperRed = false
	},
	[EN_CollectorGameMutation.GENERATE_PEPPER_DARK_GREEN_COL](state) {
		state.isGeneratePepperDarkGreen = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_PEPPER_DARK_GREEN_COL](state) {
		state.isGeneratePepperDarkGreen = false
	},
	[EN_CollectorGameMutation.GENERATE_COLLECTOR_PEPPER_COL](state) {
		state.isGenerateCollectorPepper = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_COLLECTOR_PEPPER_COL](state) {
		state.isGenerateCollectorPepper = false
	},
	[EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_PEPPER_COL](state) {
		state.isVictoryPepperBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_VICTORY_BLOCK_PEPPER_COL](state) {
		state.isVictoryPepperBlockVisible = false
	},
	[EN_CollectorGameMutation.SHOW_LOSS_BLOCK_PEPPER_COL](state) {
		state.isLossPepperBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_LOSS_BLOCK_PEPPER_COL](state) {
		state.isLossPepperBlockVisible = false
	},
	[EN_CollectorGameMutation.COMPLETE_PEPPER_LEVEL_COL](state) {
		state.isPepperLevelCompleted = true
	},
	[EN_CollectorGameMutation.NOT_COMPLETE_PEPPER_LEVEL_COL](state) {
		state.isPepperLevelCompleted = false
	},

	[EN_CollectorGameMutation.OPEN_GAME_FIELD_STRAWBERRY_COL](state) {
		state.isOpenGameFieldStrawberry = true
	},
	[EN_CollectorGameMutation.CLOSE_GAME_FIELD_STRAWBERRY_COL](state) {
		state.isOpenGameFieldStrawberry = false
	}
}
