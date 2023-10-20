import { MutationTree } from 'vuex'

import { nameFlasks } from '@/components/screens/games/geneticGame/config/config'
import {
	generatorFlasksDropZone,
	generatorFlasksList
} from '@/components/screens/games/geneticGame/helpers/helpers'

import { IGeneticGameState } from './types'
import { AUDIO_CONFIG } from '@/config/audio'

export enum EN_GeneticGameMutation {
	RESTART_GAME_GN = 'RESTART_GAME_GN',

	SHOW_INFO_LINK_BLOCK_GN = 'SHOW_INFO_LINK_BLOCK_GN',
	HIDE_INFO_LINK_BLOCK_GN = 'HIDE_INFO_LINK_BLOCK_GN',
	SHOW_RULES_BLOCK_GN = 'SHOW_RULES_BLOCK_GN',
	HIDE_RULES_BLOCK_GN = 'HIDE_RULES_BLOCK_GN',
	SHOW_VICTORY_BLOCK_GN = 'SHOW_VICTORY_BLOCK_GN',
	HIDE_VICTORY_BLOCK_GN = 'HIDE_VICTORY_BLOCK_GN',
	SHOW_LOSS_BLOCK_GN = 'SHOW_LOSS_BLOCK_GN',
	HIDE_LOSS_BLOCK_GN = 'HIDE_LOSS_BLOCK_GN',
	SHOW_BONUS_BLOCK_GN = 'SHOW_BONUS_BLOCK_GN',
	HIDE_BONUS_BLOCK_GN = 'HIDE_BONUS_BLOCK_GN',
	SHOW_BONUS_BLOCK_PAYED_GN = 'SHOW_BONUS_BLOCK_PAYED_GN',
	HIDE_BONUS_BLOCK_PAYED_GN = 'HIDE_BONUS_BLOCK_PAYED_GN',
	START_GAME_GN = 'START_GAME_GN',
	FINISH_GAME_GN = 'FINISH_GAME_GN',
	START_NEW_GAME_GN = 'START_NEW_GAME_GN',
	PLUS_POINTS_GN = 'PLUS_POINTS_GN',
	PLUS_POINTS_LINK_GN = 'PLUS_POINTS_LINK_GN',
	MINUS_POINTS_GN = 'MINUS_POINTS_GN',

	UPDATE_TIMER_TOMATO_GN = 'UPDATE_TIMER_TOMATO_GN',
	START_FINISH_TIMER_TOMATO_GN = 'START_FINISH_TIMER_TOMATO_GN',
	STOP_TIMER_TOMATO_GN = 'STOP_TIMER_TOMATO_GN',
	UPDATE_TIMER_PEPPER_GN = 'UPDATE_TIMER_PEPPER_GN',
	START_FINISH_TIMER_PEPPER_GN = 'START_FINISH_TIMER_PEPPER_GN',
	STOP_TIMER_PEPPER_GN = 'STOP_TIMER_PEPPER_GN',
	UPDATE_TIMER_STRAWBERRY_GN = 'UPDATE_TIMER_STRAWBERRY_GN',
	START_FINISH_TIMER_STRAWBERRY_GN = 'START_FINISH_TIMER_STRAWBERRY_GN',
	STOP_TIMER_STRAWBERRY_GN = 'STOP_TIMER_STRAWBERRY_GN',

	PLAY_BACK_MUSIC_GAME_GN = 'PLAY_BACK_MUSIC_GAME_GN',
	STOP_BACK_MUSIC_GAME_GN = 'STOP_BACK_MUSIC_GAME_GN',

	INCREASE_PLAYER_MISTAKES_GN = 'INCREASE_PLAYER_MISTAKES_GN',
	SHOW_FIRST_MISTAKE_GN = 'SHOW_FIRST_MISTAKE_GN',
	HIDE_FIRST_MISTAKE_GN = 'HIDE_FIRST_MISTAKE_GN',
	SHOW_SECOND_MISTAKE_GN = 'SHOW_SECOND_MISTAKE_GN',
	HIDE_SECOND_MISTAKE_GN = 'HIDE_SECOND_MISTAKE_GN',

