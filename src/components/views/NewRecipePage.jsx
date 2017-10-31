/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

import CreateRecipe from '../containers/CreateRecipe'

import { PageWrapper } from '../comps/layouts'
import { FloatingButtonSave } from '../comps/buttons'

const Wrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  display: block;
`

export default ({ history }) => (
  <PageWrapper>
    <CreateRecipe history={history}>
      {({ recipeState, handleKeyDown, handleChangeRecipe, createRecipe }) => (
        <Wrapper onKeyDown={handleKeyDown}>
          <label htmlFor="name">Recipe Name</label>
          <input id="name" type="text" value={recipeState.name} onChange={evt => handleChangeRecipe(evt)} />

          <label htmlFor="pers">pers</label>
          <input
            id="pers"
            name="pers"
            type="number"
            value={recipeState.pers}
            onChange={evt => handleChangeRecipe(evt)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            value={recipeState.description}
            onChange={evt => handleChangeRecipe(evt)}
          />
          <FloatingButtonSave onClick={createRecipe} />
        </Wrapper>
      )}
    </CreateRecipe>
  </PageWrapper>
)
