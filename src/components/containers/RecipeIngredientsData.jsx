import React from 'react'
import { graphql, compose } from 'react-apollo'

import { RECIPE_INGREDIENTS_QUERY } from '../../graphql/queries'
import { DELETE_INGREDIENT_MUTATION } from '../../graphql/mutations'

export const RecipeIngredientsHOC = ({
  recipeIngredientsQuery: { loading, error, Recipe },
  children,
  loadingComp,
  deleteIngredientMutation,
}) => {
  if (loading) {
    return loadingComp
  }
  if (error) {
    console.log(error)
    return <p>{error.message}</p>
  }
  const data = {
    ingredients: Recipe.ingredients,
    deleteIngredient: async (ingredientId) => {
      await deleteIngredientMutation({
        variables: {
          id: ingredientId,
        },
      })
    },
  }
  return children(data)
}

export const withRecipeIngredients = graphql(RECIPE_INGREDIENTS_QUERY, {
  name: 'recipeIngredientsQuery',
  options: ({ recipeId }) => ({ variables: { recipeId } }),
})

export const withDeleteIngredientMutation = graphql(DELETE_INGREDIENT_MUTATION, {
  name: 'deleteIngredientMutation',
})

export default compose(withRecipeIngredients, withDeleteIngredientMutation)(RecipeIngredientsHOC)
