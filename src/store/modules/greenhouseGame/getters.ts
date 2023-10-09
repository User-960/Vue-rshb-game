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

	GET_TOMATO_SOIL_MOISTURE_CHECK_GH = 'GET_TOMATO_SOIL_MOISTURE_CHECK_GH',
	GET_TOMATO_SOIL_MOISTURE_ACTION_GH = 'GET_TOMATO_SOIL_MOISTURE_ACTION_GH',
	GET_TOMATO_SOIL_MOISTURE_NUM_GH = 'GET_TOMATO_SOIL_MOISTURE_NUM_GH',
	GET_TOMATO_SOIL_TEMPERATURE_CHECK_GH = 'GET_TOMATO_SOIL_TEMPERATURE_CHECK_GH',
	// GET_TOMATO_SOIL_TEMPERATURE_ACTION_GH = 'GET_TOMATO_SOIL_TEMPERATURE_ACTION_GH',
	GET_TIMER_TOMATO_GH = 'GET_TIMER_TOMATO_GH',
	GET_TOMATO_LEVEL_GH = 'GET_TOMATO_LEVEL_GH',
	GET_TOMATO_SPROUT_GH = 'GET_TOMATO_SPROUT_GH',
	GET_TOMATO_COLOR_GH = 'GET_TOMATO_COLOR_GH',
	GET_TOMATO_MODIFIED_GH = 'GET_TOMATO_MODIFIED_GH',

	GET_FLASKS_PEPPER_GH = 'GET_FLASKS_PEPPER_GH',
	GET_FLASKS_DROPZONE_PEPPER_GH = 'GET_FLASKS_DROPZONE_PEPPER_GH',
	GET_TIMER_PEPPER_GH = 'GET_TIMER_PEPPER_GH',
	GET_PEPPER_LEVEL_GH = 'GET_PEPPER_LEVEL_GH',
	GET_PEPPER_SPROUT_GH = 'GET_PEPPER_SPROUT_GH',
	GET_PEPPER_COLOR_GH = 'GET_PEPPER_COLOR_GH',
	GET_PEPPER_MODIFIED_GH = 'GET_PEPPER_MODIFIED_GH',

	GET_FLASKS_STRAWBERRY_GH = 'GET_FLASKS_STRAWBERRY_GH',
	GET_FLASKS_DROPZONE_STRAWBERRY_GH = 'GET_FLASKS_DROPZONE_STRAWBERRY_GH',
	GET_TIMER_STRAWBERRY_GH = 'GET_TIMER_STRAWBERRY_GH',
	GET_STRAWBERRY_LEVEL_GH = 'GET_STRAWBERRY_LEVEL_GH',
	GET_STRAWBERRY_SPROUT_GH = 'GET_STRAWBERRY_SPROUT_GH',
	GET_STRAWBERRY_COLOR_GH = 'GET_STRAWBERRY_COLOR_GH',
	GET_STRAWBERRY_MODIFIED_GH = 'GET_STRAWBERRY_MODIFIED_GH'
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

	[EN_GreenhouseGameGetters.GET_PLAYER_MISTAKES_GH]: state =>
		state.playerMistakes,
	[EN_GreenhouseGameGetters.GET_FIRST_MISTAKE_GH]: state =>
		state.isFirstMistake,
	[EN_GreenhouseGameGetters.GET_SECOND_MISTAKE_GH]: state =>
		state.isSecondMistake,

	[EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_CHECK_GH]: state =>
		state.isTomatoSoilMoistureCheck,
	[EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_ACTION_GH]: state =>
		state.isTomatoSoilMoistureAction,
	[EN_GreenhouseGameGetters.GET_TOMATO_SOIL_MOISTURE_NUM_GH]: state =>
		state.tomatoSoilMoistureNum,
	[EN_GreenhouseGameGetters.GET_TOMATO_SOIL_TEMPERATURE_CHECK_GH]: state =>
		state.isTomatoSoilTemperatureCheck,
	[EN_GreenhouseGameGetters.GET_TIMER_TOMATO_GH]: state => state.timerTomato,
	[EN_GreenhouseGameGetters.GET_TOMATO_LEVEL_GH]: state => state.isTomatoLevel,
	[EN_GreenhouseGameGetters.GET_TOMATO_SPROUT_GH]: state =>
		state.isTomatoSprout,
	[EN_GreenhouseGameGetters.GET_TOMATO_COLOR_GH]: state => state.isTomatoColor,
	[EN_GreenhouseGameGetters.GET_TOMATO_MODIFIED_GH]: state =>
		state.isTomatoModified,

	[EN_GreenhouseGameGetters.GET_FLASKS_PEPPER_GH]: state =>
		state.pepperFlasksList,
	[EN_GreenhouseGameGetters.GET_FLASKS_DROPZONE_PEPPER_GH]: state =>
		state.pepperFlasksDropZone,
	[EN_GreenhouseGameGetters.GET_TIMER_PEPPER_GH]: state => state.timerPepper,
	[EN_GreenhouseGameGetters.GET_PEPPER_LEVEL_GH]: state => state.isPepperLevel,
	[EN_GreenhouseGameGetters.GET_PEPPER_SPROUT_GH]: state =>
		state.isPepperSprout,
	[EN_GreenhouseGameGetters.GET_PEPPER_COLOR_GH]: state => state.isPepperColor,
	[EN_GreenhouseGameGetters.GET_PEPPER_MODIFIED_GH]: state =>
		state.isPepperModified,

	[EN_GreenhouseGameGetters.GET_FLASKS_STRAWBERRY_GH]: state =>
		state.strawberryFlasksList,
	[EN_GreenhouseGameGetters.GET_FLASKS_DROPZONE_STRAWBERRY_GH]: state =>
		state.strawberryFlasksDropZone,
	[EN_GreenhouseGameGetters.GET_TIMER_STRAWBERRY_GH]: state =>
		state.timerStrawberry,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_LEVEL_GH]: state =>
		state.isStrawberryLevel,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_SPROUT_GH]: state =>
		state.isStrawberrySprout,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_COLOR_GH]: state =>
		state.isStrawberryColor,
	[EN_GreenhouseGameGetters.GET_STRAWBERRY_MODIFIED_GH]: state =>
		state.isStrawberryModified
}
