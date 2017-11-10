// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import palette from '../../../style/palette'

const Wrapper = styled.div`
  color: ${palette.textSecondary};
  background-color: ${palette.grey.lighter};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Message = styled.p`
  text-align: center;
  padding-top: 80px;
`

export default ({ message = 'add', children, to }: { message?: string, children?: React.Node, to?: string }) => (
  <Wrapper>
    {to ? (
      <Link to={to}>
        <Message>{message}</Message>
      </Link>
    ) : (
      <Message>{message}</Message>
    )}
    {children}
  </Wrapper>
)
