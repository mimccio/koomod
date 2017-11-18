// @flow

export type NatureType = 'g' | 'kg' | 'ml' | 'l' | 'item' | 'box'

export type NatureTypeWithPlural = NatureType | 'boxes' | 'items'

export type IngredientType = {
  id: string,
  name: string,
  nature: NatureType,
  quantity: number,
  key: number
}

export type IngredientTypeWithNaturePlural = {
  id: string,
  name: string,
  nature: NatureTypeWithPlural,
  quantity: number,
  key: number
}

export type Recipe = {
  id: string,
  name: string,
  pers: number,
  ingredients: IngredientType[]
}
