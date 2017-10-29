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
`

const Message = styled.p`
  border: 2px solid red;
  text-align: center;
  padding: 10px;
`

export default ({ spinner, message = 'loading...' }: { spinner?: React.Node, message?: string }) => (
  <ListWrapper>
    <Wrapper>
      <Message>{message}</Message>
      {spinner}
    </Wrapper>
  </ListWrapper>
)
