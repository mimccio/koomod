// import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import {
  USER_RECIPES_QUERY,
  USER_RECIPES_WITH_INGREDIENTS_QUERY,
  USER_SELECTED_RECIPES_QUERY,
} from '../../graphql/queries'
import { DELETE_RECIPE_MUTATION, DELETE_INGREDIENT_MUTATION } from '../../graphql/mutations'
import { GC_USER_ID } from '../../lib/constants'

const DeleteRecipeHOC = ({
  deleteRecipeMutation,
  deleteIngredientMutation,
  recipeId,
  ingredients,
  children,
  history,
}) => {
  const deleteIngredient = async (ingredientId) => {
    await deleteIngredientMutation({
      variables: {
        id: ingredientId,
      },
    })
  }

  const deleteRecipe = async () => {
    history.push('/recipes')
    await deleteRecipeMutation({
      variables: {
        id: recipeId,
      },
      optimisticResponse: {
        deleteRecipe: {
          __typename: 'Recipe',
          id: recipeId,
          ingredients: null,
        },
      },
      update: (store) => {
        const data = store.readQuery({
          query: USER_RECIPES_QUERY,
          variables: { userId: localStorage.getItem(GC_USER_ID) },
        })

        const index = data.User.recipes.findIndex(recipe => recipe.id === recipeId)
        data.User.recipes.splice(index, 1)
        store.writeQuery({ query: USER_RECIPES_QUERY, data })
      },
      refetchQueries: [
        {
          query: USER_RECIPES_WITH_INGREDIENTS_QUERY,
          variables: { userId: localStorage.getItem(GC_USER_ID) },
        },
        {
          query: USER_SELECTED_RECIPES_QUERY,
          variables: { userId: localStorage.getItem(GC_USER_ID), isSelected: true },
        },
      ],
    })
    ingredients.map(ingredient => deleteIngredient(ingredient.id))
  }
  return children(deleteRecipe)
}

export const withDeleteRecipeMutation = graphql(DELETE_RECIPE_MUTATION, {
  name: 'deleteRecipeMutation',
  options: ({ recipeId }) => ({
    variables: { recipeId },
  }),
})

export const withDeleteIngredientMutation = graphql(DELETE_INGREDIENT_MUTATION, {
  name: 'deleteIngredientMutation',
})

export default compose(withRouter, withDeleteIngredientMutation, withDeleteRecipeMutation)(DeleteRecipeHOC)
