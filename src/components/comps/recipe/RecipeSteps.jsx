import React from 'react'
import styled from 'styled-components'

import { ListWrapper, EmptyList } from '../layouts'

const StepItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
  padding: 14px;
  width: 100%;
  height: 100%;
`

export default ({ steps, recipeId }) => {
  if (steps.length < 1) {
    return <EmptyList to={`/recipe/${recipeId}/steps/new`} message='add a step' />
  }
  return <ListWrapper>{steps.map(step => <StepItemWrapper key={step.id}>{step.text}</StepItemWrapper>)}</ListWrapper>
}