	START_TOMATO_LEVEL = 'START_TOMATO_LEVEL',
	FINISH_TOMATO_LEVEL = 'FINISH_TOMATO_LEVEL',
	SHOW_TOMATO_SPROUT = 'SHOW_TOMATO_SPROUT',
	HIDE_TOMATO_SPROUT = 'HIDE_TOMATO_SPROUT',
	SHOW_TOMATO_COLOR = 'SHOW_TOMATO_COLOR',
	HIDE_TOMATO_COLOR = 'HIDE_TOMATO_COLOR',
	SHOW_TOMATO_MODIFIED = 'SHOW_TOMATO_MODIFIED',
	HIDE_TOMATO_MODIFIED = 'HIDE_TOMATO_MODIFIED',

	START_PEPPER_LEVEL = 'START_PEPPER_LEVEL',
	FINISH_PEPPER_LEVEL = 'FINISH_PEPPER_LEVEL',
	SHOW_PEPPER_SPROUT = 'SHOW_PEPPER_SPROUT',
	HIDE_PEPPER_SPROUT = 'HIDE_PEPPER_SPROUT',
	SHOW_PEPPER_COLOR = 'SHOW_PEPPER_COLOR',
	HIDE_PEPPER_COLOR = 'HIDE_PEPPER_COLOR',
	SHOW_PEPPER_MODIFIED = 'SHOW_PEPPER_MODIFIED',
	HIDE_PEPPER_MODIFIED = 'HIDE_PEPPER_MODIFIED',

	START_STRAWBERRY_LEVEL = 'START_STRAWBERRY_LEVEL',
	FINISH_STRAWBERRY_LEVEL = 'FINISH_STRAWBERRY_LEVEL',
	SHOW_STRAWBERRY_SPROUT = 'SHOW_STRAWBERRY_SPROUT',
	HIDE_STRAWBERRY_SPROUT = 'HIDE_STRAWBERRY_SPROUT',
	SHOW_STRAWBERRY_COLOR = 'SHOW_STRAWBERRY_COLOR',
	HIDE_STRAWBERRY_COLOR = 'HIDE_STRAWBERRY_COLOR',
	SHOW_STRAWBERRY_MODIFIED = 'SHOW_STRAWBERRY_MODIFIED',
	HIDE_STRAWBERRY_MODIFIED = 'HIDE_STRAWBERRY_MODIFIED',

	COMPLETE_GENETIC_GAME = 'COMPLETE_GENETIC_GAME',
	NOT_COMPLETE_GENETIC_GAME = 'NOT_COMPLETE_GENETIC_GAME'
}

const audioVictory = new Audio(AUDIO_CONFIG.AUDIO_VICTORY)

let timerTomato: any = null
let timerPepper: any = null
let timerStrawberry: any = null

