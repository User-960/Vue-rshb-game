import { MutationTree } from 'vuex'

import { IPestControlGameState } from './types'

export enum EPestControlGameMutation {
	SHOW_INFO_LINK_BLOCK = 'SHOW_INFO_LINK_BLOCK',
	HIDE_INFO_LINK_BLOCK = 'HIDE_INFO_LINK_BLOCK',
	SHOW_RULES_BLOCK = 'SHOW_RULES_BLOCK',
	HIDE_RULES_BLOCK = 'HIDE_RULES_BLOCK'
}

export const mutations: MutationTree<IPestControlGameState> = {
	[EPestControlGameMutation.SHOW_INFO_LINK_BLOCK](state) {
		state.isInfoLinkBlockVisible = true
	},
	[EPestControlGameMutation.HIDE_INFO_LINK_BLOCK](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EPestControlGameMutation.SHOW_RULES_BLOCK](state) {
		state.isRulesBlockVisible = true
	},
	[EPestControlGameMutation.HIDE_RULES_BLOCK](state) {
		state.isRulesBlockVisible = false
	}
}
