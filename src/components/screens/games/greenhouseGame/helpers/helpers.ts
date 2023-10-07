import { IFlask } from '@/store/modules/geneticGame/types'

export const generatorFlasksList = (array: string[]): IFlask[] => {
	let newFlasks: IFlask[] = []
	for (let i = 0; i < array.length; i++) {
		newFlasks.push({ id: i, name: array[i] })
	}

	return newFlasks
}

export const generatorFlasksDropZone = (): IFlask[] => {
	let newFlasksDropZone: IFlask[] = []
	newFlasksDropZone.push({ id: 99, name: 'flask' })

	return newFlasksDropZone
}
