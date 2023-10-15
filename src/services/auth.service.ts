import { $axios } from '@/api/api'
import { EN_USER } from '@/config/app.constants'
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

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_ID, String(data.id))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'К сожалению, данное имя уже используется'
			return errorMessage
		}
	}

	async getUser(id: string | number) {
		try {
			const { data } = await $axios.get<IPlayer>(
				`${EN_ENDPOINTS.PLAYER}/${id}/`
			)

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_ID, String(data.id))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}

	async updatePlayerMoney(id: string | number, own_money: number) {
		try {
			const { data } = await $axios.patch<IPlayer>(
				`${EN_ENDPOINTS.PLAYER}/${id}/`,
				{
					own_money
				}
			)

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_ID, String(data.id))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}
}

export default new AuthService()
