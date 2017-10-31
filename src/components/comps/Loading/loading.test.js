import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Spinner from './Spinner'

describe('loading test suite', () => {
  test('"Spinner" should match snapshot', () => {
    const comp = renderer.create(<Spinner />)
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
