export interface IFlask {
	id: number
	name: string
}

export interface IGreenhouseGameState {
	isInfoLinkBlockVisible: boolean
	isRulesBlockVisible: boolean
	isVictoryBlockVisible: boolean
	isLossBlockVisible: boolean
	isBonusBlockVisible: boolean
	isBonusBlockPayedVisible: boolean
	isStartGame: boolean
	points: number

	timerTomato: number
	timerPepper: number
	timerStrawberry: number
	playerMistakes: number
	isFirstMistake: boolean
	isSecondMistake: boolean

	isTomatoSoilMoistureCheck: boolean
	isTomatoSoilMoistureAction: boolean
	isTomatoAirHumidityCheck: boolean
	isTomatoAirTemperatureCheck: boolean
	tomatoSoilMoistureNum: number
	healthTomatoPercentage: number
	isTomatoLevel: boolean
	playerMistakesTomato: number
	isFirstMistakeTomato: boolean
	isSecondMistakeTomato: boolean

	isPepperSoilMoistureCheck: boolean
	isPepperAirHumidityCheck: boolean
	isPepperAirHumidityAction: boolean
	isPepperAirTemperatureCheck: boolean
	pepperAirHumidityNum: number
	healthPepperPercentage: number
	isPepperLevel: boolean
	playerMistakesPepper: number
	isFirstMistakePepper: boolean
	isSecondMistakePepper: boolean

	isStrawberrySoilMoistureCheck: boolean
	isStrawberryAirHumidityCheck: boolean
	isStrawberryAirHumidityAction: boolean
	isStrawberryAirTemperatureCheck: boolean
	strawberryAirHumidityNum: number
	healthStrawberryPercentage: number
	isStrawberryLevel: boolean
	playerMistakesStrawberry: number
	isFirstMistakeStrawberry: boolean
	isSecondMistakeStrawberry: boolean

	isGreenhouseGameCompleted: boolean
}
