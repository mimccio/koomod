// @flow
import * as React from 'react'
import styled from 'styled-components'

import Spinner from './Spinner'
import { PageWrapper } from '../layouts'

import palette from '../../../style/palette'

// const Wrapper = styled.div`
//   color: ${palette.textSecondary};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   background-color: ${palette.grey.lighter};
// `

const Message = styled.p`
  color: ${palette.textSecondary};
  text-align: center;
  padding: 30px 0;
  width: 100%;
`

export default ({ message = 'loading...', children }: { message?: string, children?: React.Node }) => (
  <PageWrapper>
    <Message>{message}</Message>
    {children}
    <Spinner />
  </PageWrapper>
)
