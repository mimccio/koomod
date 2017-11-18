import { graphql } from 'react-apollo'

import { RECIPE_NAME_QUERY } from '../../graphql/queries'
import handleErrors from '../../lib/handleErrors'

export const RecipeNameHOC = ({ recipeNameQuery: { loading, error, Recipe }, children }) => {
  if (loading) {
    return children('loading...')
  }
  if (error) {
    return children(handleErrors(error.message, true))
  }

  return children(Recipe.name)
}

export const withRecipeName = graphql(RECIPE_NAME_QUERY, {
  name: 'recipeNameQuery',
  options: ({ match }) => ({ variables: { recipeId: match.params.id } }),
})

export default withRecipeName(RecipeNameHOC)
