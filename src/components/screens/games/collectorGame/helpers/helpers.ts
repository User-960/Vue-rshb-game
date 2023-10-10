const cells = [
	{
		id: 0,
		isTomatoRed: false,
		isTomatoGreen: false,
		isTomatoDarkGreen: false
	}
]

export const generatorCells = () => {
	let newCells = []
	for (let i = 0; i < 130; i++) {
		newCells.push({
			id: i,
			isTomatoRed: false,
			isTomatoGreen: true,
			isTomatoDarkGreen: false
		})
	}

	return newCells
}
