// @flow
import * as React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'
import { topbarHeight } from '../../../style/config'

const FixedWrapper = styled.div`
  background-color: ${({ primary }) => (primary ? palette.primary.lighter : palette.grey.lighter)};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: ${topbarHeight};
  border: none;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`

export default ({ children, primary }: { children: React.Node, primary?: boolean }) => (
  <FixedWrapper primary={primary}>
    <ContentWrapper>{children}</ContentWrapper>
  </FixedWrapper>
)
