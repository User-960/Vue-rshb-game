import { $axios } from '@/api/api'
import { ENUSER } from '@/config/app.constants'
import { IPlayer } from '@/interfaces/player.interface'

export enum EN_ENDPOINTS {
	PLAYER = '/v1/player'
}

class AuthService {
	async createUser(name: string, gender: string) {
		try {
			const { data } = await $axios.post<IPlayer>(`${EN_ENDPOINTS.PLAYER}/`, {
				name,
				gender
			})

			if (data.name) {
				localStorage.setItem(ENUSER.PLAYER_ID, String(data.id))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'К сожалению, данное имя уже используется'
			return errorMessage
		}
	}

	async getUser(id: string | number) {
		try {
			const { data } = await $axios.get<any>(`${EN_ENDPOINTS.PLAYER}/${id}`)

			return data
		} catch (error: any) {
			return error.response.data.message
		}
	}
}

export default new AuthService()
