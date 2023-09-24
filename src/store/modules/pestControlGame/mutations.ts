import { MutationTree } from 'vuex'

import { IPestControlGameState } from './types'

export enum EPestControlGameMutation {
	SHOW_INFO_LINK_BLOCK = 'SHOW_INFO_LINK_BLOCK',
	HIDE_INFO_LINK_BLOCK = 'HIDE_INFO_LINK_BLOCK',
	SHOW_RULES_BLOCK = 'SHOW_RULES_BLOCK',
	HIDE_RULES_BLOCK = 'HIDE_RULES_BLOCK',
	START_GAME = 'START_GAME',
	START_TOMATO_LEVEL = 'START_TOMATO_LEVEL',
	FINISH_TOMATO_LEVEL = 'FINISH_TOMATO_LEVEL',
	START_PEPPER_LEVEL = 'START_PEPPER_LEVEL',
	FINISH_PEPPER_LEVEL = 'FINISH_PEPPER_LEVEL',
	START_STRAWBERRY_LEVEL = 'START_STRAWBERRY_LEVEL',
	FINISH_STRAWBERRY_LEVEL = 'FINISH_STRAWBERRY_LEVEL'
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
	},
	[EPestControlGameMutation.START_GAME](state) {
		state.isStartGame = true
	},
	[EPestControlGameMutation.START_TOMATO_LEVEL](state) {
		state.isTomatoLevel = true
	},
	[EPestControlGameMutation.FINISH_TOMATO_LEVEL](state) {
		state.isTomatoLevel = false
	},
	[EPestControlGameMutation.START_PEPPER_LEVEL](state) {
		state.isPepperLevel = true
	},
	[EPestControlGameMutation.FINISH_PEPPER_LEVEL](state) {
		state.isPepperLevel = false
	},
	[EPestControlGameMutation.START_STRAWBERRY_LEVEL](state) {
		state.isStrawberryLevel = true
	},
	[EPestControlGameMutation.FINISH_STRAWBERRY_LEVEL](state) {
		state.isStrawberryLevel = false
	}
}
