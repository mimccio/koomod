// @flow
import { handleIngredientNaturePlural } from './helpers'
import {
  extractIngredients,
  removeItem,
  convertDownNature,
  convertBackNature,
  flattenAddQuantity,
  sortByName,
} from './shoppingListHelpers'

type NatureType = 'g' | 'kg' | 'ml' | 'l' | 'item' | 'box'

type IngredientType = {
  id: string,
  name: string,
  nature: NatureType,
  quantity: number,
  key: number
}

type Recipe = {
  id: string,
  name: string,
  pers: number,
  ingredients: IngredientType[]
}

export default (recipes: Recipe[]) => {
  const rawIngredientList = extractIngredients(recipes)
  let ingredients = rawIngredientList.map(ingredient => convertDownNature(ingredient))
  const list = []

  ingredients.forEach((element) => {
    const newArr = ingredients.filter((item) => {
      if (item.name === element.name && item.nature === element.nature) {
        ingredients = removeItem(ingredients, item)
      }
      return item.name === element.name && item.nature === element.nature
    })
    if (newArr.length > 0) {
      const shoppingItem = flattenAddQuantity(newArr)
      const shoppingItemWithPlural = {
        ...shoppingItem,
        nature: handleIngredientNaturePlural(shoppingItem.nature, shoppingItem.quantity),
      }
      list.push(shoppingItemWithPlural)
    }
  })

  const shoppingList = list.map(ingredient => convertBackNature(ingredient))

  return sortByName(shoppingList)
}
