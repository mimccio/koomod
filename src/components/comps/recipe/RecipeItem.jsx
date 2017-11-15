// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import palette from '../../../style/palette'
import { fontSize } from '../../../style/config'
import { upperFirstChar } from '../../../lib/helpers'

const RecipeItem = styled.div`
  border-bottom: 1px solid ${palette.divider};
  color: ${palette.text};
  display: flex;
  height: 80px;
  padding: 10px;
  width: 100%;
`

const sideWidth = '60px'

const MainLink = styled(Link)`
  width: calc(100% - ${sideWidth});
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const Main = styled.div`
  width: calc(100% - ${sideWidth});
  display: flex;
  flex-direction: column;
  cursor: progress;
`

const Side = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${sideWidth};
  cursor: pointer;

  i {
    font-size: 18px;
    color: ${({ isSelected, isOptimistic }: { isSelected: boolean, isOptimistic: boolean }) => {
    if (isSelected) {
      return isOptimistic ? palette.primary.light : palette.primary.main
    }
    return isOptimistic ? palette.disabled : palette.textSecondary
  }};
  }
`

const RecipeName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 6px;
  color: ${({ recipeId }: { recipeId?: number | string }) =>
    (typeof recipeId === 'number' && recipeId < 0 ? palette.textSecondary : palette.text)};
`

const RecipeInfoWrapper = styled.div`
  font-size: ${fontSize.bodyTiny};
  color: ${({ recipeId }: { recipeId?: number | string }) =>
    (typeof recipeId === 'number' && recipeId < 0 ? palette.disabled : palette.textSecondary)};

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
      {Number(recipe.id) < 0 ? (
        <Main>
          <RecipeName recipeId={recipe.id}>{upperFirstChar(recipe.name)}</RecipeName>
          <RecipeInfoWrapper recipeId={recipe.id}>
            <p>{recipe.pers || 4} pers</p>
            <p>{recipe.description}</p>
          </RecipeInfoWrapper>
        </Main>
      ) : (
        <MainLink to={`/recipe/${recipe.id}/ingredients`}>
          <RecipeName recipeId={recipe.id}>{upperFirstChar(recipe.name)}</RecipeName>
          <RecipeInfoWrapper recipeId={recipe.id}>
            <p>{recipe.pers || 4} pers</p>
            <p>{recipe.description}</p>
          </RecipeInfoWrapper>
        </MainLink>
      )}

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
