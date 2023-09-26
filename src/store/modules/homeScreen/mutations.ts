import { MutationTree } from 'vuex'

import { IHomeScreenState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EHomeScreenMutation {
	SHOW_MODAL_HOUSE = 'SHOW_MODAL_HOUSE',
	HIDE_MODAL_HOUSE = 'HIDE_MODAL_HOUSE',
	SHOW_MODAL_BANK = 'SHOW_MODAL_BANK',
	HIDE_MODAL_BANK = 'HIDE_MODAL_BANK',
	SHOW_MODAL_SHOP = 'SHOW_MODAL_SHOP',
	HIDE_MODAL_SHOP = 'HIDE_MODAL_SHOP'
}

export const mutations: MutationTree<IHomeScreenState> = {
	[EHomeScreenMutation.SHOW_MODAL_HOUSE](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_MODAL_WINDOW)
		audio.autoplay = true
		audio.volume = 1

		state.isModalHouseVisible = true
	},
	[EHomeScreenMutation.HIDE_MODAL_HOUSE](state) {
		state.isModalHouseVisible = false
	},
	[EHomeScreenMutation.SHOW_MODAL_BANK](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_CLICK_BUTTON)
		audio.autoplay = true
		audio.volume = 1

		state.isModalBankVisible = true
	},
	[EHomeScreenMutation.HIDE_MODAL_BANK](state) {
		state.isModalBankVisible = false
	},
	[EHomeScreenMutation.SHOW_MODAL_SHOP](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_CLICK_BUTTON)
		audio.autoplay = true
		audio.volume = 1

		state.isModalShopVisible = true
	},
	[EHomeScreenMutation.HIDE_MODAL_SHOP](state) {
		state.isModalShopVisible = false
	}
}
