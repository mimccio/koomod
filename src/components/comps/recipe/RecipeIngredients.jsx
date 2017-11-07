// @flow
import React from 'react'
import styled from 'styled-components'

import { ListWrapper, EmptyList } from '../layouts'
import { topbarHeight, navHeight } from '../../../style/config'
import { NewIngredient } from '../ingredient'

const Wrapper = styled.div`
  height: calc(100vh - ${topbarHeight} - ${navHeight});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
`

const IngredientItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  width: 100%;
  height: 50px;
`

const IngredientName = styled.div`
  width: 64%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const IngredientInfo = styled.div`
  width: 36%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const IngredientQuantity = styled.div`
  width: 38%;
  text-align: end;
`

const IngredientNature = styled.div`
  width: 56%;
  text-align: end;
`

type IngredientType = {
  id: string,
  name: string,
  nature?: 'g' | 'kg' | 'ml' | 'l' | 'item',
  quantity?: number
}

type PropType = { ingredients: IngredientType[], recipeId: string }

export default ({ ingredients, recipeId }: PropType) => {
  if (ingredients.length < 1) {
    return <EmptyList to={`/recipe/${recipeId}/ingredients/new`} message='add an ingredient' />
  }
  return (
    <Wrapper>
      <ListWrapper>
        <NewIngredient recipeId={recipeId} />
        {ingredients.map(ingredient => (
          <IngredientItemWrapper key={ingredient.id}>
            <IngredientName>{ingredient.name}</IngredientName>
            <IngredientInfo>
              <IngredientQuantity>{ingredient.quantity}</IngredientQuantity>
              <IngredientNature>{ingredient.nature}</IngredientNature>
            </IngredientInfo>
          </IngredientItemWrapper>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}
