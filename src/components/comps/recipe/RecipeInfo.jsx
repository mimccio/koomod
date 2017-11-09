import React from 'react'
import styled from 'styled-components'
import facepaint from 'facepaint'

import palette from '../../../style/palette'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import DeleteRecipeBtn from './DeleteRecipeBtn'

const mq = facepaint(['@media(min-width: 420px)', '@media(min-width: 920px)'])

const Wrapper = styled.div`
  min-height: calc(100vh - 104px);
  background-color: ${palette.grey.lighter};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  ${mq({
    width: ['100vw', 'calc(100vw - 10%)', '800px'],
  })};
  padding: 10px 20px 4px;
  flex: 1;
  border: none;
  height: 100%;
`

const PersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
        {/* change pers to shopFor */}
        <Input
          disabled
          type='number'
          id='shopFor'
          val={recipe.pers}
          label='shop for (coming soon)'
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
      <DeleteRecipeBtn recipeId={recipe.id} />
    </ContentWrapper>
  </Wrapper>
)
