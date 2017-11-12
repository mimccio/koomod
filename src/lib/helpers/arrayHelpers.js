// @flow
import { isSameName } from './stringHelpers'

export const sameNameIsInList = (testName: string, list: Array<any>): boolean =>
  Boolean(list.find((item: { name: string }) => isSameName(testName, item.name)))

export const byNameAlphabetical = (a: { name: string }, b: { name: string }) => {
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0
}
