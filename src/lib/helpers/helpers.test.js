import { isInListString, isInListObj, isInList, sameNameIsInList } from './index'

describe.skip('is in list test suite', () => {
  const nameInList = 'sucre'
  const nameNotInList = 'notInListName'
  const listString = ['tomato', nameInList, 'milk']
  const key = 'name'
  const listObj = [
    {
      name: nameInList,
      quantity: 20,
      nature: 'g',
    },
    {
      name: 'tomato',
      quantity: 4,
      nature: 'item',
    },
    {
      name: 'milk',
      quantity: 1.5,
      nature: 'l',
    },
  ]

  describe('isInlistString', () => {
    it('should return FALSE when list IS empty', () => {
      const result = isInListString(nameNotInList, [])
      expect(result).toEqual(false)
    })
    it('should return FALSE when "value" is NOT in list of srings', () => {
      const result = isInListString(nameNotInList, listString)
      expect(result).toEqual(false)
    })
    it('should return TRUE when "value" IS in list of srings', () => {
      const result = isInListString(nameInList, listString)
      expect(result).toEqual(true)
    })
  })

  describe('isInlistObj', () => {
    it('should return FALSE when list IS empty', () => {
      const result = isInListString(nameNotInList, [])
      expect(result).toEqual(false)
    })
    it('should return FALSE when "value" is NOT in list of objects', () => {
      const result = isInListObj(nameNotInList, listObj, key)
      expect(result).toEqual(false)
    })
    it('should return TRUE when "value" IS in list of objects', () => {
      const result = isInListObj(nameInList, listObj, key)
      expect(result).toEqual(true)
    })
  })

  describe('isInList', () => {
    it('should return FALSE when list is empty', () => {
      const result = isInList(nameNotInList, [])
      expect(result).toEqual(false)
    })
    it('should return FALSE when "value" is NOT in list of srings', () => {
      const result = isInList(nameNotInList, listString)
      expect(result).toEqual(false)
    })
    it('should return FALSE when "value" is NOT in list of objects', () => {
      const result = isInList(nameNotInList, listObj, key)
      expect(result).toEqual(false)
    })
    it('should return TRUE when "value" is in list of srings', () => {
      const result = isInList(nameInList, listString)
      expect(result).toEqual(true)
    })
    it('should return TRUE when "value" is in list of objects', () => {
      const result = isInList(nameInList, listObj, key)
      expect(result).toEqual(true)
    })
  })
})

describe.skip('sameNameIsInList', () => {
  const list = [
    {
      id: 'ingredient-01-id',
      name: 'Sùcre',
      quantity: 200,
      nature: 'g',
    },
    {
      id: 'ingredient-02-id',
      name: 'bànaNe',
      quantity: 2,
      nature: 'item',
    },
    {
      id: 'ingredient-03-id',
      name: 'bonjour',
      quantity: 200,
      nature: 'ml',
    },
    {
      id: 'ingredient-04-id',
      name: 'RéciPe',
      quantity: 1,
      nature: 'kg',
    },
    {
      id: 'ingredient-05-id',
      name: 'Sùcre',
      quantity: 200,
      nature: 'g',
    },
  ]
  it('should return false if test has no item with same name in the list', () => {
    const test = {
      id: '01-id',
      name: 'blabla',
      quantity: 200,
      nature: 'g',
    }
    const result = sameNameIsInList(test, list)
    expect(result).toEqual(false)
  })
  it('should return true if test has same name as an item in the list', () => {
    const test1 = {
      id: '01-id',
      name: 'sucre',
      quantity: 200,
      nature: 'g',
    }
    const test2 = {
      id: '01-id',
      name: 'banane',
      quantity: 200,
      nature: 'g',
    }
    const result1 = sameNameIsInList(test1, list)
    expect(result1).toEqual(true)
    const result2 = sameNameIsInList(test2, list)
    expect(result2).toEqual(true)
  })
})
