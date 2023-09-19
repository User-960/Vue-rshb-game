export interface IUserDataForm {
	name: string
	gender: 'Female' | 'Male'
}

export interface IUserDataResponse {
	id: string | number
	name: string
	gender: 'Femala' | 'Male'
	own_money: number
	own_coins?: number
	credit: number
	bank: number
	equipment_shop_id?: number
	harvest_shop_id?: number
	equipment?: any[]
	harvest?: any[]
	minigame?: any[]
}
