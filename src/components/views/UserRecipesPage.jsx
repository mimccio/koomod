// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import UserRecipesData from '../containers/UserRecipesData'
import Loading from '../comps/Loading'

import { PageWrapper, ContentWrapper, EmptyList } from '../comps/layouts'
import { RecipeItem } from '../comps/recipe'
import { GlobalSelection, FloatingButtonAdd } from '../comps/buttons'

type Recipe = {
  id: string,
  name: string,
  description: string,
  pers: number,
  shopFor: number,
  isSelected: boolean,
  isOptimistic: boolean
}

export default () => (
  <PageWrapper>
    <UserRecipesData loadingComp={<Loading message='loading recipes...' />}>
      {(recipes: Recipe[], updateRecipeSelect: Function) => {
        if (recipes.length < 1) {
          return (
            <ContentWrapper>
              <EmptyList to='/new-recipe' message='add a new recipe' />
            </ContentWrapper>
          )
        }

        return (
          <ContentWrapper>
            <GlobalSelection recipes={recipes} updateRecipeSelect={updateRecipeSelect} />
            {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} handleToggle={updateRecipeSelect} />)}
          </ContentWrapper>
        )
      }}
    </UserRecipesData>
    <Link to='/new-recipe'>
      <FloatingButtonAdd />
    </Link>
  </PageWrapper>
)
