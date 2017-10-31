// @flow
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  max-width: 460px;
  min-height: 100%;
  padding-bottom: 60px;
`

export default ({ children }: { children: React.Node }) => <Wrapper>{children}</Wrapper>
