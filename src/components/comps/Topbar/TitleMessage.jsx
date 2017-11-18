// @flow
import React from 'react'
import styled from 'styled-components'

import handleErrors from '../../../lib/handleErrors'

const Title = styled.p`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default ({ children = 'loading...' }: { children?: string }) => <Title>{handleErrors(children, true)}</Title>
