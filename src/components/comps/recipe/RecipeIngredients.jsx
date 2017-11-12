// @flow
import React from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import palette from '../../../style/palette'
import { NewIngredient, IngredientItem } from '../ingredient'
import { FadeTransition } from '../animations/Fade'

import type { IngredientType } from '../../../lib/types'

const transitionDelay = 220

const Wrapper = styled.div`
  min-height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  border: none;
  background-color: ${palette.grey.lighter};
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

type PropType = { ingredients: IngredientType[], recipeId: string, deleteIngredient: Function }

export default ({ ingredients, recipeId, deleteIngredient }: PropType) => (
  <Wrapper>
    <ContentWrapper>
      <NewIngredient recipeId={recipeId} ingredients={ingredients} />
      <TransitionGroup>
        {ingredients.map(ingredient => (
          <FadeTransition key={`ingredient-list-${ingredient.key}`} enter={transitionDelay} exit={transitionDelay}>
            {status => (
              <IngredientItem
                status={status}
                ingredient={ingredient}
                recipeId={recipeId}
                deleteIngredient={deleteIngredient}
              />
            )}
          </FadeTransition>
        ))}
      </TransitionGroup>
    </ContentWrapper>
  </Wrapper>
)
