import React from 'react'
import { graphql } from 'react-apollo'

import { RECIPE_STEPS_QUERY } from '../../graphql/queries'

export const RecipeStepsHOC = ({ recipeStepsQuery: { loading, error, allSteps }, children, loadingComp }) => {
  if (loading) {
    return loadingComp
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return children(allSteps)
}

export const withRecipeName = graphql(RECIPE_STEPS_QUERY, {
  name: 'recipeStepsQuery',
  options: ({ match }) => ({ variables: { recipeId: match.params.id } }),
})

export default withRecipeName(RecipeStepsHOC)
