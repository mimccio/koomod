// @flow
import React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'
import CreateIngredient from '../../containers/CreateIngredient'
import SelectNature from './SelectNature'

import Input from '../inputs/Input'

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 26px 10px;
  width: 100%;
`

const NameInput = styled(Input)`width: 42%;`

const InfoWrapper = styled.div`
  width: 54%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const QuantityInput = styled(Input)`
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

  &:hover {
    color: ${palette.success.light};
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
            type='text'
            id='name'
            value={name}
            placeholder='add an ingredient'
            onChange={evt => handleChange(evt)}
            onKeyDown={evt => handleNameKeyDown(evt)}
            tabIndex='0'
          />
          {name && (
            <InfoWrapper>
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
              />
              <SaveButton onClick={createIngredient}>
                <i className='material-icons'>check</i>
              </SaveButton>
            </InfoWrapper>
          )}
        </Form>
      )
    }}
  </CreateIngredient>
)
