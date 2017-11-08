import { gql } from 'react-apollo'

// user mutations

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, authProvider: { email: { email: $email, password: $password } }) {
      id
    }
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`

// recipe mutation

export const UPDATE_RECIPE_INFO_MUTATION = gql`
  mutation UpdateRecipeInfoMutation($name: String!, $description: String!, $pers: Int!, $id: ID!) {
    updateRecipe(name: $name, description: $description, id: $recipeId, pers: $pers) {
      name
      description
      pers
    }
  }
`

export const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipeMutation(
    $name: String!
    $description: String!
    $pers: Int!
    $isSelected: Boolean!
    $userId: ID!
  ) {
    createRecipe(name: $name, description: $description, pers: $pers, isSelected: $isSelected, userId: $userId) {
      id
      name
      description
      pers
      shopFor
      isSelected
      isOptimistic
      ingredients {
        id
      }
    }
  }
`

export const UPDATE_RECIPE_SELECT_MUTATION = gql`
  mutation UpdateRecipeSelectMutation($recipeId: ID!, $isSelected: Boolean!) {
    updateRecipe(id: $recipeId, isSelected: $isSelected) {
      id
      isSelected
      isOptimistic
    }
  }
`

// ingredient mutation

export const CREATE_INGREDIENT_MUTATION = gql`
  mutation CreateIngredientMutation($recipeId: ID!, $name: String!, $quantity: Float!, $nature: String!, $key: Int!) {
    createIngredient(recipeId: $recipeId, name: $name, quantity: $quantity, nature: $nature, key: $key) {
      id
      name
      quantity
      nature
      isOptimistic
      key
    }
  }
`

export const DELETE_INGREDIENT_MUTATION = gql`
  mutation DeleteIngredientMutation($id: ID!) {
    deleteIngredient(id: $id) {
      id
      key
    }
  }
`
