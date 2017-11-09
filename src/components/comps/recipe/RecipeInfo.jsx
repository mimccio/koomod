import React from 'react'
import styled from 'styled-components'
import palette from '../../../style/palette'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
// import { ContentWrapper } from '../layouts'

const Wrapper = styled.div`
  min-height: calc(100vh - 104px);
  background-color: ${palette.grey.lighter};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 14px;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100vw;
  max-width: 800px;
  padding: 40px 20px 20px;
  flex: 1;
  border: none;
  height: 100%;
`

const PersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 40px 0;
`

export default ({ recipe, updateRecipe }) => (
  <Wrapper>
    <ContentWrapper>
      <Input
        type='text'
        id='name'
        val={recipe.name}
        label='recipe name'
        update={updateRecipe}
        isOptimistic={recipe.isOptimistic}
        placeholder='add name...'
      />
      <PersWrapper>
        <Input
          type='number'
          id='pers'
          val={recipe.pers}
          label='pers'
          update={updateRecipe}
          isOptimistic={recipe.isOptimistic}
          maxNumber={999}
        />
        <Input
          type='number'
          id='shopFor'
          val={recipe.shopFor}
          label='shop for'
          update={updateRecipe}
          isOptimistic={recipe.isOptimistic}
          maxNumber={999}
        />
      </PersWrapper>
      <Textarea
        type='text'
        id='description'
        val={recipe.description}
        label='description'
        update={updateRecipe}
        isOptimistic={recipe.isOptimistic}
        placeholder='add recipe description...'
      />
    </ContentWrapper>
  </Wrapper>
)
