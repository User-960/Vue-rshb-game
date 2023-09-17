import { GetterTree } from 'vuex'

import { IStartScreenState } from './types'
import { IRootState } from '@/store/types'

export enum EStartScreenGetters {
	GET_CHOOSE_CHARACTER_VISIBLE = 'GET_CHOOSE_CHARACTER_VISIBLE'
}

export const getters: GetterTree<IStartScreenState, IRootState> = {
	[EStartScreenGetters.GET_CHOOSE_CHARACTER_VISIBLE]: state =>
		state.isChooseCharacterVisible
}
