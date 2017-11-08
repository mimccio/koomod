import React from 'react'
import { graphql, compose } from 'react-apollo'

import { RECIPE_INGREDIENTS_QUERY, USER_RECIPES_WITH_INGREDIENTS_QUERY } from '../../graphql/queries'
import { CREATE_INGREDIENT_MUTATION } from '../../graphql/mutations'
import { GC_USER_ID } from '../../lib/constants'

export class CreateIngredientHOC extends React.Component {
  state = {
    name: '',
    quantity: '',
    nature: 'g',
  }

  handleChange = (changeEvt) => {
    const ingredient = { ...this.state }
    ingredient[changeEvt.target.id] = changeEvt.target.value
    this.setState({
      name: ingredient.name,
      quantity: ingredient.quantity,
      nature: ingredient.nature,
    })
    console.log(changeEvt.target.value)
  }

  handleKeyDown = (keydownEvt) => {
    if (keydownEvt.keyCode === 27) {
      console.log('escape')
      this.setState({
        name: '',
        quantity: '',
        nature: 'g',
      })
    }
  }

  createIngredient = async () => {
    const { name, quantity, nature } = this.state
    const key = Math.round(Math.random() * 10000)
    this.setState({
      name: '',
      quantity: '',
      nature: 'g',
    })
    this.props.createIngredientMutation({
      variables: {
        recipeId: this.props.recipeId,
        key,
        name,
        quantity: Number(Number(quantity).toFixed(2)),
        nature,
      },
      optimisticResponse: {
        createIngredient: {
          __typename: 'Ingredient',
          id: Math.round(Math.random() * -100000),
          key,
          name,
          quantity: Number(Number(quantity).toFixed(2)),
          nature,
          isOptimistic: true,
          recipe: {
            __typename: 'Recipe',
            id: this.props.recipeId,
          },
        },
      },
      update: (store, { data: { createIngredient } }) => {
        const data = store.readQuery({
          query: RECIPE_INGREDIENTS_QUERY,
          variables: { recipeId: this.props.recipeId },
        })
        data.Recipe.ingredients.push(createIngredient)
        store.writeQuery({ query: RECIPE_INGREDIENTS_QUERY, data })
      },
      refetchQueries: [
        {
          query: USER_RECIPES_WITH_INGREDIENTS_QUERY,
          variables: { userId: localStorage.getItem(GC_USER_ID) },
        },
      ],
    })
  }

  render() {
    const data = {
      ingredient: this.state,
      createIngredient: this.createIngredient,
      handleKeyDown: this.handleKeyDown,
      handleChange: this.handleChange,
    }
    return this.props.children(data)
  }
}

export const withRecipesIngredientsData = graphql(USER_RECIPES_WITH_INGREDIENTS_QUERY, {
  name: 'UserRecipesWithIngredientsData',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID) },
    fetchPolicy: 'cache-first',
  }),
})

export const withCreateIngredientMutation = graphql(CREATE_INGREDIENT_MUTATION, {
  name: 'createIngredientMutation',
})

export default compose(withRecipesIngredientsData, withCreateIngredientMutation)(CreateIngredientHOC)
