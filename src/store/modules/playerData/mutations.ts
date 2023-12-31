import { MutationTree } from 'vuex'

import { IPlayerDataState } from './types'
import { EN_CONFIG } from '@/config/config.player'
import {
	IPlayer,
	IPlayerLiderboardRanking
} from '@/interfaces/player.interface'

export enum EN_PlayerDataMutation {
	CREATE_PLAYER = 'CREATE_PLAYER',
	GET_PLAYER = 'GET_PLAYER',
	UPDATE_PLAYER = 'UPDATE_PLAYER',

	TAKE_CREDIT = 'TAKE_CREDIT',
	RETURN_CREDIT = 'RETURN_CREDIT',

	PAY_MONEY_MARIA = 'PAY_MONEY_MARIA',
	PAY_MONEY_DANIL = 'PAY_MONEY_DANIL',

	PLUS_POINTS_LINK_SOFTWARE = 'PLUS_POINTS_LINK_SOFTWARE',
	PLUS_POINTS_LINK_DRONE = 'PLUS_POINTS_LINK_DRONE',
	PLUS_POINTS_LINK_ROBOT = 'PLUS_POINTS_LINK_ROBOT',

	ESTIMATE_GAME = 'ESTIMATE_GAME',

	BUY_EQUIPMENT = 'BUY_EQUIPMENT',
	SELL_HARVEST = 'SELL_HARVEST',

	SUM_COINS = 'SUM_COINS',
	MINUS_COINS = 'MINUS_COINS',
	COMPLETE_MINI_GAME = 'COMPLETE_MINI_GAME',
	PERFORM_ACHIEVEMENT = 'PERFORM_ACHIEVEMENT',
	SAVE_SCORE_MINI_GAME_ONE = 'SAVE_SCORE_MINI_GAME_ONE',
	SAVE_SCORE_MINI_GAME_TWO = 'SAVE_SCORE_MINI_GAME_TWO',
	SAVE_SCORE_MINI_GAME_THREE = 'SAVE_SCORE_MINI_GAME_THREE',
	SAVE_SCORE_MINI_GAME_FOUR = 'SAVE_SCORE_MINI_GAME_FOUR',
	SAVE_SCORE_MINI_GAME_FIVE = 'SAVE_SCORE_MINI_GAME_FIVE',

	SHOW_ALERT = 'SHOW_ALERT',
	SHOW_LOADING = 'SHOW_LOADING',
	HIDE_LOADING = 'HIDE_LOADING',
	FIND_UNIQUE_NAME = 'FIND_UNIQUE_NAME',
	DELETE_UNIQUE_NAME = 'DELETE_UNIQUE_NAME',

	GET_PLAYERS_RATING = 'GET_PLAYERS_RATING',
	GET_PLAYER_LIDERBOARD_RANKING = 'GET_PLAYER_LIDERBOARD_RANKING',

	SHOW_TABLE_RATING = 'SHOW_TABLE_RATING',
	HIDE_TABLE_RATING = 'HIDE_TABLE_RATING'
}

