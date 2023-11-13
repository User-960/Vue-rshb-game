import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { IFinishScreenState } from './types'
import { IRootState } from '@/store/types'

const state: IFinishScreenState = {
	isEstimationBlockVisible: false
}

export const getDefaultFinishScreenState = () => {
	return {
		state,
		mutations,
		getters,
		actions
	}
}

export const finishScreen: Module<IFinishScreenState, IRootState> =
	getDefaultFinishScreenState()
