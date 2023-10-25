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
	isChooseTomatoLevelBroken: boolean
	tomatoLevelMistakes: number

	pepperLevel: number
	isPepperMoistureLineCritical: boolean
	isPepperSystemBroken: boolean
	isPepperHealthLineCritical: boolean
	isPepperHealthLineEmpty: boolean
	isChoosePepperLevelBroken: boolean
	pepperLevelMistakes: number

	strawberryLevel: number
	isStrawberryMoistureLineCritical: boolean
	isStrawberryTemperatureLineCritical: boolean
	isStrawberrySystemBroken: boolean
	isStrawberryHealthLineCritical: boolean
	isStrawberryHealthLineEmpty: boolean
	isChooseStrawberryLevelBroken: boolean
	strawberryLevelMistakes: number

	points: number
	timer: number

	isChosenBook: boolean
	isChosenNumPad: boolean
	isChosenTomatoLevel: boolean
	isChosenPepperLevel: boolean
	isChosenStrawberryLevel: boolean

	isPestLineCritical: boolean

	isAiGameCompleted: boolean
}
