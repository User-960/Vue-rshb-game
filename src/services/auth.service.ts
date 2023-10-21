import { generateRandomString } from './helpers/helpers'
import { $axios } from '@/api/api'
import { EN_USER } from '@/config/app.constants'
import {
	IEquipmentStack,
	IPlayer,
	IPlayerLiderboard,
	IPlayerLiderboardRanking
} from '@/interfaces/player.interface'

export enum EN_ENDPOINTS {
	PLAYER = '/v1/player',
	LIDERBOARD = '/v1/liderboard',
	NEWGAME = 'newgame',
	RANKING = 'ranking'
}

class AuthService {
	async createUser(name: string, gender: string) {
		try {
			const { data } = await $axios.post<IPlayer>(`${EN_ENDPOINTS.PLAYER}/`, {
				name,
				gender
			})

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_DATA, JSON.stringify(data))
			}

			return data
		} catch (error: any) {
			if (error.response.status === 400) {
				let errorMessage = generateRandomString(name, 3)
				return errorMessage
			} else {
				let errorMessage = 'Возникла ошибка при получение данных!'
				return errorMessage
			}
		}
	}

	async getUser(id: string | number) {
		try {
			const { data } = await $axios.get<IPlayer>(
				`${EN_ENDPOINTS.PLAYER}/${id}/`
			)

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_DATA, JSON.stringify(data))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			console.log(errorMessage)
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
				localStorage.setItem(EN_USER.PLAYER_DATA, JSON.stringify(data))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}

	async updatePlayerCredit(
		id: string | number,
		own_money: number,
		credit: number,
		minigame: any
	) {
		try {
			const { data } = await $axios.patch<IPlayer>(
				`${EN_ENDPOINTS.PLAYER}/${id}/`,
				{
					own_money,
					credit,
					minigame
				}
			)

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_DATA, JSON.stringify(data))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}

	async updatePlayerCoins(id: string | number, own_coins: number) {
		try {
			const { data } = await $axios.patch<IPlayer>(
				`${EN_ENDPOINTS.PLAYER}/${id}/`,
				{
					own_coins
				}
			)

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_DATA, JSON.stringify(data))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}

	async updatePlayerMiniGame(
		id: string | number,
		own_money: number,
		own_coins: number,
		minigame: any
	) {
		try {
			const { data } = await $axios.patch<IPlayer>(
				`${EN_ENDPOINTS.PLAYER}/${id}/`,
				{
					own_money,
					own_coins,
					minigame
				}
			)

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_DATA, JSON.stringify(data))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}

	async updatePlayerEquipment(
		id: string | number,
		equipment: IEquipmentStack | null,
		own_money: number
	) {
		try {
			const { data } = await $axios.patch<IPlayer>(
				`${EN_ENDPOINTS.PLAYER}/${id}/`,
				{
					equipment,
					own_money
				}
			)

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_DATA, JSON.stringify(data))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}

	async getUserNewGame(id: string | number) {
		try {
			const { data } = await $axios.get<IPlayer>(
				`${EN_ENDPOINTS.PLAYER}/${id}/${EN_ENDPOINTS.NEWGAME}/`
			)

			if (data.name !== null && data.gender !== null) {
				localStorage.setItem(EN_USER.PLAYER_DATA, JSON.stringify(data))
			}

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}

	async getUsersRating() {
		try {
			const { data } = await $axios.get<IPlayerLiderboard[]>(
				`${EN_ENDPOINTS.LIDERBOARD}/`
			)

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}

	async getUserLiderboardRanking(id: string | number) {
		try {
			const { data } = await $axios.get<IPlayerLiderboardRanking>(
				`${EN_ENDPOINTS.LIDERBOARD}/${id}/${EN_ENDPOINTS.RANKING}/`
			)

			return data
		} catch (error: any) {
			let errorMessage = 'Возникла ошибка при получение данных!'
			return errorMessage
		}
	}
}

export default new AuthService()
