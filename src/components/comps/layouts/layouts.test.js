import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { PageLayout, ListWrapper, EmptyList } from './index'

describe('layouts animation test suite', () => {
  test('"PageLayout" should match snapshot', () => {
    const comp = renderer.create(
      <PageLayout>
        <div>
          <p>hello</p>
          <p>world</p>
        </div>
      </PageLayout>
    )
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('"ListWrapper" should match snapshot', () => {
    const comp = renderer.create(
      <ListWrapper>
        <div>
          <p>hello</p>
          <p>world</p>
        </div>
      </ListWrapper>
    )
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
