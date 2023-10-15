import { GetterTree } from 'vuex'

import { IPlayerDataState } from './types'
import { IRootState } from '@/store/types'

export enum EN_PlayerDataGetters {
	GET_PLAYER_DATA = 'GET_PLAYER_DATA',

	GET_TABLE_RATING = 'GET_TABLE_RATING',

	GET_ALERT = 'GET_ALERT',
	GET_ALERT_TEXT = 'GET_ALERT_TEXT'
}

export const getters: GetterTree<IPlayerDataState, IRootState> = {
	[EN_PlayerDataGetters.GET_PLAYER_DATA]: state => state.playerData,

	[EN_PlayerDataGetters.GET_TABLE_RATING]: state => state.isTableRatingVisible,

	[EN_PlayerDataGetters.GET_ALERT]: state => state.isAlertVisible,
	[EN_PlayerDataGetters.GET_ALERT_TEXT]: state => state.alertText
}
