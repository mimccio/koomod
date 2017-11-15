import { gql } from 'react-apollo'

// Recipes List Queries

export const ALL_RECIPES_QUERY = gql`
  query AllRecipesQuery {
    allRecipes(orderBy: name_ASC) {
      id
      name
    }
  }
`

export const USER_RECIPES_QUERY = gql`
  query UserRecipesQuery($userId: ID) {
    User(id: $userId) {
      id
      recipes(orderBy: name_ASC) {
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

export const USER_RECIPES_WITH_INGREDIENTS_QUERY = gql`
  query UserRecipesWithIngredientsQuery($userId: ID) {
    User(id: $userId) {
      id
      recipes(orderBy: name_ASC) {
        id
        name
        description
        isSelected
        pers
        shopFor
        isOptimistic
        ingredients {
          id
          name
          quantity
          nature
        }
      }
    }
  }
`

export const USER_SELECTED_RECIPES_QUERY = gql`
  query UserSelectedRecipesQuery($userId: ID, $isSelected: Boolean!) {
    User(id: $userId) {
      id
      recipes(filter: { isSelected: $isSelected }, orderBy: name_ASC) {
        id
        ingredients {
          id
          name
          quantity
          nature
        }
      }
    }
  }
`

// Recipe queries

export const RECIPE_NAME_QUERY = gql`
  query RecipeNameQuery($recipeId: ID) {
    Recipe(id: $recipeId) {
      id
      name
    }
  }
`

export const RECIPE_INFO_QUERY = gql`
  query RecipeInfoQuery($recipeId: ID) {
    Recipe(id: $recipeId) {
      id
      name
      description
      pers
      shopFor
      isOptimistic
    }
  }
`

export const RECIPE_INGREDIENTS_QUERY = gql`
  query RecipeIngredientsQuery($recipeId: ID) {
    Recipe(id: $recipeId) {
      id
      ingredients(first: 500, orderBy: name_ASC) {
        id
        name
        quantity
        nature
        isOptimistic
        key
      }
    }
  }
`

export const RECIPE_STEPS_QUERY = gql`
  query RecipeStepsQuery($recipeId: ID) {
    Recipe(id: $recipeId) {
      id
      steps(first: 100, orderBy: name_ASC) {
        id
        text
      }
    }
  }
`

export const NEW_RECIPE_QUERY = gql`
  query NewRecipeQuery($userId: ID) {
    User(id: $userId) {
      id
      recipes(first: 1, orderBy: createdAt_DESC) {
        id
        name
        ingredients {
          id
          name
          quantity
          nature
        }
      }
    }
  }
`
