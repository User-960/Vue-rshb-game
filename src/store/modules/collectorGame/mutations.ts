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
	CLOSE_GAME_FIELD_STRAWBERRY_COL = 'CLOSE_GAME_FIELD_STRAWBERRY_COL',
	START_FINISH_TIMER_STRAWBERRY_COL = 'START_FINISH_TIMER_STRAWBERRY_COL',
	STOP_TIMER_STRAWBERRY_COL = 'STOP_TIMER_STRAWBERRY_COL',
	PLUS_POINTS_STRAWBERRY_GREEN_COL = 'PLUS_POINTS_STRAWBERRY_GREEN_COL',
	PLUS_POINTS_STRAWBERRY_RED_COL = 'PLUS_POINTS_STRAWBERRY_RED_COL',
	PLUS_POINTS_STRAWBERRY_DARK_GREEN_COL = 'PLUS_POINTS_STRAWBERRY_DARK_GREEN_COL',
	START_STRAWBERRY_LEVEL_COL = 'START_STRAWBERRY_LEVEL_COL',
	FINISH_STRAWBERRY_LEVEL_COL = 'FINISH_STRAWBERRY_LEVEL_COL',
	PLUS_POINTS_STRAWBERRY_COL = 'PLUS_POINTS_STRAWBERRY_COL',
	START_FINISH_ALL_STRAWBERRIES_INTERVAL_COL = 'START_FINISH_ALL_STRAWBERRIES_INTERVAL_COL',
	FINISH_ALL_STRAWBERRIES_INTERVAL_COL = 'FINISH_ALL_STRAWBERRIES_INTERVAL_COL',
	GENERATE_STRAWBERRY_GREEN_COL = 'GENERATE_STRAWBERRY_GREEN_COL',
	NOT_GENERATE_STRAWBERRY_GREEN_COL = 'NOT_GENERATE_STRAWBERRY_GREEN_COL',
	GENERATE_STRAWBERRY_RED_COL = 'GENERATE_STRAWBERRY_RED_COL',
	NOT_GENERATE_STRAWBERRY_RED_COL = 'NOT_GENERATE_STRAWBERRY_RED_COL',
	GENERATE_STRAWBERRY_DARK_GREEN_COL = 'GENERATE_STRAWBERRY_DARK_GREEN_COL',
	NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL = 'NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL',
	GENERATE_COLLECTOR_STRAWBERRY_COL = 'GENERATE_COLLECTOR_STRAWBERRY_COL',
	NOT_GENERATE_COLLECTOR_STRAWBERRY_COL = 'NOT_GENERATE_COLLECTOR_STRAWBERRY_COL',
	SHOW_VICTORY_BLOCK_STRAWBERRY_COL = 'SHOW_VICTORY_BLOCK_STRAWBERRY_COL',
	HIDE_VICTORY_BLOCK_STRAWBERRY_COL = 'HIDE_VICTORY_BLOCK_STRAWBERRY_COL',
	SHOW_LOSS_BLOCK_STRAWBERRY_COL = 'SHOW_LOSS_BLOCK_STRAWBERRY_COL',
	HIDE_LOSS_BLOCK_STRAWBERRY_COL = 'HIDE_LOSS_BLOCK_STRAWBERRY_COL',
	COMPLETE_STRAWBERRY_LEVEL_COL = 'COMPLETE_STRAWBERRY_LEVEL_COL',
	NOT_COMPLETE_STRAWBERRY_LEVEL_COL = 'NOT_COMPLETE_STRAWBERRY_LEVEL_COL',
	RESTART_STRAWBERRY_LEVEL_COL = 'RESTART_STRAWBERRY_LEVEL_COL',

	COMPLETE_COLLECTOR_GAME = 'COMPLETE_COLLECTOR_GAME',
	NOT_COMPLETE_COLLECTOR_GAME = 'NOT_COMPLETE_COLLECTOR_GAME',

	EXIT_TOMATO_LEVEL = 'EXIT_TOMATO_LEVEL',
	NOT_EXIT_TOMATO_LEVEL = 'NOT_EXIT_TOMATO_LEVEL'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)
