export interface IAiGameState {
	isInfoLinkBlockVisible: boolean
	isRulesBlockVisible: boolean
	isVictoryBlockVisible: boolean
	isLossBlockVisible: boolean
	isStartGame: boolean
	gameLoop: number

	tomatoLevel: number
	isTomatoMoistureLineCritical: boolean
	isTomatoSystemBroken: boolean
	isTomatoHealthLineCritical: boolean
	isTomatoHealthLineEmpty: boolean
	tomatoLevelMistakes: number

	pepperLevel: number

	strawberryLevel: number

	points: number
	timer: number

	isChosenBook: boolean
	isChosenNumPad: boolean
	isChosenTomatoLevel: boolean
	isChosenPepperLevel: boolean
	isChosenStrawberryLevel: boolean

	isPestLineCritical: boolean
}
