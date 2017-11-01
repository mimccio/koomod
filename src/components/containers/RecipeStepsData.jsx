import React from 'react'
import { graphql } from 'react-apollo'

import { RECIPE_STEPS_QUERY } from '../../graphql/queries'

export const RecipeStepsHOC = ({ recipeStepsQuery: { loading, error, Recipe }, children, loadingComp }) => {
  console.log('recipe', Recipe)
  if (loading) {
    return loadingComp
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return children(Recipe.steps)
}

export const withRecipeName = graphql(RECIPE_STEPS_QUERY, {
  name: 'recipeStepsQuery',
  options: ({ recipeId }) => ({ variables: { recipeId } }),
})

export default withRecipeName(RecipeStepsHOC)
