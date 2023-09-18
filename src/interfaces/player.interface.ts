export interface IUserDataForm {
	playerName: string
	playerGender: 'women' | 'men'
}

export interface IUserDataResponse {
	id: string | number
	playerName: string
	playerGender: 'women' | 'men'
}
