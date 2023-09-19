import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { playerData } from './modules/playerData/playerDataModule'
import { IRootState } from './types'
import { homeScreen } from '@/store/modules/homeScreen/homeScreenModule'
import { startScreen } from '@/store/modules/startScreen/startScreenModule'

Vue.use(Vuex)

export const getDefaultStore = (): StoreOptions<IRootState> => {
	return {
		state: {
			globalTitle: 'Цифровая ферма'
		},
		modules: {
			homeScreen,
			startScreen,
			playerData
		}
	}
}

export default new Vuex.Store<IRootState>(getDefaultStore())

// const defaultStore: StoreOptions<any> = {
// 	modules: {
// 		homeScreen
// 	}
// }

// const store: Store<IRootState> = new Vuex.Store({
// 	// other configuration...
// })

// store.registerModule('homeScreen', homeScreen)

// export default store
