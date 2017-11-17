// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import { GC_USER_ID, GC_AUTH_TOKEN } from '../../../lib/constants'
import palette from '../../../style/palette'
import { fontSize } from '../../../style/config'
import { FadeTransition, FadeComp } from '../animations/Fade'

const Slider = styled.div`
  position: fixed;
  z-index: 9;
  font-size: ${fontSize.bodyBig};
  height: 100%;
  width: 240px;
  background-color: ${palette.grey.light};
  padding: 60px 10px 20px 20px;
  transition: all 300ms ease-in-out;
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
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-centent: flex-start;
`

const StyledLink = styled(Link)`
  color: ${({ matched }) => (matched ? palette.primary.light : palette.text)};
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  //border: 2px solid red;
  background-color: ${({ color }) => color};
  margin-right: 20px;
  color: white;
  i {
    font-size: ${fontSize.bodyHuge};
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
  const login = (
    <Wrapper>
      <FadeTransition enter={300} in={location.pathname === '/login' || location.pathname === '/sign-up'}>
        {status => (
          <Fade status={status}>
            <StyledLink onClick={toggleMenu} to='/'>
              <Icon color={palette.info.main}>
                <i className='material-icons'>home</i>
              </Icon>
              Home
            </StyledLink>
          </Fade>
        )}
      </FadeTransition>

      <FadeTransition enter={300} in={location.pathname !== '/login' && location.pathname !== '/sign-up'}>
        {status => (
          <Fade status={status} exit={200}>
            <StyledLink onClick={toggleMenu} to='/login'>
              <Icon color={palette.success.main}>
                <i className='material-icons'>account_box</i>
              </Icon>
              Login
            </StyledLink>
          </Fade>
        )}
      </FadeTransition>
    </Wrapper>
  )

  return (
    <div onBlur={() => console.log('blur')}>
      <Transition in={menuIsOpen} timeout={0}>
        {(status: string) => (
          <Slider status={status}>
            {userId ? (
              <Wrapper>
                <StyledLink to='/recipes' onClick={toggleMenu}>
                  <Icon color={palette.primary.accent.main}>
                    <i className='material-icons'>restaurant_menu</i>
                  </Icon>
                  My recipes
                </StyledLink>

                <StyledLink
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
                </StyledLink>
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
