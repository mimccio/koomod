// @flow
import * as React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'

const Wrapper = styled.div`
  background-color: ${palette.grey.lighter};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-itels: flex-start;
  width: 100vw;
  max-width: 460px;
`

export default ({ children }: { children: React.Node }) => <Wrapper>{children}</Wrapper>
