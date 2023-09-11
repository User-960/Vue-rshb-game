import { render, screen } from '@testing-library/vue'

import mainPage from '@/pages/mainPage.vue'

describe('test mainPage component', () => {
	it('render title in mainPage component', () => {
		// given / arrange

		// when / act
		render(mainPage)

		// then / assert
	})

	// it('correctly responds to button clicks', async () => {
	// 	// given / arrange

	// 	// when / act
	// 	render(mainPage)
	//   const addBtn = screen.getByText('Add')
	//   const subtractBtn = screen.getByText('Subtract')
	//   await fireEvent.click(addBtn)
	//   await fireEvent.click(addBtn)
	//   await fireEvent.click(subtractBtn)

	// 	// then / assert
	// 	expect(screen.getByText('Count: 1')).toBeTruthy()
	// })
})
