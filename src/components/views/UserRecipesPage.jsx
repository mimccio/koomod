// @flow
import React from 'react'
import { Link } from 'react-router-dom'

import UserRecipesData from '../containers/UserRecipesData'
import { PageLayout, ListWrapper } from '../comps/layouts'
import { RecipeItem } from '../comps/recipe'
import { GlobalSelection, FloatingButtonAdd } from '../comps/buttons'
import { Spinner, EmptyList } from '../comps/loading'

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
  <PageLayout>
    <UserRecipesData spinner={<EmptyList message='loading recipes...' spinner={<Spinner />} />}>
      {(recipes: Recipe[], updateRecipeSelect: Function) => {
        if (recipes.length < 1) {
          return (
            <EmptyList>
              <Link to='/new-recipe'>
                <p>add a new recipe</p>
              </Link>
            </EmptyList>
          )
        }

        return (
          <div>
            <GlobalSelection recipes={recipes} updateRecipeSelect={updateRecipeSelect} />
            <ListWrapper>
              {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} handleToggle={updateRecipeSelect} />)}
            </ListWrapper>
          </div>
        )
      }}
    </UserRecipesData>
    <Link to='/new-recipe'>
      <FloatingButtonAdd />
    </Link>
  </PageLayout>
)
