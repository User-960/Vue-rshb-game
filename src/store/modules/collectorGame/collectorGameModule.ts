import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { ICollectorGameState } from './types'
import { IRootState } from '@/store/types'

const state: ICollectorGameState = {
	isInfoLinkBlockVisible: true,
	isRulesBlockVisible: false,
	isVictoryBlockVisible: false,
	isLossBlockVisible: false,
	isStartGame: false,
	points: 0,

	timerTomato: 30,
	pointsTomato: 0,
	isOpenGameFieldTomato: false,
	isTomatoLevel: false,
	isGenerateTomatoGreen: false,
	isGenerateTomatoRed: false,
	isGenerateTomatoDarkGreen: false,
	isGenerateCollectorTomato: false,
	isVictoryTomatoBlockVisible: false,
	isLossTomatoBlockVisible: false,
	isTomatoLevelCompleted: false,

	timerPepper: 30,
	pointsPepper: 0,
	isOpenGameFieldPepper: false,
	isPepperLevel: false,
	isGeneratePepperGreen: false,
	isGeneratePepperRed: false,
	isGeneratePepperDarkGreen: false,
	isGenerateCollectorPepper: false,
	isVictoryPepperBlockVisible: false,
	isLossPepperBlockVisible: false,
	isPepperLevelCompleted: false,

	isOpenGameFieldStrawberry: false
}

export const getDefaultCollectorGameState = () => {
	return {
		state,
		mutations,
		getters,
		actions
	}
}

export const collectorGame: Module<ICollectorGameState, IRootState> =
	getDefaultCollectorGameState()

// export const defaultHomeScreenState: Module<IHomeScreenState, IRootState> = {
// 	state,
// 	mutations,
// 	getters
// }
