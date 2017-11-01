// @flow
import * as React from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

const delay = 300

export const SlideTransition = ({ children, ...props }: { children: Function, enter?: number, props?: {} }) => (
  <Transition
    exit
    appear
    {...props}
    timeout={{
      enter: 0,
      exit: delay,
    }}
  >
    {(status: string): React.Node => children(status)}
  </Transition>
)

export const SlideComp = styled.div`
  border: 2px solid red;
  transition: all 300ms ease-in-out;
  height: 100vh;
  width: 100%;

  visibility: ${({ status }: { status: string }) => {
    /* if (historyPath === props.locationPath) {
      return 'visible'
    } */
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
  }}

  transform: translate3d(
    ${({ status, historyPath, from }: { status: string, historyPath: string, from: string }) => {
    if (from === '/' && historyPath === '/') {
      return 0
    }

    if (status === 'entering') {
      return '-100%'
    }
    if (status === 'entered') {
      return 0
    }
    if (status === 'exiting') {
      return '-100%'
    }
    if (status === 'exited') {
      return '-100%'
    }
    return 1
  }},
    0,
    0
  )

`
