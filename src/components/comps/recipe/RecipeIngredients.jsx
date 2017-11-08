// @flow
import React from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import palette from '../../../style/palette'
// import { EmptyList } from '../layouts'
// import { topbarHeight, navHeight } from '../../../style/config'
import { NewIngredient } from '../ingredient'
import { FadeTransition, FadeComp } from '../animations/Fade'

const transitionDelay = 220

const Wrapper = styled.div`
  min-height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  border: none;
`

const ContentWrapper = styled.div`
  background-color: ${palette.grey.lighter};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  max-width: 460px;
  padding-bottom: 20px;
  flex: 1;
  border: none;
`

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

type IngredientType = {
  id: string,
  name: string,
  nature?: 'g' | 'kg' | 'ml' | 'l' | 'item',
  quantity?: number,
  key: number
}

type PropType = { ingredients: IngredientType[], recipeId: string, deleteIngredient: Function }

export default ({ ingredients, recipeId, deleteIngredient }: PropType) => (
  <Wrapper>
    <ContentWrapper>
      <NewIngredient recipeId={recipeId} />
      <TransitionGroup>
        {ingredients.map(ingredient => (
          <FadeTransition key={`ingredient-list-${ingredient.key}`} enter={transitionDelay} exit={transitionDelay}>
            {status => (
              <IngredientItemWrapper key={ingredient.id} status={status} ingredientId={ingredient.id}>
                <IngredientName>{ingredient.name}</IngredientName>
                <IngredientInfo>
                  <IngredientQuantity>{ingredient.quantity}</IngredientQuantity>
                  <IngredientNature>{ingredient.nature}</IngredientNature>
                </IngredientInfo>
                <CancelButton onClick={() => deleteIngredient(ingredient.id)}>
                  <i className='material-icons'>cancel</i>
                </CancelButton>
              </IngredientItemWrapper>
            )}
          </FadeTransition>
        ))}
      </TransitionGroup>
    </ContentWrapper>
  </Wrapper>
)
