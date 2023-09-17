import { MutationTree } from 'vuex'

import { IStartScreenState } from './types'

export enum EStartScreenMutation {
	SHOW_CHOOSE_CHARACTER = 'SHOW_CHOOSE_CHARACTER',
	HIDE_CHOOSE_CHARACTER = 'HIDE_CHOOSE_CHARACTER'
}

export const mutations: MutationTree<IStartScreenState> = {
	[EStartScreenMutation.SHOW_CHOOSE_CHARACTER](state) {
		state.isChooseCharacterVisible = true
	},
	[EStartScreenMutation.HIDE_CHOOSE_CHARACTER](state) {
		state.isChooseCharacterVisible = false
	}
}
