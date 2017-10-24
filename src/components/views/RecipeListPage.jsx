// @flow
import React from 'react'

import RecipeListData from '../containers/RecipeListData'

export default () => (
  <div>
    <RecipeListData spinner={<p>Loading...</p>}>
      {Recipes => Recipes.map(recipe => <p key={recipe.id}>{recipe.name}</p>)}
    </RecipeListData>
  </div>
)
