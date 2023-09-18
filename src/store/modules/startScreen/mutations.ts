import { MutationTree } from 'vuex'

import { IStartScreenState } from './types'
import { IUserDataForm } from '@/interfaces/player.interface'

export enum EStartScreenMutation {
	SHOW_CHOOSE_CHARACTER = 'SHOW_CHOOSE_CHARACTER',
	HIDE_CHOOSE_CHARACTER = 'HIDE_CHOOSE_CHARACTER',
	SHOW_AUTH_PLAYER = 'SHOW_AUTH_PLAYER',
	HIDE_AUTH_PLAYER = 'HIDE_AUTH_PLAYER',
	SELECT_GENDER_WOMEN = 'SELECT_GENDER_WOMEN',
	SELECT_GENDER_MEN = 'SELECT_GENDER_MEN',
	SAVE_PLAYER_NAME = 'SAVE_PLAYER_NAME',
	CREATE_PLAYER = 'CREATE_PLAYER'
}

export const mutations: MutationTree<IStartScreenState> = {
	[EStartScreenMutation.SHOW_CHOOSE_CHARACTER](state) {
		state.isChooseCharacterVisible = true
	},
	[EStartScreenMutation.HIDE_CHOOSE_CHARACTER](state) {
		state.isChooseCharacterVisible = false
	},
	[EStartScreenMutation.SHOW_AUTH_PLAYER](state) {
		state.isAuthPlayerVisible = true
	},
	[EStartScreenMutation.HIDE_AUTH_PLAYER](state) {
		state.isAuthPlayerVisible = false
	},
	[EStartScreenMutation.SELECT_GENDER_WOMEN](state) {
		state.userData.playerGender = 'women'
	},
	[EStartScreenMutation.SELECT_GENDER_MEN](state) {
		state.userData.playerGender = 'men'
	},
	[EStartScreenMutation.SAVE_PLAYER_NAME](state, name: string) {
		state.userData.playerName = name
	},
	[EStartScreenMutation.CREATE_PLAYER](state, playerData: any) {
		// console.log(playerData)
	}
}
