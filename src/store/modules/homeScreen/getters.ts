import { GetterTree } from 'vuex'

import { IHomeScreenState } from './types'
import { IRootState } from '@/interfaces/globalStore.interface'

export enum EPhotoGetters {
	GET_MODAL_HOUSE_VISIBLE = 'GET_MODAL_HOUSE_VISIBLE'
}

export const getters: GetterTree<IHomeScreenState, IRootState> = {
	[EPhotoGetters.GET_MODAL_HOUSE_VISIBLE]: state => state.isModalHouseVisible
}
