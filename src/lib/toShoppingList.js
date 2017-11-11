// @flow

import {
  extractIngredients,
  removeItem,
  convertDownNature,
  convertBackNature,
  flattenAddQuantity,
  sortByName,
} from './shoppingListHelpers'

type IngredientType = {
  id: string,
  name: string,
  nature: 'g' | 'kg' | 'ml' | 'l' | 'item' | 'box',
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
      list.push(shoppingItem)
    }
  })

  const shoppingList = list.map(ingredient => convertBackNature(ingredient))

  return sortByName(shoppingList)
}
