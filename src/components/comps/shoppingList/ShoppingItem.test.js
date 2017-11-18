import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import ShoppingItem from './ShoppingItem'

describe('ShoppingItem', () => {
  const ingredient = {
    name: 'tomate',
    quantity: 2,
    nature: 'item',
  }
  it('should match snapshot', () => {
    const comp = renderer.create(<ShoppingItem ingredient={ingredient} />)
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
