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

	isBugActive: boolean
	isLocustsActive: boolean
	isCaterpillarActive: boolean

	isDroneActive: boolean
	isDroneMovedTomato: boolean
	isDroneMovedPepper: boolean
	isDroneMovedStrawberry: boolean

	isPestControlGameCompleted: boolean
}
