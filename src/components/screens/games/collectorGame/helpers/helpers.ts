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
			isTomatoDarkGreen: false,
			isCollector: false
		})
	}

	return newCells
}

interface ICell {
	id: number
	isTomatoRed: boolean
	isTomatoGreen: boolean
	isTomatoDarkGreen: boolean
	isCollector: boolean
}

const fifthColumn: number[] = [5, 18, 31, 44, 57, 70, 83, 96, 109, 122]
const lastRow: number[] = [
	118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130
]

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

export const generatorCollector = (
	cells: ICell[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICell[] | null = null
	let currentCollector: ICell[] | null = null

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

export const generatorCollectorMoveLeft = (
	cells: ICell[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICell[] | null = null
	let currentCollector: ICell[] | null = null

	if (isMoving) {
		currentCollector = cells.filter(cell => cell.isCollector === true)
		currentCollector[0].isCollector = false

		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])

		if (testCollector[0].id === rowCellId) {
			testCollector[0].isCollector = true
		}
	}
}

export const generatorCollectorMoveRight = (
	cells: ICell[],
	row: number[],
	rowCellId: number,
	rowCellIndex: number,
	isMoving: boolean = false
) => {
	let testCollector: ICell[] | null = null
	let currentCollector: ICell[] | null = null

	if (isMoving) {
		currentCollector = cells.filter(cell => cell.isCollector === true)
		currentCollector[0].isCollector = false

		testCollector = cells.filter(cell => cell.id === row[rowCellIndex])

		if (testCollector[0].id === rowCellId) {
			testCollector[0].isCollector = true
		}
	}
}
