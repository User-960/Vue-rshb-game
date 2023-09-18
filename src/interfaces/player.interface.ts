export interface IUserDataForm {
	playerName: string
	playerGender: 'women' | 'men'
}

export interface IUserDataResponse {
	id: string | number
	name: string
	gender: 'women' | 'men'
	own_money: number
	own_coins: number
	credit: number
	bank: number
	equipment_shop_id: number
	harvest_shop_id: number
	equipment: any[]
	harvest: any[]
	minigame: any[]
}
