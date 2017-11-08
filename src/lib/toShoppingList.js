const toShoppingList = (recipes) => {
  let arr = []
  recipes.map(recipe => recipe.ingredients.map(ingredient => arr.push(ingredient)))

  console.log('arr', arr)

  const list = []

  arr.forEach((element) => {
    const newArr = arr.filter((item) => {
      if (item.name === element.name) {
        arr = [...arr.slice(0, arr.indexOf(item)), ...arr.slice(arr.indexOf(item) + 1)]
      }

      return item.name === element.name
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
      const shoppingItem = newArrWithSameNature.reduce((prev, item) => {
        console.log('prev', prev, 'item', item)
        return {
          name: prev.name,
          quantity: prev.quantity + item.quantity,
          nature: prev.nature,
          id: prev.id,
        }
      })
      list.push(shoppingItem)
    }
  })

  console.log('list', list)

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

  console.log('shoppingList', shoppingList)
  return shoppingList
}

export default toShoppingList
