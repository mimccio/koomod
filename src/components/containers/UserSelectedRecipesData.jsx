import React from 'react'
import { graphql } from 'react-apollo'

import { USER_SELECTED_RECIPES_QUERY } from '../../graphql/queries'
import { GC_USER_ID } from '../../lib/constants'
import ErrorMessage from '../comps/ErrorMessage'

export const SelectedRecipesHOC = ({ selectedRecipesQuery: { loading, error, User }, children, loadingComp }) => {
  if (loading) {
    return loadingComp
  }
  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>
  }

  return children(User.recipes)
}

export const withSelectedRecipesData = graphql(USER_SELECTED_RECIPES_QUERY, {
  name: 'selectedRecipesQuery',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID), isSelected: true },
    fetchPolicy: 'cache-first',
  }),
})

export default withSelectedRecipesData(SelectedRecipesHOC)
