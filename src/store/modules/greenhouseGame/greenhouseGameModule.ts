import { Module } from 'vuex'

import { nameFlasks } from '@/components/screens/games/geneticGame/config/config'
import {
	generatorFlasksDropZone,
	generatorFlasksList
} from '@/components/screens/games/geneticGame/helpers/helpers'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { IGreenhouseGameState } from './types'
import { IRootState } from '@/store/types'

const state: IGreenhouseGameState = {
	isInfoLinkBlockVisible: false,
	isRulesBlockVisible: false,
	isVictoryBlockVisible: false,
	isLossBlockVisible: false,
	isBonusBlockVisible: false,
	isBonusBlockPayedVisible: false,
	isStartGame: false,
	points: 0,

	timerTomato: 9,
	timerPepper: 9,
	timerStrawberry: 9,
	playerMistakes: 0,
	isFirstMistake: false,
	isSecondMistake: false,

	isTomatoSoilMoistureCheck: true,
	isTomatoSoilMoistureAction: false,
	isTomatoAirHumidityCheck: false,
	isTomatoAirTemperatureCheck: false,
	tomatoSoilMoistureNum: 30.1,
	healthTomatoPercentage: 100,
	isTomatoLevel: true,
	playerMistakesTomato: 0,
	isFirstMistakeTomato: false,
	isSecondMistakeTomato: false,

	isPepperSoilMoistureCheck: false,
	isPepperAirHumidityCheck: false,
	isPepperAirHumidityAction: false,
	isPepperAirTemperatureCheck: false,
	pepperAirHumidityNum: 65,
	healthPepperPercentage: 100,
	isPepperLevel: false,
	playerMistakesPepper: 0,
	isFirstMistakePepper: false,
	isSecondMistakePepper: false,

	isStrawberrySoilMoistureCheck: false,
	isStrawberryAirHumidityCheck: false,
	isStrawberryAirHumidityAction: false,
	isStrawberryAirTemperatureCheck: false,
	strawberryAirHumidityNum: 102,
	healthStrawberryPercentage: 100,
	isStrawberryLevel: false,
	playerMistakesStrawberry: 0,
	isFirstMistakeStrawberry: false,
	isSecondMistakeStrawberry: false
}

export const getDefaultGreenhouseGameState = () => {
	return {
		state,
		mutations,
		getters,
		actions
	}
}

export const greenhouseGame: Module<IGreenhouseGameState, IRootState> =
	getDefaultGreenhouseGameState()
