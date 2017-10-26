import React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'
import { topbarHeight } from '../../../style/config'

const Wrapper = styled.div`background-color: ${palette.primary.lighter};`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding-top: ${topbarHeight};
  border: none;
  width: 100vw;
  min-height: 100vh;
`

export default ({ topbar, children }) => (
  <Wrapper>
    {topbar}
    <Content>{children}</Content>
  </Wrapper>
)
