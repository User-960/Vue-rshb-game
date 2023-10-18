import { IPlayer, IPlayerLiderboard } from '@/interfaces/player.interface'

export interface IPlayerDataState {
	playerData: IPlayer

	isAlertVisible: boolean
	alertText: string

	playersRating: IPlayerLiderboard[]

	isTableRatingVisible: boolean
}
