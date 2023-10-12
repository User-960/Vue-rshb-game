import { ICell } from '../../../components/screens/games/collectorGame/helpers/helpers'

export interface ICollectorGameState {
	isInfoLinkBlockVisible: boolean
	isRulesBlockVisible: boolean
	isVictoryBlockVisible: boolean
	isLossBlockVisible: boolean
	isStartGame: boolean
	points: number

	timerTomato: number
	isOpenGameFieldTomato: boolean
	isTomatoLevel: boolean
	isGenerateTomatoGreen: boolean
	isGenerateTomatoRed: boolean
	isGenerateTomatoDarkGreen: boolean
	isGenerateCollector: boolean
	isVictoryTomatoBlockVisible: boolean
	isTomatoLevelCompleted: boolean

	isOpenGameFieldPepper: boolean

	isOpenGameFieldStrawberry: boolean
}
