import { MutationTree } from 'vuex'

import { IPestControlGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

let timer: any = null

export enum EN_PestControlGameMutation {
	RESTART_GAME_PS = 'RESTART_GAME_PS',
	START_NEW_GAME_PS = 'START_NEW_GAME_PS',

	SHOW_INFO_LINK_BLOCK_PS = 'SHOW_INFO_LINK_BLOCK_PS',
	HIDE_INFO_LINK_BLOCK_PS = 'HIDE_INFO_LINK_BLOCK_PS',
	SHOW_RULES_BLOCK_PS = 'SHOW_RULES_BLOCK_PS',
	HIDE_RULES_BLOCK_PS = 'HIDE_RULES_BLOCK_PS',
	SHOW_VICTORY_BLOCK_PS = 'SHOW_VICTORY_BLOCK_PS',
	HIDE_VICTORY_BLOCK_PS = 'HIDE_VICTORY_BLOCK_PS',
	SHOW_LOSS_BLOCK_PS = 'SHOW_LOSS_BLOCK_PS',
	HIDE_LOSS_BLOCK_PS = 'HIDE_LOSS_BLOCK_PS',

	INCREASE_PLAYER_MISTAKES_PS = 'INCREASE_PLAYER_MISTAKES_PS',
	START_TIMER_PS = 'START_TIMER_PS',
	STOP_TIMER_PS = 'STOP_TIMER_PS',
	UPDATE_TIMER_PS = 'UPDATE_TIMER_PS',

	START_GAME_PS = 'START_GAME_PS',
	FINISH_GAME_PS = 'FINISH_GAME_PS',
	GAME_LOOP_PS = 'GAME_LOOP_PS',
	PLUS_POINTS_PS = 'PLUS_POINTS_PS',
	PLUS_POINTS_LINK_PS = 'PLUS_POINTS_LINK_PS',
	MINUS_POINTS_PS = 'MINUS_POINTS_PS',

	CHOOSE_TOMATO_LEVEL = 'CHOOSE_TOMATO_LEVEL',
	NOT_CHOOSE_TOMATO_LEVEL = 'NOT_CHOOSE_TOMATO_LEVEL',
	FILL_TOMATO_LINE_CRITICAL = 'FILL_TOMATO_LINE_CRITICAL',
	REMOVE_TOMATO_LINE_CRITICAL = 'REMOVE_TOMATO_LINE_CRITICAL',

	CHOOSE_PEPPER_LEVEL = 'CHOOSE_PEPPER_LEVEL',
	NOT_CHOOSE_PEPPER_LEVEL = 'NOT_CHOOSE_PEPPER_LEVEL',
	FILL_PEPPER_LINE_CRITICAL = 'FILL_PEPPER_LINE_CRITICAL',
	REMOVE_PEPPER_LINE_CRITICAL = 'REMOVE_PEPPER_LINE_CRITICAL',

	CHOOSE_STRAWBERRY_LEVEL = 'CHOOSE_STRAWBERRY_LEVEL',
	NOT_CHOOSE_STRAWBERRY_LEVEL = 'NOT_CHOOSE_STRAWBERRY_LEVEL',
	FILL_STRAWBERRY_LINE_CRITICAL = 'FILL_STRAWBERRY_LINE_CRITICAL',
	REMOVE_STRAWBERRY_LINE_CRITICAL = 'REMOVE_STRAWBERRY_LINE_CRITICAL',

	SELECT_BUG = 'SELECT_BUG',
	NOT_SELECT_BUG = 'NOT_SELECT_BUG',
	SELECT_LOCUSTS = 'SELECT_LOCUSTS',
	NOT_SELECT_LOCUSTS = 'NOT_SELECT_LOCUSTS',
	SELECT_CATERPILLAR = 'SELECT_CATERPILLAR',
	NOT_SELECT_CATERPILLAR = 'NOT_SELECT_CATERPILLAR',

	SELECT_DRONE = 'SELECT_DRONE',
	NOT_SELECT_DRONE = 'NOT_SELECT_DRONE',
	MOVE_DRONE_TOMATO = 'MOVE_DRONE_TOMATO',
	NOT_MOVE_DRONE_TOMATO = 'NOT_MOVE_DRONE_TOMATO',
	MOVE_DRONE_PEPPER = 'MOVE_DRONE_PEPPER',
	NOT_MOVE_DRONE_PEPPER = 'NOT_MOVE_DRONE_PEPPER',
	MOVE_DRONE_STRAWBERRY = 'MOVE_DRONE_STRAWBERRY',
	NOT_MOVE_DRONE_STRAWBERRY = 'NOT_MOVE_DRONE_STRAWBERRY',

	COMPLETE_PEST_CONTROL_GAME = 'COMPLETE_PEST_CONTROL_GAME',
	NOT_COMPLETE_PEST_CONTROL_GAME = 'NOT_COMPLETE_PEST_CONTROL_GAME'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)
const audioLoss = new Audio(AUDIO_CONFIG.AUDIO_LOSS)
const audioNewMission = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
const audioDroneMoved = new Audio(AUDIO_CONFIG.AUDIO_DRONE_MOVED)
const audioDroneMovedReturn = new Audio(AUDIO_CONFIG.AUDIO_DRONE_MOVED_RETURN)

export const mutations: MutationTree<IPestControlGameState> = {
	[EN_PestControlGameMutation.RESTART_GAME_PS](state) {
		;(state.isInfoLinkBlockVisible = true),
			(state.isRulesBlockVisible = false),
			(state.isVictoryBlockVisible = false),
			(state.isLossBlockVisible = false),
			(state.isStartGame = false),
			(state.gameLoop = 0),
			(state.tomatoLevel = 1),
			(state.pepperLevel = 2),
			(state.strawberryLevel = 3),
			(state.points = 0),
			(state.timer = 10),
			(state.playerMistakes = 1),
			(state.isChosenTomatoLevel = false),
			(state.isChosenPepperLevel = false),
			(state.isChosenStrawberryLevel = false),
			(state.isTomatoLineCritical = false),
			(state.isPepperLineCritical = false),
			(state.isStrawberryLineCritical = false),
			(state.isBugActive = false),
			(state.isLocustsActive = false),
			(state.isCaterpillarActive = false),
			(state.isDroneActive = false),
			(state.isDroneMovedTomato = false),
			(state.isDroneMovedPepper = false),
			(state.isDroneMovedStrawberry = false)
	},
	[EN_PestControlGameMutation.START_NEW_GAME_PS](state) {
		state.isVictoryBlockVisible = false
		state.isLossBlockVisible = false
		state.isStartGame = false
		state.gameLoop = 0
		state.tomatoLevel = 1
		state.pepperLevel = 2
		state.strawberryLevel = 3

		if (state.points === 5) {
			state.points = 5
		} else {
			state.points = 0
		}

		state.timer = 10
		state.playerMistakes = 1
		state.isChosenTomatoLevel = false
		state.isChosenPepperLevel = false
		state.isChosenStrawberryLevel = false
		state.isTomatoLineCritical = false
		state.isPepperLineCritical = false
		state.isStrawberryLineCritical = false
		state.isBugActive = false
		state.isLocustsActive = false
		state.isCaterpillarActive = false
		state.isDroneActive = false
		state.isDroneMovedTomato = false
		state.isDroneMovedPepper = false
		state.isDroneMovedStrawberry = false
	},

	[EN_PestControlGameMutation.SHOW_INFO_LINK_BLOCK_PS](state) {
		state.isInfoLinkBlockVisible = true
	},
	[EN_PestControlGameMutation.HIDE_INFO_LINK_BLOCK_PS](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EN_PestControlGameMutation.SHOW_RULES_BLOCK_PS](state) {
		audioNewMission.volume = 1
		audioNewMission.play()

		state.isRulesBlockVisible = true
	},
	[EN_PestControlGameMutation.HIDE_RULES_BLOCK_PS](state) {
		state.isRulesBlockVisible = false
	},
	[EN_PestControlGameMutation.SHOW_VICTORY_BLOCK_PS](state) {
		audioVictory.volume = 1
		audioVictory.play()

		state.isVictoryBlockVisible = true
	},
	[EN_PestControlGameMutation.HIDE_VICTORY_BLOCK_PS](state) {
		state.isVictoryBlockVisible = false
	},
	[EN_PestControlGameMutation.SHOW_LOSS_BLOCK_PS](state) {
		audioLoss.volume = 1
		audioLoss.play()

		state.isLossBlockVisible = true
	},
	[EN_PestControlGameMutation.HIDE_LOSS_BLOCK_PS](state) {
		state.isLossBlockVisible = false
	},
	[EN_PestControlGameMutation.START_GAME_PS](state) {
		state.isStartGame = true
	},
	[EN_PestControlGameMutation.FINISH_GAME_PS](state) {
		state.isStartGame = false
	},
	[EN_PestControlGameMutation.GAME_LOOP_PS](state) {
		state.gameLoop += 1
	},
	[EN_PestControlGameMutation.PLUS_POINTS_PS](state) {
		state.points += 10
	},
	[EN_PestControlGameMutation.PLUS_POINTS_LINK_PS](state) {
		if (state.points === 0) {
			state.points += 5
		}
	},
	[EN_PestControlGameMutation.MINUS_POINTS_PS](state) {
		if (state.points === 0) {
			state.points = 0
		} else {
			state.points -= 5
		}
	},

	[EN_PestControlGameMutation.CHOOSE_TOMATO_LEVEL](state) {
		state.isChosenTomatoLevel = true
	},
	[EN_PestControlGameMutation.NOT_CHOOSE_TOMATO_LEVEL](state) {
		state.isChosenTomatoLevel = false
	},
	[EN_PestControlGameMutation.FILL_TOMATO_LINE_CRITICAL](state) {
		state.isTomatoLineCritical = true
	},
	[EN_PestControlGameMutation.REMOVE_TOMATO_LINE_CRITICAL](state) {
		state.isTomatoLineCritical = false
	},

	[EN_PestControlGameMutation.CHOOSE_PEPPER_LEVEL](state) {
		state.isChosenPepperLevel = true
	},
	[EN_PestControlGameMutation.NOT_CHOOSE_PEPPER_LEVEL](state) {
		state.isChosenPepperLevel = false
	},
	[EN_PestControlGameMutation.FILL_PEPPER_LINE_CRITICAL](state) {
		state.isPepperLineCritical = true
	},
	[EN_PestControlGameMutation.REMOVE_PEPPER_LINE_CRITICAL](state) {
		state.isPepperLineCritical = false
	},

	[EN_PestControlGameMutation.CHOOSE_STRAWBERRY_LEVEL](state) {
		state.isChosenStrawberryLevel = true
	},
	[EN_PestControlGameMutation.NOT_CHOOSE_STRAWBERRY_LEVEL](state) {
		state.isChosenStrawberryLevel = false
	},
	[EN_PestControlGameMutation.FILL_STRAWBERRY_LINE_CRITICAL](state) {
		state.isStrawberryLineCritical = true
	},
	[EN_PestControlGameMutation.REMOVE_STRAWBERRY_LINE_CRITICAL](state) {
		state.isStrawberryLineCritical = false
	},

	[EN_PestControlGameMutation.SELECT_BUG](state) {
		state.isBugActive = true
	},
	[EN_PestControlGameMutation.NOT_SELECT_BUG](state) {
		state.isBugActive = false
	},
	[EN_PestControlGameMutation.SELECT_LOCUSTS](state) {
		state.isLocustsActive = true
	},
	[EN_PestControlGameMutation.NOT_SELECT_LOCUSTS](state) {
		state.isLocustsActive = false
	},
	[EN_PestControlGameMutation.SELECT_CATERPILLAR](state) {
		state.isCaterpillarActive = true
	},
	[EN_PestControlGameMutation.NOT_SELECT_CATERPILLAR](state) {
		state.isCaterpillarActive = false
	},

	[EN_PestControlGameMutation.SELECT_DRONE](state) {
		state.isDroneActive = true
	},
	[EN_PestControlGameMutation.NOT_SELECT_DRONE](state) {
		state.isDroneActive = false
	},

	[EN_PestControlGameMutation.MOVE_DRONE_TOMATO](state) {
		audioDroneMoved.volume = 0.4
		audioDroneMoved.play()

		state.isDroneMovedTomato = true
	},
	[EN_PestControlGameMutation.NOT_MOVE_DRONE_TOMATO](state) {
		audioDroneMovedReturn.volume = 0.4
		audioDroneMovedReturn.play()

		state.isDroneMovedTomato = false
	},
	[EN_PestControlGameMutation.MOVE_DRONE_PEPPER](state) {
		audioDroneMoved.volume = 0.4
		audioDroneMoved.play()

		state.isDroneMovedPepper = true
	},
	[EN_PestControlGameMutation.NOT_MOVE_DRONE_PEPPER](state) {
		audioDroneMovedReturn.volume = 0.4
		audioDroneMovedReturn.play()

		state.isDroneMovedPepper = false
	},
	[EN_PestControlGameMutation.MOVE_DRONE_STRAWBERRY](state) {
		audioDroneMoved.volume = 0.4
		audioDroneMoved.play()

		state.isDroneMovedStrawberry = true
	},
	[EN_PestControlGameMutation.NOT_MOVE_DRONE_STRAWBERRY](state) {
		audioDroneMovedReturn.volume = 0.4
		audioDroneMovedReturn.play()

		state.isDroneMovedStrawberry = false
	},

	[EN_PestControlGameMutation.INCREASE_PLAYER_MISTAKES_PS](state) {
		state.playerMistakes += 1
	},
	[EN_PestControlGameMutation.START_TIMER_PS](state) {
		if (state.timer > 0 && state.isStartGame) {
			timer = setInterval(() => {
				state.timer -= 1

				if (state.timer < 0) {
					clearInterval(timer)
					state.timer = 10
				}
			}, 1000)
		}
	},
	[EN_PestControlGameMutation.STOP_TIMER_PS](state) {
		if (timer) {
			clearInterval(timer)
		}
	},
	[EN_PestControlGameMutation.UPDATE_TIMER_PS](state) {
		state.timer = 10
	},

	[EN_PestControlGameMutation.COMPLETE_PEST_CONTROL_GAME](state) {
		state.isPestControlGameCompleted = true
	},
	[EN_PestControlGameMutation.NOT_COMPLETE_PEST_CONTROL_GAME](state) {
		state.isPestControlGameCompleted = false
	}
}
