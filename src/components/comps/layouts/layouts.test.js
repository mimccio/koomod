import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import { PageWrapper, ContentWrapper, EmptyList } from './index'

describe('layouts animation test suite', () => {
  test('"PageLayout" should match snapshot', () => {
    const comp = renderer.create(
      <PageWrapper>
        <div>
          <p>hello</p>
          <p>world</p>
        </div>
      </PageWrapper>
    )
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('"ListWrapper" should match snapshot', () => {
    const comp = renderer.create(
      <ContentWrapper>
        <div>
          <p>hello</p>
          <p>world</p>
        </div>
      </ContentWrapper>
    )
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('"EmptyList" should match snapshot', () => {
    const comp = renderer.create(
      <StaticRouter context={{ router: { isActive: true } }}>
        <EmptyList message='hello world' to='/tests'>
          <div>
            <p>hello</p>
            <p>world</p>
          </div>
        </EmptyList>
      </StaticRouter>
    )
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
