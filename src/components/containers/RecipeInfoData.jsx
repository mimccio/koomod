import React from 'react'
import { graphql, compose } from 'react-apollo'

import { RECIPE_INFO_QUERY } from '../../graphql/queries'
import { UPDATE_RECIPE_INFO_MUTATION } from '../../graphql/mutations'
import { GC_USER_ID } from '../../lib/constants'
import { maxCheck } from '../../lib/helpers'

export class RecipeInfoHOC extends React.Component {
  updateRecipeInfo = async ({ value, select }) => {
    const updatedRecipe = { ...this.props.recipeInfoQuery.Recipe }
    updatedRecipe[select] = value

    updatedRecipe.pers = maxCheck(Number(updatedRecipe.pers), 999)
    updatedRecipe.shopFor = maxCheck(Number(updatedRecipe.shopFor), 999)

    this.props.updateRecipeMutation({
      variables: {
        recipeId: this.props.recipeId,
        name: updatedRecipe.name,
        description: updatedRecipe.description,
        pers: updatedRecipe.pers,
        shopFor: updatedRecipe.shopFor,
      },

      optimisticResponse: {
        updateRecipe: {
          __typename: 'Recipe',
          id: this.props.recipeId,
          name: updatedRecipe.name,
          description: updatedRecipe.description,
          pers: updatedRecipe.pers,
          shopFor: updatedRecipe.shopFor,
          isOptimistic: true,
          user: {
            __typename: 'User',
            userId: localStorage.getItem(GC_USER_ID),
          },
        },
      },
      update: (store, { data: { updateRecipe } }) => {
        const data = store.readQuery({ query: RECIPE_INFO_QUERY, variables: { recipeId: this.props.recipeId } })
        data.Recipe = updateRecipe
        data.Recipe.pers = maxCheck(Number(updatedRecipe.pers), 999)
        data.Recipe.pers = maxCheck(Number(updatedRecipe.pers), 999)
        console.log('data', data)
        console.log('updateRecipe', updateRecipe)
        store.writeQuery({ query: RECIPE_INFO_QUERY, data })
      },
    })
  }

  render() {
    const { loading, error, Recipe } = this.props.recipeInfoQuery
    if (loading) {
      return this.props.loadingComp
    }
    if (error) {
      return <p>{error.message}</p>
    }
    const data = {
      recipe: Recipe,
      updateRecipe: this.updateRecipeInfo,
    }
    return this.props.children(data)
  }
}

export const withRecipeInfoData = graphql(RECIPE_INFO_QUERY, {
  name: 'recipeInfoQuery',
  options: ({ recipeId }) => ({ variables: { recipeId } }),
})

export const withRecipeInfoMutation = graphql(UPDATE_RECIPE_INFO_MUTATION, {
  name: 'updateRecipeMutation',
})

export default compose(withRecipeInfoData, withRecipeInfoMutation)(RecipeInfoHOC)
