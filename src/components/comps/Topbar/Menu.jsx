// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Transition, TransitionGroup } from 'react-transition-group'
import { Link, matchPath } from 'react-router-dom'

import { GC_USER_ID, GC_AUTH_TOKEN } from '../../../lib/constants'
import palette from '../../../style/palette'
import { fontSize } from '../../../style/config'
import { FadeTransition, FadeComp } from '../animations/Fade'

const Slider = styled.div`
  position: fixed;
  z-index: 9;
  font-size: ${fontSize.body};
  height: 100%;
  width: 240px;
  background-color: ${palette.grey.light};
  padding-top: 60px;
  transition: all 250ms ease-in-out;
  visibility: ${({ status }: { status: string }) => {
    if (status === 'entering') {
      return 'hidden'
    }
    if (status === 'entered') {
      return 'visible'
    }
    return 'hidden'
  }};

  transform: translate3d(
    ${({ status }: { status: string }) => {
    if (status === 'entering') {
      return '-100%'
    }
    if (status === 'entered') {
      return 0
    }
    return '-100%'
  }},
    0,
    0
  );
`

const Fade = styled(FadeComp)`
  transform-origin: left;
  transition: all 200ms ease-in-out;
  position: absolute;
`

const FadeLogin = styled(Fade)`top: 50px;`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-centent: flex-start;
`

const StyledLink = styled(Link)`
  color: ${({ matched }) => (matched ? palette.grey.main : palette.text)};
  padding: 10px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  transition: all 200ms ease-in-out;
  font-style: ${({ matched }) => (matched ? 'italic' : 'normal')};
`

const LogoutLink = styled(StyledLink)`
  position: absolute;
  bottom: 20px;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${({ color, matched }) => (matched ? palette.grey.main : color)};
  margin-right: 20px;
  transition: all 200ms ease-in-out;

  i {
    font-size: ${fontSize.bodyBig};
    color: white;
  }
`

export default ({
  menuIsOpen,
  location,
  toggleMenu,
}: {
  menuIsOpen: boolean,
  toggleMenu: Function,
  location: { pathname: string }
}) => {
  const userId = localStorage.getItem(GC_USER_ID)
  const loginKey = () =>
    // if (!menuIsOpen) return 'closed'
    (location.pathname === '/login' || location.pathname === '/sign-up' ? 'login' : 'not-login')

  const login = (
    <Wrapper>
      <TransitionGroup>
        <FadeTransition exit={200} enter={200} key={loginKey()}>
          {status =>
            (location.pathname === '/login' || location.pathname === '/sign-up' ? (
              <FadeLogin status={status}>
                <StyledLink onClick={toggleMenu} to='/'>
                  <Icon color={palette.info.main}>
                    <i className='material-icons'>home</i>
                  </Icon>
                  Home
                </StyledLink>
              </FadeLogin>
            ) : (
              <FadeLogin status={status} exit={200}>
                <StyledLink onClick={toggleMenu} to='/login'>
                  <Icon color={palette.success.main}>
                    <i className='material-icons'>account_box</i>
                  </Icon>
                  Login
                </StyledLink>
              </FadeLogin>
            ))}
        </FadeTransition>
      </TransitionGroup>
    </Wrapper>
  )

  const matchUserRecipesPage = matchPath(location.pathname, {
    path: '/recipes',
    exact: false,
    strict: false,
  })

  const matchShoppingListPage = matchPath(location.pathname, {
    path: '/shopping-list',
    exact: false,
    strict: false,
  })

  console.log(matchUserRecipesPage)

  return (
    <div onBlur={() => console.log('blur')}>
      <Transition in={menuIsOpen} timeout={0}>
        {(status: string) => (
          <Slider status={status}>
            {userId ? (
              <Wrapper>
                <StyledLink to='/recipes' onClick={toggleMenu} matched={matchUserRecipesPage}>
                  <Icon matched={matchUserRecipesPage} color={palette.primary.accent.main}>
                    <i className='material-icons'>restaurant_menu</i>
                  </Icon>
                  My recipes
                </StyledLink>
                <StyledLink to='/shopping-list' onClick={toggleMenu} matched={matchShoppingListPage}>
                  <Icon matched={matchShoppingListPage} color={palette.info.main}>
                    <i className='material-icons'>shopping_cart</i>
                  </Icon>
                  Shopping List
                </StyledLink>

                <LogoutLink
                  to='/'
                  onClick={() => {
                    toggleMenu()
                    localStorage.removeItem(GC_USER_ID)
                    localStorage.removeItem(GC_AUTH_TOKEN)
                  }}
                >
                  <Icon color={palette.warning.main}>
                    <i className='material-icons'>account_box</i>
                  </Icon>
                  Logout
                </LogoutLink>
              </Wrapper>
            ) : (
              login
            )}
          </Slider>
        )}
      </Transition>
    </div>
  )
}
