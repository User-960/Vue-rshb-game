import { GetterTree } from 'vuex'

import { IFinishScreenState } from './types'
import { IRootState } from '@/store/types'

export enum EN_FinishScreenGetters {
	GET_ESTIMATION_BLOCK_VISIBLE = 'GET_ESTIMATION_BLOCK_VISIBLE'
}

export const getters: GetterTree<IFinishScreenState, IRootState> = {
	[EN_FinishScreenGetters.GET_ESTIMATION_BLOCK_VISIBLE]: state =>
		state.isEstimationBlockVisible
}
