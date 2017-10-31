import React from 'react'
import { graphql } from 'react-apollo'

import { USER_SELECTED_RECIPES_QUERY } from '../../graphql/queries'
import { GC_USER_ID } from '../../lib/constants'

export const SelectedRecipesHOC = ({ selectedRecipesQuery: { loading, error, allRecipes }, children, loadingComp }) => {
  if (loading) {
    return loadingComp
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return children(allRecipes)
}

export const withSelectedRecipesData = graphql(USER_SELECTED_RECIPES_QUERY, {
  name: 'selectedRecipesQuery',
  options: () => ({
    variables: { userId: localStorage.getItem(GC_USER_ID), isSelected: true },
    fetchPolicy: 'cache-first',
  }),
})

export default withSelectedRecipesData(SelectedRecipesHOC)
