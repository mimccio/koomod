// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import facepaint from 'facepaint'

import styled from 'styled-components'

import palette from '../../../style/palette'
import RoundButton from './RoundButton'
import { FadeComp } from '../animations/Fade'

const color = palette.success.accent.main

const mq = facepaint(['@media(min-width: 420px)', '@media(min-width: 920px)'])

const TransitionComp = styled(FadeComp)`
  position: fixed;
  bottom: 15px;
  left: calc(100vw - 70px);
  ${mq({
    left: ['calc(100vw - 70px)', 'calc(100vw - 85px)', 'calc(100vw - 110px)'],
  })};
`

const Btn = styled(RoundButton)`
  background-color: ${color};
  color: white;

  &:hover {
    color: ${color};
  }

  &:hover:after {
    border-color: ${color};
  }
`

const icon = <i className='material-icons'>check</i>

export default ({ onClick, to, status }: { onClick?: Function, to?: string, status: string }) => {
  if (typeof to === 'string') {
    return (
      <TransitionComp enter={0} status={status}>
        <Link to={to}>
          <Btn>{icon}</Btn>
        </Link>
      </TransitionComp>
    )
  }
  return (
    <TransitionComp status={status}>
      <Btn onClick={onClick}>{icon}</Btn>
    </TransitionComp>
  )
}
