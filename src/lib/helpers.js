// @flow
import type { NatureType, NatureTypeWithPlural } from './types'

// Array helpers
export const findById = (id: ?string, list: Object[]) => list.find((item: { id: string }) => item.id === id)

export const isInListString = (value: string, list: string[]) => Boolean(list.find(val => val === value))

export const isInListObj = (value: string, list: Object[], key: string) =>
  Boolean(list.find((item: { [string]: string }) => item[key] === value))

export const isInList = (value: string, list: Array<any>, key?: string) => {
  if (key) return isInListObj(value, list, key)
  return isInListString(value, list)
}

// String helpers

export const hasSameName = (test: { name: string }, tested: { name: string }) => {
  if (test.name.toUpperCase() === tested.name.toUpperCase()) return true
  return false
}

export const handlePlural = (quantity?: number = 0) => quantity >= 2

export const handleIngredientNaturePlural = (nature: NatureType, quantity?: number): NatureTypeWithPlural => {
  if (typeof quantity === 'number') {
    if (quantity >= 2 && nature === 'box') return 'boxes'
    if (quantity >= 2 && nature === 'item') return 'items'
  }
  return nature
}

// Number helpers

export const maxCheck = (num: number, max: number) => {
  if (num >= max) return max
  return num
}
