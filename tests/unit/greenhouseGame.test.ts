import { fireEvent, screen } from '@testing-library/vue'

import { render as r } from '../utils/render'

import greenhouseGame from '@/components/screens/games/greenhouseGame/greenhouseGame.vue'

const render = async (ui: any) => {
	const utils = r(ui)
	return utils
}

describe('test greenhouseGame screen', () => {
	it('render home screen', () => {
		// given

		// when
		render(greenhouseGame)

		// then
		expect(screen.getByTestId('greenhouseGame')).toBeTruthy()
	})

	it('start greenhouse game', async () => {
		// given
		const mockAudio = jest
			.spyOn(window.HTMLMediaElement.prototype, 'play')
			.mockImplementation(() => Promise.resolve())

		// when
		render(greenhouseGame)
		await fireEvent.click(screen.getByTestId('infoBlockBtnGH'))
		await fireEvent.click(screen.getByTestId('rulesBlockBtnGH'))

		// then
		expect(mockAudio).toHaveBeenCalled()
		expect(screen.getByTestId('tomatoTaskSoilMoistureCorrect')).toBeTruthy()
	})

	it('complete tomato level', async () => {
		// given
		const mockAudio = jest
			.spyOn(window.HTMLMediaElement.prototype, 'play')
			.mockImplementation(() => Promise.resolve())

		// when
		render(greenhouseGame)
		await fireEvent.click(screen.getByTestId('tomatoTaskSoilMoistureCorrect'))
		await fireEvent.click(screen.getByTestId('tomatoTaskSoilMoistureBtn'))
		await fireEvent.click(screen.getByTestId('tomatoTaskAirHumidityCorrect'))
		await fireEvent.click(screen.getByTestId('tomatoTaskAirTemperatureCorrect'))
		await fireEvent.click(screen.getByTestId('navPepperLevelBtn'))

		// then
		expect(mockAudio).toHaveBeenCalled()
		expect(screen.getByTestId('pepperTaskSoilMoistureCorrect')).toBeTruthy()
	})

	it('complete pepper level', async () => {
		// given
		const mockAudio = jest
			.spyOn(window.HTMLMediaElement.prototype, 'play')
			.mockImplementation(() => Promise.resolve())

		// when
		render(greenhouseGame)
		await fireEvent.click(screen.getByTestId('pepperTaskSoilMoistureCorrect'))
		await fireEvent.click(screen.getByTestId('pepperTaskAirHumidityCorrect'))
		await fireEvent.click(screen.getByTestId('pepperTaskMoisturizeAirBtn'))
		await fireEvent.click(screen.getByTestId('pepperTaskAirTemperatureCorrect'))
		await fireEvent.click(screen.getByTestId('navStrawberryLevelBtn'))

		// then
		expect(mockAudio).toHaveBeenCalled()
		expect(screen.getByTestId('strawberryTaskSoilMoistureCorrect')).toBeTruthy()
	})

	it('complete strawberry level and pay bonus', async () => {
		// given
		const mockAudio = jest
			.spyOn(window.HTMLMediaElement.prototype, 'play')
			.mockImplementation(() => Promise.resolve())

		// when
		render(greenhouseGame)
		await fireEvent.click(
			screen.getByTestId('strawberryTaskSoilMoistureCorrect')
		)
		await fireEvent.click(
			screen.getByTestId('strawberryTaskAirHumidityCorrect')
		)
		await fireEvent.click(screen.getByTestId('strawberryTaskDrainAirBtn'))
		await fireEvent.click(
			screen.getByTestId('strawberryTaskAirTemperatureCorrect')
		)
		setTimeout(async () => {
			await fireEvent.click(screen.getByTestId('victoryBlockSkipBtn'))
			await fireEvent.click(screen.getByTestId('bonusBlockPayBtn'))
		}, 1000)

		// then
		expect(mockAudio).toHaveBeenCalled()
		setTimeout(() => {
			expect(screen.getByTestId('bonusBlockPayed')).toBeTruthy()
		}, 1000)
	})
})
