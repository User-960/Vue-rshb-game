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
	tomatoSoilMoistureNum: '30,1',
	healthTomatoPercentage: 100,
	isTomatoLevel: true,

	isPepperSoilMoistureCheck: false,
	isPepperAirHumidityCheck: false,
	isPepperAirHumidityAction: false,
	isPepperAirTemperatureCheck: false,
	pepperAirHumidityNum: '65',
	healthPepperPercentage: 100,
	isPepperLevel: false,

	strawberryFlasksList: generatorFlasksList(nameFlasks),
	strawberryFlasksDropZone: generatorFlasksDropZone(),
	isStrawberryLevel: false,
	isStrawberrySprout: false,
	isStrawberryColor: false,
	isStrawberryModified: false
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
