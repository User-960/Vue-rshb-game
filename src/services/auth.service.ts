import { $axios } from '@/api/api'
import { ENUSER } from '@/config/app.constants'
import { IUserDataResponse } from '@/interfaces/player.interface'

export enum EN_ENDPOINTS {
	CREATE_PLAYER = '/v1/player/'
}

class AuthService {
	async createUser(name: string, gender: string) {
		try {
			const { data } = await $axios.post<any>(`${EN_ENDPOINTS.CREATE_PLAYER}`, {
				name,
				gender
			})

			if (data.name) {
				localStorage.setItem(ENUSER.PLAYER_ID, data.id)
			}

			return data
		} catch (error: any) {
			return error.response.data.message
		}
	}
}

export default new AuthService()
