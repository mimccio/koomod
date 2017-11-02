// @flow
import React from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'
import { Route, Switch, matchPath } from 'react-router-dom'

import { FadeTransition, FadeComp } from '../animations/Fade'
import RecipeNameData from '../../containers/RecipeNameData'

const Title = styled(FadeComp)`
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: calc((100vw - 50vw) - 100px);
  text-align: center;
  font-size: ${({ small }: { small: boolean }) => (small ? '16px' : '20px')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
  width: 200px;
`

export default ({ location }: { location: { pathname: string, key: string } }) => {
  const matchRecipePath = matchPath(location.pathname, {
    path: '/recipe/:id',
    exact: false,
    strict: false,
  })

  const key = matchRecipePath ? 'title-recipe-key' : `title-${location.key}`
  return (
    <TransitionGroup>
      <FadeTransition key={key}>
        {(status: string) => (
          <Switch location={location}>
            <Route exact path='/' render={() => <Title status={status}>Komi</Title>} />
            <Route exact path='/recipes' render={() => <Title status={status}>My Recipes</Title>} />
            <Route exact path='/login' render={() => <Title status={status}>Login</Title>} />
            <Route exact path='/sign-up' render={() => <Title status={status}>Sign Up</Title>} />
            <Route exact path='/shopping-List' render={() => <Title status={status}>Shopping List</Title>} />
            <Route
              path='/recipe/:id'
              render={({ match }) => (
                <RecipeNameData match={match}>
                  {(recipeName: string) => (
                    <Title small status={status}>
                      {recipeName}
                    </Title>
                  )}
                </RecipeNameData>
              )}
            />
          </Switch>
        )}
      </FadeTransition>
    </TransitionGroup>
  )
}
