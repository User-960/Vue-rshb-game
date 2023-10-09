export interface IFlask {
	id: number
	name: string
}

export interface IGreenhouseGameState {
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

	isTomatoSoilMoistureCheck: boolean
	isTomatoSoilMoistureAction: boolean
	isTomatoAirHumidityCheck: boolean
	isTomatoAirTemperatureCheck: boolean
	tomatoSoilMoistureNum: string
	healthTomatoPercentage: number
	isTomatoLevel: boolean

	isPepperSoilMoistureCheck: boolean
	isPepperAirHumidityCheck: boolean
	isPepperAirHumidityAction: boolean
	isPepperAirTemperatureCheck: boolean
	pepperAirHumidityNum: string
	healthPepperPercentage: number
	isPepperLevel: boolean

	isStrawberrySoilMoistureCheck: boolean
	isStrawberryAirHumidityCheck: boolean
	isStrawberryAirHumidityAction: boolean
	isStrawberryAirTemperatureCheck: boolean
	strawberryAirHumidityNum: string
	healthStrawberryPercentage: number
	isStrawberryLevel: boolean
}
