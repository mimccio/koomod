// @flow

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

export const extractIngredients = (recipes: Object[]): Object[] => {
  const allIngredients = []
  recipes.forEach((recipe: Recipe) => recipe.ingredients.forEach(ingredient => allIngredients.push(ingredient)))
  return allIngredients
}

export const convertDownNature = (ingredient: IngredientType) => {
  const { nature, quantity } = ingredient
  if (nature === 'kg') return { ...ingredient, nature: 'g', quantity: quantity * 1000 }
  if (nature === 'l') return { ...ingredient, nature: 'ml', quantity: quantity * 1000 }
  return ingredient
}

export const convertBackNature = (ingredient: IngredientType) => {
  const { nature, quantity } = ingredient
  if (nature === 'g' && quantity >= 1000) return { ...ingredient, nature: 'kg', quantity: quantity / 1000 }
  if (nature === 'ml' && quantity >= 1000) return { ...ingredient, nature: 'l', quantity: quantity / 1000 }
  return ingredient
}

export const flattenAddQuantity = (list: IngredientType[]) =>
  list.reduce((prev: IngredientType, item: IngredientType) => ({ ...prev, quantity: prev.quantity + item.quantity }))

export const sortByName = (list: IngredientType[]) =>
  list.sort((a, b) => {
    const nameA = a.name.toUpperCase() // ignore upper and lowercase
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
