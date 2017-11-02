import React from 'react'
import { graphql, compose } from 'react-apollo'

import { RECIPE_INFO_QUERY } from '../../graphql/queries'
import { UPDATE_RECIPE_INFO_MUTATION } from '../../graphql/mutations'

export const RecipeInfoHOC = ({
  recipeInfoQuery: { loading, error, Recipe },
  children,
  loadingComp,
  UpdateRecipeMutation,
}) => {
  if (loading) {
    return loadingComp
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return children(Recipe, UpdateRecipeMutation)
}

export const withRecipeInfoData = graphql(RECIPE_INFO_QUERY, {
  name: 'recipeInfoQuery',
  options: ({ recipeId }) => ({ variables: { recipeId } }),
})

export const withRecipeInfoMutation = graphql(UPDATE_RECIPE_INFO_MUTATION, {
  name: 'updateRecipeMutation',
})

export default compose(withRecipeInfoData, withRecipeInfoMutation)(RecipeInfoHOC)
