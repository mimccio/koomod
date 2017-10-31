import { gql } from 'react-apollo'

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

export const UPDATE_RECIPE_INFO_MUTATION = gql`
  mutation UpdateRecipeInfoMutation($name: String!, $description: String!, $pers: Number!, $id: ID!) {
    updateRecipe(name: $name, description: $description, id: $recipeId, pers: $pers) {
      name
      description
      pers
    }
  }
`

export const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipeMutation($name: String!, $description: String!, $pers: Int!, $isSelected: Boolean!) {
    createRecipe(name: $name, description: $description, pers: $pers, isSelected: $isSelected) {
      id
      name
      description
      pers
      isSelected
      isOptimistic
    }
  }
`
