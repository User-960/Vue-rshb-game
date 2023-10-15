import { Module } from 'vuex'

import { nameFlasks } from '@/components/screens/games/geneticGame/config/config'
import {
	generatorFlasksDropZone,
	generatorFlasksList
} from '@/components/screens/games/geneticGame/helpers/helpers'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { IGeneticGameState } from './types'
import { IRootState } from '@/store/types'

const state: IGeneticGameState = {
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

	tomatoFlasksList: generatorFlasksList(nameFlasks),
	tomatoFlasksDropZone: generatorFlasksDropZone(),
	isTomatoLevel: true,
	isTomatoSprout: false,
	isTomatoColor: false,
	isTomatoModified: false,

	pepperFlasksList: generatorFlasksList(nameFlasks),
	pepperFlasksDropZone: generatorFlasksDropZone(),
	isPepperLevel: false,
	isPepperSprout: false,
	isPepperColor: false,
	isPepperModified: false,

	strawberryFlasksList: generatorFlasksList(nameFlasks),
	strawberryFlasksDropZone: generatorFlasksDropZone(),
	isStrawberryLevel: false,
	isStrawberrySprout: false,
	isStrawberryColor: false,
	isStrawberryModified: false,

	isGeneticGameCompleted: false
}

export const getDefaultGeneticGameState = () => {
	return {
		state,
		mutations,
		getters,
		actions
	}
}

export const geneticGame: Module<IGeneticGameState, IRootState> =
	getDefaultGeneticGameState()
