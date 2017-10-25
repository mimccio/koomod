import React from 'react'
import { withUserRecipesData } from '../../graphql/queries'

export const UserRecipesHOC = ({ userRecipesQuery: { loading, error, User }, children, spinner }) => {
  if (loading) {
    return spinner
  }
  if (error) {
    return <p>{error.message}</p>
  }
  console.log(User.recipes)
  return children(User.recipes)
}

export default withUserRecipesData(UserRecipesHOC)
