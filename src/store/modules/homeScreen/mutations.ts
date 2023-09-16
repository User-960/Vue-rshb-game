import { MutationTree } from 'vuex'

import { IHomeScreenState } from './types'

export enum EHomeScreenMutation {
	SHOW_MODAL_HOUSE = 'SHOW_MODAL_HOUSE',
	HIDE_MODAL_HOUSE = 'HIDE_MODAL_HOUSE'
}

export const mutations: MutationTree<IHomeScreenState> = {
	[EHomeScreenMutation.SHOW_MODAL_HOUSE](state) {
		state.isModalHouseVisible = true
	},
	[EHomeScreenMutation.HIDE_MODAL_HOUSE](state) {
		state.isModalHouseVisible = false
	}
}
