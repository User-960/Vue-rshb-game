export const getRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min)
}

export const getRandomNumberProblem = (
	min: number,
	max: number,
	previous: number
) => {
	let newNumber: number
	newNumber = Math.floor(Math.random() * (max - min) + min)

	if (newNumber === previous) {
		newNumber = getRandomNumberProblem(min, max, previous)
	}

	return newNumber
}
