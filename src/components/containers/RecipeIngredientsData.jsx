import React from 'react'
import { graphql } from 'react-apollo'

import { RECIPE_INGREDIENTS_QUERY } from '../../graphql/queries'

export const RecipeIngredientsHOC = ({ recipeIngredientsQuery: { loading, error, Recipe }, children, loadingComp }) => {
  if (loading) {
    return loadingComp
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return children(Recipe.ingredients)
}

export const withRecipeName = graphql(RECIPE_INGREDIENTS_QUERY, {
  name: 'recipeIngredientsQuery',
  options: ({ recipeId }) => ({ variables: { recipeId } }),
})

export default withRecipeName(RecipeIngredientsHOC)
