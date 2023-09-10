import { render as r } from '@testing-library/vue'

import { routes } from '@/router'

export const render = (ui: any) => {
	return r(ui, { routes })
}
