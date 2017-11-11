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
  recipes.map((recipe: Recipe) => recipe.ingredients.map(ingredient => allIngredients.push(ingredient)))
  return allIngredients
}

export const convertNatureDown = (ingredient: IngredientType) => {
  const { nature, quantity } = ingredient
  if (nature === 'kg') return { ...ingredient, nature: 'g', quantity: quantity * 1000 }
  if (nature === 'l') return { ...ingredient, nature: 'ml', quantity: quantity * 1000 }
  return ingredient
}

// --

// --

export const ingredientHasSameNameAndSameNature = (ingredientTest: IngredientType, ingredientList: IngredientType[]) =>
  ingredientList.filter(ing => ingredientTest.name === ing.name && ingredientTest.nature === ing.nature)
