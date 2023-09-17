import { fireEvent, screen } from '@testing-library/vue'

import { render as r } from '../utils/render'

import startPage from '@/pages/startPage.vue'

const render = async (ui: any) => {
	const utils = r(ui)
	return utils
}

describe('test startPage component', () => {
	it('render startPage component', () => {
		// given

		// when
		render(startPage)

		// then
	})

	it('show block for choose character', async () => {
		// given

		// when
		render(startPage)
		await fireEvent.click(screen.getByTestId('startGameBtn'))

		// then
		expect(screen.getByTestId('chooseCharacter')).toBeTruthy()
	})

	it('choose women gender and show auth form', async () => {
		// given

		// when
		render(startPage)
		await fireEvent.click(screen.getByTestId('startGameBtn'))
		await fireEvent.click(screen.getByTestId('chooseWomenGender'))
		await fireEvent.click(screen.getByTestId('chooseCharacterBtn'))

		// then
		expect(screen.getByTestId('authPlayer')).toBeTruthy()
	})

	it('choose men gender and show auth form', async () => {
		// given

		// when
		render(startPage)
		await fireEvent.click(screen.getByTestId('startGameBtn'))
		await fireEvent.click(screen.getByTestId('chooseMenGender'))
		await fireEvent.click(screen.getByTestId('chooseCharacterBtn'))

		// then
		expect(screen.getByTestId('authPlayer')).toBeTruthy()
	})

	it('mock data for auth form', async () => {
		// given

		// when
		render(startPage)
		await fireEvent.click(screen.getByTestId('startGameBtn'))
		await fireEvent.click(screen.getByTestId('chooseMenGender'))
		await fireEvent.click(screen.getByTestId('chooseCharacterBtn'))

		const playerNameInput = screen.getByTestId('inputName')
		await fireEvent.update(playerNameInput, 'ivan')
		await fireEvent.click(screen.getByTestId('formBtn'))

		// then
	})

	it('mock data for auth form', async () => {
		// given

		// when
		render(startPage)
		await fireEvent.click(screen.getByTestId('startGameBtn'))
		await fireEvent.click(screen.getByTestId('chooseWomenGender'))
		await fireEvent.click(screen.getByTestId('chooseCharacterBtn'))

		const playerNameInput = screen.getByTestId('inputName')
		await fireEvent.update(playerNameInput, 'alice')
		await fireEvent.click(screen.getByTestId('formBtn'))

		// then
	})
})
