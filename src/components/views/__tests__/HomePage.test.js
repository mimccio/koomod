import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import HomePage from '../HomePage'

describe('HomePage', () => {
  it('should match snapshot', () => {
    const comp = renderer.create(
      <StaticRouter context={{ router: { isActive: true } }}>
        <HomePage />
      </StaticRouter>
    )
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
