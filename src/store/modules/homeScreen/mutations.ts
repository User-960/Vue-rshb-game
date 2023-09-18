import { MutationTree } from 'vuex'

import { IHomeScreenState } from './types'

export enum EHomeScreenMutation {
	SHOW_MODAL_HOUSE = 'SHOW_MODAL_HOUSE',
	HIDE_MODAL_HOUSE = 'HIDE_MODAL_HOUSE',
	SHOW_MODAL_BANK = 'SHOW_MODAL_BANK',
	HIDE_MODAL_BANK = 'HIDE_MODAL_BANK'
}

export const mutations: MutationTree<IHomeScreenState> = {
	[EHomeScreenMutation.SHOW_MODAL_HOUSE](state) {
		state.isModalHouseVisible = true
	},
	[EHomeScreenMutation.HIDE_MODAL_HOUSE](state) {
		state.isModalHouseVisible = false
	},
	[EHomeScreenMutation.SHOW_MODAL_BANK](state) {
		state.isModalBankVisible = true
	},
	[EHomeScreenMutation.HIDE_MODAL_BANK](state) {
		state.isModalBankVisible = false
	}
}
