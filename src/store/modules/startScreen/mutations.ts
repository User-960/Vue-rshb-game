import { MutationTree } from 'vuex'

import { IStartScreenState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_StartScreenMutation {
	SHOW_CHOOSE_CHARACTER = 'SHOW_CHOOSE_CHARACTER',
	HIDE_CHOOSE_CHARACTER = 'HIDE_CHOOSE_CHARACTER',
	SHOW_AUTH_PLAYER = 'SHOW_AUTH_PLAYER',
	HIDE_AUTH_PLAYER = 'HIDE_AUTH_PLAYER',
	SELECT_GENDER_WOMEN = 'SELECT_GENDER_WOMEN',
	SELECT_GENDER_MEN = 'SELECT_GENDER_MEN',
	SAVE_PLAYER_NAME = 'SAVE_PLAYER_NAME',
	SHOW_ERROR_SERVER = 'SHOW_ERROR_SERVER',
	HIDE_ERROR_SERVER = 'HIDE_ERROR_SERVER'
}

const audioModalWindow = new Audio(AUDIO_CONFIG.AUDIO_MODAL_WINDOW)
const audioClickButton = new Audio(AUDIO_CONFIG.AUDIO_CLICK_BUTTON)

export const mutations: MutationTree<IStartScreenState> = {
	[EN_StartScreenMutation.SHOW_CHOOSE_CHARACTER](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isChooseCharacterVisible = true
	},
	[EN_StartScreenMutation.HIDE_CHOOSE_CHARACTER](state) {
		state.isChooseCharacterVisible = false
	},
	[EN_StartScreenMutation.SHOW_AUTH_PLAYER](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isAuthPlayerVisible = true
	},
	[EN_StartScreenMutation.HIDE_AUTH_PLAYER](state) {
		state.isAuthPlayerVisible = false
	},
	[EN_StartScreenMutation.SELECT_GENDER_WOMEN](state) {
		audioClickButton.volume = 1
		audioClickButton.play()

		state.player.gender = 'Female'
	},
	[EN_StartScreenMutation.SELECT_GENDER_MEN](state) {
		audioClickButton.volume = 1
		audioClickButton.play()

		state.player.gender = 'Male'
	},
	[EN_StartScreenMutation.SAVE_PLAYER_NAME](state, name: string) {
		state.player.name = name
	}
}
