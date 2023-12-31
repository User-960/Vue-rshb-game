import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { playerData } from './modules/playerData/playerDataModule'
import { IRootState } from './types'
import { aiGame } from '@/store/modules/aiGame/aiGameModule'
import { collectorGame } from '@/store/modules/collectorGame/collectorGameModule'
import { finishScreen } from '@/store/modules/finishScreen/finishScreenModule'
import { geneticGame } from '@/store/modules/geneticGame/geneticGameModule'
import { greenhouseGame } from '@/store/modules/greenhouseGame/greenhouseGameModule'
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
			finishScreen,
			playerData,
			geneticGame,
			greenhouseGame,
			aiGame,
			pestControlGame,
			collectorGame
		}
	}
}

export default new Vuex.Store<IRootState>(getDefaultStore())
