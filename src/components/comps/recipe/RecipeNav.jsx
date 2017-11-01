import React from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'

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
  transition: all 300ms ease-in-out;


  &.${activeClassName} {
    color: ${palette.text};
    //font-weight: bold;
    border-bottom: 1px solid ${palette.textSecondary};
  }
`

const RecipeNav = ({ match, history }) => {
  const recipeId = match.params.id
  const from = history.location.pathname
  return (
    <Wrapper>
      <Content>
        <StyledNavLink to={{ pathname: `/recipe/${recipeId}/ingredients`, state: { from } }}>ingredients</StyledNavLink>
      </Content>
      <Content>
        <StyledNavLink to={{ pathname: `/recipe/${recipeId}/info`, state: { from } }}>info</StyledNavLink>
      </Content>
      <Content>
        <StyledNavLink to={{ pathname: `/recipe/${recipeId}/preparation`, state: { from } }}>preparation</StyledNavLink>
      </Content>
    </Wrapper>
  )
}

export default withRouter(RecipeNav)
