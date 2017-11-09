import React from 'react'
import { graphql, compose } from 'react-apollo'

import { RECIPE_INFO_QUERY } from '../../graphql/queries'
import { UPDATE_RECIPE_INFO_MUTATION } from '../../graphql/mutations'
// import { GC_USER_ID } from '../../lib/constants'

export class RecipeInfoHOC extends React.Component {
  updateRecipeInfo = async ({ value, select }) => {
    const updatedRecipe = { ...this.props.recipeInfoQuery.Recipe }
    updatedRecipe[select] = value

    console.log('value', value)
    console.log('select', select)
    console.log('updatedRecipe', updatedRecipe)

    this.props.updateRecipeMutation({
      variables: {
        recipeId: this.props.recipeId,
        name: updatedRecipe.name,
        description: updatedRecipe.description,
        pers: Number(updatedRecipe.pers),
        shopFor: Number(updatedRecipe.shopFor),
      },

      // optimisticResponse: {
      //   updateRecipe: {
      //     __typename: 'Recipe',
      //     id: this.props.recipeId,
      //     name: updatedRecipe.name,
      //     description: updatedRecipe.description,
      //     pers: Number(updatedRecipe.pers),
      //     shopFor: Number(updatedRecipe.shopFor),
      //     recipe: {
      //       __typename: 'User',
      //       userId: localStorage.getItem(GC_USER_ID),
      //     },
      //   },
      // },
      // update: (store, { data: { updateRecipe } }) => {
      //   const data = store.readQuery({ query: RECIPE_INFO_QUERY, variables: { recipeId: this.props.recipeId } })
      //   data.Recipe = updateRecipe
      //   console.log('data', data)
      //   console.log('updateRecipe', updateRecipe)
      //   // data.User.recipes.push(updateRecipe)
      //   // store.writeQuery({ query: RECIPE_INFO_QUERY, data })
      // },
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
