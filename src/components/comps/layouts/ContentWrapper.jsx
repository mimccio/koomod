// @flow
import * as React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'

import { topbarHeight } from '../../../style/config'

const Wrapper = styled.div`
  background-color: ${palette.grey.lighter};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  max-width: 460px;
  min-height: calc(100vh - ${topbarHeight});
  padding-bottom: 70px;
`

export default ({ children }: { children: React.Node }) => <Wrapper>{children}</Wrapper>
