import React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'

const color = palette.success.main

const Btn = styled.div`
  background-color: ${color};
  color: white;
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 50px;

  &:hover {
    color: ${color};
  }

  &:hover:after {
    border-color: ${color};
  }
`

const icon = <i className='material-icons'>add</i>

export default () => <Btn>{icon}</Btn>
