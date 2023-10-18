export const generateRandomString = (name: string, length: number) => {
	let resultOne: string = ''
	let resultTwo: string = ''
	let resultThree: string = ''

	const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	const numbers: string = '0123456789'
	const symbols: string = '!@#$%&*'

	const lettersLength = letters.length
	const numbersLength = numbers.length
	const symbolsLength = symbols.length

	for (let i = 0; i < length; i++) {
		const randomLetter = letters[Math.floor(Math.random() * lettersLength)]
		const randomNumber = numbers[Math.floor(Math.random() * numbersLength)]
		const randomSymbol = symbols[Math.floor(Math.random() * symbolsLength)]

		resultOne += randomLetter
		resultTwo += randomNumber
		resultThree += randomSymbol
	}

	return (
		name +
		'_' +
		resultOne +
		',' +
		name +
		'_' +
		resultTwo +
		',' +
		name +
		'_' +
		resultThree
	)
}
