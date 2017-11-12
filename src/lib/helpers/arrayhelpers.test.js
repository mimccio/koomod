import { sameNameIsInList, byNameAlphabetical } from './arrayHelpers'

describe('sameNameIsInList', () => {
  it('should return true if the list contain an item with this name', () => {
    const list = [{ id: '01', name: 'Banane' }, { id: '02', name: 'Sucre' }, { id: '03', name: 'chocolat' }]
    const result = sameNameIsInList('sucre', list)
    expect(result).toEqual(true)
  })
})

describe('byNameAlphabetical', () => {
  it('sorting with byNameAlphabetical should sort a list alphabaticly', () => {
    const list = [
      { id: '01', name: 'Banane' },
      { id: '02', name: 'Sucre' },
      { id: '03', name: 'chocolat' },
      { id: '03', name: 'Oranges' },
    ]
    const expected = [
      { id: '01', name: 'Banane' },
      { id: '03', name: 'chocolat' },
      { id: '03', name: 'Oranges' },
      { id: '02', name: 'Sucre' },
    ]
    const result = list.sort((a, b) => byNameAlphabetical(a, b))
    expect(result).toEqual(expected)
  })
})
