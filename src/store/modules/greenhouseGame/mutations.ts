import { MutationTree } from 'vuex'

import { nameFlasks } from '@/components/screens/games/geneticGame/config/config'
import {
	generatorFlasksDropZone,
	generatorFlasksList
} from '@/components/screens/games/geneticGame/helpers/helpers'

import { IGreenhouseGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_GreenhouseGameMutation {
	RESTART_GAME_GH = 'RESTART_GAME_GH',

	SHOW_INFO_LINK_BLOCK_GH = 'SHOW_INFO_LINK_BLOCK_GH',
	HIDE_INFO_LINK_BLOCK_GH = 'HIDE_INFO_LINK_BLOCK_GH',
	SHOW_RULES_BLOCK_GH = 'SHOW_RULES_BLOCK_GH',
	HIDE_RULES_BLOCK_GH = 'HIDE_RULES_BLOCK_GH',
	SHOW_VICTORY_BLOCK_GH = 'SHOW_VICTORY_BLOCK_GH',
	HIDE_VICTORY_BLOCK_GH = 'HIDE_VICTORY_BLOCK_GH',
	SHOW_LOSS_BLOCK_GH = 'SHOW_LOSS_BLOCK_GH',
	HIDE_LOSS_BLOCK_GH = 'HIDE_LOSS_BLOCK_GH',
	START_GAME_GH = 'START_GAME_GH',
	FINISH_GAME_GH = 'FINISH_GAME_GH',
	PLUS_POINTS_GH = 'PLUS_POINTS_GH',
	PLUS_POINTS_LINK_GH = 'PLUS_POINTS_LINK_GH',
	MINUS_POINTS_GH = 'MINUS_POINTS_GH',

	UPDATE_TIMER_TOMATO_GH = 'UPDATE_TIMER_TOMATO_GH',
	START_FINISH_TIMER_TOMATO_GH = 'START_FINISH_TIMER_TOMATO_GH',
	UPDATE_TIMER_PEPPER_GH = 'UPDATE_TIMER_PEPPER_GH',
	START_FINISH_TIMER_PEPPER_GH = 'START_FINISH_TIMER_PEPPER_GH',
	UPDATE_TIMER_STRAWBERRY_GH = 'UPDATE_TIMER_STRAWBERRY_GH',
	START_FINISH_TIMER_STRAWBERRY_GH = 'START_FINISH_TIMER_STRAWBERRY_GH',

	INCREASE_PLAYER_MISTAKES_GH = 'INCREASE_PLAYER_MISTAKES_GH',
	SHOW_FIRST_MISTAKE_GH = 'SHOW_FIRST_MISTAKE_GH',
	HIDE_FIRST_MISTAKE_GH = 'HIDE_FIRST_MISTAKE_GH',
	SHOW_SECOND_MISTAKE_GH = 'SHOW_SECOND_MISTAKE_GH',
	HIDE_SECOND_MISTAKE_GH = 'HIDE_SECOND_MISTAKE_GH',

	SHOW_TOMATO_SOIL_MOISTURE_CHECK_GH = 'SHOW_TOMATO_SOIL_MOISTURE_CHECK_GH',
	HIDE_TOMATO_SOIL_MOISTURE_CHECK_GH = 'HIDE_TOMATO_SOIL_MOISTURE_CHECK_GH',
	SHOW_TOMATO_SOIL_MOISTURE_ACTION_GH = 'SHOW_TOMATO_SOIL_MOISTURE_ACTION_GH',
	HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH = 'HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH',
	INCREASE_TOMATO_SOIL_MOISTURE_NUM_GH = 'INCREASE_TOMATO_SOIL_MOISTURE_NUM_GH',
	SHOW_TOMATO_SOIL_TEMPERATURE_CHECK_GH = 'SHOW_TOMATO_SOIL_TEMPERATURE_CHECK_GH',
	HIDE_TOMATO_SOIL_TEMPERATURE_CHECK_GH = 'HIDE_TOMATO_SOIL_TEMPERATURE_CHECK_GH',
	SHOW_TOMATO_SOIL_TEMPERATURE_ACTION_GH = 'SHOW_TOMATO_SOIL_TEMPERATURE_ACTION_GH',
	HIDE_TOMATO_SOIL_TEMPERATURE_ACTION_GH = 'HIDE_TOMATO_SOIL_TEMPERATURE_ACTION_GH',
	START_TOMATO_LEVEL_GH = 'START_TOMATO_LEVEL_GH',
	FINISH_TOMATO_LEVEL_GH = 'FINISH_TOMATO_LEVEL_GH',
	SHOW_TOMATO_SPROUT_GH = 'SHOW_TOMATO_SPROUT_GH',
	HIDE_TOMATO_SPROUT_GH = 'HIDE_TOMATO_SPROUT_GH',
	SHOW_TOMATO_COLOR_GH = 'SHOW_TOMATO_COLOR_GH',
	HIDE_TOMATO_COLOR_GH = 'HIDE_TOMATO_COLOR_GH',
	SHOW_TOMATO_MODIFIED_GH = 'SHOW_TOMATO_MODIFIED_GH',
	HIDE_TOMATO_MODIFIED_GH = 'HIDE_TOMATO_MODIFIED_GH',

	START_PEPPER_LEVEL_GH = 'START_PEPPER_LEVEL_GH',
	FINISH_PEPPER_LEVEL_GH = 'FINISH_PEPPER_LEVEL_GH',
	SHOW_PEPPER_SPROUT_GH = 'SHOW_PEPPER_SPROUT_GH',
	HIDE_PEPPER_SPROUT_GH = 'HIDE_PEPPER_SPROUT_GH',
	SHOW_PEPPER_COLOR_GH = 'SHOW_PEPPER_COLOR_GH',
	HIDE_PEPPER_COLOR_GH = 'HIDE_PEPPER_COLOR_GH',
	SHOW_PEPPER_MODIFIED_GH = 'SHOW_PEPPER_MODIFIED_GH',
	HIDE_PEPPER_MODIFIED_GH = 'HIDE_PEPPER_MODIFIED_GH',

	START_STRAWBERRY_LEVEL_GH = 'START_STRAWBERRY_LEVEL_GH',
	FINISH_STRAWBERRY_LEVEL_GH = 'FINISH_STRAWBERRY_LEVEL_GH',
	SHOW_STRAWBERRY_SPROUT_GH = 'SHOW_STRAWBERRY_SPROUT_GH',
	HIDE_STRAWBERRY_SPROUT_GH = 'HIDE_STRAWBERRY_SPROUT_GH',
	SHOW_STRAWBERRY_COLOR_GH = 'SHOW_STRAWBERRY_COLOR_GH',
	HIDE_STRAWBERRY_COLOR_GH = 'HIDE_STRAWBERRY_COLOR_GH',
	SHOW_STRAWBERRY_MODIFIED_GH = 'SHOW_STRAWBERRY_MODIFIED_GH',
	HIDE_STRAWBERRY_MODIFIED_GH = 'HIDE_STRAWBERRY_MODIFIED_GH'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)

let timerTomato: any = null
let timerPepper: any = null
let timerStrawberry: any = null

export const mutations: MutationTree<IGreenhouseGameState> = {
	[EN_GreenhouseGameMutation.RESTART_GAME_GH](state) {
		state.isInfoLinkBlockVisible = true
		state.isRulesBlockVisible = false
		state.isVictoryBlockVisible = false
		state.isLossBlockVisible = false
		state.isStartGame = false
		state.points = 0

		state.timerTomato = 9
		state.timerPepper = 9
		state.timerStrawberry = 9

		state.playerMistakes = 0
		state.isFirstMistake = false
		state.isSecondMistake = false

		state.isTomatoLevel = true
		state.isTomatoSprout = false
		state.isTomatoColor = false
		state.isTomatoModified = false

		state.pepperFlasksList = generatorFlasksList(nameFlasks)
		state.pepperFlasksDropZone = generatorFlasksDropZone()
		state.isPepperLevel = false
		state.isPepperSprout = false
		state.isPepperColor = false
		state.isPepperModified = false

		state.strawberryFlasksList = generatorFlasksList(nameFlasks)
		state.strawberryFlasksDropZone = generatorFlasksDropZone()
		state.isStrawberryLevel = false
		state.isStrawberrySprout = false
		state.isStrawberryColor = false
		state.isStrawberryModified = false
	},
	[EN_GreenhouseGameMutation.SHOW_INFO_LINK_BLOCK_GH](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isInfoLinkBlockVisible = true
	},
	[EN_GreenhouseGameMutation.HIDE_INFO_LINK_BLOCK_GH](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EN_GreenhouseGameMutation.SHOW_RULES_BLOCK_GH](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isRulesBlockVisible = true
	},
	[EN_GreenhouseGameMutation.HIDE_RULES_BLOCK_GH](state) {
		state.isRulesBlockVisible = false
	},
	[EN_GreenhouseGameMutation.SHOW_VICTORY_BLOCK_GH](state) {
		audioVictory.autoplay = true
		audioVictory.volume = 1

		state.isVictoryBlockVisible = true
	},
	[EN_GreenhouseGameMutation.HIDE_VICTORY_BLOCK_GH](state) {
		audioVictory.autoplay = false

		state.isVictoryBlockVisible = false
	},
	[EN_GreenhouseGameMutation.SHOW_LOSS_BLOCK_GH](state) {
		state.isLossBlockVisible = true
	},
	[EN_GreenhouseGameMutation.HIDE_LOSS_BLOCK_GH](state) {
		state.isLossBlockVisible = false
	},
	[EN_GreenhouseGameMutation.START_GAME_GH](state) {
		state.isStartGame = true
	},
	[EN_GreenhouseGameMutation.FINISH_GAME_GH](state) {
		state.isStartGame = false
	},
	[EN_GreenhouseGameMutation.PLUS_POINTS_GH](state) {
		state.points += 15
	},
	[EN_GreenhouseGameMutation.PLUS_POINTS_LINK_GH](state) {
		state.points += 5
	},
	[EN_GreenhouseGameMutation.MINUS_POINTS_GH](state) {
		state.points -= 5
	},

	[EN_GreenhouseGameMutation.UPDATE_TIMER_TOMATO_GH](state) {
		state.timerTomato = 9
	},
	[EN_GreenhouseGameMutation.START_FINISH_TIMER_TOMATO_GH](state) {
		if (
			state.timerTomato > 0 &&
			!state.isLossBlockVisible &&
			state.isTomatoLevel
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

		if (state.timerTomato === 0 || !state.isTomatoLevel) {
			clearInterval(timerTomato)
		}

		if (state.isFirstMistake || state.isSecondMistake) {
			clearInterval(timerTomato)
		}
	},
	[EN_GreenhouseGameMutation.UPDATE_TIMER_PEPPER_GH](state) {
		state.timerPepper = 9
	},
	[EN_GreenhouseGameMutation.START_FINISH_TIMER_PEPPER_GH](state) {
		if (
			state.timerPepper > 0 &&
			!state.isLossBlockVisible &&
			state.isPepperLevel
		) {
			if (timerPepper) {
				clearInterval(timerPepper)
			}

			timerPepper = setInterval(() => {
				state.timerPepper -= 1
			}, 1000)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timerPepper)
		}

		if (state.timerPepper === 0 || !state.isPepperLevel) {
			clearInterval(timerPepper)
		}

		if (state.isFirstMistake || state.isSecondMistake) {
			clearInterval(timerPepper)
		}
	},
	[EN_GreenhouseGameMutation.UPDATE_TIMER_STRAWBERRY_GH](state) {
		state.timerStrawberry = 9
	},
	[EN_GreenhouseGameMutation.START_FINISH_TIMER_STRAWBERRY_GH](state) {
		if (
			state.timerStrawberry > 0 &&
			!state.isLossBlockVisible &&
			state.isStrawberryLevel
		) {
			if (timerStrawberry) {
				clearInterval(timerStrawberry)
			}

			timerStrawberry = setInterval(() => {
				state.timerStrawberry -= 1
			}, 1000)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timerStrawberry)
		}

		if (state.timerStrawberry === 0 || !state.isStrawberryLevel) {
			clearInterval(timerStrawberry)
		}

		if (state.isFirstMistake || state.isSecondMistake) {
			clearInterval(timerStrawberry)
		}
	},

	[EN_GreenhouseGameMutation.INCREASE_PLAYER_MISTAKES_GH](state) {
		state.playerMistakes += 1
	},
	[EN_GreenhouseGameMutation.SHOW_FIRST_MISTAKE_GH](state) {
		if (state.playerMistakes === 1) {
			state.isFirstMistake = true
		}
	},
	[EN_GreenhouseGameMutation.HIDE_FIRST_MISTAKE_GH](state) {
		state.isFirstMistake = false
	},
	[EN_GreenhouseGameMutation.SHOW_SECOND_MISTAKE_GH](state) {
		if (state.playerMistakes === 2 || state.playerMistakes === 3) {
			state.isSecondMistake = true
		}
	},
	[EN_GreenhouseGameMutation.HIDE_SECOND_MISTAKE_GH](state) {
		state.isSecondMistake = false
	},

	[EN_GreenhouseGameMutation.SHOW_TOMATO_SOIL_MOISTURE_CHECK_GH](state) {
		state.isTomatoSoilMoistureCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_TOMATO_SOIL_MOISTURE_CHECK_GH](state) {
		state.isTomatoSoilMoistureCheck = false
	},
	[EN_GreenhouseGameMutation.SHOW_TOMATO_SOIL_MOISTURE_ACTION_GH](state) {
		state.isTomatoSoilMoistureAction = true
	},
	[EN_GreenhouseGameMutation.HIDE_TOMATO_SOIL_MOISTURE_ACTION_GH](state) {
		state.isTomatoSoilMoistureAction = false
	},
	[EN_GreenhouseGameMutation.INCREASE_TOMATO_SOIL_MOISTURE_NUM_GH](state) {
		state.tomatoSoilMoistureNum = '60'
	},
	[EN_GreenhouseGameMutation.SHOW_TOMATO_SOIL_TEMPERATURE_CHECK_GH](state) {
		state.isTomatoSoilTemperatureCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_TOMATO_SOIL_TEMPERATURE_CHECK_GH](state) {
		state.isTomatoSoilTemperatureCheck = false
	},
	[EN_GreenhouseGameMutation.START_TOMATO_LEVEL_GH](state) {
		state.isTomatoLevel = true
	},
	[EN_GreenhouseGameMutation.FINISH_TOMATO_LEVEL_GH](state) {
		state.isTomatoLevel = false
	},
	[EN_GreenhouseGameMutation.SHOW_TOMATO_SPROUT_GH](state) {
		state.isTomatoSprout = true
	},
	[EN_GreenhouseGameMutation.HIDE_TOMATO_SPROUT_GH](state) {
		state.isTomatoSprout = false
	},
	[EN_GreenhouseGameMutation.SHOW_TOMATO_COLOR_GH](state) {
		state.isTomatoColor = true
	},
	[EN_GreenhouseGameMutation.HIDE_TOMATO_COLOR_GH](state) {
		state.isTomatoColor = false
	},
	[EN_GreenhouseGameMutation.SHOW_TOMATO_MODIFIED_GH](state) {
		state.isTomatoModified = true
	},
	[EN_GreenhouseGameMutation.HIDE_TOMATO_MODIFIED_GH](state) {
		state.isTomatoModified = false
	},

	[EN_GreenhouseGameMutation.START_PEPPER_LEVEL_GH](state) {
		state.isPepperLevel = true
	},
	[EN_GreenhouseGameMutation.FINISH_PEPPER_LEVEL_GH](state) {
		state.isPepperLevel = false
	},
	[EN_GreenhouseGameMutation.SHOW_PEPPER_SPROUT_GH](state) {
		state.isPepperSprout = true
	},
	[EN_GreenhouseGameMutation.HIDE_PEPPER_SPROUT_GH](state) {
		state.isPepperSprout = false
	},
	[EN_GreenhouseGameMutation.SHOW_PEPPER_COLOR_GH](state) {
		state.isPepperColor = true
	},
	[EN_GreenhouseGameMutation.HIDE_PEPPER_COLOR_GH](state) {
		state.isPepperColor = false
	},
	[EN_GreenhouseGameMutation.SHOW_PEPPER_MODIFIED_GH](state) {
		state.isPepperModified = true
	},
	[EN_GreenhouseGameMutation.HIDE_PEPPER_MODIFIED_GH](state) {
		state.isPepperModified = false
	},

	[EN_GreenhouseGameMutation.START_STRAWBERRY_LEVEL_GH](state) {
		state.isStrawberryLevel = true
	},
	[EN_GreenhouseGameMutation.FINISH_STRAWBERRY_LEVEL_GH](state) {
		state.isStrawberryLevel = false
	},
	[EN_GreenhouseGameMutation.SHOW_STRAWBERRY_SPROUT_GH](state) {
		state.isStrawberrySprout = true
	},
	[EN_GreenhouseGameMutation.HIDE_STRAWBERRY_SPROUT_GH](state) {
		state.isStrawberrySprout = false
	},
	[EN_GreenhouseGameMutation.SHOW_STRAWBERRY_COLOR_GH](state) {
		state.isStrawberryColor = true
	},
	[EN_GreenhouseGameMutation.HIDE_STRAWBERRY_COLOR_GH](state) {
		state.isStrawberryColor = false
	},
	[EN_GreenhouseGameMutation.SHOW_STRAWBERRY_MODIFIED_GH](state) {
		state.isStrawberryModified = true
	},
	[EN_GreenhouseGameMutation.HIDE_STRAWBERRY_MODIFIED_GH](state) {
		state.isStrawberryModified = false
	}
}
