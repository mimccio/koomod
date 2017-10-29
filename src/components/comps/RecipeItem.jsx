// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RecipeItem = styled.div`
  color: rgba(0, 0, 0, 0.85);
  height: 80px;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
  width: 280px;
`

const Main = styled(Link)`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
`

const Side = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  cursor: pointer;

  i {
    font-size: 18px;
    color: ${({ isSelected, isOptimistic }: { isSelected: boolean, isOptimistic: boolean }) => {
    if (isSelected) {
      return isOptimistic ? '#BA68C8' : '#8e24aa'
    }
    return isOptimistic ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.64)'
  }};
  }
`

const RecipeName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 6px;
  color: ${({ recipeId }: { recipeId?: number | string }) =>
    (typeof recipeId === 'number' && recipeId < 0 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.85)')};
`

const RecipeInfoWrapper = styled.div`
  font-size: 12px;
  color: ${({ recipeId }: { recipeId?: number | string }) =>
    (typeof recipeId === 'number' && recipeId < 0 ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.64)')};

  & > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

type Recipe = {
  id: string,
  name: string,
  description: string,
  pers: number,
  shopFor: number,
  isSelected: boolean,
  isOptimistic: boolean
}

export default ({ recipe, handleToggle }: { recipe: Recipe, handleToggle: Function }) => {
  const icon = recipe.isSelected ? 'check_box' : 'check_box_outline_blank'

  return (
    <RecipeItem>
      <Main to={`recipe/${recipe.id}/ingredients`}>
        <RecipeName recipeId={recipe.id}>{recipe.name}</RecipeName>
        <RecipeInfoWrapper recipeId={recipe.id}>
          <p>{recipe.pers || 4} pers</p>
          <p>{recipe.description}</p>
        </RecipeInfoWrapper>
      </Main>

      <Side
        onTouchEnd={(evt: SyntheticTouchEvent<HTMLInputElement>) => {
          evt.preventDefault()
          handleToggle(recipe.id, recipe.isSelected)
        }}
        onClick={() => handleToggle(recipe.id, recipe.isSelected)}
        isSelected={recipe.isSelected}
        isOptimistic={recipe.isOptimistic}
      >
        <i className='material-icons'>{icon}</i>
      </Side>
    </RecipeItem>
  )
}
