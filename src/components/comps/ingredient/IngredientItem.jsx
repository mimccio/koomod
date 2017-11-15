// @flow
import React from 'react'
import styled from 'styled-components'
import palette from '../../../style/palette'
import { handleIngredientNaturePlural, upperFirstChar } from '../../../lib/helpers'
import { FadeComp } from '../animations/Fade'

import type { IngredientType } from '../../../lib/types'

const transitionDelay = 220

const IngredientItemWrapper = styled(FadeComp)`
  transition: all ${transitionDelay}ms ease-in-out;
  transform-origin: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  width: 100vw;
  max-width: 460px;
  border-bottom: 1px solid ${palette.divider};
  color: ${({ ingredientId }: { ingredientId?: number | string }) =>
    (typeof ingredientId === 'number' && ingredientId < 0 ? palette.textSecondary : palette.text)};
`
const IngredientName = styled.div`
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 12px;
`
const IngredientInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const IngredientQuantity = styled.div`
  width: 42%;
  text-align: end;
`
const IngredientNature = styled.div`
  width: 46%;
  text-align: end;
`
const CancelButton = styled.div`
  margin-left: 10px;
  width: 60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.grey.light};
  color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 200ms ease;

  i {
    font-size: 14px;
  }

  &:hover {
    color: ${palette.danger.light};
  }
`

type PropType = { status: string, ingredient: IngredientType, recipeId: string, deleteIngredient: Function }

export default ({ status, ingredient, deleteIngredient }: PropType) => (
  <IngredientItemWrapper key={ingredient.id} status={status} ingredientId={ingredient.id}>
    <IngredientName>{upperFirstChar(ingredient.name)}</IngredientName>
    <IngredientInfo>
      <IngredientQuantity>{ingredient.quantity}</IngredientQuantity>
      <IngredientNature>{handleIngredientNaturePlural(ingredient.nature, ingredient.quantity)}</IngredientNature>
    </IngredientInfo>
    <CancelButton onClick={() => !ingredient.isOptimistic && deleteIngredient(ingredient.id, ingredient.key)}>
      <i className='material-icons'>cancel</i>
    </CancelButton>
  </IngredientItemWrapper>
)
