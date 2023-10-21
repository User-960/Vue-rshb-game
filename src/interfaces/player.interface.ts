export interface IUserDataForm {
	name: string
	gender: 'Female' | 'Male'
}

export interface IEquipmentStack {
	software: {
		available: boolean
	}
	bpla: {
		available: boolean
	}
	robot: {
		available: boolean
	}
}

export interface IHarvestStack {
	tomatoes: {
		harvest_amount: number
		available: boolean
		gen_modified: boolean
	}
	peppers: {
		harvest_amount: number
		available: boolean
		gen_modified: boolean
	}
	strawberries: {
		harvest_amount: number
		available: boolean
		gen_modified: boolean
	}
}

export interface IMiniGames {
	gameOne: IMiniGame
	gameTwo: IMiniGame
	gameThree: IMiniGame
	gameFour: IMiniGame
	gameFive: IMiniGame
}

export interface IMiniGame {
	achievement: boolean
	available: boolean
	complete: boolean
	score: number
}

export interface IPlayer {
	id: string | number
	name: string | null
	gender: 'Female' | 'Male' | null
	own_money: number
	own_coins: number
	credit: number
	equipment: IEquipmentStack | null
	harvest: IHarvestStack | null
	minigame: IMiniGames | null
}

export interface IPlayerLiderboard {
	achievement: IPlayerLiderboardAchievement
	name: string
	own_money: number
	own_coins: number
	top_score: number
}

export interface IPlayerLiderboardAchievement {
	gameOne: { achievement: boolean }
	gameTwo: { achievement: boolean }
	gameThree: { achievement: boolean }
	gameFour: { achievement: boolean }
	gameFive: { achievement: boolean }
}

export interface IPlayerLiderboardRanking {
	player_id: number
	place: number
	total_players: number
	own_coins: number
	top_score: number
	achievement_count: number
	player_name: string
	liderdoard: IPlayerLiderboard[]
}
