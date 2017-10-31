// @flow
import * as React from 'react'
import styled from 'styled-components'

import { ListWrapper } from '../layouts'
import Spinner from './Spinner'

import palette from '../../../style/palette'

const Wrapper = styled.div`
  color: ${palette.textSecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  heigth: 100%;
  width: 100%;
`

const Message = styled.p`
  text-align: center;
  padding-top: 60px;
  width: 100%;
`

export default ({ message = 'loading...', children }: { message?: string, children?: React.Node }) => (
  <ListWrapper>
    <Wrapper>
      <Message>{message}</Message>
      {children}
      <Spinner />
    </Wrapper>
  </ListWrapper>
)
