// @flow
import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo-light.svg'

import { PageWrapper } from '../comps/layouts'
import { fontSize } from '../../style/config'
import palette from '../../style/palette'

const Content = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: ${fontSize.bodyBig};
  color: ${palette.textSecondary};
  height: 100%;
  img {
    height: 100px;
  }
`

export default () => (
  <PageWrapper primary>
    <Content>
      Sorry the page does does not exist
      <img src={logo} alt='fdghdfg' />
    </Content>
  </PageWrapper>
)
