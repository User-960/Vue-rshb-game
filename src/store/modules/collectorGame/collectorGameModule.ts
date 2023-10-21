import { Module } from 'vuex'

import { EN_CONFIG } from '@/components/screens/games/collectorGame/config/config'

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

	isExitTomatoLevel: false,

	timerTomato: EN_CONFIG.TIMING_TOMATO_LEVEL_TIMER,
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

	timerPepper: EN_CONFIG.TIMING_PEPPER_LEVEL_TIMER,
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

	timerStrawberry: EN_CONFIG.TIMING_STRAWBERRY_LEVEL_TIMER,
	pointsStrawberry: 0,
	isOpenGameFieldStrawberry: false,
	isStrawberryLevel: false,
	isGenerateStrawberryGreen: false,
	isGenerateStrawberryRed: false,
	isGenerateStrawberryDarkGreen: false,
	isGenerateCollectorStrawberry: false,
	isVictoryStrawberryBlockVisible: false,
	isLossStrawberryBlockVisible: false,
	isStrawberryLevelCompleted: false,

	isCollectorGameCompleted: false
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
