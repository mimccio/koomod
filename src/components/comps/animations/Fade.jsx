// @flow
import * as React from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

const delay = 100

export const FadeTransition = ({
  children,
  enter = delay,
  exit = delay,
  appear,
  ...props
}: {
  children: Function,
  enter?: number,
  exit?: number,
  appear?: boolean,
  props?: {}
}) => (
  <Transition
    exit
    appear={appear}
    {...props}
    timeout={{
      enter,
      exit,
    }}
  >
    {(status: string): React.Node => children(status)}
  </Transition>
)

export const FadeComp = styled.div`
  transition: all 100ms ease-in-out;

  transform: scale(
    ${({ status, hide }: { status: string, hide: boolean }) => {
    if (hide === true) {
      return 0.2
    }
    if (status === 'entering') {
      return 0.2
    }
    if (status === 'entered') {
      return 1
    }
    if (status === 'exiting') {
      return 0.2
    }
    if (status === 'exited') {
      return 0.2
    }
    return 1
  }}
  );
  opacity: ${({ status, hide }: { status: string, hide: boolean }) => {
    if (hide === true) {
      return 0
    }
    if (status === 'entering') {
      return 0
    }
    if (status === 'entered') {
      return 1
    }
    if (status === 'exiting') {
      return 0
    }
    if (status === 'exited') {
      return 0
    }
    return 1
  }};
  visibility: ${({ status, hide }: { status: string, hide: boolean }) => {
    if (hide === true) {
      return 'hidden'
    }
    if (status === 'entering') {
      return 'hidden'
    }
    if (status === 'entered') {
      return 'visible'
    }
    if (status === 'exiting') {
      return 'visible'
    }
    if (status === 'exited') {
      return 'hidden'
    }
    return 'visible'
  }};
`
