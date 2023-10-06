export interface IPestControlGameState {
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

	isChosenTomatoLevel: boolean
	isChosenPepperLevel: boolean
	isChosenStrawberryLevel: boolean

	isTomatoLineCritical: boolean
	isPepperLineCritical: boolean
	isStrawberryLineCritical: boolean
}
