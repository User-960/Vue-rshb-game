import { MutationTree } from 'vuex'

import { IFinishScreenState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_FinishScreenMutation {
	SHOW_ESTIMATION_BLOCK = 'SHOW_ESTIMATION_BLOCK',
	HIDE_ESTIMATION_BLOCK = 'HIDE_ESTIMATION_BLOCK'
}

const audioModalWindow = new Audio(AUDIO_CONFIG.AUDIO_MODAL_WINDOW)
const audioClickButton = new Audio(AUDIO_CONFIG.AUDIO_CLICK_BUTTON)

export const mutations: MutationTree<IFinishScreenState> = {
	[EN_FinishScreenMutation.SHOW_ESTIMATION_BLOCK](state) {
		audioModalWindow.volume = 1
		audioModalWindow.play()

		state.isEstimationBlockVisible = true
	},
	[EN_FinishScreenMutation.HIDE_ESTIMATION_BLOCK](state) {
		state.isEstimationBlockVisible = false
	}
}
