import axios from 'axios'

import { SERVER_URL } from '../config/app.constants'

const API_URL = `${SERVER_URL}/api`

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})
