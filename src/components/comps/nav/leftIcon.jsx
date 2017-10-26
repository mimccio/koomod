import React from 'react'
import styled from 'styled-components'

import { GC_USER_ID } from '../../../lib/constants'
import { Fade } from '../animations'
import { LeftBarIcon } from './BarIcon'

const Brand = styled.div`
  width: 70px;
  text-align: center;
`

export default (menuIsOpen, toggleMenu) => {
  const userId = localStorage.getItem(GC_USER_ID)
  if (!userId) {
    return <Fade key='brand'>{status => <Brand status={status}>Komi</Brand>}</Fade>
  }
  if (menuIsOpen) {
    return (
      <Fade key='arrow_back'>
        {status => (
          <LeftBarIcon status={status} onClick={toggleMenu}>
            <i className='material-icons'>arrow_back</i>
          </LeftBarIcon>
        )}
      </Fade>
    )
  }
  return (
    <Fade key='menu'>
      {status => (
        <LeftBarIcon status={status} onClick={toggleMenu}>
          <i className='material-icons'>menu</i>
        </LeftBarIcon>
      )}
    </Fade>
  )
}
