import { $axios } from '@/api/api'
import { ENUSER } from '@/config/app.constants'
import { IUserDataResponse } from '@/interfaces/player.interface'

const USERS = 'users'
const ENDPOINT = ''

class AuthService {
	async createUser(playerName: string, playerGender: string) {
		try {
			const { data } = await $axios.post<any>(`${ENDPOINT}`, {
				playerName,
				playerGender
			})

			// if (data.playerName)
			// 	localStorage.setItem(ENUSER.PLAYER_NAME, data.playerName)

			return data
		} catch (error: any) {
			return error.response.data.message
		}
	}

	async createUserMock(playerName: string) {
		try {
			const { data } = await $axios.post<any>(`${USERS}`, {
				method: 'POST',
				body: {
					email: 'John@gmail.com',
					username: playerName,
					password: 'm38rmF$',
					name: {
						firstname: playerName,
						lastname: ''
					},
					address: {
						city: 'kilcoole',
						street: '7835 new road',
						number: 3,
						zipcode: '12926-3874',
						geolocation: {
							lat: '-37.3159',
							long: '81.1496'
						}
					},
					phone: '1-570-236-7033'
				}
			})
			console.log(data)

			return data
		} catch (error) {
			throw new Error()
		}
	}
}

export default new AuthService()
