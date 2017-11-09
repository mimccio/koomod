import React from 'react'
import styled from 'styled-components'
import palette from '../../../style/palette'
import Input from '../inputs/Input'
// import { ContentWrapper } from '../layouts'

const Wrapper = styled.div`
min-height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: : 2px solid red;
  //padding: 14px;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  background-color: ${palette.grey.lighter};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  max-width: 460px;
  padding: 20px;
  flex: 1;
  border: none;
  height: 100%;
`

export default ({ recipe, updateRecipe }) => (
  <Wrapper>
    <ContentWrapper>
      <Input id='name' val={recipe.name} label='recipe name' update={updateRecipe} />

      <p>{recipe.description}</p>
      <p>{recipe.pers}</p>
      <p>{recipe.shopFor}</p>
    </ContentWrapper>
  </Wrapper>
)
