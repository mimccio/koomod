// @flow
import React from 'react'
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

import { GC_USER_ID } from '../../../lib/constants'
import { FadeTransition, FadeComp } from '../animations/Fade'

const Login = styled(FadeComp)`
  width: 70px;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`

const RightBarIcon = styled(FadeComp)`
  position: absolute;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
`

export default ({ location }: { location: { pathname: string, key: string } }) => {
  const userId = localStorage.getItem(GC_USER_ID)
  const loginKey =
    location.pathname === '/login' || location.pathname === '/sign-up' ? 'login' : `login-${location.key}`
  return (
    <TransitionGroup>
      <FadeTransition key={userId ? location.key : loginKey}>
        {(status: string) => {
          if (location.pathname === '/login' || location.pathname === '/sign-up') {
            return (
              <Link to='/'>
                <RightBarIcon status={status}>
                  <i className='material-icons'>home</i>
                </RightBarIcon>
              </Link>
            )
          }
          if (!userId && location.pathname !== '/login' && location.pathname !== '/sign-up') {
            return (
              <Link to='/login'>
                <Login status={status}>Login</Login>
              </Link>
            )
          }
          return (
            <Switch location={location}>
              <Route
                exact
                path='/'
                render={() => (
                  <Link to='/recipes'>
                    <RightBarIcon status={status}>
                      <i className='material-icons'>restaurant_menu</i>
                    </RightBarIcon>
                  </Link>
                )}
              />
              <Route
                exact
                path='/recipes'
                render={() => (
                  <Link to='/shopping-list'>
                    <RightBarIcon status={status}>
                      <i className='material-icons'>shopping_cart</i>
                    </RightBarIcon>
                  </Link>
                )}
              />

              <Route
                render={() => (
                  <Link to='/recipes'>
                    <RightBarIcon status={status}>
                      <i className='material-icons'>restaurant_menu</i>
                    </RightBarIcon>
                  </Link>
                )}
              />
            </Switch>
          )
        }}
      </FadeTransition>
    </TransitionGroup>
  )
}
