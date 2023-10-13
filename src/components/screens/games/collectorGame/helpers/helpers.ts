export const firstColumn: number[] = [1, 14, 27, 40, 53, 66, 79, 92, 105, 118]
export const secondColumn: number[] = [2, 15, 28, 41, 54, 67, 80, 93, 106, 119]
export const thirdColumn: number[] = [3, 16, 29, 42, 55, 68, 81, 94, 107, 120]
export const fourthColumn: number[] = [4, 17, 30, 43, 56, 69, 82, 95, 108, 121]
export const fifthColumn: number[] = [5, 18, 31, 44, 57, 70, 83, 96, 109, 122]
export const sixthColumn: number[] = [6, 19, 32, 45, 58, 71, 84, 97, 110, 123]
export const seventhColumn: number[] = [7, 20, 33, 46, 59, 72, 85, 98, 111, 124]
export const eighthColumn: number[] = [8, 21, 34, 47, 60, 73, 86, 99, 112, 125]
export const ninthColumn: number[] = [9, 22, 35, 48, 61, 74, 87, 100, 113, 126]
export const tenthColumn: number[] = [10, 23, 36, 49, 62, 75, 88, 101, 114, 127]
export const eleventhColumn: number[] = [
	11, 24, 37, 50, 63, 76, 89, 102, 115, 128
]
export const twelfthColumn: number[] = [
	12, 25, 38, 51, 64, 77, 90, 103, 116, 129
]

export const allColumns: number[][] = [
	[],
	firstColumn,
	secondColumn,
	thirdColumn,
	fourthColumn,
	fifthColumn,
	sixthColumn,
	seventhColumn,
	eighthColumn,
	ninthColumn,
	tenthColumn,
	eleventhColumn,
	twelfthColumn
]

export const lastRow: number[] = [
	117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129
]

export interface ICellTomato {
	id: number
	isTomatoRed: boolean
	isTomatoGreen: boolean
	isTomatoDarkGreen: boolean
	isCollector: boolean
}

export interface ICellPepper {
	id: number
	isPepperRed: boolean
	isPepperGreen: boolean
	isPepperDarkGreen: boolean
	isCollector: boolean
}

export const getRandomNumberGenerator = (
	min: number,
	max: number,
	previous: number
) => {
	let newNumber: number
	newNumber = Math.floor(Math.random() * (max - min) + min)

	if (newNumber === previous) {
		newNumber = getRandomNumberGenerator(min, max, previous)
	}

	return newNumber
}

export const generatorCellsTomato = (): ICellTomato[] => {
	let newCells = []
	for (let i = 0; i < 130; i++) {
		newCells.push({
			id: i,
			isTomatoRed: false,
			isTomatoGreen: false,
			isTomatoDarkGreen: false,
			isCollector: false
		})
	}

	return newCells
}

export const generatorCellsPepper = (): ICellPepper[] => {
	let newCells = []
	for (let i = 0; i < 130; i++) {
		newCells.push({
			id: i,
			isPepperRed: false,
			isPepperGreen: false,
			isPepperDarkGreen: false,
			isCollector: false
		})
	}

	return newCells
}

// export const generatorTomatoGreen = (
// 	cells: ICellTomato[],
// 	column: number[],
// 	columnCellId: number = 5,
// 	columnCellIndex: number = 0
// ) => {
// 	let testTomato: ICellTomato[]

// 	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])

// 	if (testTomato[0].id === column[column.length - 1]) {
// 		return false
// 	}

// 	if (testTomato[0].id === columnCellId) {
// 		testTomato[0].isTomatoGreen = true

// 		setTimeout(() => {
// 			testTomato[0].isTomatoGreen = false

// 			columnCellId += 13
// 			columnCellIndex += 1
// 			generatorTomatoGreen(cells, column, columnCellId, columnCellIndex)
// 		}, 700)
// 	}
// }

// export const generatorTomatoRed = (
// 	cells: ICellTomato[],
// 	column: number[],
// 	columnCellId: number = 2,
// 	columnCellIndex: number = 0
// ) => {
// 	let testTomato: ICellTomato[]

// 	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])

// 	if (testTomato[0].id === column[column.length - 1]) {
// 		return false
// 	}

