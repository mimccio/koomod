// @flow
import React from 'react'
import { Switch, Route, withRouter, matchPath, Redirect } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

import { FadeTransition } from '../comps/animations/Fade'
import HomePage from './HomePage'
import UserRecipesPage from './UserRecipesPage'
import ShoppingListPage from './ShoppingListPage'
import LoginPage from './LoginPage'
import RecipePage from './RecipePage'
import CreateRecipePage from './CreateRecipePage'
import CreateFirstIngredientPage from './CreateFirstIngredientPage'
import TosPage from './TosPage'
import CreditsPage from './CreditsPage'
// import NoMatchPage from './NoMatchPage'
import { GC_USER_ID } from '../../lib/constants'

const Routes = withRouter(({ location }: { location: { key: string, pathname: string } }) => {
  const matchRecipePath = matchPath(location.pathname, {
    path: '/recipe/:id',
    exact: false,
    strict: false,
  })
  const key = matchRecipePath ? 'views-recipe-key' : `views-${location.key}`
  return (
    <TransitionGroup>
      <FadeTransition appear key={key}>
        {(status: string) => (
          <Switch location={location}>
            <Route
              exact
              path='/'
              render={() => (localStorage.getItem(GC_USER_ID) ? <Redirect to='/recipes' /> : <HomePage />)}
            />
            <Route exact path='/tos' component={TosPage} />
            <Route exact path='/credits' component={CreditsPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/sign-up' render={({ history }) => <LoginPage newUser history={history} />} />
            <Route exact path='/recipes' render={() => <UserRecipesPage status={status} />} />
            <Route exact path='/shopping-list' component={ShoppingListPage} />
            <Route
              path='/recipe/:id'
              render={({ match, history }) => <RecipePage location={location} match={match} history={history} />}
            />
            <Route
              exact
              path='/create-recipe'
              render={({ history }) => <CreateRecipePage status={status} history={history} />}
            />
            <Route
              exact
              path='/create-recipe/ingredient'
              render={({ history }) => <CreateFirstIngredientPage status={status} history={history} />}
            />
          </Switch>
        )}
      </FadeTransition>
    </TransitionGroup>
  )
})

export default Routes
