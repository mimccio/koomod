// @flow
import * as React from 'react'
import styled from 'styled-components'

import { ListWrapper } from '../layouts'
import palette from '../../../style/palette'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: ${palette.textSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  heigth: 100%;
`

const Message = styled.p`
  text-align: center;

  padding-top: 100px;
`

export default ({ spinner, message = 'loading...' }: { spinner?: React.Node, message?: string }) => (
  <ListWrapper>
    <Wrapper>
      <Message>{message}</Message>
      {spinner}
    </Wrapper>
  </ListWrapper>
)
