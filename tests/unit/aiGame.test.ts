import { fireEvent, screen } from '@testing-library/vue'

import { render as r } from '../utils/render'

import aiGame from '@/components/screens/games/aiGame/aiGame.vue'

const render = async (ui: any) => {
	const utils = r(ui)
	return utils
}

describe('test aiGame screen', () => {
	it('render aiGame screen', () => {
		// given

		// when
		render(aiGame)

		// then
		expect(screen.getByTestId('aiGameBack')).toBeTruthy()
	})

	it('start aiGame', async () => {
		// given
		const mockAudio = jest
			.spyOn(window.HTMLMediaElement.prototype, 'play')
			.mockImplementation(() => Promise.resolve())

		// when
		render(aiGame)
		await fireEvent.click(screen.getByTestId('infoBlockBtnAi'))
		await fireEvent.click(screen.getByTestId('rulesBlockBtnAi'))

		// then
		expect(mockAudio).toHaveBeenCalled()
		expect(screen.getByTestId('aiGameScreen')).toBeTruthy()
	})
})