let timerTomato: any = null
let tomatoesInterval: any = null

let timerPepper: any = null
let peppersInterval: any = null

let timerStrawberry: any = null
let strawberriesInterval: any = null

export const mutations: MutationTree<ICollectorGameState> = {
	[EN_CollectorGameMutation.RESTART_GAME_COL](state) {
		state.isInfoLinkBlockVisible = true
		state.isRulesBlockVisible = false
		state.isVictoryBlockVisible = false
		state.isLossBlockVisible = false
		state.isStartGame = false

		if (state.points === 5) {
			state.points = 5
		} else {
			state.points = 0
		}

		state.isExitTomatoLevel = false

		state.timerTomato = EN_CONFIG.TIMING_TOMATO_LEVEL_TIMER
		state.pointsTomato = 0
		state.isOpenGameFieldTomato = false
		state.isTomatoLevel = false
		state.isGenerateTomatoGreen = false
		state.isGenerateTomatoRed = false
		state.isGenerateTomatoDarkGreen = false
		state.isGenerateCollectorTomato = false
		state.isVictoryTomatoBlockVisible = false
		state.isTomatoLevelCompleted = false

		state.timerPepper = EN_CONFIG.TIMING_PEPPER_LEVEL_TIMER
		state.pointsPepper = 0
		state.isOpenGameFieldPepper = false
		state.isPepperLevel = false
		state.isGeneratePepperGreen = false
		state.isGeneratePepperRed = false
		state.isGeneratePepperDarkGreen = false
		state.isGenerateCollectorPepper = false
		state.isVictoryPepperBlockVisible = false
		state.isPepperLevelCompleted = false

		state.timerStrawberry = EN_CONFIG.TIMING_STRAWBERRY_LEVEL_TIMER
		state.pointsStrawberry = 0
		state.isOpenGameFieldStrawberry = false
		state.isStrawberryLevel = false
		state.isGenerateStrawberryGreen = false
		state.isGenerateStrawberryRed = false
		state.isGenerateStrawberryDarkGreen = false
		state.isGenerateCollectorStrawberry = false
		state.isVictoryStrawberryBlockVisible = false
		state.isStrawberryLevelCompleted = false
	},

	[EN_CollectorGameMutation.EXIT_TOMATO_LEVEL](state) {
		state.isExitTomatoLevel = true
	},
	[EN_CollectorGameMutation.NOT_EXIT_TOMATO_LEVEL](state) {
		state.isExitTomatoLevel = false
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
		if (
			state.pointsTomato > EN_CONFIG.MINIMAL_POINTS_TOMATO &&
			state.isTomatoLevel
		) {
			state.points += state.pointsTomato
		}

		if (
			state.pointsPepper > EN_CONFIG.MINIMAL_POINTS_PEPPER &&
			state.isPepperLevel
		) {
			state.points += state.pointsPepper
		}

		if (
			state.pointsStrawberry > EN_CONFIG.MINIMAL_POINTS_STRAWBERRY &&
			state.isStrawberryLevel
		) {
			state.points += state.pointsStrawberry
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
		state.timerTomato = EN_CONFIG.TIMING_TOMATO_LEVEL_TIMER
		state.pointsTomato = 0
		state.isOpenGameFieldTomato = false
		state.isTomatoLevel = false
		state.isGenerateTomatoGreen = false
		state.isGenerateTomatoRed = false
		state.isGenerateTomatoDarkGreen = false
		state.isGenerateCollectorTomato = false
		state.isVictoryTomatoBlockVisible = false
		state.isTomatoLevelCompleted = false

		state.isExitTomatoLevel = true
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

				if (state.timerTomato < 0) {
					clearInterval(timerTomato)
					state.timerTomato = 0
				}
			}, 1000)
		}

		if (state.timerTomato < 0) {
			state.timerTomato = 0
			clearInterval(timerTomato)
		}

		if (state.isLossTomatoBlockVisible) {
			clearInterval(timerTomato)
		}

		if (state.isVictoryTomatoBlockVisible) {
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

			if (state.timerTomato <= 0 || !state.isTomatoLevel) {
				console.log('Int not work')
				clearInterval(tomatoesInterval)
			}
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
		state.timerPepper = EN_CONFIG.TIMING_PEPPER_LEVEL_TIMER
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

				if (state.timerPepper < 0) {
					clearInterval(timerPepper)
					state.timerPepper = 0
				}
			}, 1000)
		}

		if (state.timerPepper < 0) {
			state.timerPepper = 0
			clearInterval(timerPepper)
		}

		if (state.isLossPepperBlockVisible) {
			clearInterval(timerPepper)
		}

		if (state.isVictoryPepperBlockVisible) {
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

			if (state.timerPepper <= 0 || !state.isPepperLevel) {
				clearInterval(peppersInterval)
			}
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

	[EN_CollectorGameMutation.RESTART_STRAWBERRY_LEVEL_COL](state) {
		state.timerStrawberry = EN_CONFIG.TIMING_STRAWBERRY_LEVEL_TIMER
		state.pointsStrawberry = 0
		state.isOpenGameFieldStrawberry = false
		state.isStrawberryLevel = false
		state.isGenerateStrawberryGreen = false
		state.isGenerateStrawberryRed = false
		state.isGenerateStrawberryDarkGreen = false
		state.isGenerateCollectorStrawberry = false
		state.isVictoryStrawberryBlockVisible = false
		state.isStrawberryLevelCompleted = false
	},
	[EN_CollectorGameMutation.PLUS_POINTS_STRAWBERRY_GREEN_COL](state) {
		state.pointsStrawberry += 1
	},
	[EN_CollectorGameMutation.PLUS_POINTS_STRAWBERRY_RED_COL](state) {
		state.pointsStrawberry += 4
	},
	[EN_CollectorGameMutation.PLUS_POINTS_STRAWBERRY_DARK_GREEN_COL](state) {
		state.pointsStrawberry += 2
	},
	[EN_CollectorGameMutation.START_FINISH_TIMER_STRAWBERRY_COL](state) {
		if (
			state.timerStrawberry > 0 &&
			state.isStartGame &&
			!state.isLossBlockVisible &&
			!state.isVictoryBlockVisible
		) {
			if (timerStrawberry) {
				clearInterval(timerStrawberry)
			}

			timerStrawberry = setInterval(() => {
				state.timerStrawberry -= 1

				if (state.timerStrawberry < 0) {
					clearInterval(timerStrawberry)
					state.timerStrawberry = 0
				}
			}, 1000)
		}

		if (state.timerStrawberry < 0) {
			state.timerStrawberry = 0
			clearInterval(timerStrawberry)
		}

		if (state.isLossStrawberryBlockVisible) {
			clearInterval(timerStrawberry)
		}

		if (state.isVictoryStrawberryBlockVisible) {
			clearInterval(timerStrawberry)
		}

		if (!state.isStrawberryLevel) {
			clearInterval(timerStrawberry)
		}

		if (state.isInfoLinkBlockVisible) {
			clearInterval(timerStrawberry)
		}

		if (state.timerStrawberry === 0) {
			clearInterval(timerStrawberry)
		}
	},
	[EN_CollectorGameMutation.STOP_TIMER_STRAWBERRY_COL](state) {
		if (timerStrawberry) {
			clearInterval(timerStrawberry)
		}
	},
	[EN_CollectorGameMutation.START_FINISH_ALL_STRAWBERRIES_INTERVAL_COL](state) {
		if (!state.isStrawberryLevel) {
			clearInterval(strawberriesInterval)
			return
		}

		strawberriesInterval = setInterval(() => {
			state.isGenerateStrawberryGreen = true

			setTimeout(() => {
				state.isGenerateStrawberryRed = true
			}, EN_CONFIG.TIMING_GENERATE_TIMEOUT_STRAWBERRY_RED)

			setTimeout(() => {
				state.isGenerateStrawberryDarkGreen = true
			}, EN_CONFIG.TIMING_GENERATE_TIMEOUT_STRAWBERRY_DARK_GREEN)

			if (state.timerStrawberry <= 0 || !state.isStrawberryLevel) {
				clearInterval(strawberriesInterval)
			}
		}, EN_CONFIG.TIMING_GENERATE_ALL_STRAWBERRIES_INTERVAL)
	},
	[EN_CollectorGameMutation.OPEN_GAME_FIELD_STRAWBERRY_COL](state) {
		state.isOpenGameFieldStrawberry = true
	},
	[EN_CollectorGameMutation.CLOSE_GAME_FIELD_STRAWBERRY_COL](state) {
		state.isOpenGameFieldStrawberry = false
	},
	[EN_CollectorGameMutation.START_STRAWBERRY_LEVEL_COL](state) {
		state.isStrawberryLevel = true
	},
	[EN_CollectorGameMutation.FINISH_STRAWBERRY_LEVEL_COL](state) {
		state.isStrawberryLevel = false
	},
	[EN_CollectorGameMutation.GENERATE_STRAWBERRY_GREEN_COL](state) {
		state.isGenerateStrawberryGreen = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_STRAWBERRY_GREEN_COL](state) {
		state.isGenerateStrawberryGreen = false
	},
	[EN_CollectorGameMutation.GENERATE_STRAWBERRY_RED_COL](state) {
		state.isGenerateStrawberryRed = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_STRAWBERRY_RED_COL](state) {
		state.isGenerateStrawberryRed = false
	},
	[EN_CollectorGameMutation.GENERATE_STRAWBERRY_DARK_GREEN_COL](state) {
		state.isGenerateStrawberryDarkGreen = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_STRAWBERRY_DARK_GREEN_COL](state) {
		state.isGenerateStrawberryDarkGreen = false
	},
	[EN_CollectorGameMutation.GENERATE_COLLECTOR_STRAWBERRY_COL](state) {
		state.isGenerateCollectorStrawberry = true
	},
	[EN_CollectorGameMutation.NOT_GENERATE_COLLECTOR_STRAWBERRY_COL](state) {
		state.isGenerateCollectorStrawberry = false
	},
	[EN_CollectorGameMutation.SHOW_VICTORY_BLOCK_STRAWBERRY_COL](state) {
		state.isVictoryStrawberryBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_VICTORY_BLOCK_STRAWBERRY_COL](state) {
		state.isVictoryStrawberryBlockVisible = false
	},
	[EN_CollectorGameMutation.SHOW_LOSS_BLOCK_STRAWBERRY_COL](state) {
		state.isLossStrawberryBlockVisible = true
	},
	[EN_CollectorGameMutation.HIDE_LOSS_BLOCK_STRAWBERRY_COL](state) {
		state.isLossStrawberryBlockVisible = false
	},
	[EN_CollectorGameMutation.COMPLETE_STRAWBERRY_LEVEL_COL](state) {
		state.isStrawberryLevelCompleted = true
	},
	[EN_CollectorGameMutation.NOT_COMPLETE_STRAWBERRY_LEVEL_COL](state) {
		state.isStrawberryLevelCompleted = false
	},

	[EN_CollectorGameMutation.COMPLETE_COLLECTOR_GAME](state) {
		state.isCollectorGameCompleted = true
	},
	[EN_CollectorGameMutation.NOT_COMPLETE_COLLECTOR_GAME](state) {
		state.isCollectorGameCompleted = false
	}
}
