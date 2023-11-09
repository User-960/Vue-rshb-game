import { fireEvent, screen } from '@testing-library/vue'

import { render as r } from '../utils/render'

import pestControlGame from '@/components/screens/games/pestControlGame/pestControlGame.vue'

const render = async (ui: any) => {
	const utils = r(ui)
	return utils
}

describe('test pestControlGame screen', () => {
	it('render pestControlGame screen', () => {
		// given

		// when
		render(pestControlGame)

		// then
		expect(screen.getByTestId('pestControlGame')).toBeTruthy()
	})

	it('start pest control game', async () => {
		// given
		const mockAudio = jest
			.spyOn(window.HTMLMediaElement.prototype, 'play')
			.mockImplementation(() => Promise.resolve())

		// when
		render(pestControlGame)
		await fireEvent.click(screen.getByTestId('infoBlockBtnPS'))
		await fireEvent.click(screen.getByTestId('rulesBlockBtnPS'))

		// then
		expect(mockAudio).toHaveBeenCalled()
		expect(screen.getByTestId('pestControlGameScreen')).toBeTruthy()
	})

	// it('finish pest control game', async () => {
	// 	// given
	// 	const mockAudio = jest
	// 		.spyOn(window.HTMLMediaElement.prototype, 'play')
	// 		.mockImplementation(() => Promise.resolve())

	//   //   let previousProblem = 1
	// 	// let numberLevel = getRandomNumberProblem(1, 4, previousProblem)

	// 	// when
	// 	render(pestControlGame)
	// 	await fireEvent.click(screen.getByTestId('infoBlockBtnPS'))
	// 	await fireEvent.click(screen.getByTestId('rulesBlockBtnPS'))

	// 	await fireEvent.click(screen.getByTestId('insecticideBugBtn'))
	// 	await fireEvent.click(screen.getByTestId('droneBtn'))
	// 	await fireEvent.click(screen.getByTestId('pepperBushLevel'))

	// 	await fireEvent.click(screen.getByTestId('insecticideLocustsBtn'))
	// 	await fireEvent.click(screen.getByTestId('droneBtn'))
	// 	await fireEvent.click(screen.getByTestId('strawberryBushLevel'))

	// 	await fireEvent.click(screen.getByTestId('insecticideCaterpillarBtn'))
	// 	await fireEvent.click(screen.getByTestId('droneBtn'))
	// 	await fireEvent.click(screen.getByTestId('tomatoBushLevel'))

	// 	await fireEvent.click(screen.getByTestId('insecticideBugBtn'))
	// 	await fireEvent.click(screen.getByTestId('droneBtn'))
	// 	await fireEvent.click(screen.getByTestId('pepperBushLevel'))

	// 	await fireEvent.click(screen.getByTestId('insecticideLocustsBtn'))
	// 	await fireEvent.click(screen.getByTestId('droneBtn'))
	// 	await fireEvent.click(screen.getByTestId('strawberryBushLevel'))

	// 	await fireEvent.click(screen.getByTestId('insecticideCaterpillarBtn'))
	// 	await fireEvent.click(screen.getByTestId('droneBtn'))
	// 	await fireEvent.click(screen.getByTestId('tomatoBushLevel'))

	// 	// then
	// 	screen.debug()
	// 	expect(mockAudio).toHaveBeenCalled()
	// 	expect(screen.getByTestId('victoryBlock')).toBeTruthy()
	// })
})
