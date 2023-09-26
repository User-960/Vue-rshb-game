import { GetterTree } from 'vuex'

import { IHomeScreenState } from './types'
import { IRootState } from '@/store/types'

export enum EMapBackGetters {
	GET_MODAL_HOUSE_VISIBLE = 'GET_MODAL_HOUSE_VISIBLE',
	GET_MODAL_BANK_VISIBLE = 'GET_MODAL_BANK_VISIBLE',
	GET_MODAL_SHOP_VISIBLE = 'GET_MODAL_SHOP_VISIBLE',
	GET_BACK_MUSIC_MAP = 'GET_BACK_MUSIC_MAP'
}

export const getters: GetterTree<IHomeScreenState, IRootState> = {
	[EMapBackGetters.GET_MODAL_HOUSE_VISIBLE]: state => state.isModalHouseVisible,
	[EMapBackGetters.GET_MODAL_BANK_VISIBLE]: state => state.isModalBankVisible,
	[EMapBackGetters.GET_MODAL_SHOP_VISIBLE]: state => state.isModalShopVisible,
	[EMapBackGetters.GET_BACK_MUSIC_MAP]: state => state.isPlayMusic
}
