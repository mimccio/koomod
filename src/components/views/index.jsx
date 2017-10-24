// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import RecipesListPage from './RecipeListPage'
import ShoppingListPage from './ShoppingListPage'
import LoginPage from './LoginPage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/recipes' component={RecipesListPage} />
    <Route exact path='/shopping-list' component={ShoppingListPage} />
  </Switch>
)

export default Routes
