// @flow
import React from 'react'
import styled from 'styled-components'

import { handlePlural, sameNameIsInList } from '../../../lib/helpers'
import CreateIngredient from '../../containers/CreateIngredient'

import { FadeTransition, FadeComp } from '../animations/Fade'
import { InputStyle } from '../inputs/Input'
import SelectNature from './SelectNature'
import palette from '../../../style/palette'

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NameInput = styled(InputStyle)`
  //width: 100%;
  margin-left: 4px;
`

const InfoWrapper = styled(FadeComp)`
  transition: all 300ms ease-in-out;
  transform-origin: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const QuantityInput = styled(InputStyle)`
  margin-right: 10px;
  padding: 3px;
  &::placeholder {
    padding-left: 6px;
  }
`

const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  color: ${palette.success.main};
  cursor: pointer;
  transition: all 200ms ease;
  border-bottom: 1px solid transparent;
  margin-left: 10px;
  width: 40px;
  &:hover {
    color: ${palette.success.light};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${palette.primary.light};
  }
`
const Error = styled(FadeComp)`
  transition: all 300ms ease-in-out;
  transform-origin: left;
  color: ${palette.danger.light};
  padding: 10px 0 0 10px;
`

type IngredientType = {
  id: string,
  name: string,
  nature: 'g' | 'kg' | 'ml' | 'l' | 'item' | 'box',
  quantity?: number,
  key: number
}

type DataType = {
  ingredient: IngredientType,
  handleChange: Function,
  createIngredient: Function,
  handleKeyDown: Function
}

export default ({ recipeId, ingredients }: { recipeId: string, ingredients: Array<IngredientType> }) => (
  <CreateIngredient recipeId={recipeId}>
    {({
 ingredient: { name, quantity, nature }, handleChange, createIngredient, handleKeyDown }:
DataType) => {
      const handleNameKeyDown = (evt) => {
        if (sameNameIsInList(name, ingredients)) return
        if (evt.keyCode === 13) {
          evt.target.nextElementSibling.firstChild.focus()
        }
        handleKeyDown(evt)
      }

      const handleQuantityKeyDown = (evt) => {
        if (evt.keyCode === 13) {
          evt.target.nextElementSibling.firstChild.focus()
        }
        handleKeyDown(evt)
      }

      const isOpen = !!name && !sameNameIsInList(name, ingredients)

      return (
        <Form>
          <FadeTransition in={sameNameIsInList(name, ingredients)} enter={0}>
            {(status: string) => <Error status={status}>this ingredient is already in the list !</Error>}
          </FadeTransition>
          <ContentWrapper>
            <NameInput
              maxlength={140}
              type='text'
              id='name'
              value={name}
              placeholder='add an ingredient'
              onChange={evt => handleChange(evt)}
              onKeyDown={evt => handleNameKeyDown(evt)}
              tabIndex='0'
            />

            <FadeTransition in={isOpen} enter={0}>
              {status => (
                <InfoWrapper status={status}>
                  <QuantityInput
                    type='number'
                    id='quantity'
                    value={quantity}
                    placeholder={0}
                    onChange={evt => handleChange(evt)}
                    onKeyDown={evt => handleQuantityKeyDown(evt)}
                  />
                  <SelectNature
                    type='text'
                    id='nature'
                    value={nature}
                    onChange={evt => handleChange(evt)}
                    onKeyDown={evt => handleKeyDown(evt)}
                    isPlural={handlePlural(quantity)}
                  />
                  <SaveButton
                    onClick={createIngredient}
                    tabIndex={0}
                    onKeyDown={(evt) => {
                      if (evt.keyCode === 13) return createIngredient()
                      return null
                    }}
                  >
                    <i className='material-icons'>check</i>
                  </SaveButton>
                </InfoWrapper>
              )}
            </FadeTransition>
          </ContentWrapper>
        </Form>
      )
    }}
  </CreateIngredient>
)
