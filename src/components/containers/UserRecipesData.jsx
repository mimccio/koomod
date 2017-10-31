import React from 'react'
import { graphql } from 'react-apollo'

import { USER_RECIPES_QUERY } from '../../graphql/queries'
import { GC_USER_ID } from '../../lib/constants'

export const UserRecipesHOC = ({ userRecipesQuery: { loading, error, User }, children, loadingComp }) => {
  if (loading) {
    return loadingComp
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return children(User.recipes)
}

export const withUserRecipesData = graphql(USER_RECIPES_QUERY, {
  name: 'userRecipesQuery',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID) },
    fetchPolicy: 'cache-first',
  }),
})

export default withUserRecipesData(UserRecipesHOC)
