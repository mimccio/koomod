import React from 'react'
import { graphql } from 'react-apollo'

import { RECIPES_LIST_QUERY } from '../../graphql/queries'
import { CREATE_RECIPE_MUTATION } from '../../graphql/mutations'

export class CreateRecipeHOC extends React.Component {
  state = {
    name: '',
    description: '',
    pers: 4,
  }

  handleChangeRecipe = (evt) => {
    const recipe = Object.assign(
      {},
      {
        name: this.state.name,
        pers: this.state.pers,
        description: this.state.description,
      }
    )
    recipe[evt.target.id] = evt.target.value
    this.setState({
      name: recipe.name,
      pers: Number(recipe.pers),
      description: recipe.description,
    })
  }

  handleKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      this.props.history.push('/recipes')
    }
  }

  createRecipe = async () => {
    const { name, pers, description } = this.state
    this.props.history.push('/recipes')
    await this.props.createRecipeMutation({
      variables: {
        name,
        pers,
        description,
        isSelected: false,
      },
      optimisticResponse: {
        createRecipe: {
          __typename: 'Recipe',
          id: Math.round(Math.random() * -100000),
          name,
          pers,
          description,
          isSelected: false,
          isOptimistic: true,
        },
      },
      update: (store, { data: { createRecipe } }) => {
        const data = store.readQuery({ query: RECIPES_LIST_QUERY })
        data.allRecipes.push(createRecipe)
        store.writeQuery({ query: RECIPES_LIST_QUERY, data })
      },
    })
  }

  render() {
    const data = {
      recipeState: this.state,
      createRecipe: this.createRecipe,
      handleKeyDown: this.handleKeyDown,
      handleChangeRecipe: this.handleChangeRecipe,
    }
    return this.props.children(data)
  }
}

export default graphql(CREATE_RECIPE_MUTATION, {
  name: 'createRecipeMutation',
})(CreateRecipeHOC)
