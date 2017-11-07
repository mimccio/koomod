// @flow
import React from 'react'
import styled from 'styled-components'

import CreateIngredient from '../../containers/CreateIngredient'
import SelectNature from './SelectNature'

const Form = styled.div`
  background-color: peru;
  padding: 40px;
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
  createIngredient: Function
}

export default ({ recipeId }: { recipeId: string }) => (
  <CreateIngredient recipeId={recipeId}>
    {({ ingredient: { name, quantity, nature }, handleChange, createIngredient }: DataType) => (
      <Form>
        <input type='text' id='name' value={name} onChange={evt => handleChange(evt)} />
        <input type='number' id='quantity' value={quantity} onChange={evt => handleChange(evt)} />
        <SelectNature type='text' id='nature' value={nature} onChange={evt => handleChange(evt)} />
        <button type='submit' onClick={createIngredient}>
          <i className='material-icons'>check</i>
        </button>
      </Form>
    )}
  </CreateIngredient>
)
