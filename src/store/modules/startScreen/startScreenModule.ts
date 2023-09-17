import { Module } from 'vuex'

import { getters } from './getters'
import { mutations } from './mutations'
import { IStartScreenState } from './types'
import { IRootState } from '@/store/types'

const state: IStartScreenState = {
	isChooseCharacterVisible: false,
	isAuthPlayerVisible: false
}

export const getDefaultStartScreenState = () => {
	return {
		state,
		mutations,
		getters
	}
}

export const startScreen: Module<IStartScreenState, IRootState> =
	getDefaultStartScreenState()

// export const defaultHomeScreenState: Module<IHomeScreenState, IRootState> = {
// 	state,
// 	mutations,
// 	getters
// }
