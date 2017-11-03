// @flow
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

import { FadeTransition } from '../comps/animations/Fade'
import HomePage from './HomePage'
import UserRecipesPage from './UserRecipesPage'
import ShoppingListPage from './ShoppingListPage'
import LoginPage from './LoginPage'
import RecipePage from './RecipePage'
import NewRecipePage from './NewRecipePage'

const Routes = withRouter(({ location }: { location: { key: string } }) => (
  <TransitionGroup>
    <FadeTransition key={location.key}>
      {(status: string) => (
        <Switch location={location}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/sign-up' render={({ history }) => <LoginPage signUp history={history} />} />
          <Route exact path='/recipes' render={() => <UserRecipesPage status={status} />} />
          <Route exact path='/shopping-list' component={ShoppingListPage} />
          <Route
            path='/recipe/:id'
            render={({ match, history }) => <RecipePage location={location} match={match} history={history} />}
          />
          <Route path='/new-recipe' render={({ history }) => <NewRecipePage status={status} history={history} />} />
        </Switch>
      )}
    </FadeTransition>
  </TransitionGroup>
))

export default Routes
