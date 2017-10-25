import { gql, graphql } from 'react-apollo'
import { GC_USER_ID } from '../lib/constants'

// export const ALL_RECIPES_QUERY = gql`
//   query AllRecipesQuery {
//     allRecipes {
//       id
//       name
//     }
//   }
// `

export const USER_RECIPES_QUERY = gql`
  query UserRecipesQuery($userId: ID) {
    User(id: $userId) {
      id
      recipes(first: 100) {
        id
        name
      }
    }
  }
`

export const withUserRecipesData = graphql(USER_RECIPES_QUERY, {
  name: 'userRecipesQuery',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID) },
    fetchPolicy: 'cache-first',
  }),
})
