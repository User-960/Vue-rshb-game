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
	STOP_BACK_MUSIC_MAP = 'STOP_BACK_MUSIC_MAP',

	SHOW_MAP_AFTER_FIRST_GAME = 'SHOW_MAP_AFTER_FIRST_GAME',
	HIDE_MAP_AFTER_FIRST_GAME = 'HIDE_MAP_AFTER_FIRST_GAME',
	SHOW_MAP_AFTER_SECOND_GAME = 'SHOW_MAP_AFTER_SECOND_GAME',
	HIDE_MAP_AFTER_SECOND_GAME = 'HIDE_MAP_AFTER_SECOND_GAME',
	SHOW_MAP_BEFORE_THIRD_GAME = 'SHOW_MAP_BEFORE_THIRD_GAME',
	HIDE_MAP_BEFORE_THIRD_GAME = 'HIDE_MAP_BEFORE_THIRD_GAME',
	SHOW_MAP_BEFORE_FOURTH_GAME = 'SHOW_MAP_BEFORE_FOURTH_GAME',
	HIDE_MAP_BEFORE_FOURTH_GAME = 'HIDE_MAP_BEFORE_FOURTH_GAME',
	SHOW_MAP_BEFORE_FIFTH_GAME = 'SHOW_MAP_BEFORE_FIFTH_GAME',
	HIDE_MAP_BEFORE_FIFTH_GAME = 'HIDE_MAP_BEFORE_FIFTH_GAME',

	SHOW_MAP_AFTER_FIFTH_GAME = 'SHOW_MAP_AFTER_FIFTH_GAME'
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
	},

	[EN_HomeScreenMutation.SHOW_MAP_AFTER_FIRST_GAME](state) {
		if (state.isStartGame) {
			state.isStartGame = false
			state.isAfterFirstGame = true
		}
	},
	[EN_HomeScreenMutation.HIDE_MAP_AFTER_FIRST_GAME](state) {
		state.isAfterFirstGame = false
	},
	[EN_HomeScreenMutation.SHOW_MAP_AFTER_SECOND_GAME](state) {
		if (state.isAfterFirstGame) {
			state.isAfterFirstGame = false
			state.isAfterSecondGame = true
		}
	},
	[EN_HomeScreenMutation.HIDE_MAP_AFTER_SECOND_GAME](state) {
		state.isAfterSecondGame = false
	},
	[EN_HomeScreenMutation.SHOW_MAP_BEFORE_THIRD_GAME](state) {
		if (state.isAfterSecondGame) {
			setTimeout(() => {
				state.isAfterSecondGame = false
				state.isBeforeThirdGame = true
			}, 7000)
		}
	},
	[EN_HomeScreenMutation.HIDE_MAP_BEFORE_THIRD_GAME](state) {
		state.isBeforeThirdGame = false
	},
	[EN_HomeScreenMutation.SHOW_MAP_BEFORE_FOURTH_GAME](state) {
		if (state.isBeforeThirdGame) {
			state.isBeforeThirdGame = false
			state.isBeforeFourthGame = true
		}
	},
	[EN_HomeScreenMutation.HIDE_MAP_BEFORE_FOURTH_GAME](state) {
		state.isBeforeFourthGame = false
	},
	[EN_HomeScreenMutation.SHOW_MAP_BEFORE_FIFTH_GAME](state) {
		if (state.isBeforeFourthGame) {
			state.isBeforeFourthGame = false
			state.isBeforeFifthGame = true
		}
	},
	[EN_HomeScreenMutation.HIDE_MAP_BEFORE_FIFTH_GAME](state) {
		state.isBeforeFifthGame = false
	},

	[EN_HomeScreenMutation.SHOW_MAP_AFTER_FIFTH_GAME](state) {
		state.isAfterFirstGame = false
		state.isAfterSecondGame = false
		state.isBeforeThirdGame = false
		state.isBeforeFourthGame = false
		state.isBeforeFifthGame = false
		state.isStartGame = true
	}
}
