import React from 'react'
import { graphql, compose } from 'react-apollo'

import { RECIPE_INGREDIENTS_QUERY, USER_RECIPES_WITH_INGREDIENTS_QUERY } from '../../graphql/queries'
import { DELETE_INGREDIENT_MUTATION } from '../../graphql/mutations'
import { GC_USER_ID } from '../../lib/constants'
import ErrorMessage from '../comps/ErrorMessage'

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
    return <ErrorMessage>{error.message}</ErrorMessage>
  }
  const props = {
    ingredients: Recipe.ingredients,
    deleteIngredient: async (ingredientId, ingredientKey) => {
      await deleteIngredientMutation({
        variables: {
          id: ingredientId,
        },

        optimisticResponse: {
          deleteIngredient: {
            __typename: 'Ingredient',

            id: ingredientId,
            key: ingredientKey,
            recipe: {
              __typename: 'Recipe',
              id: Recipe.id,
            },
          },
        },

        update: (store, { data: { deleteIngredient } }) => {
          const data = store.readQuery({
            query: RECIPE_INGREDIENTS_QUERY,
            variables: { recipeId: Recipe.id },
          })

          const index = data.Recipe.ingredients.findIndex(ingredient => ingredient.id === deleteIngredient.id)
          data.Recipe.ingredients.splice(index, 1)
          store.writeQuery({ query: RECIPE_INGREDIENTS_QUERY, data })
        },

        refetchQueries: [
          {
            query: USER_RECIPES_WITH_INGREDIENTS_QUERY,
            variables: { userId: localStorage.getItem(GC_USER_ID) },
          },
        ],
      })
    },
  }
  return children(props)
}

export const withRecipeIngredients = graphql(RECIPE_INGREDIENTS_QUERY, {
  name: 'recipeIngredientsQuery',
  options: ({ recipeId }) => ({ variables: { recipeId } }),
})

export const withDeleteIngredientMutation = graphql(DELETE_INGREDIENT_MUTATION, {
  name: 'deleteIngredientMutation',
})

export default compose(withRecipeIngredients, withDeleteIngredientMutation)(RecipeIngredientsHOC)
