import React from 'react'
import { graphql } from 'react-apollo'

// import { RECIPE_INGREDIENTS_QUERY } from '../../graphql/queries'
import { CREATE_INGREDIENT_MUTATION } from '../../graphql/mutations'

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
      // quantity: Number(ingredient.quantity),
      nature: ingredient.nature,
    })
    console.log(changeEvt.target.value)
  }

  handleKeyDown = (keydownEvt) => {
    if (keydownEvt.keyCode === 27) {
      this.setState({
        name: '',
        quantity: '',
        nature: 'g',
      })
    }
  }

  createIngredient = async () => {
    const { name, quantity, nature } = this.state
    console.log('name', name)
    this.props.createIngredientMutation({
      variables: {
        recipeId: this.props.recipeId,
        name,
        quantity: Number(quantity),
        nature,
      },
      // update: (store, { data: { createIngredient } }) => {
      //   const recipe = store.readQuery({
      //     query: RECIPE_INGREDIENTS_QUERY,
      //     variables: { recipeId: this.props.recipeId },
      //   })
      //   recipe.ingredients.push(createIngredient)
      //   store.writeQuery({ query: RECIPE_INGREDIENTS_QUERY, recipe })
      // },
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

export default graphql(CREATE_INGREDIENT_MUTATION, {
  name: 'createIngredientMutation',
})(CreateIngredientHOC)
