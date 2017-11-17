import handleErrors from './index'

describe('handleErrors', () => {
  it('should return the error message', () => {
    const error = 'Error Message'
    const result = handleErrors(error)
    expect(result).toEqual(error)
  })
  it('should remove "GraphQL error: " from GraphQL error message', () => {
    const error = 'GraphQL error: User already exists with that information'
    const expected = 'User already exists with that information'
    const result = handleErrors(error)
    expect(result).toEqual(expected)
  })
  it('should return write message when error is "Network error: Failed to fetch"', () => {
    const error = 'Network error: Failed to fetch'
    const expectedLong = 'Network error, please check your internet connection'
    const expectedShort = 'No Connection'
    const resultLong = handleErrors(error)
    const resultShort = handleErrors(error, true)
    expect(resultLong).toEqual(expectedLong)
    expect(expectedShort).toEqual(resultShort)
  })
})
