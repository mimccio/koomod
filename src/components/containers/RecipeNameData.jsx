import React from 'react'
import { gql, graphql } from 'react-apollo'

export const RecipeNameHOC = ({ recipeNameQuery: { loading, error, Recipe }, children }) => {
  if (loading) {
    return children('loading...')
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return children(Recipe.name)
}

export const RECIPE_NAME_QUERY = gql`
  query RecipeNameQuery($recipeId: ID) {
    Recipe(id: $recipeId) {
      id
      name
    }
  }
`

export const withRecipeName = graphql(RECIPE_NAME_QUERY, {
  name: 'recipeNameQuery',
  options: ({ match }) => ({ variables: { recipeId: match.params.id } }),
})

export default withRecipeName(RecipeNameHOC)
