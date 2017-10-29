// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import { GC_USER_ID, GC_AUTH_TOKEN } from '../../../lib/constants'
import palette from '../../../style/palette'

const Slider = styled.div`
  // display: flex;
  // align-self: self-start;
  position: fixed;
  //z-index: 10;
  //margin-top: 50px;
  height: 100%;
  width: 260px;
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

export default ({
  menuIsOpen,
  history,
  location,
  toggleMenu,
}: {
  menuIsOpen: boolean,
  toggleMenu: Function,
  location: { pathname: string },
  history: { push: (path: string) => mixed }
}) => {
  const userId = localStorage.getItem(GC_USER_ID)
  const login =
    location.pathname === '/login' || location.pathname === '/sign-up' ? (
      <Link onClick={toggleMenu} to='/'>
        Home
      </Link>
    ) : (
      <Link onClick={toggleMenu} to='/login'>
        Login
      </Link>
    )
  return (
    <div onBlur={() => console.log('blur')}>
      <Transition in={menuIsOpen} timeout={0}>
        {(status: string) => (
          <Slider status={status}>
            {userId ? (
              <button
                onClick={() => {
                  toggleMenu()
                  localStorage.removeItem(GC_USER_ID)
                  localStorage.removeItem(GC_AUTH_TOKEN)

                  history.push('/')
                }}
              >
                logout
              </button>
            ) : (
              login
            )}
          </Slider>
        )}
      </Transition>
    </div>
  )
}
