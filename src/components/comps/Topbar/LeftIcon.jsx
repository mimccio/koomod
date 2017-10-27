import React from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'
import { FadeTransition, FadeComp } from '../animations/Fade'

const Icon = styled(FadeComp)`cursor: pointer;`

export default ({ menuIsOpen, toggleMenu }) => (
  <TransitionGroup>
    <FadeTransition key={menuIsOpen ? 'back' : 'menu'}>
      {status =>
        (menuIsOpen ? (
          <Icon status={status} onClick={toggleMenu}>
            <i className='material-icons'>arrow_back</i>
          </Icon>
        ) : (
          <Icon status={status} onClick={toggleMenu}>
            <i className='material-icons'>menu</i>
          </Icon>
        ))}
    </FadeTransition>
  </TransitionGroup>
)
