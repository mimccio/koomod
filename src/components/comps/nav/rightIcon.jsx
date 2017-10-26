import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { GC_USER_ID } from '../../../lib/constants'
import { Fade } from '../animations'
import { RightBarIcon } from './BarIcon'

const Login = styled.div`
  width: 70px;
  text-align: center;
`

export default (to) => {
  const userId = localStorage.getItem(GC_USER_ID)
  if (!userId) {
    return (
      <Fade key='login'>
        {status => (
          <Link to='/login'>
            <Login status={status}>Login</Login>
          </Link>
        )}
      </Fade>
    )
  }
  if (to === '/shopping-list') {
    return (
      <Fade key='shopping-list'>
        {status => (
          <Link to={to}>
            <RightBarIcon status={status}>
              <i className='material-icons'>shopping_cart</i>
            </RightBarIcon>
          </Link>
        )}
      </Fade>
    )
  }

  return (
    <Fade key='recipes'>
      {status => (
        <Link to={to}>
          <RightBarIcon status={status}>
            <i className='material-icons'>restaurant_menu</i>
          </RightBarIcon>
        </Link>
      )}
    </Fade>
  )
}
