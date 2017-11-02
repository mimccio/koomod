// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import UserRecipesPage from './UserRecipesPage'
import ShoppingListPage from './ShoppingListPage'
import LoginPage from './LoginPage'
import RecipePage from './RecipePage'
import NewRecipePage from './NewRecipePage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/sign-up' render={({ history }) => <LoginPage signUp history={history} />} />
    <Route exact path='/recipes' component={UserRecipesPage} />
    <Route exact path='/shopping-list' component={ShoppingListPage} />
    <Route
      path='/recipe/:id'
      render={({ location, match, history }) => <RecipePage location={location} match={match} history={history} />}
    />
    <Route path='/new-recipe' component={NewRecipePage} />
  </Switch>
)

export default Routes
