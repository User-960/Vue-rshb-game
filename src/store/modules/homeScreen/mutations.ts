import { MutationTree } from 'vuex'

import { IHomeScreenState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_HomeScreenMutation {
	SHOW_MODAL_HOUSE = 'SHOW_MODAL_HOUSE',
	HIDE_MODAL_HOUSE = 'HIDE_MODAL_HOUSE',
	SHOW_MODAL_BANK = 'SHOW_MODAL_BANK',
	HIDE_MODAL_BANK = 'HIDE_MODAL_BANK',
	SHOW_MODAL_SHOP = 'SHOW_MODAL_SHOP',
	HIDE_MODAL_SHOP = 'HIDE_MODAL_SHOP',
	PLAY_BACK_MUSIC_MAP = 'PLAY_BACK_MUSIC_MAP',
	STOP_BACK_MUSIC_MAP = 'STOP_BACK_MUSIC_MAP'
}

const audioBackMusicMap = new Audio(AUDIO_CONFIG.AUDIO_BACK_MUSIC_MAP)

export const mutations: MutationTree<IHomeScreenState> = {
	[EN_HomeScreenMutation.SHOW_MODAL_HOUSE](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_MODAL_WINDOW)
		audio.autoplay = true
		audio.volume = 1

		state.isModalHouseVisible = true
	},
	[EN_HomeScreenMutation.HIDE_MODAL_HOUSE](state) {
		state.isModalHouseVisible = false
	},
	[EN_HomeScreenMutation.SHOW_MODAL_BANK](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_CLICK_BUTTON)
		audio.autoplay = true
		audio.volume = 1

		state.isModalBankVisible = true
	},
	[EN_HomeScreenMutation.HIDE_MODAL_BANK](state) {
		state.isModalBankVisible = false
	},
	[EN_HomeScreenMutation.SHOW_MODAL_SHOP](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_CLICK_BUTTON)
		audio.autoplay = true
		audio.volume = 1

		state.isModalShopVisible = true
	},
	[EN_HomeScreenMutation.HIDE_MODAL_SHOP](state) {
		state.isModalShopVisible = false
	},
	[EN_HomeScreenMutation.PLAY_BACK_MUSIC_MAP](state) {
		audioBackMusicMap.volume = 0.1
		audioBackMusicMap.autoplay = true

		state.isPlayMusic = true
	},
	[EN_HomeScreenMutation.STOP_BACK_MUSIC_MAP](state) {
		audioBackMusicMap.pause()

		state.isPlayMusic = false
	}
}
