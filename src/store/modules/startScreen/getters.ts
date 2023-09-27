import { GetterTree } from 'vuex'

import { IStartScreenState } from './types'
import { IRootState } from '@/store/types'

export enum EN_StartScreenGetters {
	GET_CHOOSE_CHARACTER_VISIBLE = 'GET_CHOOSE_CHARACTER_VISIBLE',
	GET_AUTH_PLAYER_VISIBLE = 'GET_AUTH_PLAYER_VISIBLE',
	GET_PLAYER_GENDER = 'GET_PLAYER_GENDER',
	GET_ERROR_SERVER = 'GET_ERROR_SERVER'
}

export const getters: GetterTree<IStartScreenState, IRootState> = {
	[EN_StartScreenGetters.GET_CHOOSE_CHARACTER_VISIBLE]: state =>
		state.isChooseCharacterVisible,
	[EN_StartScreenGetters.GET_AUTH_PLAYER_VISIBLE]: state =>
		state.isAuthPlayerVisible,
	[EN_StartScreenGetters.GET_PLAYER_GENDER]: state => state.player.gender
}
