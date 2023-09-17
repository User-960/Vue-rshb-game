import { MutationTree } from 'vuex'

import { IStartScreenState } from './types'

export enum EStartScreenMutation {
	SHOW_CHOOSE_CHARACTER = 'SHOW_CHOOSE_CHARACTER',
	HIDE_CHOOSE_CHARACTER = 'HIDE_CHOOSE_CHARACTER',
	SHOW_AUTH_PLAYER = 'SHOW_AUTH_PLAYER',
	HIDE_AUTH_PLAYER = 'HIDE_AUTH_PLAYER'
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
	}
}
