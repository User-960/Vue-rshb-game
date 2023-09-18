import { fireEvent, screen } from '@testing-library/vue'

import { render as r } from '../utils/render'

import home from '@/components/screens/home/home.vue'

const render = async (ui: any) => {
	const utils = r(ui)
	return utils
}

describe('test home screen', () => {
	it('render home screen', () => {
		// given

		// when
		render(home)

		// then
		expect(screen.getByTestId('map')).toBeTruthy()
	})

	it('show bank', async () => {
		// given

		// when
		render(home)
		await fireEvent.click(screen.getByTestId('openBankBtn'))

		// then
		expect(screen.getByTestId('modalBank')).toBeTruthy()
	})

	it('close bank', async () => {
		// given

		// when
		render(home)
		await fireEvent.click(screen.getByTestId('openBankBtn'))
		await fireEvent.click(screen.getByTestId('closeModalBtn'))

		// then
	})
})
