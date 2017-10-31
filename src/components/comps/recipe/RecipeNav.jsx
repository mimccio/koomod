import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import palette from '../../../style/palette'

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${palette.grey.light};
`

const Content = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const activeClassName = 'active'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: ${palette.textSecondary};
  font-weight: normal;
  text-align: center;
  padding: 4px;

  &.${activeClassName} {
    color: ${palette.text};
    font-weight: bold;
    border-bottom: 1px solid ${palette.textSecondary};
  }
`

export default ({ match }) => (
  <Wrapper>
    <Content>
      <StyledNavLink to={`/recipe/${match.params.id}/ingredients`}>ingredients</StyledNavLink>
    </Content>

    <Content>
      <StyledNavLink to={`/recipe/${match.params.id}/info`}>info</StyledNavLink>
    </Content>
    <Content>
      <StyledNavLink to={`/recipe/${match.params.id}/preparation`}>preparation</StyledNavLink>
    </Content>
  </Wrapper>
)
