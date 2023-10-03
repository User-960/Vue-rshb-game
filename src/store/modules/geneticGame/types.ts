export interface IGeneticGameState {
	isInfoLinkBlockVisible: boolean
	isRulesBlockVisible: boolean
	isVictoryBlockVisible: boolean
	isLossBlockVisible: boolean
	isStartGame: boolean
	gameLoop: number
	tomatoLevel: number
	pepperLevel: number
	strawberryLevel: number
	points: number
	isPlayBackMusic: boolean
	timer: number

	isTomatoLevel: boolean
	isTomatoSprout: boolean
	isTomatoColor: boolean
	isTomatoModified: boolean

	isPepperLevel: boolean
	isPepperSprout: boolean
	isPepperColor: boolean
	isPepperModified: boolean

	isStrawberryLevel: boolean
	isStrawberrySprout: boolean
	isStrawberryColor: boolean
	isStrawberryModified: boolean
}
