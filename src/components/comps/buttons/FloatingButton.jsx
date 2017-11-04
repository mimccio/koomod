// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import facepaint from 'facepaint'

import type { facepaintType } from 'facepaint'

import RoundButton from './RoundButton'
import { FadeComp } from '../animations/Fade'
import palette from '../../../style/palette'

const mq: facepaintType = facepaint(['@media(min-width: 420px)', '@media(min-width: 920px)'])

const TransitionComp = styled(FadeComp)`
  position: fixed;
  bottom: 15px;
  left: calc(100vw - 70px);
  ${mq({
    left: ['calc(100vw - 70px)', 'calc(100vw - 85px)', 'calc(100vw - 110px)'],
  })};
`

const Btn = styled(RoundButton)`
  background-color: ${({ color }: { color: string }) => color};
  color: white;

  &:hover {
    color: ${({ color }: { color: string }) => color};
  }

  &:hover:after {
    border-color: ${({ color }: { color: string }) => color};
  }
`

export default ({
  onClick,
  to,
  status,
  name = 'add',
  color,
}: {
  onClick?: Function,
  to?: string,
  status: string,
  name?: string,
  color?: string
}) => {
  const icon = <i className='material-icons'>{name}</i>
  const setColor = () => {
    if (color) return color
    if (name === 'add') return palette.info.accent.main
    if (name === 'check') return palette.success.accent.main
    return palette.primary.main
  }
  const btnColor = setColor()
  if (typeof to === 'string') {
    return (
      <TransitionComp enter={0} status={status}>
        <Link to={to}>
          <Btn color={btnColor}>{icon}</Btn>
        </Link>
      </TransitionComp>
    )
  }
  return (
    <TransitionComp status={status}>
      <Btn color={btnColor} onClick={onClick}>
        {icon}
      </Btn>
    </TransitionComp>
  )
}
