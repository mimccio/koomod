import { convertDownNature, convertBackNature, flattenAddQuantity, sortByName } from './shoppingListHelpers'

const toShoppingList = (recipes) => {
  const arrNotConverted = []
  recipes.map(recipe => recipe.ingredients.map(ingredient => arrNotConverted.push(ingredient)))

  let arr = arrNotConverted.map(ing => convertDownNature(ing))
  console.log('convertedDownIngredients', arr)

  const list = []

  arr.forEach((element) => {
    const newArr = arr.filter((item) => {
      if (item.name === element.name && item.nature === element.nature) {
        arr = [...arr.slice(0, arr.indexOf(item)), ...arr.slice(arr.indexOf(item) + 1)]
      }

      return item.name === element.name && item.nature === element.nature
    })
    if (newArr.length > 0) {
      const shoppingItem = flattenAddQuantity(newArr)
      list.push(shoppingItem)
    }
  })

  const shoppingList = list.map(ingredient => convertBackNature(ingredient))
  const sorted = sortByName(shoppingList)
  return sorted
}

export default toShoppingList