// 	if (testTomato[0].id === columnCellId) {
// 		testTomato[0].isTomatoRed = true

// 		setTimeout(() => {
// 			testTomato[0].isTomatoRed = false

// 			columnCellId += 13
// 			columnCellIndex += 1
// 			generatorTomatoRed(cells, column, columnCellId, columnCellIndex)
// 		}, 700)
// 	}
// }

// export const generatorTomatoDarkGreen = (
// 	cells: ICellTomato[],
// 	column: number[],
// 	columnCellId: number,
// 	columnCellIndex: number
// ) => {
// 	let testTomato: ICellTomato[]

// 	testTomato = cells.filter(cell => cell.id === column[columnCellIndex])

// 	if (testTomato[0].id === column[column.length - 1]) {
// 		return false
// 	}

// 	if (testTomato[0].id === columnCellId) {
// 		testTomato[0].isTomatoDarkGreen = true

// 		setTimeout(() => {
// 			testTomato[0].isTomatoDarkGreen = false

// 			columnCellId += 13
// 			columnCellIndex += 1
// 			generatorTomatoDarkGreen(cells, column, columnCellId, columnCellIndex)
// 		}, 700)
// 	}
// }

export const generatorCollectorTomato = (
	cells: ICellTomato[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICellTomato[] | null = null
	let currentCollector: ICellTomato[] | null = null

	if (!isMoving && rowCellId !== row[row.length - 1]) {
		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])
		if (testCollector[0].id === rowCellId && !isMoving) {
			testCollector[0].isCollector = true
		}
	}

	if (isMoving && rowCellId !== row[row.length - 1]) {
		currentCollector = cells.filter(cell => cell.isCollector === true)
		currentCollector[0].isCollector = false

		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])

		if (testCollector[0].id === rowCellId) {
			testCollector[0].isCollector = true
		}
	}
}

export const generatorCollectorMoveLeftTomato = (
	cells: ICellTomato[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICellTomato[] | null = null
	let currentCollector: ICellTomato[] | null = null

	if (isMoving) {
		currentCollector = cells.filter(cell => cell.isCollector === true)
		currentCollector[0].isCollector = false

		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])

		if (testCollector[0].id === rowCellId) {
			testCollector[0].isCollector = true
		}
	}
}

export const generatorCollectorMoveRightTomato = (
	cells: ICellTomato[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICellTomato[] | null = null
	let currentCollector: ICellTomato[] | null = null

	if (isMoving) {
		currentCollector = cells.filter(cell => cell.isCollector === true)
		currentCollector[0].isCollector = false

		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])

		if (testCollector[0].id === rowCellId) {
			testCollector[0].isCollector = true
		}
	}
}

export const generatorCollectorPepper = (
	cells: ICellPepper[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICellPepper[] | null = null
	let currentCollector: ICellPepper[] | null = null

	if (!isMoving && rowCellId !== row[row.length - 1]) {
		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])
		if (testCollector[0].id === rowCellId && !isMoving) {
			testCollector[0].isCollector = true
		}
	}

	if (isMoving && rowCellId !== row[row.length - 1]) {
		currentCollector = cells.filter(cell => cell.isCollector === true)
		currentCollector[0].isCollector = false

		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])

		if (testCollector[0].id === rowCellId) {
			testCollector[0].isCollector = true
		}
	}
}

export const generatorCollectorMoveLeftPepper = (
	cells: ICellPepper[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICellPepper[] | null = null
	let currentCollector: ICellPepper[] | null = null

	if (isMoving) {
		currentCollector = cells.filter(cell => cell.isCollector === true)
		currentCollector[0].isCollector = false

		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])

		if (testCollector[0].id === rowCellId) {
			testCollector[0].isCollector = true
		}
	}
}

export const generatorCollectorMoveRightPepper = (
	cells: ICellPepper[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICellPepper[] | null = null
	let currentCollector: ICellPepper[] | null = null

	if (isMoving) {
		currentCollector = cells.filter(cell => cell.isCollector === true)
		currentCollector[0].isCollector = false

		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])

		if (testCollector[0].id === rowCellId) {
			testCollector[0].isCollector = true
		}
	}
}
