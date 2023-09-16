import { render as r } from '../utils/render'

import layout from '@/components/layout/layout.vue'

const render = async (ui: any) => {
	const utils = r(ui)
	return utils
}

test('render layout component', () => {
	// given / arrange

	// when / act
	render(layout)

	// then / assert
})
