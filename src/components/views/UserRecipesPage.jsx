// @flow
import React from 'react'

import UserRecipesData from '../containers/UserRecipesData'
import { PageLayout } from '../comps/layouts'

import RecipeItem from '../comps/RecipeItem'

type Recipe = {
  id: string,
  name?: string
}

export default () => (
  <PageLayout>
    <UserRecipesData spinner={<p>Loading...</p>}>
      {(Recipes: Recipe[]) => Recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)}
    </UserRecipesData>
  </PageLayout>
)
