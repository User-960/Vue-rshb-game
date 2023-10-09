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
	STOP_TIMER_TOMATO_GH = 'STOP_TIMER_TOMATO_GH',
	STOP_TIMER_PEPPER_GH = 'STOP_TIMER_PEPPER_GH',
	STOP_TIMER_STRAWBERRY_GH = 'STOP_TIMER_STRAWBERRY_GH',
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
	SHOW_TOMATO_AIR_HUMIDITY_CHECK_GH = 'SHOW_TOMATO_AIR_HUMIDITY_CHECK_GH',
	HIDE_TOMATO_AIR_HUMIDITY_CHECK_GH = 'HIDE_TOMATO_AIR_HUMIDITY_CHECK_GH',
	SHOW_TOMATO_AIR_TEMPERATURE_CHECK_GH = 'SHOW_TOMATO_AIR_TEMPERATURE_CHECK_GH',
	HIDE_TOMATO_AIR_TEMPERATURE_CHECK_GH = 'HIDE_TOMATO_AIR_TEMPERATURE_CHECK_GH',
	PLUS_TOMATO_HEALTH_PERCENTAGE_GH = 'PLUS_TOMATO_HEALTH_PERCENTAGE_GH',
	MINUS_TOMATO_HEALTH_PERCENTAGE_GH = 'MINUS_TOMATO_HEALTH_PERCENTAGE_GH',
	START_TOMATO_LEVEL_GH = 'START_TOMATO_LEVEL_GH',
	FINISH_TOMATO_LEVEL_GH = 'FINISH_TOMATO_LEVEL_GH',

	SHOW_PEPPER_SOIL_MOISTURE_CHECK_GH = 'SHOW_PEPPER_SOIL_MOISTURE_CHECK_GH',
	HIDE_PEPPER_SOIL_MOISTURE_CHECK_GH = 'HIDE_PEPPER_SOIL_MOISTURE_CHECK_GH',
	SHOW_PEPPER_AIR_HUMIDITY_CHECK_GH = 'SHOW_PEPPER_AIR_HUMIDITY_CHECK_GH',
	HIDE_PEPPER_AIR_HUMIDITY_CHECK_GH = 'HIDE_PEPPER_AIR_HUMIDITY_CHECK_GH',
	SHOW_PEPPER_AIR_HUMIDITY_ACTION_GH = 'SHOW_PEPPER_AIR_HUMIDITY_ACTION_GH',
	HIDE_PEPPER_AIR_HUMIDITY_ACTION_GH = 'HIDE_PEPPER_AIR_HUMIDITY_ACTION_GH',
	INCREASE_PEPPER_AIR_HUMIDITY_NUM_GH = 'INCREASE_PEPPER_AIR_HUMIDITY_NUM_GH',
	SHOW_PEPPER_AIR_TEMPERATURE_CHECK_GH = 'SHOW_PEPPER_AIR_TEMPERATURE_CHECK_GH',
	HIDE_PEPPER_AIR_TEMPERATURE_CHECK_GH = 'HIDE_PEPPER_AIR_TEMPERATURE_CHECK_GH',
	PLUS_PEPPER_HEALTH_PERCENTAGE_GH = 'PLUS_PEPPER_HEALTH_PERCENTAGE_GH',
	MINUS_PEPPER_HEALTH_PERCENTAGE_GH = 'MINUS_PEPPER_HEALTH_PERCENTAGE_GH',
	START_PEPPER_LEVEL_GH = 'START_PEPPER_LEVEL_GH',
	FINISH_PEPPER_LEVEL_GH = 'FINISH_PEPPER_LEVEL_GH',

	SHOW_STRAWBERRY_SOIL_MOISTURE_CHECK_GH = 'SHOW_STRAWBERRY_SOIL_MOISTURE_CHECK_GH',
	HIDE_STRAWBERRY_SOIL_MOISTURE_CHECK_GH = 'HIDE_STRAWBERRY_SOIL_MOISTURE_CHECK_GH',
	SHOW_STRAWBERRY_AIR_HUMIDITY_CHECK_GH = 'SHOW_STRAWBERRY_AIR_HUMIDITY_CHECK_GH',
	HIDE_STRAWBERRY_AIR_HUMIDITY_CHECK_GH = 'HIDE_STRAWBERRY_AIR_HUMIDITY_CHECK_GH',
	SHOW_STRAWBERRY_AIR_HUMIDITY_ACTION_GH = 'SHOW_STRAWBERRY_AIR_HUMIDITY_ACTION_GH',
	HIDE_STRAWBERRY_AIR_HUMIDITY_ACTION_GH = 'HIDE_STRAWBERRY_AIR_HUMIDITY_ACTION_GH',
	REDUCE_STRAWBERRY_AIR_HUMIDITY_NUM_GH = 'REDUCE_STRAWBERRY_AIR_HUMIDITY_NUM_GH',
	SHOW_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH = 'SHOW_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH',
	HIDE_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH = 'HIDE_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH',
	PLUS_STRAWBERRY_HEALTH_PERCENTAGE_GH = 'PLUS_STRAWBERRY_HEALTH_PERCENTAGE_GH',
	MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH = 'MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH',
	START_STRAWBERRY_LEVEL_GH = 'START_STRAWBERRY_LEVEL_GH',
	FINISH_STRAWBERRY_LEVEL_GH = 'FINISH_STRAWBERRY_LEVEL_GH'
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

		state.timerPepper = 9
		state.timerStrawberry = 9
		state.playerMistakes = 0
		state.isFirstMistake = false
		state.isSecondMistake = false

		state.timerTomato = 9
		state.isTomatoSoilMoistureCheck = true
		state.isTomatoSoilMoistureAction = false
		state.tomatoSoilMoistureNum = '30,1'
		state.healthTomatoPercentage = 100
		state.isTomatoAirHumidityCheck = false
		state.isTomatoAirTemperatureCheck = false
		state.isTomatoLevel = true

		state.isPepperSoilMoistureCheck = false
		state.isPepperAirHumidityCheck = false
		state.isPepperAirHumidityAction = false
		state.isPepperAirTemperatureCheck = false
		state.pepperAirHumidityNum = '65'
		state.healthPepperPercentage = 100
		state.isPepperLevel = false

		state.isStrawberrySoilMoistureCheck = false
		state.isStrawberryAirHumidityCheck = false
		state.isStrawberryAirHumidityAction: false
		state.isStrawberryAirTemperatureCheck = false
		state.strawberryAirHumidityNum = '102'
		state.healthStrawberryPercentage = 100
		state.isStrawberryLevel = false
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
	[EN_GreenhouseGameMutation.STOP_TIMER_TOMATO_GH](state) {
		if (timerTomato) {
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
	[EN_GreenhouseGameMutation.STOP_TIMER_PEPPER_GH](state) {
		if (timerPepper) {
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
	[EN_GreenhouseGameMutation.STOP_TIMER_STRAWBERRY_GH](state) {
		if (timerStrawberry) {
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
	[EN_GreenhouseGameMutation.SHOW_TOMATO_AIR_HUMIDITY_CHECK_GH](state) {
		state.isTomatoAirHumidityCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_TOMATO_AIR_HUMIDITY_CHECK_GH](state) {
		state.isTomatoAirHumidityCheck = false
	},
	[EN_GreenhouseGameMutation.SHOW_TOMATO_AIR_TEMPERATURE_CHECK_GH](state) {
		state.isTomatoAirTemperatureCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_TOMATO_AIR_TEMPERATURE_CHECK_GH](state) {
		state.isTomatoAirTemperatureCheck = false
	},
	[EN_GreenhouseGameMutation.PLUS_TOMATO_HEALTH_PERCENTAGE_GH](state) {
		state.healthTomatoPercentage += 30
	},
	[EN_GreenhouseGameMutation.MINUS_TOMATO_HEALTH_PERCENTAGE_GH](state) {
		state.healthTomatoPercentage -= 50
	},
	[EN_GreenhouseGameMutation.START_TOMATO_LEVEL_GH](state) {
		state.isTomatoLevel = true
	},
	[EN_GreenhouseGameMutation.FINISH_TOMATO_LEVEL_GH](state) {
		state.isTomatoLevel = false
	},

	[EN_GreenhouseGameMutation.SHOW_PEPPER_SOIL_MOISTURE_CHECK_GH](state) {
		state.isPepperSoilMoistureCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_PEPPER_SOIL_MOISTURE_CHECK_GH](state) {
		state.isPepperSoilMoistureCheck = false
	},
	[EN_GreenhouseGameMutation.SHOW_PEPPER_AIR_HUMIDITY_CHECK_GH](state) {
		state.isPepperAirHumidityCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_PEPPER_AIR_HUMIDITY_CHECK_GH](state) {
		state.isPepperAirHumidityCheck = false
	},
	[EN_GreenhouseGameMutation.SHOW_PEPPER_AIR_HUMIDITY_ACTION_GH](state) {
		state.isPepperAirHumidityAction = true
	},
	[EN_GreenhouseGameMutation.HIDE_PEPPER_AIR_HUMIDITY_ACTION_GH](state) {
		state.isPepperAirHumidityAction = false
	},
	[EN_GreenhouseGameMutation.INCREASE_PEPPER_AIR_HUMIDITY_NUM_GH](state) {
		state.pepperAirHumidityNum = '80'
	},
	[EN_GreenhouseGameMutation.SHOW_PEPPER_AIR_TEMPERATURE_CHECK_GH](state) {
		state.isPepperAirTemperatureCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_PEPPER_AIR_TEMPERATURE_CHECK_GH](state) {
		state.isPepperAirTemperatureCheck = false
	},
	[EN_GreenhouseGameMutation.PLUS_PEPPER_HEALTH_PERCENTAGE_GH](state) {
		state.healthPepperPercentage += 30
	},
	[EN_GreenhouseGameMutation.MINUS_PEPPER_HEALTH_PERCENTAGE_GH](state) {
		state.healthPepperPercentage -= 50
	},
	[EN_GreenhouseGameMutation.START_PEPPER_LEVEL_GH](state) {
		state.isPepperLevel = true
	},
	[EN_GreenhouseGameMutation.FINISH_PEPPER_LEVEL_GH](state) {
		state.isPepperLevel = false
	},

	[EN_GreenhouseGameMutation.SHOW_STRAWBERRY_SOIL_MOISTURE_CHECK_GH](state) {
		state.isStrawberrySoilMoistureCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_STRAWBERRY_SOIL_MOISTURE_CHECK_GH](state) {
		state.isStrawberrySoilMoistureCheck = false
	},
	[EN_GreenhouseGameMutation.SHOW_STRAWBERRY_AIR_HUMIDITY_CHECK_GH](state) {
		state.isStrawberryAirHumidityCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_STRAWBERRY_AIR_HUMIDITY_CHECK_GH](state) {
		state.isStrawberryAirHumidityCheck = false
	},
	[EN_GreenhouseGameMutation.SHOW_STRAWBERRY_AIR_HUMIDITY_ACTION_GH](state) {
		state.isStrawberryAirHumidityAction = true
	},
	[EN_GreenhouseGameMutation.HIDE_STRAWBERRY_AIR_HUMIDITY_ACTION_GH](state) {
		state.isStrawberryAirHumidityAction = false
	},
	[EN_GreenhouseGameMutation.REDUCE_STRAWBERRY_AIR_HUMIDITY_NUM_GH](state) {
		state.strawberryAirHumidityNum = '78'
	},
	[EN_GreenhouseGameMutation.SHOW_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH](state) {
		state.isStrawberryAirTemperatureCheck = true
	},
	[EN_GreenhouseGameMutation.HIDE_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH](state) {
		state.isStrawberryAirTemperatureCheck = false
	},
	[EN_GreenhouseGameMutation.PLUS_STRAWBERRY_HEALTH_PERCENTAGE_GH](state) {
		state.healthStrawberryPercentage += 30
	},
	[EN_GreenhouseGameMutation.MINUS_STRAWBERRY_HEALTH_PERCENTAGE_GH](state) {
		state.healthStrawberryPercentage -= 50
	},
	[EN_GreenhouseGameMutation.START_STRAWBERRY_LEVEL_GH](state) {
		state.isStrawberryLevel = true
	},
	[EN_GreenhouseGameMutation.FINISH_STRAWBERRY_LEVEL_GH](state) {
		state.isStrawberryLevel = false
	}
}
