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

	isOpenGameFieldStrawberry: boolean
}
