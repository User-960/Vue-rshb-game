import { GetterTree } from 'vuex'

import { IHomeScreenState } from './types'
import { IRootState } from '@/store/types'

export enum EMapBackGetters {
	GET_MODAL_HOUSE_VISIBLE = 'GET_MODAL_HOUSE_VISIBLE',
	GET_MODAL_BANK_VISIBLE = 'GET_MODAL_BANK_VISIBLE'
}

export const getters: GetterTree<IHomeScreenState, IRootState> = {
	[EMapBackGetters.GET_MODAL_HOUSE_VISIBLE]: state => state.isModalHouseVisible,
	[EMapBackGetters.GET_MODAL_BANK_VISIBLE]: state => state.isModalBankVisible
}
