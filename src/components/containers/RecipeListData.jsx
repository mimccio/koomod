import React from 'react'
import { graphql } from 'react-apollo'
import { GC_USER_ID } from '../../lib/constants'
import { USER_RECIPES_QUERY } from '../../graphql/queries'

export const UserRecipesHOC = ({ userRecipesQuery: { loading, error, allRecipes }, children, spinner }) => {
  if (loading) {
    return spinner
  }
  if (error) {
    return <p>{error.message}</p>
  }
  console.log(allRecipes)
  return children(allRecipes)
}

export const withUserRecipesData = graphql(USER_RECIPES_QUERY, {
  name: 'userRecipesQuery',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID) },
    fetchPolicy: 'cache-first',
  }),
})

export default withUserRecipesData(UserRecipesHOC)
