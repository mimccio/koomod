import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { FadeTransition, FadeComp } from './Fade'

describe('"Fade" animation test suite', () => {
  test('"FadeComp" should match snapshot', () => {
    const comp = renderer.create(<FadeComp />)
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('"FadeTransition" should match snapshot', () => {
    const comp = renderer.create(<FadeTransition>{status => <FadeComp status={status} />}</FadeTransition>)
    const tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
