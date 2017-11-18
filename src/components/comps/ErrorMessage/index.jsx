// @flow
import * as React from 'react'
import styled from 'styled-components'

import { PageWrapper } from '../layouts'
import handleErrors from '../../../lib/handleErrors'

const Message = styled.div`
padding: 20px;
width 100vw;
display: flex;
justify-content: center;
align-items: center;
`

export default ({ children }: { children: string }) => (
  <PageWrapper>
    <Message>{handleErrors(children)}</Message>
  </PageWrapper>
)
