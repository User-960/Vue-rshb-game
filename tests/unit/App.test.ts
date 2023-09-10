import { fireEvent, render, screen } from '@testing-library/vue'

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
		expect(screen.getByText('Home Page')).toBeTruthy()
	})

  // it('correctly responds to button clicks', async () => {
	// 	// given / arrange

	// 	// when / act
	// 	render(Home)
  //   const addBtn = screen.getByText('Add')
  //   const subtractBtn = screen.getByText('Subtract')
  //   await fireEvent.click(addBtn)
  //   await fireEvent.click(addBtn)
  //   await fireEvent.click(subtractBtn)

	// 	// then / assert
	// 	expect(screen.getByText('Count: 1')).toBeTruthy()
	// })
})