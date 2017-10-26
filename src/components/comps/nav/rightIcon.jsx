import React from 'react'
// import styled from 'styled-components'

import { Fade } from '../animations'
import BarIcon from './BarIcon'

export default (menuIsOpen, toggleMenu) => {
  if (menuIsOpen) {
    return (
      <Fade key='arrow_back'>
        {status => (
          <BarIcon status={status} onClick={toggleMenu}>
            <i className='material-icons'>arrow_back</i>
          </BarIcon>
        )}
      </Fade>
    )
  }
  return (
    <Fade key='menu'>
      {status => (
        <BarIcon status={status} onClick={toggleMenu}>
          <i className='material-icons'>menu</i>
        </BarIcon>
      )}
    </Fade>
  )
}
