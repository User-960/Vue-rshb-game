export interface IFlask {
	id: number
	name: string
}

export interface IGeneticGameState {
	isInfoLinkBlockVisible: boolean
	isRulesBlockVisible: boolean
	isVictoryBlockVisible: boolean
	isLossBlockVisible: boolean
	isStartGame: boolean
	points: number

	timerTomato: number
	timerPepper: number
	timerStrawberry: number
	playerMistakes: number
	isFirstMistake: boolean
	isSecondMistake: boolean

	tomatoFlasksList: IFlask[]
	tomatoFlasksDropZone: IFlask[]
	isTomatoLevel: boolean
	isTomatoSprout: boolean
	isTomatoColor: boolean
	isTomatoModified: boolean

	pepperFlasksList: IFlask[]
	pepperFlasksDropZone: IFlask[]
	isPepperLevel: boolean
	isPepperSprout: boolean
	isPepperColor: boolean
	isPepperModified: boolean

	strawberryFlasksList: IFlask[]
	strawberryFlasksDropZone: IFlask[]
	isStrawberryLevel: boolean
	isStrawberrySprout: boolean
	isStrawberryColor: boolean
	isStrawberryModified: boolean
}
