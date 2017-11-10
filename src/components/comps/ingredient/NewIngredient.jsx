// @flow
import React from 'react'
import styled from 'styled-components'
// import { Transition } from 'react-transition-group'

import palette from '../../../style/palette'
import CreateIngredient from '../../containers/CreateIngredient'
import SelectNature from './SelectNature'
import { FadeTransition, FadeComp } from '../animations/Fade'
import { InputStyle } from '../inputs/Input'
import { handlePlural } from '../../../lib/helpers'

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 24px 10px 28px;
  width: 100%;
`

const NameInput = styled(InputStyle)`width: 42%;`

const InfoWrapper = styled(FadeComp)`
  transition: all 300ms ease-in-out;
  transform-origin: right;
  width: 54%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const QuantityInput = styled(InputStyle)`
  width: 70px;
  padding: 3px;
  &::placeholder {
    padding-left: 6px;
  }
`

const SaveButton = styled.div`
  color: ${palette.success.main};
  cursor: pointer;
  transition: all 200ms ease;
  border-bottom: 1px solid transparent;

  &:hover {
    color: ${palette.success.light};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${palette.primary.light};
  }
`

type IngredientType = {
  id: string,
  name: string,
  nature: 'g' | 'kg' | 'ml' | 'l' | 'item',
  quantity: number
}

type DataType = {
  ingredient: IngredientType,
  handleChange: Function,
  createIngredient: Function,
  handleKeyDown: Function
}

export default ({ recipeId }: { recipeId: string }) => (
  <CreateIngredient recipeId={recipeId}>
    {({
 ingredient: { name, quantity, nature }, handleChange, createIngredient, handleKeyDown }:
DataType) => {
      const handleNameKeyDown = (evt) => {
        if (evt.keyCode === 13) {
          evt.target.nextElementSibling.firstChild.focus()
        }
        handleKeyDown(evt)
      }

      const handleQuantityKeyDown = (evt) => {
        if (evt.keyCode === 13) {
          console.log(evt.target.nextElementSibling.firstChild)
          evt.target.nextElementSibling.firstChild.focus()
        }
        handleKeyDown(evt)
      }
      return (
        <Form>
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
          <FadeTransition in={!!name} enter={0}>
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
        </Form>
      )
    }}
  </CreateIngredient>
)
