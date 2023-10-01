import { Module } from 'vuex'

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
	isStartGame: false,
	gameLoop: 0,
	tomatoLevel: 1,
	pepperLevel: 2,
	strawberryLevel: 3,
	points: 0,
	isPlayBackMusic: false,
	timer: 20
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
