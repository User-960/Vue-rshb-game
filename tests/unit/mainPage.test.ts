import { fireEvent, screen } from '@testing-library/vue'

import { render as r } from '../utils/render'

import mainPage from '@/pages/mainPage.vue'

const render = async (ui: any) => {
	const utils = r(ui)
	return utils
}

describe('test mainPage component', () => {
	it('render mainPage component', () => {
		// given

		// when
		render(mainPage)

		// then
	})

	it('show modalHouse', async () => {
		// given

		// when
		render(mainPage)
		await fireEvent.click(screen.getByTestId('houseGame'))

		// then
		expect(screen.getByTestId('modalHouse')).toBeTruthy()
	})
})
