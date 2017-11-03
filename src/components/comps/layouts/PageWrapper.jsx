// @flow
import * as React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'
import { topbarHeight } from '../../../style/config'

const FixedWrapper = styled.div`
  background-color: ${palette.primary.lighter};

  //z-index: 5;

  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //align-items: center;
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

export default ({ children }: { children: React.Node }) => (
  <FixedWrapper>
    <ContentWrapper>{children}</ContentWrapper>
  </FixedWrapper>
)
