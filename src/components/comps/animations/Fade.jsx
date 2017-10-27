import React from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

export const FadeTransition = ({ children, ...props }) => (
  <Transition
    exit
    appear
    {...props}
    timeout={{
      enter: 150,
      exit: 150,
    }}
  >
    {status => children(status)}
  </Transition>
)

export const FadeComp = styled.div`
  position: absolute;
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
      return 0.2
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
      return 0
    }
    return 0
  }};
`
