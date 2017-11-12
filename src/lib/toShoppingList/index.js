// @flow
import { handleIngredientNaturePlural, isSameName, upperFirstChar } from '../helpers'
import {
  extractIngredients,
  removeItem,
  convertDownNature,
  convertBackNature,
  flattenAddQuantity,
  sortByName,
} from './toShoppingListHelpers'

import type { Recipe } from '../types'

export default (recipes: Recipe[]) => {
  const rawIngredientList = extractIngredients(recipes)
  let ingredients = rawIngredientList.map(ingredient => convertDownNature(ingredient))
  const list = []

  ingredients.forEach((element) => {
    const sameIngredientList = ingredients.filter((item) => {
      if (isSameName(item.name, element.name) && item.nature === element.nature) {
        ingredients = removeItem(ingredients, item)
      }
      return isSameName(item.name, element.name) && item.nature === element.nature
    })
    if (sameIngredientList.length > 0) {
      const shoppingItem = flattenAddQuantity(sameIngredientList)
      const shoppingItemWithPlural = {
        ...shoppingItem,
        nature: handleIngredientNaturePlural(shoppingItem.nature, shoppingItem.quantity),
      }
      const shippingItemWithPluralAndFirstCaseUpper = {
        ...shoppingItemWithPlural,
        name: upperFirstChar(shoppingItemWithPlural.name),
      }
      list.push(shippingItemWithPluralAndFirstCaseUpper)
    }
  })

  const shoppingList = list.map(ingredient => convertBackNature(ingredient))
  return sortByName(shoppingList)
}
