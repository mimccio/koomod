// @flow
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
`

export default ({ recipe }: { recipe: { name?: string } }) => <Wrapper>{recipe.name}</Wrapper>
