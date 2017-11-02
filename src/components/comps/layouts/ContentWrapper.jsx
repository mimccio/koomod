// @flow
import * as React from 'react'
import styled from 'styled-components'

import { topbarHeight } from '../../../style/config'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - ${topbarHeight});
`

export default ({ children }: { children: React.Node }) => <Wrapper>{children}</Wrapper>
