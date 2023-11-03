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
		const mockAudio = jest
			.spyOn(window.HTMLMediaElement.prototype, 'play')
			.mockImplementation(() => Promise.resolve())

		// when
		render(home)

		// then
		expect(mockAudio).toHaveBeenCalled()
		expect(screen.getByTestId('map')).toBeTruthy()
	})

	it('skip 4 info introduction modal windows', async () => {
		// given

		// when
		render(home)
		await fireEvent.click(screen.getByTestId('infoIntroductionFirstBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionSecondBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionThirdBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionFourthBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionFourthHalfBtn'))

		// then
		expect(screen.getByTestId('arrowBank')).toBeTruthy()
	})

	it('show suggestion from bank', async () => {
		// given

		// when
		render(home)
		await fireEvent.click(screen.getByTestId('infoIntroductionFirstBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionSecondBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionThirdBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionFourthBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionFourthHalfBtn'))
		await fireEvent.click(screen.getByTestId('openBankBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionFifthBtn'))

		// then
		expect(screen.getByTestId('modalBank')).toBeTruthy()
	})

	it('show take bank credit', async () => {
		// given

		// when
		render(home)
		await fireEvent.click(screen.getByTestId('infoIntroductionFirstBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionSecondBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionThirdBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionFourthBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionFourthHalfBtn'))
		await fireEvent.click(screen.getByTestId('openBankBtn'))
		// await fireEvent.click(screen.getByTestId('infoIntroductionFifthBtn'))
		await fireEvent.click(screen.getByTestId('takeCreditBtn'))
		await fireEvent.click(screen.getByTestId('congratsBtn'))
		await fireEvent.click(screen.getByTestId('infoIntroductionSixthBtn'))

		// then
		expect(screen.getByTestId('arrowShop')).toBeTruthy()
	})

	it('open shop A', async () => {
		// given

		// when
		render(home)
		await fireEvent.click(screen.getByTestId('openShopBtn'))
		await fireEvent.click(screen.getByTestId('navShopABtn'))

		// then
		expect(screen.getByTestId('modalShop')).toBeTruthy()
		expect(screen.getByTestId('shopPc')).toBeTruthy()
	})

	it('open shop B', async () => {
		// given

		// when
		render(home)
		await fireEvent.click(screen.getByTestId('openShopBtn'))
		await fireEvent.click(screen.getByTestId('navShopBBtn'))

		// then
		expect(screen.getByTestId('modalShop')).toBeTruthy()
		expect(screen.getByTestId('shopBtnSell')).toBeTruthy()
	})
})
