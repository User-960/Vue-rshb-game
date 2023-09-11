import { render, screen } from '@testing-library/vue'

import home from '@/components/screens/home/home.vue'

describe('test home screen', () => {
	it('render home screen', () => {
		// given / arrange

		// when / act
		render(home)

		// then / assert
		expect(screen.getByText('Home')).toBeTruthy()
	})
})
