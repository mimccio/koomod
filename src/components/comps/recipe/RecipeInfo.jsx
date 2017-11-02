import React from 'react'
import styled from 'styled-components'

// import { ContentWrapper } from '../layouts'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: : 2px solid red;
  padding: 14px;
  width: 100%;
  height: 100%;
`

export default ({ recipe }) => (
  <Wrapper>
    <p>{recipe.name}</p>
    <p>{recipe.description}</p>
    <p>{recipe.pers}</p>
    <p>{recipe.shopFor}</p>
  </Wrapper>
)
