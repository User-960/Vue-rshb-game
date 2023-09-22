import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { playerData } from './modules/playerData/playerDataModule'
import { IRootState } from './types'
import { collectorGame } from '@/store/modules/collectorGame/collectorGameModule'
import { homeScreen } from '@/store/modules/homeScreen/homeScreenModule'
import { pestControlGame } from '@/store/modules/pestControlGame/pestControlGameModule'
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
			playerData,
			pestControlGame,
			collectorGame
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
