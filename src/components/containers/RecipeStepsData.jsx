import React from 'react'
import { graphql } from 'react-apollo'

import { RECIPE_STEPS_QUERY } from '../../graphql/queries'
import ErrorMessage from '../comps/ErrorMessage'

export const RecipeStepsHOC = ({ recipeStepsQuery: { loading, error, Recipe }, children, loadingComp }) => {
  if (loading) {
    return loadingComp
  }
  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  }
  return children(Recipe.steps)
}

export const withRecipeName = graphql(RECIPE_STEPS_QUERY, {
  name: 'recipeStepsQuery',
  options: ({ recipeId }) => ({ variables: { recipeId } }),
})

export default withRecipeName(RecipeStepsHOC)
