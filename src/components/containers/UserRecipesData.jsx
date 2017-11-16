import React from 'react'
import { graphql, compose } from 'react-apollo'

import {
  USER_RECIPES_QUERY,
  USER_RECIPES_WITH_INGREDIENTS_QUERY,
  USER_SELECTED_RECIPES_QUERY,
} from '../../graphql/queries'
import { UPDATE_RECIPE_SELECT_MUTATION } from '../../graphql/mutations'
import { withSelectedRecipesData } from './UserSelectedRecipesData'
import { GC_USER_ID } from '../../lib/constants'

export class UserRecipesHOC extends React.Component {
  updateRecipeSelect = async (id, isSelected) => {
    const toggledSelect = !isSelected
    await this.props.mutateRecipeSelect({
      variables: {
        recipeId: id,
        isSelected: toggledSelect,
      },

      update: (store) => {
        const data = store.readQuery({
          query: USER_RECIPES_WITH_INGREDIENTS_QUERY,
          variables: { isSelected: true, userId: localStorage.getItem(GC_USER_ID) },
        })

        const selectedRecipes = data.User.recipes.filter(recipe => recipe.isSelected === true)
        data.User.recipes = selectedRecipes

        store.writeQuery({
          query: USER_SELECTED_RECIPES_QUERY,
          variables: { isSelected: true, userId: localStorage.getItem(GC_USER_ID) },
          data,
        })
      },

      optimisticResponse: {
        updateRecipe: {
          __typename: 'Recipe',
          id,
          isSelected: toggledSelect,
          isOptimistic: true,
        },
      },
    })
  }

  render() {
    const { userRecipesQuery: { loading, error, User }, children, loadingComp } = this.props
    if (loading) {
      return loadingComp
    }
    if (error) {
      return <p>{error.message}</p>
    }
    return children(User.recipes, this.updateRecipeSelect)
  }
}

export const withUserRecipesData = graphql(USER_RECIPES_QUERY, {
  name: 'userRecipesQuery',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID) },
    fetchPolicy: 'cache-first',
  }),
})

export const withRecipesIngredientsData = graphql(USER_RECIPES_WITH_INGREDIENTS_QUERY, {
  name: 'userRecipesWithIngredientsData',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID) },
    fetchPolicy: 'cache-first',
  }),
})

export const withRecipeSelectMutation = graphql(UPDATE_RECIPE_SELECT_MUTATION, {
  name: 'mutateRecipeSelect',
})

export default compose(
  withRecipesIngredientsData,
  withSelectedRecipesData,
  withRecipeSelectMutation,
  withUserRecipesData
)(UserRecipesHOC)
