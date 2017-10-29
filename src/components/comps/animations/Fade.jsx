import React from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

const delay = 100

export const FadeTransition = ({ children, enter = delay, ...props }) => (
  <Transition
    exit
    appear
    {...props}
    timeout={{
      enter,
      exit: delay,
    }}
  >
    {status => children(status)}
  </Transition>
)

export const FadeComp = styled.div`
  transition: all 100ms ease-in-out;

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
    return 1
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
    return 1
  }};
`
