import React from 'react'
import { graphql } from 'react-apollo'

import { NEW_RECIPE_QUERY } from '../../graphql/queries'
import { GC_USER_ID } from '../../lib/constants'

import TitleMessage from '../comps/Topbar/TitleMessage'
import handleErrors from '../../lib/handleErrors'

export const NewRecipeHOC = ({ newRecipeQuery: { loading, error, User }, children }) => {
  if (loading) {
    return <TitleMessage>loading...</TitleMessage>
  }
  if (error) {
    return <TitleMessage>{handleErrors(error.message, true)}</TitleMessage>
  }
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
