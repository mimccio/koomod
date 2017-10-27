import React from 'react'
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

import { GC_USER_ID } from '../../../lib/constants'
import { FadeTransition, FadeComp } from '../animations/Fade'

const Login = styled.div`
  width: 70px;
  text-align: center;
`

const RightBarIcon = styled(FadeComp)`
  right: 0;
  cursor: pointer;
`

export default ({ location }) => {
  const userId = localStorage.getItem(GC_USER_ID)
  return (
    <TransitionGroup>
      <FadeTransition key={userId ? location.key : 'login'}>
        {(status) => {
          if (!userId) {
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
