// @flow
import React from 'react'

import UserRecipesData from '../containers/UserRecipesData'
import Loading from '../comps/Loading'

import { PageWrapper, ContentWrapper, EmptyList, ListWrapper } from '../comps/layouts'
import { RecipeItem } from '../comps/recipe'
import { GlobalSelection, FloatingButton } from '../comps/buttons'

type Recipe = {
  id: string,
  name: string,
  description: string,
  pers: number,
  shopFor: number,
  isSelected: boolean,
  isOptimistic: boolean
}

export default ({ status }: { status: string }) => (
  <PageWrapper primary>
    <UserRecipesData loadingComp={<Loading message='loading recipes...' />}>
      {(recipes: Recipe[], updateRecipeSelect: Function) => {
        if (recipes.length < 1) {
          return (
            <ContentWrapper>
              <EmptyList to='/create-recipe' message='add a new recipe' />
            </ContentWrapper>
          )
        }

        return (
          <ContentWrapper>
            <ListWrapper>
              <GlobalSelection recipes={recipes} updateRecipeSelect={updateRecipeSelect} />
              {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} handleToggle={updateRecipeSelect} />)}
            </ListWrapper>
            <FloatingButton name='add' to='/create-recipe' status={status} />
          </ContentWrapper>
        )
      }}
    </UserRecipesData>
  </PageWrapper>
)
