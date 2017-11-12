// @flow
import type { NatureType, NatureTypeWithPlural } from '../types'

export const handleIngredientNaturePlural = (nature: NatureType, quantity?: number): NatureTypeWithPlural => {
  if (typeof quantity === 'number') {
    if (quantity >= 2 && nature === 'box') return 'boxes'
    if (quantity >= 2 && nature === 'item') return 'items'
  }
  return nature
}

export const temp = 0
