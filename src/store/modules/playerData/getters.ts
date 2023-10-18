import { GetterTree } from 'vuex'

import { IPlayerDataState } from './types'
import { IRootState } from '@/store/types'

export enum EN_PlayerDataGetters {
	GET_PLAYER_DATA = 'GET_PLAYER_DATA',

	GET_TABLE_RATING = 'GET_TABLE_RATING',

	GET_ALERT = 'GET_ALERT',
	GET_ALERT_TEXT = 'GET_ALERT_TEXT',
	GET_LOADING = 'GET_LOADING',
	GET_UNIQUE_NAMES = 'GET_UNIQUE_NAMES',

	GET_PLAYERS_RATING_DATA = 'GET_PLAYERS_RATING_DATA'
}

export const getters: GetterTree<IPlayerDataState, IRootState> = {
	[EN_PlayerDataGetters.GET_PLAYER_DATA]: state => state.playerData,

	[EN_PlayerDataGetters.GET_TABLE_RATING]: state => state.isTableRatingVisible,

	[EN_PlayerDataGetters.GET_ALERT]: state => state.isAlertVisible,
	[EN_PlayerDataGetters.GET_ALERT_TEXT]: state => state.alertText,
	[EN_PlayerDataGetters.GET_LOADING]: state => state.isLoading,
	[EN_PlayerDataGetters.GET_UNIQUE_NAMES]: state =>
		state.newUniqueName.split(','),

	[EN_PlayerDataGetters.GET_PLAYERS_RATING_DATA]: state => state.playersRating
}
