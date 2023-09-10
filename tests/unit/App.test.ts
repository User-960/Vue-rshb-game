import { render, screen } from '@testing-library/vue'

import App from '@/App.vue'
import Home from '@/pages/HomePage.vue'

describe('test App component', () => {
	it('render application', () => {
		// given / arrange

		// when / act
		render(App)

		// then / assert
		expect(screen.getByTestId('app')).toBeTruthy()
	})

	it('render Home component', () => {
		// given / arrange

		// when / act
		render(Home)

		// then / assert
		expect(screen.getByText ('Home Page')).toBeTruthy()
	})
})