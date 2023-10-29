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

	SHOW_FIRST_INFO_INTRODUCTION = 'SHOW_FIRST_INFO_INTRODUCTION',
	HIDE_FIRST_INFO_INTRODUCTION = 'HIDE_FIRST_INFO_INTRODUCTION',
	SHOW_SECOND_INFO_INTRODUCTION = 'SHOW_SECOND_INFO_INTRODUCTION',
	HIDE_SECOND_INFO_INTRODUCTION = 'HIDE_SECOND_INFO_INTRODUCTION',
	SHOW_THIRD_INFO_INTRODUCTION = 'SHOW_THIRD_INFO_INTRODUCTION',
	HIDE_THIRD_INFO_INTRODUCTION = 'HIDE_THIRD_INFO_INTRODUCTION',
	SHOW_FOUR_INFO_INTRODUCTION = 'SHOW_FOUR_INFO_INTRODUCTION',
	HIDE_FOUR_INFO_INTRODUCTION = 'HIDE_FOUR_INFO_INTRODUCTION',
	SHOW_FIVE_INFO_INTRODUCTION = 'SHOW_FIVE_INFO_INTRODUCTION',
	HIDE_FIVE_INFO_INTRODUCTION = 'HIDE_FIVE_INFO_INTRODUCTION',
	SHOW_SIX_INFO_INTRODUCTION = 'SHOW_SIX_INFO_INTRODUCTION',
	HIDE_SIX_INFO_INTRODUCTION = 'HIDE_SIX_INFO_INTRODUCTION',
	SHOW_SEVEN_INFO_INTRODUCTION = 'SHOW_SEVEN_INFO_INTRODUCTION',
	HIDE_SEVEN_INFO_INTRODUCTION = 'HIDE_SEVEN_INFO_INTRODUCTION',
	SHOW_ARROW_UP_BANK = 'SHOW_ARROW_UP_BANK',
	SHOW_ARROW_UP_SHOP = 'SHOW_ARROW_UP_SHOP',

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
const audioClickButton = new Audio(AUDIO_CONFIG.AUDIO_CLICK_BUTTON)
const audioModalWindow = new Audio(AUDIO_CONFIG.AUDIO_MODAL_WINDOW)

export const mutations: MutationTree<IHomeScreenState> = {
	[EN_HomeScreenMutation.SHOW_MODAL_HOUSE](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isModalHouseVisible = true
	},
	[EN_HomeScreenMutation.HIDE_MODAL_HOUSE](state) {
		state.isModalHouseVisible = false
	},
	[EN_HomeScreenMutation.SHOW_MODAL_BANK](state) {
		audioClickButton.volume = 1
		audioClickButton.play()

		state.isModalBankVisible = true
	},
	[EN_HomeScreenMutation.HIDE_MODAL_BANK](state) {
		state.isModalBankVisible = false
	},
	[EN_HomeScreenMutation.SHOW_MODAL_SHOP](state) {
		audioClickButton.volume = 1
		audioClickButton.play()

		state.isModalShopVisible = true
	},
	[EN_HomeScreenMutation.HIDE_MODAL_SHOP](state) {
		state.isModalShopVisible = false
	},
	[EN_HomeScreenMutation.PLAY_BACK_MUSIC_MAP](state) {
		if (audioBackMusicMap) {
			audioBackMusicMap.volume = 0.1
			audioBackMusicMap.loop = true

			audioBackMusicMap.play()

			state.isPlayMusic = true
		}
	},
	[EN_HomeScreenMutation.STOP_BACK_MUSIC_MAP](state) {
		audioBackMusicMap.pause()

		state.isPlayMusic = false
	},

	[EN_HomeScreenMutation.SHOW_FIRST_INFO_INTRODUCTION](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isFirstInfoIntroductionVisible = true
	},
	[EN_HomeScreenMutation.HIDE_FIRST_INFO_INTRODUCTION](state) {
		state.isFirstInfoIntroductionVisible = false
	},
	[EN_HomeScreenMutation.SHOW_SECOND_INFO_INTRODUCTION](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isSecondInfoIntroductionVisible = true
	},
	[EN_HomeScreenMutation.HIDE_SECOND_INFO_INTRODUCTION](state) {
		state.isSecondInfoIntroductionVisible = false
	},
	[EN_HomeScreenMutation.SHOW_THIRD_INFO_INTRODUCTION](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isThirdInfoIntroductionVisible = true
	},
	[EN_HomeScreenMutation.HIDE_THIRD_INFO_INTRODUCTION](state) {
		state.isThirdInfoIntroductionVisible = false
	},
	[EN_HomeScreenMutation.SHOW_FOUR_INFO_INTRODUCTION](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isFourInfoIntroductionVisible = true
	},
	[EN_HomeScreenMutation.HIDE_FOUR_INFO_INTRODUCTION](state) {
		state.isFourInfoIntroductionVisible = false
	},
	[EN_HomeScreenMutation.SHOW_FIVE_INFO_INTRODUCTION](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isFiveInfoIntroductionVisible = true
	},
	[EN_HomeScreenMutation.HIDE_FIVE_INFO_INTRODUCTION](state) {
		state.isFiveInfoIntroductionVisible = false
	},
	[EN_HomeScreenMutation.SHOW_SIX_INFO_INTRODUCTION](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isSixInfoIntroductionVisible = true
	},
	[EN_HomeScreenMutation.HIDE_SIX_INFO_INTRODUCTION](state) {
		state.isSixInfoIntroductionVisible = false
	},
	[EN_HomeScreenMutation.SHOW_SEVEN_INFO_INTRODUCTION](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isSevenInfoIntroductionVisible = true
	},
	[EN_HomeScreenMutation.HIDE_SEVEN_INFO_INTRODUCTION](state) {
		state.isSevenInfoIntroductionVisible = false
	},

	[EN_HomeScreenMutation.SHOW_ARROW_UP_BANK](state) {
		state.isArrowUpBankVisible = true

		setTimeout(() => {
			state.isArrowUpBankVisible = false
		}, 5000)
	},
	[EN_HomeScreenMutation.SHOW_ARROW_UP_SHOP](state) {
		state.isArrowUpShopVisible = true

		setTimeout(() => {
			state.isArrowUpShopVisible = false
		}, 5000)
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
