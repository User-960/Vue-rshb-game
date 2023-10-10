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
	let randomNum = 4
	for (let i = 0; i < 130; i++) {
		newCells.push({
			id: i,
			isTomatoRed: false,
			isTomatoGreen: false,
			isTomatoDarkGreen: false
		})
	}

	return newCells
}

interface ICell {
	id: number
	isTomatoRed: boolean
	isTomatoGreen: boolean
	isTomatoDarkGreen: boolean
}

const fifthColumn: number[] = [5, 18, 31, 44, 57, 70, 83, 96, 109, 122]

// export const generatorTomatoGreen = (cells: ICell[], column: number[]) => {
// 	let testTomato: ICell[]
// 	testTomato = cells.filter(cell => cell.id === column[0])

// 	if (testTomato[0].id === 5) {
// 		testTomato[0].isTomatoGreen = true
// 		setTimeout(() => {
// 			testTomato[0].isTomatoGreen = false
// 			testTomato = cells.filter(cell => cell.id === column[1])

// 			if (testTomato[0].id === 18) {
// 				testTomato[0].isTomatoGreen = true

// 				setTimeout(() => {
// 					testTomato[0].isTomatoGreen = false
// 					testTomato = cells.filter(cell => cell.id === column[2])

// 					if (testTomato[0].id === 31) {
// 						testTomato[0].isTomatoGreen = true

// 						setTimeout(() => {
// 							testTomato[0].isTomatoGreen = false
// 						}, 1000)
// 					}
// 				}, 1000)
// 			}
// 		}, 1000)
// 	}
// }

export const generatorTomatoGreen = (
	cells: ICell[],
	column: number[],
	columnCellId: number = 5,
	columnCellIndex: number = 0
) => {
	let testTomato: ICell[]

	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])

	if (testTomato[0].id === column[column.length - 1]) {
		return false
	}

	if (testTomato[0].id === columnCellId) {
		testTomato[0].isTomatoGreen = true

		setTimeout(() => {
			testTomato[0].isTomatoGreen = false

			columnCellId += 13
			columnCellIndex += 1
			generatorTomatoGreen(cells, column, columnCellId, columnCellIndex)
		}, 700)
	}
}

export const generatorTomatoRed = (
	cells: ICell[],
	column: number[],
	columnCellId: number = 2,
	columnCellIndex: number = 0
) => {
	let testTomato: ICell[]

	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])

	if (testTomato[0].id === column[column.length - 1]) {
		return false
	}

	if (testTomato[0].id === columnCellId) {
		testTomato[0].isTomatoRed = true

		setTimeout(() => {
			testTomato[0].isTomatoRed = false

			columnCellId += 13
			columnCellIndex += 1
			generatorTomatoRed(cells, column, columnCellId, columnCellIndex)
		}, 700)
	}
}

export const generatorTomatoDarkGreen = (
	cells: ICell[],
	column: number[],
	columnCellId: number,
	columnCellIndex: number
) => {
	let testTomato: ICell[]

	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])

	if (testTomato[0].id === column[column.length - 1]) {
		return false
	}

	if (testTomato[0].id === columnCellId) {
		testTomato[0].isTomatoDarkGreen = true

		setTimeout(() => {
			testTomato[0].isTomatoDarkGreen = false

			columnCellId += 13
			columnCellIndex += 1
			generatorTomatoDarkGreen(cells, column, columnCellId, columnCellIndex)
		}, 700)
	}
}