export const mutations: MutationTree<IPlayerDataState> = {
	[EN_PlayerDataMutation.CREATE_PLAYER](state, player: IPlayer) {
		state.playerData = player
	},
	[EN_PlayerDataMutation.GET_PLAYER](state, player: IPlayer) {
		state.playerData = player
	},
	[EN_PlayerDataMutation.UPDATE_PLAYER](state, player: IPlayer) {
		state.playerData = player
	},

	[EN_PlayerDataMutation.TAKE_CREDIT](state, player: IPlayer) {
		state.playerData.own_money = 9000
		state.playerData.credit = 9000

		if (state.playerData.minigame?.gameOne) {
			state.playerData.minigame.gameOne.available = true
		}
	},
	[EN_PlayerDataMutation.RETURN_CREDIT](state, player: IPlayer) {
		if (state.playerData.own_money >= 9270) {
			state.playerData.own_money -= 9270
			state.playerData.credit = 0
		}
	},

	[EN_PlayerDataMutation.PAY_MONEY_MARIA](state) {
		if (state.playerData.own_money >= 100) {
			state.playerData.own_money -= 100
		}
	},
	[EN_PlayerDataMutation.PAY_MONEY_DANIL](state) {
		if (state.playerData.own_money >= 100) {
			state.playerData.own_money -= 100
		}
	},

	[EN_PlayerDataMutation.PLUS_POINTS_LINK_SOFTWARE](state) {
		state.playerData.own_coins += 5
	},
	[EN_PlayerDataMutation.PLUS_POINTS_LINK_DRONE](state) {
		state.playerData.own_coins += 5
	},
	[EN_PlayerDataMutation.PLUS_POINTS_LINK_ROBOT](state) {
		state.playerData.own_coins += 5
	},

	[EN_PlayerDataMutation.ESTIMATE_GAME](state, user_review: number) {
		state.playerData.user_review = user_review
	},

	[EN_PlayerDataMutation.BUY_EQUIPMENT](state, equipment: string) {
		if (equipment === 'software' && state.playerData.equipment?.software) {
			state.playerData.own_money -= 1800
			state.playerData.equipment.software.available = true
		}

		if (equipment === 'bpla' && state.playerData.equipment?.bpla) {
			state.playerData.own_money -= 2500
			state.playerData.equipment.bpla.available = true
		}

		if (equipment === 'robot' && state.playerData.equipment?.robot) {
			state.playerData.own_money -= 4200
			state.playerData.equipment.robot.available = true
		}
	},
	[EN_PlayerDataMutation.SELL_HARVEST](state) {
		if (
			state.playerData.own_coins * EN_CONFIG.NUMBER_MULTIPLIER >= 9270 &&
			state.playerData.own_money < 9270 &&
			state.playerData.credit === 9000
		) {
			let convertCoins =
				state.playerData.own_coins * EN_CONFIG.NUMBER_MULTIPLIER
			state.playerData.own_money += convertCoins
		}
	},

	[EN_PlayerDataMutation.SUM_COINS](state, coins: number) {
		state.playerData.own_coins += coins
	},
	[EN_PlayerDataMutation.MINUS_COINS](state, coins: number) {
		state.playerData.own_coins -= coins
	},
	[EN_PlayerDataMutation.COMPLETE_MINI_GAME](state, miniGame: string) {
		if (miniGame === 'gameOne' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameOne.complete = true
			state.playerData.minigame.gameTwo.available = true
		}

		if (miniGame === 'gameTwo' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameTwo.complete = true
			state.playerData.minigame.gameThree.available = true
		}

		if (miniGame === 'gameThree' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameThree.complete = true
			state.playerData.minigame.gameFour.available = true
		}

		if (miniGame === 'gameFour' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameFour.complete = true
			state.playerData.minigame.gameFive.available = true
		}

		if (miniGame === 'gameFive' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameFive.complete = true
		}
	},
	[EN_PlayerDataMutation.PERFORM_ACHIEVEMENT](state, miniGame: string) {
		if (miniGame === 'gameOne' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameOne.achievement = true
		}

		if (miniGame === 'gameTwo' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameTwo.achievement = true
		}

		if (miniGame === 'gameThree' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameThree.achievement = true
		}

		if (miniGame === 'gameFour' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameFour.achievement = true
		}

		if (miniGame === 'gameFive' && state.playerData.minigame !== null) {
			state.playerData.minigame.gameFive.achievement = true
		}
	},
	[EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_ONE](state, coins: number) {
		if (state.playerData.minigame !== null) {
			state.playerData.minigame.gameOne.score = coins
		}
	},
	[EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_TWO](state, coins: number) {
		if (state.playerData.minigame !== null) {
			state.playerData.minigame.gameTwo.score = coins
		}
	},
	[EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_THREE](state, coins: number) {
		if (state.playerData.minigame !== null) {
			state.playerData.minigame.gameThree.score = coins
		}
	},
	[EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_FOUR](state, coins: number) {
		if (state.playerData.minigame !== null) {
			state.playerData.minigame.gameFour.score = coins
		}
	},
	[EN_PlayerDataMutation.SAVE_SCORE_MINI_GAME_FIVE](state, coins: number) {
		if (state.playerData.minigame !== null) {
			state.playerData.minigame.gameFive.score = coins
		}
	},

	[EN_PlayerDataMutation.SHOW_ALERT](state, text: string) {
		state.alertText = text
		state.isAlertVisible = true

		if (state.isLoading) {
			state.isLoading = false
		}

		setTimeout(() => {
			state.isAlertVisible = false
		}, 3200)
	},
	[EN_PlayerDataMutation.FIND_UNIQUE_NAME](state, nameText: string) {
		if (typeof nameText === 'string') {
			if (nameText === 'Возникла ошибка при получение данных!') {
				state.alertText = 'Возникла ошибка при получение данных!'
			} else {
				state.alertText = 'К сожалению, данное имя уже используется.'
				state.newUniqueName = nameText
			}
		}

		state.isAlertVisible = true

		setTimeout(() => {
			state.isAlertVisible = false
			state.isLoading = false
		}, 3200)
	},
	[EN_PlayerDataMutation.DELETE_UNIQUE_NAME](state) {
		state.newUniqueName = ''
	},
	[EN_PlayerDataMutation.SHOW_LOADING](state) {
		state.isLoading = true
	},
	[EN_PlayerDataMutation.HIDE_LOADING](state) {
		state.isLoading = false
	},

	[EN_PlayerDataMutation.GET_PLAYERS_RATING](state, players: any) {
		state.playersRating = players
	},
	[EN_PlayerDataMutation.GET_PLAYER_LIDERBOARD_RANKING](
		state,
		playerLiderboardRating: IPlayerLiderboardRanking
	) {
		state.playerLiderboardRating = playerLiderboardRating
	},

	[EN_PlayerDataMutation.SHOW_TABLE_RATING](state, player: IPlayer) {
		state.isTableRatingVisible = true
	},
	[EN_PlayerDataMutation.HIDE_TABLE_RATING](state, player: IPlayer) {
		state.isTableRatingVisible = false
	}
}
