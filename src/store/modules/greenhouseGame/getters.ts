import { GetterTree } from 'vuex'

import { IGreenhouseGameState } from './types'
import { IRootState } from '@/store/types'

export enum EN_GreenhouseGameGetters {
	GET_INFO_LINK_BLOCK_GH = 'GET_INFO_LINK_BLOCK_GH',
	GET_RULES_BLOCK_GH = 'GET_RULES_BLOCK_GH',
	GET_VICTORY_BLOCK_GH = 'GET_VICTORY_BLOCK_GH',
	GET_LOSS_BLOCK_GH = 'GET_LOSS_BLOCK_GH',
	GET_START_GAME_GH = 'GET_START_GAME_GH',
	GET_POINTS_GH = 'GET_POINTS_GH',

	GET_CHOSEN_BOOK_GH = 'GET_CHOSEN_BOOK_GH',
	GET_CHOSEN_NUMPAD_GH = 'GET_CHOSEN_NUMPAD_GH',
	GET_CHOSEN_TOMATO_LEVEL_GH = 'GET_CHOSEN_TOMATO_LEVEL_GH',
	GET_CHOSEN_PEPPER_LEVEL_GH = 'GET_CHOSEN_PEPPER_LEVEL_GH',
	GET_CHOSEN_STRAWBERRY_LEVEL_GH = 'GET_CHOSEN_STRAWBERRY_LEVEL_GH',

	GET_PLAYER_MISTAKES_GH = 'GET_PLAYER_MISTAKES_GH',
	GET_FIRST_MISTAKE_GH = 'GET_FIRST_MISTAKE_GH',
	GET_SECOND_MISTAKE_GH = 'GET_SECOND_MISTAKE_GH',

	GET_TIMER_TOMATO_GH = 'GET_TIMER_TOMATO_GH',
	GET_TIMER_PEPPER_GH = 'GET_TIMER_PEPPER_GH',
	GET_TIMER_STRAWBERRY_GH = 'GET_TIMER_STRAWBERRY_GH',

	GET_TOMATO_SOIL_MOISTURE_CHECK_GH = 'GET_TOMATO_SOIL_MOISTURE_CHECK_GH',
	GET_TOMATO_SOIL_MOISTURE_ACTION_GH = 'GET_TOMATO_SOIL_MOISTURE_ACTION_GH',
	GET_TOMATO_SOIL_MOISTURE_NUM_GH = 'GET_TOMATO_SOIL_MOISTURE_NUM_GH',
	GET_TOMATO_AIR_HUMIDITY_CHECK_GH = 'GET_TOMATO_AIR_HUMIDITY_CHECK_GH',
	GET_TOMATO_AIR_TEMPERATURE_CHECK_GH = 'GET_TOMATO_AIR_TEMPERATURE_CHECK_GH',
	GET_TOMATO_HEALTH_PERCENTAGE_GH = 'GET_TOMATO_HEALTH_PERCENTAGE_GH',
	GET_TOMATO_LEVEL_GH = 'GET_TOMATO_LEVEL_GH',
	GET_PLAYER_MISTAKES_TOMATO_GH = 'GET_PLAYER_MISTAKES_TOMATO_GH',
	GET_FIRST_MISTAKE_TOMATO_GH = 'GET_FIRST_MISTAKE_TOMATO_GH',
	GET_SECOND_MISTAKE_TOMATO_GH = 'GET_SECOND_MISTAKE_TOMATO_GH',

	GET_PEPPER_SOIL_MOISTURE_CHECK_GH = 'GET_PEPPER_SOIL_MOISTURE_CHECK_GH',
	GET_PEPPER_AIR_HUMIDITY_CHECK_GH = 'GET_PEPPER_AIR_HUMIDITY_CHECK_GH',
	GET_PEPPER_AIR_HUMIDITY_ACTION_GH = 'GET_PEPPER_AIR_HUMIDITY_ACTION_GH',
	GET_PEPPER_AIR_HUMIDITY_NUM_GH = 'GET_PEPPER_AIR_HUMIDITY_NUM_GH',
	GET_PEPPER_AIR_TEMPERATURE_CHECK_GH = 'GET_PEPPER_AIR_TEMPERATURE_CHECK_GH',
	GET_PEPPER_HEALTH_PERCENTAGE_GH = 'GET_PEPPER_HEALTH_PERCENTAGE_GH',
	GET_PEPPER_LEVEL_GH = 'GET_PEPPER_LEVEL_GH',
	GET_PLAYER_MISTAKES_PEPPER_GH = 'GET_PLAYER_MISTAKES_PEPPER_GH',
	GET_FIRST_MISTAKE_PEPPER_GH = 'GET_FIRST_MISTAKE_PEPPER_GH',
	GET_SECOND_MISTAKE_PEPPER_GH = 'GET_SECOND_MISTAKE_PEPPER_GH',

	GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH = 'GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH',
	GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH = 'GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH',
	GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH = 'GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH',
	GET_STRAWBERRY_AIR_HUMIDITY_NUM_GH = 'GET_STRAWBERRY_AIR_HUMIDITY_NUM_GH',
	GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH = 'GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH',
	GET_STRAWBERRY_HEALTH_PERCENTAGE_GH = 'GET_STRAWBERRY_HEALTH_PERCENTAGE_GH',
	GET_STRAWBERRY_LEVEL_GH = 'GET_STRAWBERRY_LEVEL_GH',
	GET_PLAYER_MISTAKES_STRAWBERRY_GH = 'GET_PLAYER_MISTAKES_STRAWBERRY_GH',
	GET_FIRST_MISTAKE_STRAWBERRY_GH = 'GET_FIRST_MISTAKE_STRAWBERRY_GH',
	GET_SECOND_MISTAKE_STRAWBERRY_GH = 'GET_SECOND_MISTAKE_STRAWBERRY_GH'
}

export const getters: GetterTree<IGreenhouseGameState, IRootState> = {
	[EN_GreenhouseGameGetters.GET_INFO_LINK_BLOCK_GH]: state =>
		state.isInfoLinkBlockVisible,
	[EN_GreenhouseGameGetters.GET_RULES_BLOCK_GH]: state =>
		state.isRulesBlockVisible,
	[EN_GreenhouseGameGetters.GET_VICTORY_BLOCK_GH]: state =>
		state.isVictoryBlockVisible,
	[EN_GreenhouseGameGetters.GET_LOSS_BLOCK_GH]: state =>
		state.isLossBlockVisible,
	[EN_GreenhouseGameGetters.GET_START_GAME_GH]: state => state.isStartGame,
	[EN_GreenhouseGameGetters.GET_POINTS_GH]: state => state.points,

	[EN_GreenhouseGameGetters.GET_TIMER_TOMATO_GH]: state => state.timerTomato,
	[EN_GreenhouseGameGetters.GET_TIMER_PEPPER_GH]: state => state.timerPepper,
	[EN_GreenhouseGameGetters.GET_TIMER_STRAWBERRY_GH]: state =>
		state.timerStrawberry,

	[EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_GH]: state =>
		state.playerMistakes,
	[EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_GH]: state =>
		state.isFirstMistake,
	[EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_GH]: state =>
		state.isSecondMistake,

	[EN_GreenhouseGameGetters.GET_TOMATO_HEALTH_PERCENTAGE_GH]: state =>
		state.healthTomatoPercentage,
	[EN_GreenhouseGameGetters.GET_PEPPER_HEALTH_PERCENTAGE_GH]: state =>
		state.healthPepperPercentage,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_HEALTH_PERCENTAGE_GH]: state =>
		state.healthStrawberryPercentage,

	[EN_GreenhouseGameGetters.GET_TOMATO_LEVEL_GH]: state => state.isTomatoLevel,
	[EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_CHECK_GH]: state =>
		state.isTomatoSoilMoistureCheck,
	[EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_ACTION_GH]: state =>
		state.isTomatoSoilMoistureAction,
	[EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_NUM_GH]: state =>
		state.tomatoSoilMoistureNum,
	[EN_GreenhouseGameGetters.GET_TOMATO_AIR_HUMIDITY_CHECK_GH]: state =>
		state.isTomatoAirHumidityCheck,
	[EN_GreenhouseGameGetters.GET_TOMATO_AIR_TEMPERATURE_CHECK_GH]: state =>
		state.isTomatoAirTemperatureCheck,
	[EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_TOMATO_GH]: state =>
		state.playerMistakesTomato,
	[EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_TOMATO_GH]: state =>
		state.isFirstMistakeTomato,
	[EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_TOMATO_GH]: state =>
		state.isSecondMistakeTomato,

	[EN_GreenhouseGameGetters.GET_PEPPER_LEVEL_GH]: state => state.isPepperLevel,
	[EN_GreenhouseGameGetters.GET_PEPPER_SOIL_MOISTURE_CHECK_GH]: state =>
		state.isPepperSoilMoistureCheck,
	[EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_CHECK_GH]: state =>
		state.isPepperAirHumidityCheck,
	[EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_ACTION_GH]: state =>
		state.isPepperAirHumidityAction,
	[EN_GreenhouseGameGetters.GET_PEPPER_AIR_HUMIDITY_NUM_GH]: state =>
		state.pepperAirHumidityNum,
	[EN_GreenhouseGameGetters.GET_PEPPER_AIR_TEMPERATURE_CHECK_GH]: state =>
		state.isPepperAirTemperatureCheck,
	[EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_PEPPER_GH]: state =>
		state.playerMistakesPepper,
	[EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_PEPPER_GH]: state =>
		state.isFirstMistakePepper,
	[EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_PEPPER_GH]: state =>
		state.isSecondMistakePepper,

	[EN_GreenhouseGameGetters.GET_STRAWBERRY_LEVEL_GH]: state =>
		state.isStrawberryLevel,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_SOIL_MOISTURE_CHECK_GH]: state =>
		state.isStrawberrySoilMoistureCheck,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_CHECK_GH]: state =>
		state.isStrawberryAirHumidityCheck,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_ACTION_GH]: state =>
		state.isStrawberryAirHumidityAction,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_HUMIDITY_NUM_GH]: state =>
		state.strawberryAirHumidityNum,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_AIR_TEMPERATURE_CHECK_GH]: state =>
		state.isStrawberryAirTemperatureCheck,
	[EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_STRAWBERRY_GH]: state =>
		state.playerMistakesStrawberry,
	[EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_STRAWBERRY_GH]: state =>
		state.isFirstMistakeStrawberry,
	[EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_STRAWBERRY_GH]: state =>
		state.isSecondMistakeStrawberry
}
