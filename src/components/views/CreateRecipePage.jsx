/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

import CreateRecipe from '../containers/CreateRecipe'

import { PageWrapper } from '../comps/layouts'
import { FloatingButton } from '../comps/buttons'
import { Input, Label } from '../comps/inputs/Form'
import { TextareaStyle } from '../comps/inputs/Textarea'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 20px;
  width: 100%;
  max-width: 800px;
`

const FormWrapper = styled.div`padding: 20px;`

export default ({ history, status }) => (
  <PageWrapper>
    <CreateRecipe history={history}>
      {({ recipeState, handleKeyDown, handleChangeRecipe, createRecipe }) => (
        <Wrapper onKeyDown={handleKeyDown}>
          <ContentWrapper>
            <FormWrapper>
              <Label htmlFor="name">Recipe Name</Label>
              <Input
                autoFocus
                id="name"
                type="text"
                value={recipeState.name}
                onChange={evt => handleChangeRecipe(evt)}
                placeholder={'add recipe name...'}
              />
            </FormWrapper>
            <FormWrapper>
              <Label htmlFor="pers">Number of Persons</Label>
              <Input
                id="pers"
                type="number"
                value={recipeState.pers}
                onChange={evt => handleChangeRecipe(evt)}
                placeholder={0}
              />
            </FormWrapper>
            <FormWrapper>
              <Label htmlFor="description">Description</Label>
              <TextareaStyle
                id="description"
                type="text"
                value={recipeState.description}
                onChange={evt => handleChangeRecipe(evt)}
                placeholder="add a recipe description if you want..."
              />
            </FormWrapper>

            <FloatingButton
              name="check"
              onClick={() => Boolean(recipeState.name) && createRecipe()}
              hide={!recipeState.name}
              status={status}
            />
          </ContentWrapper>
        </Wrapper>
      )}
    </CreateRecipe>
  </PageWrapper>
)
