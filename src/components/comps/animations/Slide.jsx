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
  position: absolute;
  transition: all 300ms ease-in-out;
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 100px);
  background-color: #eee;
  color: rgba(0, 0, 0, 0.8);

  visibility: ${({ status }: { status: string }) => {
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
    return null
  }};

  opacity: ${({ status }: { status: string }) => {
    if (status === 'entering') {
      return 0
    }
    if (status === 'entered') {
      return 1
    }
    if (status === 'exiting') {
      return 1
    }
    if (status === 'exited') {
      return 0
    }
    return null
  }};

  transform: translate3d(
    ${({
    status, from, historyPath, right }: { status: string, from: string, historyPath: string, right: boolean
}) => {
    if (from === historyPath) {
      return 0
    }
    if (right) {
      if (status === 'entering') {
        return '100%'
      }
      if (status === 'entered') {
        return 0
      }
      if (status === 'exiting') {
        return '100%'
      }
      if (status === 'exited') {
        return '100%'
      }
    } else {
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
    }
    return null
  }},
    0,
    0
  );
`
