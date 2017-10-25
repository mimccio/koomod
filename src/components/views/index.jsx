// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import UserRecipesPage from './UserRecipesPage'
import ShoppingListPage from './ShoppingListPage'
import LoginPage from './LoginPage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/recipes' component={UserRecipesPage} />
    <Route exact path='/shopping-list' component={ShoppingListPage} />
  </Switch>
)

export default Routes
