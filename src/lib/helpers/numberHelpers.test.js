import { maxCheck } from './numberHelpers'

describe('maxCheck', () => {
  const max = 999
  it('should return num when num < max', () => {
    const num = 25
    const expected = num
    const result = maxCheck(num, max)
    expect(result).toEqual(expected)
  })
  it('should return 99999 when num >= 99999', () => {
    const num = 12500
    const expected = max
    const result = maxCheck(num, max)
    expect(result).toEqual(expected)
  })
})
