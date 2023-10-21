import {
	IPlayer,
	IPlayerLiderboard,
	IPlayerLiderboardRanking
} from '@/interfaces/player.interface'

export interface IPlayerDataState {
	playerData: IPlayer

	isAlertVisible: boolean
	alertText: string
	newUniqueName: string
	isLoading: boolean

	numberMultiplier: number

	playersRating: IPlayerLiderboard[]
	playerLiderboardRating: IPlayerLiderboardRanking

	isTableRatingVisible: boolean
}
