import { fireEvent, screen } from '@testing-library/vue'

import { render } from '../utils/render'

import App from '@/App.vue'

describe('test App component', () => {
	it('render application', () => {
		// given / arrange

		// when / act
		render(App)

		// then / assert
		expect(screen.getByTestId('app')).toBeTruthy()
	})

	it('open About page', async () => {
		// given / arrange

		// when / act
		render(App)
		const aboutBtn = screen.getByText('About')
		await fireEvent.click(aboutBtn)

		// then / assert
		await screen.findByText('About Page')
	})
})
