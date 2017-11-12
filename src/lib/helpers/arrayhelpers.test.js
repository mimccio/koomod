import { findById } from './arrayHelpers'

describe('findById', () => {
  it('should return the expected item from an array', () => {
    const startTodos = [{ id: '01', name: 'one' }, { id: '02', name: 'two' }, { id: '03', name: 'three' }]
    const expected = { id: '02', name: 'two' }
    const result = findById('02', startTodos)
    expect(result).toEqual(expected)
  })
})
