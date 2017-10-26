import React from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import ToggleMenu from '../../containers/ToggleMenu'
import { GC_USER_ID } from '../../../lib/constants'
import { Fade } from '../animations'
import Menu from './Menu'

const Bar = styled.div`
  background-color: #8e24aa;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-weight: normal;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  color: white;
`
const Icon = styled.div`
  border: 2px solid red;
  //position: absolute;
  transition: all 150ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  transform: scale(
    ${(props) => {
    if (props.status === 'entering') {
      return 0.2
    }
    if (props.status === 'entered') {
      return 1
    }
    if (props.status === 'exiting') {
      return 0.2
    }
    if (props.status === 'exited') {
      return 1
    }
    return 0.2
  }}
  );
  opacity: ${(props) => {
    if (props.status === 'entering') {
      return 0
    }
    if (props.status === 'entered') {
      return 1
    }
    if (props.status === 'exiting') {
      return 0
    }
    if (props.status === 'exited') {
      return 1
    }
    return 0
  }};
`

const Title = styled.h2`
  letter-spacing: 0.4px;
  text-align: center;
  font-size: ${props => (props.small ? '16px' : '20px')};
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Brand = styled.div`
  width: 70px;
  text-align: center;
`
const LeftIcon = ({ menuIsOpen, toggleMenu }) => {
  const userId = localStorage.getItem(GC_USER_ID)
  if (!userId) {
    return <Fade key='brand'>{status => <Brand status={status}>Komi</Brand>}</Fade>
  }
  if (menuIsOpen) {
    return (
      <Fade key='arrow_back'>
        {status => (
          <Icon status={status} onClick={toggleMenu}>
            <i className='material-icons'>arrow_back</i>
          </Icon>
        )}
      </Fade>
    )
  }
  return (
    <Fade key='menu'>
      {status => (
        <Icon status={status} onClick={toggleMenu}>
          <i className='material-icons'>menu</i>
        </Icon>
      )}
    </Fade>
  )
}

export default () => (
  <ToggleMenu>
    {({ menuIsOpen, toggleMenu }) => (
      <div>
        <Bar>
          <TransitionGroup>
            <LeftIcon menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
          </TransitionGroup>
          <Title>Title</Title>
          <Menu menuIsOpen={menuIsOpen} />
        </Bar>
      </div>
    )}
  </ToggleMenu>
)
