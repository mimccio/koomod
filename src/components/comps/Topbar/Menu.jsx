import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import { GC_USER_ID, GC_AUTH_TOKEN } from '../../../lib/constants'

const Slider = styled.div`
  // display: flex;
  // align-self: self-start;
  position: fixed;
  //z-index: 10;
  //margin-top: 50px;
  height: 100%;
  width: 260px;
  background-color: #eee;
  padding: 60px 10px 20px 20px;
  transition: all 300ms ease-in-out;
  visibility: ${(props) => {
    if (props.status === 'entering') {
      return 'hidden'
    }
    if (props.status === 'entered') {
      return 'visible'
    }
    return 'hidden'
  }};

  transform: translate3d(
    ${(props) => {
    if (props.status === 'entering') {
      return '-100%'
    }
    if (props.status === 'entered') {
      return 0
    }
    return '-100%'
  }},
    0,
    0
  );
`

export default ({
  menuIsOpen, history, location, toggleMenu,
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
        {status => (
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
