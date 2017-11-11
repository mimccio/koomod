import { convertNatureDown } from './shoppingListHelpers'

const toShoppingList = (recipes) => {
  const arrNotConverted = []
  recipes.map(recipe => recipe.ingredients.map(ingredient => arrNotConverted.push(ingredient)))

  let arr = arrNotConverted.map(ing => convertNatureDown(ing))
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
      const newArrWithSameNature = newArr.map((ing) => {
        if (ing.nature === 'kg') {
          return { ...ing, nature: 'g', quantity: ing.quantity * 1000 }
        } else if (ing.nature === 'l') {
          return { ...ing, nature: 'ml', quantity: ing.quantity * 1000 }
        }
        return ing
      })
      const shoppingItem = newArrWithSameNature.reduce((prev, item) =>
        // console.log('prev', prev, 'item', item)
        ({
          name: prev.name,
          quantity: prev.quantity + item.quantity,
          nature: prev.nature,
          id: prev.id,
        })
      )
      list.push(shoppingItem)
    }
  })

  // console.log('list', list)

  const shoppingList = list.map((ingredient) => {
    if (ingredient.nature === 'g' && ingredient.quantity >= 1000) {
      return {
        ...ingredient,
        quantity: ingredient.quantity / 1000,
        nature: 'kg',
      }
    }
    if (ingredient.nature === 'ml' && ingredient.quantity >= 1000) {
      return {
        ...ingredient,
        quantity: ingredient.quantity / 1000,
        nature: 'l',
      }
    }
    return ingredient
  })

  // console.log('shoppingList', shoppingList)
  return shoppingList
}

export default toShoppingList