export const mutations: MutationTree<IGeneticGameState> = {
	[EN_GeneticGameMutation.RESTART_GAME_GN](state) {
		state.isInfoLinkBlockVisible = true
		state.isRulesBlockVisible = false
		state.isVictoryBlockVisible = false
		state.isLossBlockVisible = false
		state.isBonusBlockVisible = false
		state.isBonusBlockPayedVisible = false
		state.isStartGame = false
		state.points = 0

		state.timerTomato = 9
		state.timerPepper = 9
		state.timerStrawberry = 9

		state.playerMistakes = 0
		state.isFirstMistake = false
		state.isSecondMistake = false

		state.tomatoFlasksList = generatorFlasksList(nameFlasks)
		state.tomatoFlasksDropZone = generatorFlasksDropZone()
		state.isTomatoLevel = true
		state.isTomatoSprout = false
		state.isTomatoColor = false
		state.isTomatoModified = false

		state.pepperFlasksList = generatorFlasksList(nameFlasks)
		state.pepperFlasksDropZone = generatorFlasksDropZone()
		state.isPepperLevel = false
		state.isPepperSprout = false
		state.isPepperColor = false
		state.isPepperModified = false

		state.strawberryFlasksList = generatorFlasksList(nameFlasks)
		state.strawberryFlasksDropZone = generatorFlasksDropZone()
		state.isStrawberryLevel = false
		state.isStrawberrySprout = false
		state.isStrawberryColor = false
		state.isStrawberryModified = false
	},
	[EN_GeneticGameMutation.START_NEW_GAME_GN](state) {
		state.isVictoryBlockVisible = false
		state.isLossBlockVisible = false
		state.isBonusBlockVisible = false
		state.isBonusBlockPayedVisible = false
		state.isStartGame = false
		state.points = 0

		state.timerTomato = 9
		state.timerPepper = 9
		state.timerStrawberry = 9

		state.playerMistakes = 0
		state.isFirstMistake = false
		state.isSecondMistake = false

		state.tomatoFlasksList = generatorFlasksList(nameFlasks)
		state.tomatoFlasksDropZone = generatorFlasksDropZone()
		state.isTomatoLevel = true
		state.isTomatoSprout = false
		state.isTomatoColor = false
		state.isTomatoModified = false

		state.pepperFlasksList = generatorFlasksList(nameFlasks)
		state.pepperFlasksDropZone = generatorFlasksDropZone()
		state.isPepperLevel = false
		state.isPepperSprout = false
		state.isPepperColor = false
		state.isPepperModified = false

		state.strawberryFlasksList = generatorFlasksList(nameFlasks)
		state.strawberryFlasksDropZone = generatorFlasksDropZone()
		state.isStrawberryLevel = false
		state.isStrawberrySprout = false
		state.isStrawberryColor = false
		state.isStrawberryModified = false
	},

	[EN_GeneticGameMutation.SHOW_INFO_LINK_BLOCK_GN](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isInfoLinkBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_INFO_LINK_BLOCK_GN](state) {
		state.isInfoLinkBlockVisible = false
	},
	[EN_GeneticGameMutation.SHOW_RULES_BLOCK_GN](state) {
		const audio = new Audio(AUDIO_CONFIG.AUDIO_NEW_MISSION)
		audio.autoplay = true
		audio.volume = 1

		state.isRulesBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_RULES_BLOCK_GN](state) {
		state.isRulesBlockVisible = false
	},
	[EN_GeneticGameMutation.SHOW_VICTORY_BLOCK_GN](state) {
		audioVictory.autoplay = true
		audioVictory.volume = 1

		state.isVictoryBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_VICTORY_BLOCK_GN](state) {
		audioVictory.autoplay = false

		state.isVictoryBlockVisible = false
	},
	[EN_GeneticGameMutation.SHOW_LOSS_BLOCK_GN](state) {
		state.isLossBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_LOSS_BLOCK_GN](state) {
		state.isLossBlockVisible = false
	},
	[EN_GeneticGameMutation.SHOW_BONUS_BLOCK_GN](state) {
		state.isBonusBlockVisible = true
	},
	[EN_GeneticGameMutation.HIDE_BONUS_BLOCK_GN](state) {
		state.isBonusBlockVisible = false
	},
	[EN_GeneticGameMutation.SHOW_BONUS_BLOCK_PAYED_GN](state) {
		state.points += 100
		state.isBonusBlockPayedVisible = true
	},
	[EN_GeneticGameMutation.HIDE_BONUS_BLOCK_PAYED_GN](state) {
		state.isBonusBlockPayedVisible = false
	},
	[EN_GeneticGameMutation.START_GAME_GN](state) {
		state.isStartGame = true
	},
	[EN_GeneticGameMutation.FINISH_GAME_GN](state) {
		state.isStartGame = false
	},
	[EN_GeneticGameMutation.PLUS_POINTS_GN](state) {
		state.points += 15
	},
	[EN_GeneticGameMutation.PLUS_POINTS_LINK_GN](state) {
		if (state.points === 0) {
			state.points += 5
		}
	},
	[EN_GeneticGameMutation.MINUS_POINTS_GN](state) {
		if (state.points === 0) {
			state.points = 0
		} else {
			state.points -= 5
		}
	},

	[EN_GeneticGameMutation.UPDATE_TIMER_TOMATO_GN](state) {
		state.timerTomato = 9
	},
	[EN_GeneticGameMutation.START_FINISH_TIMER_TOMATO_GN](state) {
		if (
			state.timerTomato > 0 &&
			!state.isLossBlockVisible &&
			state.isTomatoLevel
		) {
			if (timerTomato) {
				clearInterval(timerTomato)
			}

			timerTomato = setInterval(() => {
				state.timerTomato -= 1

				if (state.timerTomato < 0) {
					clearInterval(timerTomato)
					state.timerTomato = 0
					state.playerMistakes = 2
				}
			}, 1000)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timerTomato)
		}

		if (state.isVictoryBlockVisible) {
			clearInterval(timerPepper)
		}

		if (state.isBonusBlockVisible) {
			clearInterval(timerTomato)
		}

		if (state.isBonusBlockPayedVisible) {
			clearInterval(timerTomato)
		}

		if (state.timerTomato === 0 || !state.isTomatoLevel) {
			clearInterval(timerTomato)
		}

		if (state.isFirstMistake || state.isSecondMistake) {
			clearInterval(timerTomato)
		}
	},
	[EN_GeneticGameMutation.STOP_TIMER_TOMATO_GN](state) {
		if (timerTomato) {
			clearInterval(timerTomato)
		}
	},
	[EN_GeneticGameMutation.UPDATE_TIMER_PEPPER_GN](state) {
		state.timerPepper = 9
	},
	[EN_GeneticGameMutation.START_FINISH_TIMER_PEPPER_GN](state) {
		if (
			state.timerPepper > 0 &&
			!state.isLossBlockVisible &&
			state.isPepperLevel
		) {
			if (timerPepper) {
				clearInterval(timerPepper)
			}

			timerPepper = setInterval(() => {
				state.timerPepper -= 1

				if (state.timerPepper < 0) {
					clearInterval(timerPepper)
					state.timerPepper = 0
					state.playerMistakes = 2
				}
			}, 1000)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timerPepper)
		}

		if (state.isVictoryBlockVisible) {
			clearInterval(timerPepper)
		}

		if (state.isBonusBlockVisible) {
			clearInterval(timerPepper)
		}

		if (state.isBonusBlockPayedVisible) {
			clearInterval(timerPepper)
		}

		if (state.timerPepper === 0 || !state.isPepperLevel) {
			clearInterval(timerPepper)
		}

		if (state.isFirstMistake || state.isSecondMistake) {
			clearInterval(timerPepper)
		}
	},
	[EN_GeneticGameMutation.STOP_TIMER_PEPPER_GN](state) {
		if (timerPepper) {
			clearInterval(timerPepper)
		}
	},
	[EN_GeneticGameMutation.UPDATE_TIMER_STRAWBERRY_GN](state) {
		state.timerStrawberry = 9
	},
	[EN_GeneticGameMutation.START_FINISH_TIMER_STRAWBERRY_GN](state) {
		if (
			state.timerStrawberry > 0 &&
			!state.isLossBlockVisible &&
			state.isStrawberryLevel
		) {
			if (timerStrawberry) {
				clearInterval(timerStrawberry)
			}

			timerStrawberry = setInterval(() => {
				state.timerStrawberry -= 1

				if (state.timerStrawberry < 0) {
					clearInterval(timerStrawberry)
					state.timerStrawberry = 0
					state.playerMistakes = 2
				}
			}, 1000)
		}

		if (state.isLossBlockVisible) {
			clearInterval(timerStrawberry)
		}

		if (state.isVictoryBlockVisible) {
			clearInterval(timerStrawberry)
		}

		if (state.isBonusBlockVisible) {
			clearInterval(timerStrawberry)
		}

		if (state.isBonusBlockPayedVisible) {
			clearInterval(timerStrawberry)
		}

		if (state.timerStrawberry === 0 || !state.isStrawberryLevel) {
			clearInterval(timerStrawberry)
		}

		if (state.isFirstMistake || state.isSecondMistake) {
			clearInterval(timerStrawberry)
		}
	},
	[EN_GeneticGameMutation.STOP_TIMER_STRAWBERRY_GN](state) {
		if (timerStrawberry) {
			clearInterval(timerStrawberry)
		}
	},

	[EN_GeneticGameMutation.INCREASE_PLAYER_MISTAKES_GN](state) {
		state.playerMistakes += 1
	},
	[EN_GeneticGameMutation.SHOW_FIRST_MISTAKE_GN](state) {
		if (state.playerMistakes === 1) {
			state.isFirstMistake = true
		}
	},
	[EN_GeneticGameMutation.HIDE_FIRST_MISTAKE_GN](state) {
		state.isFirstMistake = false
	},
	[EN_GeneticGameMutation.SHOW_SECOND_MISTAKE_GN](state) {
		if (state.playerMistakes === 2 || state.playerMistakes === 3) {
			state.isSecondMistake = true
		}
	},
	[EN_GeneticGameMutation.HIDE_SECOND_MISTAKE_GN](state) {
		state.isSecondMistake = false
	},

	[EN_GeneticGameMutation.START_TOMATO_LEVEL](state) {
		state.isTomatoLevel = true
	},
	[EN_GeneticGameMutation.FINISH_TOMATO_LEVEL](state) {
		state.isTomatoLevel = false
	},
	[EN_GeneticGameMutation.SHOW_TOMATO_SPROUT](state) {
		state.isTomatoSprout = true
	},
	[EN_GeneticGameMutation.HIDE_TOMATO_SPROUT](state) {
		state.isTomatoSprout = false
	},
	[EN_GeneticGameMutation.SHOW_TOMATO_COLOR](state) {
		state.isTomatoColor = true
	},
	[EN_GeneticGameMutation.HIDE_TOMATO_COLOR](state) {
		state.isTomatoColor = false
	},
	[EN_GeneticGameMutation.SHOW_TOMATO_MODIFIED](state) {
		state.isTomatoModified = true
	},
	[EN_GeneticGameMutation.HIDE_TOMATO_MODIFIED](state) {
		state.isTomatoModified = false
	},

	[EN_GeneticGameMutation.START_PEPPER_LEVEL](state) {
		state.isPepperLevel = true
	},
	[EN_GeneticGameMutation.FINISH_PEPPER_LEVEL](state) {
		state.isPepperLevel = false
	},
	[EN_GeneticGameMutation.SHOW_PEPPER_SPROUT](state) {
		state.isPepperSprout = true
	},
	[EN_GeneticGameMutation.HIDE_PEPPER_SPROUT](state) {
		state.isPepperSprout = false
	},
	[EN_GeneticGameMutation.SHOW_PEPPER_COLOR](state) {
		state.isPepperColor = true
	},
	[EN_GeneticGameMutation.HIDE_PEPPER_COLOR](state) {
		state.isPepperColor = false
	},
	[EN_GeneticGameMutation.SHOW_PEPPER_MODIFIED](state) {
		state.isPepperModified = true
	},
	[EN_GeneticGameMutation.HIDE_PEPPER_MODIFIED](state) {
		state.isPepperModified = false
	},

	[EN_GeneticGameMutation.START_STRAWBERRY_LEVEL](state) {
		state.isStrawberryLevel = true
	},
	[EN_GeneticGameMutation.FINISH_STRAWBERRY_LEVEL](state) {
		state.isStrawberryLevel = false
	},
	[EN_GeneticGameMutation.SHOW_STRAWBERRY_SPROUT](state) {
		state.isStrawberrySprout = true
	},
	[EN_GeneticGameMutation.HIDE_STRAWBERRY_SPROUT](state) {
		state.isStrawberrySprout = false
	},
	[EN_GeneticGameMutation.SHOW_STRAWBERRY_COLOR](state) {
		state.isStrawberryColor = true
	},
	[EN_GeneticGameMutation.HIDE_STRAWBERRY_COLOR](state) {
		state.isStrawberryColor = false
	},
	[EN_GeneticGameMutation.SHOW_STRAWBERRY_MODIFIED](state) {
		state.isStrawberryModified = true
	},
	[EN_GeneticGameMutation.HIDE_STRAWBERRY_MODIFIED](state) {
		state.isStrawberryModified = false
	},

	[EN_GeneticGameMutation.COMPLETE_GENETIC_GAME](state) {
		state.isGeneticGameCompleted = true
	},
	[EN_GeneticGameMutation.NOT_COMPLETE_GENETIC_GAME](state) {
		state.isGeneticGameCompleted = false
	}
}
