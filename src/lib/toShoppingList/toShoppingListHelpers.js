// @flow
import type { IngredientType, IngredientTypeWithNaturePlural, Recipe } from '../types'

export const extractIngredients = (recipes: Recipe[]): IngredientType[] => {
  const allIngredients = []
  recipes.forEach((recipe: Recipe) => recipe.ingredients.forEach(ingredient => allIngredients.push(ingredient)))
  return allIngredients
}

export const removeItem = (list: IngredientType[], item: IngredientType) => [
  ...list.slice(0, list.indexOf(item)),
  ...list.slice(list.indexOf(item) + 1),
]

export const convertDownNature = (ingredient: IngredientType) => {
  const { nature, quantity } = ingredient
  if (nature === 'kg') return { ...ingredient, nature: 'g', quantity: quantity * 1000 }
  if (nature === 'l') return { ...ingredient, nature: 'ml', quantity: quantity * 1000 }
  return ingredient
}

export const convertBackNature = (ingredient: IngredientTypeWithNaturePlural) => {
  const { nature, quantity } = ingredient
  if (nature === 'g' && quantity >= 1000) return { ...ingredient, nature: 'kg', quantity: quantity / 1000 }
  if (nature === 'ml' && quantity >= 1000) return { ...ingredient, nature: 'l', quantity: quantity / 1000 }
  return ingredient
}

export const flattenAddQuantity = (list: IngredientType[]) =>
  list.reduce((prev: IngredientType, item: IngredientType) => ({ ...prev, quantity: prev.quantity + item.quantity }))
