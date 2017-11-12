import { isSameName, handlePlural } from './stringHelpers'

describe('isSameName', () => {
  const test = 'sucre'
  it('should return false when name !== tested', () => {
    const result = isSameName(test, 'somethingelse')
    expect(result).toEqual(false)
  })
  it('should return true when test === tested', () => {
    const result = isSameName(test, test)
    expect(result).toEqual(true)
  })
  it('should return true when test === tested but with upper', () => {
    const result = isSameName(test, 'SuCre')
    expect(result).toEqual(true)
    const resultUpper = isSameName('SuCre', 'sUcre')
    expect(resultUpper).toEqual(true)
  })
  it('should return true when test === tested but with accent', () => {
    const result = isSameName(test, 'sùcré')
    expect(result).toEqual(true)
    const resultUpper = isSameName('sùcre', 'sucré')
    expect(resultUpper).toEqual(true)
  })
  it('should return true when test === tested but with accent and upper', () => {
    const result = isSameName(test, 'Sùcré')
    expect(result).toEqual(true)
    const resultUpper = isSameName('Sùcre', 'suCré')
    expect(resultUpper).toEqual(true)
  })
})

describe('handlePlural', () => {
  it('should return false if no arg is provided', () => {
    const result = handlePlural(undefined)
    expect(result).toEqual(false)
  })

  it('should return false if quantity is 0', () => {
    const result = handlePlural(0)
    expect(result).toEqual(false)
  })

  it('should return false if quantity < 2', () => {
    const result = handlePlural(1.6)
    expect(result).toEqual(false)
  })
  it('should return true if quantity === 2', () => {
    const result = handlePlural(2)
    expect(result).toEqual(true)
  })
  it('should return true if quantity > 2', () => {
    const result = handlePlural(3.5)
    expect(result).toEqual(true)
  })
})
