import { IUserDataForm } from '@/interfaces/player.interface'

export interface IStartScreenState {
	isChooseCharacterVisible: boolean
	isAuthPlayerVisible: boolean
	userData: IUserDataForm
}
