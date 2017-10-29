import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { Spinner, EmptyList } from './index'

describe('loading test suite', () => {
  test('"Spinner" should match snapshot', () => {
    const comp = renderer.create(<Spinner />)
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('"EmptyList" should match snapshot', () => {
    const comp = renderer.create(
      <EmptyList>
        <div>
          <p>hello</p>
          <p>world</p>
        </div>
      </EmptyList>
    )
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
