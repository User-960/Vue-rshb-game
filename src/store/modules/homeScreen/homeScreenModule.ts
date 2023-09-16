import { Module } from 'vuex'

import { getters } from './getters'
import { mutations } from './mutations'
import { IHomeScreenState } from './types'
import { IRootState } from '@/store/types'

const state: IHomeScreenState = {
	isModalHouseVisible: false
}

export const getDefaultHomeScreenState = () => {
	return {
		state,
		mutations,
		getters
	}
}

export const homeScreen: Module<IHomeScreenState, IRootState> =
	getDefaultHomeScreenState()

// export const defaultHomeScreenState: Module<IHomeScreenState, IRootState> = {
// 	state,
// 	mutations,
// 	getters
// }
