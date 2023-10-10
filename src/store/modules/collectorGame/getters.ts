import { GetterTree } from 'vuex'

import { ICollectorGameState } from './types'
import { IRootState } from '@/store/types'

export enum EN_CollectorGameGetters {
	GET_INFO_LINK_BLOCK_COL = 'GET_INFO_LINK_BLOCK_COL',
	GET_RULES_BLOCK_COL = 'GET_RULES_BLOCK_COL',
	GET_VICTORY_BLOCK_COL = 'GET_VICTORY_BLOCK_COL',
	GET_LOSS_BLOCK_COL = 'GET_LOSS_BLOCK_COL',
	GET_POINTS_COL = 'GET_POINTS_COL',
	GET_START_GAME_COL = 'GET_START_GAME_COL',

	GET_OPEN_GAME_FIELD_TOMATO_COL = 'GET_OPEN_GAME_FIELD_TOMATO_COL'
}

export const getters: GetterTree<ICollectorGameState, IRootState> = {
	[EN_CollectorGameGetters.GET_INFO_LINK_BLOCK_COL]: state =>
		state.isInfoLinkBlockVisible,
	[EN_CollectorGameGetters.GET_RULES_BLOCK_COL]: state =>
		state.isRulesBlockVisible,
	[EN_CollectorGameGetters.GET_VICTORY_BLOCK_COL]: state =>
		state.isVictoryBlockVisible,
	[EN_CollectorGameGetters.GET_LOSS_BLOCK_COL]: state =>
		state.isLossBlockVisible,
	[EN_CollectorGameGetters.GET_POINTS_COL]: state => state.points,
	[EN_CollectorGameGetters.GET_START_GAME_COL]: state => state.isStartGame,

	[EN_CollectorGameGetters.GET_OPEN_GAME_FIELD_TOMATO_COL]: state =>
		state.isOpenGameFieldTomato
}
