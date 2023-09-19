import { GetterTree } from 'vuex'

import { IStartScreenState } from './types'
import { IRootState } from '@/store/types'

export enum EStartScreenGetters {
	GET_CHOOSE_CHARACTER_VISIBLE = 'GET_CHOOSE_CHARACTER_VISIBLE',
	GET_AUTH_PLAYER_VISIBLE = 'GET_AUTH_PLAYER_VISIBLE',
	GET_PLAYER_GENDER = 'GET_PLAYER_GENDER'
}

export const getters: GetterTree<IStartScreenState, IRootState> = {
	[EStartScreenGetters.GET_CHOOSE_CHARACTER_VISIBLE]: state =>
		state.isChooseCharacterVisible,
	[EStartScreenGetters.GET_AUTH_PLAYER_VISIBLE]: state =>
		state.isAuthPlayerVisible,
	[EStartScreenGetters.GET_PLAYER_GENDER]: state => state.player.gender
}
