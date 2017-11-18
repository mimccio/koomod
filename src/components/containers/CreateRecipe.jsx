import React from 'react'
import { graphql, compose } from 'react-apollo'

import { USER_RECIPES_WITH_INGREDIENTS_QUERY, NEW_RECIPE_QUERY } from '../../graphql/queries'
// import { USER_RECIPES_WITH_INGREDIENTS_QUERY } from '../../graphql/queries'
import { CREATE_RECIPE_MUTATION } from '../../graphql/mutations'
import { GC_USER_ID } from '../../lib/constants'

// const userId = localStorage.getItem(GC_USER_ID)

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

  handlePageKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      this.props.history.push('/recipes')
    }
  }

  createRecipe = async () => {
    const { name, pers, description } = this.state
    // this.props.history.push('/recipes')
    this.props.history.push('/create-recipe/ingredient')
    await this.props.createRecipeMutation({
      variables: {
        name,
        pers,
        description,
        isSelected: false,
        userId: localStorage.getItem(GC_USER_ID),
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
            id: localStorage.getItem(GC_USER_ID),
          },
        },
      },
      update: (store, { data: { createRecipe } }) => {
        const data = store.readQuery({
          query: USER_RECIPES_WITH_INGREDIENTS_QUERY,
          variables: { userId: localStorage.getItem(GC_USER_ID) },
        })
        if (!data.User.recipes) data.User.recipes = []
        data.User.recipes.unshift(createRecipe)
        store.writeQuery({ query: USER_RECIPES_WITH_INGREDIENTS_QUERY, data })
        const newRecipeData = store.readQuery({
          query: NEW_RECIPE_QUERY,
          variables: { userId: localStorage.getItem(GC_USER_ID) },
        })
        newRecipeData.User.recipes[0] = createRecipe
        store.writeQuery({ query: NEW_RECIPE_QUERY, data: newRecipeData })
      },
    })
  }

  render() {
    const data = {
      recipeState: this.state,
      createRecipe: this.createRecipe,
      handlePageKeyDown: this.handlePageKeyDown,
      handleChangeRecipe: this.handleChangeRecipe,
    }
    return this.props.children(data)
  }
}

export const withCreateRecipeMutation = graphql(CREATE_RECIPE_MUTATION, {
  name: 'createRecipeMutation',
})

export const withNewRecipeQuery = graphql(NEW_RECIPE_QUERY, {
  name: 'newRecipeQuery',
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

export default compose(withCreateRecipeMutation, withNewRecipeQuery, withRecipesIngredientsData)(CreateRecipeHOC)

// withRecipesIngredientsData,
