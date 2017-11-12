import {
  findById,
  handlePlural,
  handleIngredientNaturePlural,
  maxCheck,
  isInListString,
  isInListObj,
  isInList,
  hasSameName,
  sameNameIsInList,
} from './helpers'

describe('findById', () => {
  it('should return the expected item from an array', () => {
    const startTodos = [{ id: '01', name: 'one' }, { id: '02', name: 'two' }, { id: '03', name: 'three' }]
    const expected = { id: '02', name: 'two' }
    const result = findById('02', startTodos)
    expect(result).toEqual(expected)
  })
})

describe('handlePlural', () => {
  it('should return false if no arg is provided', () => {
    const quantity = undefined
    const expected = false
    const result = handlePlural(quantity)
    expect(result).toEqual(expected)
  })

  it('should return false if quantity is 0', () => {
    const quantity = 0
    const expected = false
    const result = handlePlural(quantity)
    expect(result).toEqual(expected)
  })

  it('should return false if quantity is 1.6', () => {
    const quantity = 1.6
    const expected = false
    const result = handlePlural(quantity)
    expect(result).toEqual(expected)
  })
  it('should return true if quantity is 2', () => {
    const quantity = 2
    const expected = true
    const result = handlePlural(quantity)
    expect(result).toEqual(expected)
  })
  it('should return true if quantity > 2', () => {
    const quantity = 3.5
    const expected = true
    const result = handlePlural(quantity)
    expect(result).toEqual(expected)
  })
})

describe('handleIngredientNaturePlural', () => {
  it('should return the same nature if no quantity is provided', () => {
    const nature = 'hello'
    const expected = nature
    const result = handleIngredientNaturePlural(nature)
    expect(result).toEqual(expected)
  })
  it('should return the same nature if quantity < 2', () => {
    const nature = 'hello'
    const quantity = 1.5
    const expected = nature
    const result = handleIngredientNaturePlural(nature, quantity)
    expect(result).toEqual(expected)
  })
  it('should return "box" if quantity < 2', () => {
    const nature = 'box'
    const quantity = 1.5
    const expected = nature
    const result = handleIngredientNaturePlural(nature, quantity)
    expect(result).toEqual(expected)
  })
  it('should return "boxes" if quantity >= 2', () => {
    const nature = 'box'
    const quantity = 2
    const expected = 'boxes'
    const result = handleIngredientNaturePlural(nature, quantity)
    expect(result).toEqual(expected)
  })
  it('should return "item" if quantity < 2', () => {
    const nature = 'item'
    const quantity = 1.5
    const expected = nature
    const result = handleIngredientNaturePlural(nature, quantity)
    expect(result).toEqual(expected)
  })
  it('should return "boxes" if quantity >= 2', () => {
    const nature = 'item'
    const quantity = 2
    const expected = 'items'
    const result = handleIngredientNaturePlural(nature, quantity)
    expect(result).toEqual(expected)
  })
})

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

describe('is in list test suite', () => {
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

describe('hasSameName', () => {
  const test = {
    id: 'recipe-id-01',
    name: 'sucre',
    quantity: 500,
    nature: 'ml',
  }
  const testUpper = {
    id: 'recipe-id-01',
    name: 'Sucre',
    quantity: 2,
    nature: 'kg',
  }
  const testAccent = {
    id: 'recipe-id-01',
    name: 'sùcre',
    quantity: 500,
    nature: 'ml',
  }
  const testedDifferent = {
    id: 'recipe-id-02',
    name: 'autre',
    quantity: 180,
    nature: 'g',
  }
  const testedSame = {
    id: 'recipe-id-02',
    name: 'sucre',
    quantity: 80,
    nature: 'g',
  }
  const testedSameUpper = {
    id: 'recipe-id-03',
    name: 'Sucre',
    quantity: 1,
    nature: 'kg',
  }
  const testedSameAccent = {
    id: 'recipe-id-03',
    name: 'sùcre',
    quantity: 1,
    nature: 'kg',
  }
  it('should return false when test.name !== tested.name', () => {
    const result = hasSameName(test, testedDifferent)
    expect(result).toEqual(false)
  })
  it('should return true when test.name === tested.name', () => {
    const result = hasSameName(test, testedSame)
    expect(result).toEqual(true)
  })
  it('should return true when test.name === tested.name but with upper', () => {
    const result = hasSameName(test, testedSameUpper)
    expect(result).toEqual(true)
    const resultUpper = hasSameName(testUpper, testedSame)
    expect(resultUpper).toEqual(true)
  })
  it('should return true when test.name === tested.name but with accent', () => {
    const result = hasSameName(test, testedSameAccent)
    expect(result).toEqual(true)
    const resultUpper = hasSameName(testAccent, testedSame)
    expect(resultUpper).toEqual(true)
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
