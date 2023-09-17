import { render as r } from '@testing-library/vue'

import { routes } from '@/router'
import { getDefaultStore } from '@/store'

export const renderRouter = (ui: any) => {
	return r(ui, { routes })
}

export const renderVuex = (ui: any) => {
	const store = getDefaultStore()

	// const moduleHomeScreen = getDefaultHomeScreenState()

	// store.state.globalTitle = 'Цифровая ферма'
	// moduleHomeScreen.state.isModalHouseVisible = false

	return r(ui, { store })
}

// export const render = (ui: any) => {
// 	const store = getDefaultStore()
// 	const moduleHomeScreen = getDefaultHomeScreenState()

// 	moduleHomeScreen.state.isModalHouseVisible = false

// 	return r(ui, { routes, store })
// }

export const render = (ui: any, { store: storeOverrides = {} } = {}) => {
	return r(ui, {
		routes,
		store: { ...getDefaultStore(), ...storeOverrides }
	})
}
