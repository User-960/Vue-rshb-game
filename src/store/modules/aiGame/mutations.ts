import { MutationTree } from 'vuex'

import { IAiGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_AiGameMutation {
	RESTART_GAME_AI = 'RESTART_GAME_AI',
	START_NEW_GAME_AI = 'START_NEW_GAME_AI',

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
	STOP_TIMER_AI = 'STOP_TIMER_AI',

	CHOOSE_BOOK_AI = 'CHOOSE_BOOK_AI',
	NOT_CHOOSE_BOOK_AI = 'NOT_CHOOSE_BOOK_AI',
	CHOOSE_NUMPAD_AI = 'CHOOSE_NUMPAD_AI',
	NOT_CHOOSE_NUMPAD_AI = 'NOT_CHOOSE_NUMPAD_AI',

	CHOOSE_TOMATO_LEVEL_AI = 'CHOOSE_TOMATO_LEVEL_AI',
	NOT_CHOOSE_TOMATO_LEVEL_AI = 'NOT_CHOOSE_TOMATO_LEVEL_AI',
	FILL_TOMATO_MOISTURE_LINE_CRITICAL = 'FILL_TOMATO_MOISTURE_LINE_CRITICAL',
	REMOVE_TOMATO_MOISTURE_LINE_CRITICAL = 'REMOVE_TOMATO_MOISTURE_LINE_CRITICAL',
	BROKE_TOMATO_SYSTEM = 'BROKE_TOMATO_SYSTEM',
	REPAIR_TOMATO_SYSTEM = 'REPAIR_TOMATO_SYSTEM',
	FILL_TOMATO_HEALTH_LINE_CRITICAL = 'FILL_TOMATO_HEALTH_LINE_CRITICAL',
	REMOVE_TOMATO_HEALTH_LINE_CRITICAL = 'REMOVE_TOMATO_HEALTH_LINE_CRITICAL',
	FILL_TOMATO_HEALTH_LINE_EMPTY = 'FILL_TOMATO_HEALTH_LINE_EMPTY',
	REMOVE_TOMATO_HEALTH_LINE_EMPTY = 'REMOVE_TOMATO_HEALTH_LINE_EMPTY',
	INCREASE_TOMATO_LEVEL_MISTAKES = 'INCREASE_TOMATO_LEVEL_MISTAKES',

	CHOOSE_PEPPER_LEVEL_AI = 'CHOOSE_PEPPER_LEVEL_AI',
	NOT_CHOOSE_PEPPER_LEVEL_AI = 'NOT_CHOOSE_PEPPER_LEVEL_AI',
	FILL_PEPPER_MOISTURE_LINE_CRITICAL = 'FILL_PEPPER_MOISTURE_LINE_CRITICAL',
	REMOVE_PEPPER_MOISTURE_LINE_CRITICAL = 'REMOVE_PEPPER_MOISTURE_LINE_CRITICAL',
	BROKE_PEPPER_SYSTEM = 'BROKE_PEPPER_SYSTEM',
	REPAIR_PEPPER_SYSTEM = 'REPAIR_PEPPER_SYSTEM',
	FILL_PEPPER_HEALTH_LINE_CRITICAL = 'FILL_PEPPER_HEALTH_LINE_CRITICAL',
	REMOVE_PEPPER_HEALTH_LINE_CRITICAL = 'REMOVE_PEPPER_HEALTH_LINE_CRITICAL',
	FILL_PEPPER_HEALTH_LINE_EMPTY = 'FILL_PEPPER_HEALTH_LINE_EMPTY',
	REMOVE_PEPPER_HEALTH_LINE_EMPTY = 'REMOVE_PEPPER_HEALTH_LINE_EMPTY',
	INCREASE_PEPPER_LEVEL_MISTAKES = 'INCREASE_PEPPER_LEVEL_MISTAKES',

	CHOOSE_STRAWBERRY_LEVEL_AI = 'CHOOSE_STRAWBERRY_LEVEL_AI',
	NOT_CHOOSE_STRAWBERRY_LEVEL_AI = 'NOT_CHOOSE_STRAWBERRY_LEVEL_AI',
	FILL_STRAWBERRY_MOISTURE_LINE_CRITICAL = 'FILL_STRAWBERRY_MOISTURE_LINE_CRITICAL',
	REMOVE_STRAWBERRY_MOISTURE_LINE_CRITICAL = 'REMOVE_STRAWBERRY_MOISTURE_LINE_CRITICAL',
	FILL_STRAWBERRY_TEMPERATURE_LINE_CRITICAL = 'FILL_STRAWBERRY_TEMPERATURE_LINE_CRITICAL',
	REMOVE_STRAWBERRY_TEMPERATURE_LINE_CRITICAL = 'REMOVE_STRAWBERRY_TEMPERATURE_LINE_CRITICAL',
	BROKE_STRAWBERRY_SYSTEM = 'BROKE_STRAWBERRY_SYSTEM',
	REPAIR_STRAWBERRY_SYSTEM = 'REPAIR_STRAWBERRY_SYSTEM',
	FILL_STRAWBERRY_HEALTH_LINE_CRITICAL = 'FILL_STRAWBERRY_HEALTH_LINE_CRITICAL',
	REMOVE_STRAWBERRY_HEALTH_LINE_CRITICAL = 'REMOVE_STRAWBERRY_HEALTH_LINE_CRITICAL',
	FILL_STRAWBERRY_HEALTH_LINE_EMPTY = 'FILL_STRAWBERRY_HEALTH_LINE_EMPTY',
	REMOVE_STRAWBERRY_HEALTH_LINE_EMPTY = 'REMOVE_STRAWBERRY_HEALTH_LINE_EMPTY',
	INCREASE_STRAWBERRY_LEVEL_MISTAKES = 'INCREASE_STRAWBERRY_LEVEL_MISTAKES',

	FILL_PEST_LINE_CRITICAL = 'FILL_PEST_LINE_CRITICAL',
	REMOVE_PEST_LINE_CRITICAL = 'REMOVE_PEST_LINE_CRITICAL',

	COMPLETE_AI_GAME = 'COMPLETE_AI_GAME',
	NOT_COMPLETE_AI_GAME = 'NOT_COMPLETE_AI_GAME'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)

let timer: any = null

export const mutations: MutationTree<IAiGameState> = {
	[EN_AiGameMutation.RESTART_GAME_AI](state) {
		;(state.isInfoLinkBlockVisible = true),
			(state.isRulesBlockVisible = false),
			(state.isVictoryBlockVisible = false),
			(state.isLossBlockVisible = false),
			(state.isStartGame = false),
			(state.gameLoop = 0),
			(state.tomatoLevel = 1),
			(state.isTomatoMoistureLineCritical = false),
			(state.isTomatoSystemBroken = false),
			(state.isTomatoHealthLineCritical = false),
			(state.isTomatoHealthLineEmpty = false),
			(state.tomatoLevelMistakes = 1),
			(state.pepperLevel = 2),
			(state.isPepperMoistureLineCritical = false),
			(state.isPepperSystemBroken = false),
			(state.isPepperHealthLineCritical = false),
			(state.isPepperHealthLineEmpty = false),
			(state.pepperLevelMistakes = 1),
			(state.strawberryLevel = 3),
			(state.isStrawberryMoistureLineCritical = false),
			(state.isStrawberryTemperatureLineCritical = false),
			(state.isStrawberrySystemBroken = false),
			(state.isStrawberryHealthLineCritical = false),
			(state.isStrawberryHealthLineEmpty = false),
			(state.strawberryLevelMistakes = 1),
			(state.points = 0),
			(state.timer = 90),
			(state.isChosenBook = false),
			(state.isChosenNumPad = false),
			(state.isChosenTomatoLevel = false),
			(state.isChosenPepperLevel = false),
			(state.isChosenStrawberryLevel = false),
			(state.isPestLineCritical = false)
	},
	[EN_AiGameMutation.START_NEW_GAME_AI](state) {
		state.isVictoryBlockVisible = false
		state.isLossBlockVisible = false
		state.isStartGame = false
		state.gameLoop = 0
		state.tomatoLevel = 1
		state.isTomatoMoistureLineCritical = false
		state.isTomatoSystemBroken = false
		state.isTomatoHealthLineCritical = false
		state.isTomatoHealthLineEmpty = false
		state.tomatoLevelMistakes = 1
		state.pepperLevel = 2
		state.isPepperMoistureLineCritical = false
		state.isPepperSystemBroken = false
		state.isPepperHealthLineCritical = false
		state.isPepperHealthLineEmpty = false
		state.pepperLevelMistakes = 1
		state.strawberryLevel = 3
		state.isStrawberryMoistureLineCritical = false
		state.isStrawberryTemperatureLineCritical = false
		state.isStrawberrySystemBroken = false
		state.isStrawberryHealthLineCritical = false
		state.isStrawberryHealthLineEmpty = false
		state.strawberryLevelMistakes = 1

		if (state.points === 5) {
			state.points = 5
		} else {
			state.points = 0
		}

		state.timer = 90
		state.isChosenBook = false
		state.isChosenNumPad = false
		state.isChosenTomatoLevel = false
		state.isChosenPepperLevel = false
		state.isChosenStrawberryLevel = false
		state.isPestLineCritical = false
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
		;(state.isRulesBlockVisible = false),
			(state.isVictoryBlockVisible = false),
			(state.isLossBlockVisible = false),
			(state.isStartGame = true),
			(state.gameLoop = 0),
			(state.tomatoLevel = 1),
			(state.isTomatoMoistureLineCritical = false),
			(state.isTomatoSystemBroken = false),
			(state.isTomatoHealthLineCritical = false),
			(state.isTomatoHealthLineEmpty = false),
			(state.tomatoLevelMistakes = 1),
			(state.pepperLevel = 2),
			(state.isPepperMoistureLineCritical = false),
			(state.isPepperSystemBroken = false),
			(state.isPepperHealthLineCritical = false),
			(state.isPepperHealthLineEmpty = false),
			(state.pepperLevelMistakes = 1),
			(state.strawberryLevel = 3),
			(state.isStrawberryMoistureLineCritical = false),
			(state.isStrawberryTemperatureLineCritical = false),
			(state.isStrawberrySystemBroken = false),
			(state.isStrawberryHealthLineCritical = false),
			(state.isStrawberryHealthLineEmpty = false),
			(state.strawberryLevelMistakes = 1),
			(state.timer = 90),
			(state.isChosenBook = false),
			(state.isChosenNumPad = false),
			(state.isChosenTomatoLevel = false),
			(state.isChosenPepperLevel = false),
			(state.isChosenStrawberryLevel = false),
			(state.isPestLineCritical = false)
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
		if (state.points === 0) {
			state.points += 5
		}
	},
	[EN_AiGameMutation.MINUS_POINTS_AI](state) {
		if (state.points === 0) {
			state.points = 0
		} else {
			state.points -= 5
		}
	},

	[EN_AiGameMutation.START_FINISH_TIMER_AI](state) {
		if (
			state.timer > 0 &&
			!state.isLossBlockVisible &&
			state.isStartGame &&
			state.gameLoop > 0
		) {
			if (timer) {
				clearInterval(timer)
			}

			timer = setInterval(() => {
				state.timer -= 1

				if (state.timer < 0) {
					clearInterval(timer)
					state.timer = 0
				}
			}, 1000)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timer)
		}

		if (state.isInfoLinkBlockVisible) {
			clearInterval(timer)
		}

		if (state.timer === 0) {
			clearInterval(timer)
		}
	},
	[EN_AiGameMutation.STOP_TIMER_AI](state) {
		if (timer) {
			clearInterval(timer)
		}
	},
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
			if (
				!state.isTomatoSystemBroken &&
				!state.isPepperSystemBroken &&
				!state.isStrawberrySystemBroken
			) {
				state.isChosenNumPad = true
			}
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
	[EN_AiGameMutation.FILL_TOMATO_MOISTURE_LINE_CRITICAL](state) {
		state.isTomatoMoistureLineCritical = true
	},
	[EN_AiGameMutation.REMOVE_TOMATO_MOISTURE_LINE_CRITICAL](state) {
		state.isTomatoMoistureLineCritical = false
	},
	[EN_AiGameMutation.BROKE_TOMATO_SYSTEM](state) {
		state.isTomatoSystemBroken = true
	},
	[EN_AiGameMutation.REPAIR_TOMATO_SYSTEM](state) {
		state.isTomatoSystemBroken = false
	},
	[EN_AiGameMutation.FILL_TOMATO_HEALTH_LINE_CRITICAL](state) {
		state.isTomatoHealthLineCritical = true
	},
	[EN_AiGameMutation.REMOVE_TOMATO_HEALTH_LINE_CRITICAL](state) {
		state.isTomatoHealthLineCritical = false
	},
	[EN_AiGameMutation.FILL_TOMATO_HEALTH_LINE_EMPTY](state) {
		state.isTomatoHealthLineEmpty = true
	},
	[EN_AiGameMutation.REMOVE_TOMATO_HEALTH_LINE_EMPTY](state) {
		state.isTomatoHealthLineEmpty = false
	},
	[EN_AiGameMutation.INCREASE_TOMATO_LEVEL_MISTAKES](state) {
		state.tomatoLevelMistakes += 1
	},

	[EN_AiGameMutation.CHOOSE_PEPPER_LEVEL_AI](state) {
		state.isChosenPepperLevel = true
	},
	[EN_AiGameMutation.NOT_CHOOSE_PEPPER_LEVEL_AI](state) {
		state.isChosenPepperLevel = false
	},
	[EN_AiGameMutation.FILL_PEPPER_MOISTURE_LINE_CRITICAL](state) {
		state.isPepperMoistureLineCritical = true
	},
	[EN_AiGameMutation.REMOVE_PEPPER_MOISTURE_LINE_CRITICAL](state) {
		state.isPepperMoistureLineCritical = false
	},
	[EN_AiGameMutation.BROKE_PEPPER_SYSTEM](state) {
		state.isPepperSystemBroken = true
	},
	[EN_AiGameMutation.REPAIR_PEPPER_SYSTEM](state) {
		state.isPepperSystemBroken = false
	},
	[EN_AiGameMutation.FILL_PEPPER_HEALTH_LINE_CRITICAL](state) {
		state.isPepperHealthLineCritical = true
	},
	[EN_AiGameMutation.REMOVE_PEPPER_HEALTH_LINE_CRITICAL](state) {
		state.isPepperHealthLineCritical = false
	},
	[EN_AiGameMutation.FILL_PEPPER_HEALTH_LINE_EMPTY](state) {
		state.isPepperHealthLineEmpty = true
	},
	[EN_AiGameMutation.REMOVE_PEPPER_HEALTH_LINE_EMPTY](state) {
		state.isPepperHealthLineEmpty = false
	},
	[EN_AiGameMutation.INCREASE_PEPPER_LEVEL_MISTAKES](state) {
		state.pepperLevelMistakes += 1
	},

	[EN_AiGameMutation.CHOOSE_STRAWBERRY_LEVEL_AI](state) {
		state.isChosenStrawberryLevel = true
	},
	[EN_AiGameMutation.NOT_CHOOSE_STRAWBERRY_LEVEL_AI](state) {
		state.isChosenStrawberryLevel = false
	},
	[EN_AiGameMutation.FILL_STRAWBERRY_MOISTURE_LINE_CRITICAL](state) {
		state.isStrawberryMoistureLineCritical = true
	},
	[EN_AiGameMutation.REMOVE_STRAWBERRY_MOISTURE_LINE_CRITICAL](state) {
		state.isStrawberryMoistureLineCritical = false
	},
	[EN_AiGameMutation.FILL_STRAWBERRY_TEMPERATURE_LINE_CRITICAL](state) {
		state.isStrawberryTemperatureLineCritical = true
	},
	[EN_AiGameMutation.REMOVE_STRAWBERRY_TEMPERATURE_LINE_CRITICAL](state) {
		state.isStrawberryTemperatureLineCritical = false
	},
	[EN_AiGameMutation.BROKE_STRAWBERRY_SYSTEM](state) {
		state.isStrawberrySystemBroken = true
	},
	[EN_AiGameMutation.REPAIR_STRAWBERRY_SYSTEM](state) {
		state.isStrawberrySystemBroken = false
	},
	[EN_AiGameMutation.FILL_STRAWBERRY_HEALTH_LINE_CRITICAL](state) {
		state.isStrawberryHealthLineCritical = true
	},
	[EN_AiGameMutation.REMOVE_STRAWBERRY_HEALTH_LINE_CRITICAL](state) {
		state.isStrawberryHealthLineCritical = false
	},
	[EN_AiGameMutation.FILL_STRAWBERRY_HEALTH_LINE_EMPTY](state) {
		state.isStrawberryHealthLineEmpty = true
	},
	[EN_AiGameMutation.REMOVE_STRAWBERRY_HEALTH_LINE_EMPTY](state) {
		state.isStrawberryHealthLineEmpty = false
	},
	[EN_AiGameMutation.INCREASE_STRAWBERRY_LEVEL_MISTAKES](state) {
		state.strawberryLevelMistakes += 1
	},

	[EN_AiGameMutation.FILL_PEST_LINE_CRITICAL](state) {
		state.isPestLineCritical = true
	},
	[EN_AiGameMutation.REMOVE_PEST_LINE_CRITICAL](state) {
		state.isPestLineCritical = false
	},

	[EN_AiGameMutation.COMPLETE_AI_GAME](state) {
		state.isAiGameCompleted = true
	},
	[EN_AiGameMutation.NOT_COMPLETE_AI_GAME](state) {
		state.isAiGameCompleted = false
	}
}
