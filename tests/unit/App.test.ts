import { fireEvent, screen } from '@testing-library/vue'

import { render as r } from '../utils/render'

import App from '@/App.vue'

const render = async (App: any) => {
	const utils = r(App)
	return utils
}

describe('test App component', () => {
	it('render application', () => {
		// arrange

		// act
		render(App)

		// assert
		expect(screen.getByTestId('app')).toBeTruthy()
	})
})
