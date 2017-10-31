import React from 'react'
import { graphql } from 'react-apollo'

import { USER_RECIPES_WITH_INGREDIENTS_QUERY } from '../../graphql/queries'
import { CREATE_RECIPE_MUTATION } from '../../graphql/mutations'
import { GC_USER_ID } from '../../lib/constants'

const userId = localStorage.getItem(GC_USER_ID)

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
        userId,
        ingredients: [],
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
          shopFor: pers,
          ingredients: [],
          user: {
            __typename: 'User',
            id: userId,
          },
        },
      },
      update: (store, { data: { createRecipe } }) => {
        const data = store.readQuery({ query: USER_RECIPES_WITH_INGREDIENTS_QUERY, variables: { userId } })
        data.User.recipes.push(createRecipe)
        store.writeQuery({ query: USER_RECIPES_WITH_INGREDIENTS_QUERY, data })
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
