// @flow
import * as React from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

const delay = 100

export const FadeTransition = ({
  children,
  enter = delay,
  ...props
}: {
  children: Function,
  enter?: number,
  props?: {}
}) => (
  <Transition
    exit
    appear
    {...props}
    timeout={{
      enter,
      exit: delay,
    }}
  >
    {(status: string): React.Node => children(status)}
  </Transition>
)

export const FadeComp = styled.div`
  transition: all 1000ms ease-in-out;

  transform: scale(
    ${({ status }: { status: string }) => {
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
  opacity: ${({ status }: { status: string }) => {
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
`
