import React from 'react'
import styled from 'styled-components'
import { FadeTransition, FadeComp } from '../animations/Fade'

const Icon = styled(FadeComp)`cursor: pointer;`

export default (menuIsOpen, toggleMenu) => {
  if (menuIsOpen) {
    return (
      <FadeTransition key='arrow_back'>
        {status => (
          <Icon status={status} onClick={toggleMenu}>
            <i className='material-icons'>arrow_back</i>
          </Icon>
        )}
      </FadeTransition>
    )
  }
  return (
    <FadeTransition key='menu'>
      {status => (
        <Icon status={status} onClick={toggleMenu}>
          <i className='material-icons'>menu</i>
        </Icon>
      )}
    </FadeTransition>
  )
}
