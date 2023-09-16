import Vue from 'vue'
import Vuex from 'vuex'

import { IRootState } from '@/interfaces/globalStore.interface'
import { homeScreen } from '@/store/modules/homeScreen/homeScreenModule'

Vue.use(Vuex)

export default new Vuex.Store<IRootState>({
	state: {
		globalTitle: 'Цифровая ферма'
	},
	modules: {
		homeScreen
	}
})
