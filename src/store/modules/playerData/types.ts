import { IPlayer } from '@/interfaces/player.interface'

export interface IPlayerDataState {
	playerData: IPlayer

	isAlertVisible: boolean
	alertText: string

	isTableRatingVisible: boolean
}
