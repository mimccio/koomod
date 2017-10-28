// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
`

export default ({ recipe }: { recipe: { name?: string, id: string } }) => (
  <Link to={`/recipe/${recipe.id}`}>
    <Wrapper>{recipe.name}</Wrapper>
  </Link>
)
