// @flow
import React from 'react'
import styled from 'styled-components'

import { PageWrapper } from '../comps/layouts'

const Content = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export default () => (
  <PageWrapper>
    <Content>Error 404 → page does not exist</Content>
  </PageWrapper>
)
