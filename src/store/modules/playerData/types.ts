import { IPlayer, IPlayerLiderboard } from '@/interfaces/player.interface'

export interface IPlayerDataState {
	playerData: IPlayer

	isAlertVisible: boolean
	alertText: string
	newUniqueName: string
	isLoading: boolean

	numberMultiplier: number

	playersRating: IPlayerLiderboard[]

	isTableRatingVisible: boolean
}
