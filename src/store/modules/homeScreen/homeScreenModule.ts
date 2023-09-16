import { Module } from 'vuex'

import { getters } from './getters'
import { mutations } from './mutations'
import { IHomeScreenState } from './types'
import { IRootState } from '@/interfaces/globalStore.interface'

const state: IHomeScreenState = {
	isModalHouseVisible: false
}

export const homeScreen: Module<IHomeScreenState, IRootState> = {
	state,
	mutations,
	getters
}
