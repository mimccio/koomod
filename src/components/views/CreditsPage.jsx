// @flow
import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

import { PageWrapper } from '../comps/layouts'
// import palette from '../../style/palette'
// import { fontSize } from '../../style/config'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

// const ContentWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   padding-bottom: 40px;
// `

export default () => (
  <PageWrapper>
    <Wrapper>credits</Wrapper>
  </PageWrapper>
)
