// @flow
import { remove as removeDiacritics } from 'diacritics'

export const isSameName = (test: string, tested: string): boolean => {
  if (removeDiacritics(test).toUpperCase() === removeDiacritics(tested).toUpperCase()) return true
  return false
}

export const handlePlural = (quantity?: number = 0) => quantity >= 2

export const upperFirstChar = (text: string) => {
  const arr = [...text]
  arr[0] = text[0].toUpperCase()
  return arr.join('')
}
