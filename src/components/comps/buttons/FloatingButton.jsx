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
const StyledLink = styled(Link)`cursor: pointer;`

const Btn = styled(RoundButton)`
  background-color: ${({ color }: { color: string }) => color};
  color: white;
  cursor: ${({ inProgress }) => (inProgress ? 'progress' : 'pointer')};

  &:hover {
    color: ${({ color }: { color: string }) => color};
    cursor: ${({ inProgress }) => (inProgress ? 'progress' : 'pointer')};
  }

  &:hover:after {
    border-color: ${({ color }: { color: string }) => color};
    cursor: ${({ inProgress }) => (inProgress ? 'progress' : 'pointer')};
  }
`

export default ({
  onClick,
  onKeyDown,
  to,
  status,
  hide = false,
  name = 'add',
  color,
  inProgress,
}: {
  onClick?: Function,
  onKeyDown?: Function,
  to?: string,
  status: string,
  hide?: boolean,
  name?: string,
  color?: string,
  inProgress?: boolean
}) => {
  const icon = <i className='material-icons'>{name}</i>
  const setColor = () => {
    if (color) return color
    if (name === 'add') return palette.info.accent.main
    if (name === 'check') return palette.success.accent.main
    if (name === 'hourglass_empty') return palette.grey.main
    return palette.primary.main
  }
  const btnColor = setColor()
  if (typeof to === 'string') {
    return (
      <TransitionComp enter={0} status={status} hide={hide}>
        <StyledLink to={to}>
          <Btn color={btnColor} inProgress={inProgress}>
            {icon}
          </Btn>
        </StyledLink>
      </TransitionComp>
    )
  }
  return (
    <TransitionComp status={status} hide={hide}>
      <Btn
        color={btnColor}
        onClick={onClick}
        onKeyDown={onKeyDown}
        inProgress={inProgress}
        role='switch'
        aria-checked='false'
        tabIndex='0'
      >
        {icon}
      </Btn>
    </TransitionComp>
  )
}
