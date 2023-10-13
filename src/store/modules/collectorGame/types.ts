export interface ICollectorGameState {
	isInfoLinkBlockVisible: boolean
	isRulesBlockVisible: boolean
	isVictoryBlockVisible: boolean
	isLossBlockVisible: boolean
	isStartGame: boolean
	points: number

	timerTomato: number
	pointsTomato: number
	isOpenGameFieldTomato: boolean
	isTomatoLevel: boolean
	isGenerateTomatoGreen: boolean
	isGenerateTomatoRed: boolean
	isGenerateTomatoDarkGreen: boolean
	isGenerateCollectorTomato: boolean
	isVictoryTomatoBlockVisible: boolean
	isLossTomatoBlockVisible: boolean
	isTomatoLevelCompleted: boolean

	timerPepper: number
	pointsPepper: number
	isOpenGameFieldPepper: boolean
	isPepperLevel: boolean
	isGeneratePepperGreen: boolean
	isGeneratePepperRed: boolean
	isGeneratePepperDarkGreen: boolean
	isGenerateCollectorPepper: boolean
	isVictoryPepperBlockVisible: boolean
	isLossPepperBlockVisible: boolean
	isPepperLevelCompleted: boolean

	timerStrawberry: number
	pointsStrawberry: number
	isOpenGameFieldStrawberry: boolean
	isStrawberryLevel: boolean
	isGenerateStrawberryGreen: boolean
	isGenerateStrawberryRed: boolean
	isGenerateStrawberryDarkGreen: boolean
	isGenerateCollectorStrawberry: boolean
	isVictoryStrawberryBlockVisible: boolean
	isLossStrawberryBlockVisible: boolean
	isStrawberryLevelCompleted: boolean
}
