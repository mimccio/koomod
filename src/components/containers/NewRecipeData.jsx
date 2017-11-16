import React from 'react'
import { graphql } from 'react-apollo'

import { NEW_RECIPE_QUERY } from '../../graphql/queries'
import { GC_USER_ID } from '../../lib/constants'

import TitleLoading from '../comps/Topbar/TitleLoading'

export const NewRecipeHOC = ({ newRecipeQuery: { loading, error, User }, children }) => {
  if (loading) {
    return <TitleLoading />
  }
  if (error) {
    return <p>{error.message}</p>
  }
  console.log('new recipe data', User)
  return children(User.recipes[0])
}

export const withNewRecipeQuery = graphql(NEW_RECIPE_QUERY, {
  name: 'newRecipeQuery',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID) },
    fetchPolicy: 'cache-first',
  }),
})

export default withNewRecipeQuery(NewRecipeHOC)
