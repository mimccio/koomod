// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import palette from '../../../style/palette'
import RoundButton from './RoundButton'

const color = palette.success.main

const Btn = styled(RoundButton)`
  background-color: ${color};
  color: white;
  position: fixed;
  bottom: 15px;
  right: 15px;

  &:hover {
    color: ${color};
  }

  &:hover:after {
    border-color: ${color};
  }
`

const icon = <i className='material-icons'>add</i>

export default ({ onClick, to }: { onClick?: Function, to?: string }) => {
  if (to) {
    return (
      <Link to={to}>
        <Btn>{icon}</Btn>
      </Link>
    )
  }
  return <Btn onClick={onClick}>{icon}</Btn>
}
