import { gql } from 'react-apollo'

export const ALL_RECIPES_QUERY = gql`
  query AllRecipesQuery {
    allRecipes {
      id
      name
    }
  }
`

export const USER_RECIPES_QUERY = gql`
  query UserRecipesQuery($userId: ID) {
    User(id: $userId) {
      id
      recipes(first: 100) {
        id
        name
        description
        isSelected
        pers
        shopFor
        isOptimistic
      }
    }
  }
`

export const RECIPE_NAME_QUERY = gql`
  query RecipeNameQuery($recipeId: ID) {
    Recipe(id: $recipeId) {
      id
      name
    }
  }
`
