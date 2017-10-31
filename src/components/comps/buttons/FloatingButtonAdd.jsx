// @flow
import React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'
import RoundButton from './RoundButton'

const color = palette.info.accent.main

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

export default ({ onClick }: { onClick?: Function }) => (
  <Btn onClick={onClick}>
    <i className='material-icons'>add</i>
  </Btn>
)
