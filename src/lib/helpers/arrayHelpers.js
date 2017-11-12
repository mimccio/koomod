// @flow
import { isSameName } from './stringHelpers'

export const findById = (id: ?string, list: Object[]) => list.find((item: { id: string }) => item.id === id)

export const sameNameIsInList = (testName: string, list: Array<any>): boolean =>
  Boolean(list.find((item: { name: string }) => isSameName(testName, item.name)))
