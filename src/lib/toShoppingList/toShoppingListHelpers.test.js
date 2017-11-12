import {
  extractIngredients,
  removeItem,
  convertDownNature,
  convertBackNature,
  flattenAddQuantity,
} from './toShoppingListHelpers'

describe('ingredientsHelpers test suite', () => {
  const ing1 = {
    id: 'id-01',
    name: 'ing1',
    quantity: 200,
    nature: 'g',
  }
  const ing2 = {
    id: 'id-02',
    name: 'ing2',
    quantity: 3,
    nature: 'kg',
  }
  const ing3 = {
    id: 'id-03',
    name: 'ing3',
    quantity: 2,
    nature: 'l',
  }
  const ing4 = {
    id: 'id-04',
    name: 'ing4',
    quantity: 2,
    nature: 'item',
  }
  const recipes = [
    {
      name: 'recipe1',
      ingredients: [ing1, ing2, ing3, ing4],
    },
    {
      name: 'recipe2',
      ingredients: [
        {
          id: 'id-05',
          name: 'ing1',
          quantity: 700,
          nature: 'g',
        },
        {
          id: 'id-06',
          name: 'recipe2-ing2',
          quantity: 600,
          nature: 'g',
        },
        {
          id: 'id-07',
          name: 'recipe2-ing3',
          quantity: 200,
          nature: 'ml',
        },
        {
          id: 'id-08',
          name: 'ing4',
          quantity: 1,
          nature: 'kg',
        },
      ],
    },
    {
      name: 'recipe3',
      ingredients: [
        {
          id: 'id-09',
          name: 'ing1',
          quantity: 3,
          nature: 'kg',
        },
        {
          id: 'id-10',
          name: 'ing2',
          quantity: 2,
          nature: 'kg',
        },
        {
          id: 'id-11',
          name: 'ing3',
          quantity: 400,
          nature: 'ml',
        },
        {
          id: 'id-12',
          name: 'recipe3-ing4',
          quantity: 4,
          nature: 'box',
        },
      ],
    },
    {
      name: 'recipe4',
      ingredients: [
        {
          id: 'id-13',
          name: 'ing1',
          quantity: 30,
          nature: 'g',
        },
        {
          id: 'id-14',
          name: 'ing2',
          quantity: 200,
          nature: 'g',
        },
      ],
    },
    {
      name: 'recipe5',
      ingredients: [
        {
          id: 'id-15',
          name: 'ing1',
          quantity: 300,
          nature: 'ml',
        },
        {
          id: 'id-16',
          name: 'ing2',
          quantity: 3,
          nature: 'kg',
        },
      ],
    },
  ]

  const allIngredients = [
    ing1,
    ing2,
    ing3,
    ing4,
    {
      id: 'id-05',
      name: 'ing1',
      quantity: 700,
      nature: 'g',
    },
    {
      id: 'id-06',
      name: 'recipe2-ing2',
      quantity: 600,
      nature: 'g',
    },
    {
      id: 'id-07',
      name: 'recipe2-ing3',
      quantity: 200,
      nature: 'ml',
    },
    {
      id: 'id-08',
      name: 'ing4',
      quantity: 1,
      nature: 'kg',
    },
    {
      id: 'id-09',
      name: 'ing1',
      quantity: 3,
      nature: 'kg',
    },
    {
      id: 'id-10',
      name: 'ing2',
      quantity: 2,
      nature: 'kg',
    },
    {
      id: 'id-11',
      name: 'ing3',
      quantity: 400,
      nature: 'ml',
    },
    {
      id: 'id-12',
      name: 'recipe3-ing4',
      quantity: 4,
      nature: 'box',
    },
    {
      id: 'id-13',
      name: 'ing1',
      quantity: 30,
      nature: 'g',
    },
    {
      id: 'id-14',
      name: 'ing2',
      quantity: 200,
      nature: 'g',
    },
    {
      id: 'id-15',
      name: 'ing1',
      quantity: 300,
      nature: 'ml',
    },
    {
      id: 'id-16',
      name: 'ing2',
      quantity: 3,
      nature: 'kg',
    },
  ]

  const ingredientsWithSameNameAndNature = [
    {
      id: 'id-30',
      name: 'same-name',
      quantity: 200,
      nature: 'g',
    },
    {
      id: 'id-31',
      name: 'same-name',
      quantity: 2500,
      nature: 'g',
    },
    {
      id: 'id-32',
      name: 'same-name',
      quantity: 350,
      nature: 'g',
    },
    {
      id: 'id-33',
      name: 'same-name',
      quantity: 500,
      nature: 'g',
    },
  ]

  test('extractIngredients should return all the ingredients from the list', () => {
    const result = extractIngredients(recipes)
    expect(result).toEqual(allIngredients)
  })

  describe('convertDownNature', () => {
    it('should return nature "g" and quantity * 1000 when nature is "kg"', () => {
      const ing2Expected = {
        id: 'id-02',
        name: 'ing2',
        quantity: 3000,
        nature: 'g',
      }
      const ing2Result = convertDownNature(ing2)
      expect(ing2Result).toEqual(ing2Expected)
    })

    it('should return nature "ml" and quantity * 1000 when nature is "l"', () => {
      const ing3Expected = {
        id: 'id-03',
        name: 'ing3',
        quantity: 2000,
        nature: 'ml',
      }
      const ing3Result = convertDownNature(ing3)
      expect(ing3Result).toEqual(ing3Expected)
    })
    it('should return same ingredient when nature is not "kg" nor "l"', () => {
      const ing1Result = convertDownNature(ing1)
      expect(ing1Result).toEqual(ing1)
      const ing4Result = convertDownNature(ing4)
      expect(ing4Result).toEqual(ing4)
    })
  })

  describe('convertBackNature', () => {
    it('should return same when nature is not: "g", "kg", "l", "ml"', () => {
      const result = convertBackNature(ing1)
      expect(result).toEqual(ing1)
    })
    it('should return same when nature is "g" and quantity < 1000', () => {
      const result = convertBackNature(ing4)
      expect(result).toEqual(ing4)
    })
    it('should return same when nature is "l" and quantity < 1000', () => {
      const result = convertBackNature(ing4)
      expect(result).toEqual(ing4)
    })
    it('should return "kg" when nature is "g" and quantity >= 1000', () => {
      const ingredient = {
        id: 'id-20',
        name: 'ing-20',
        quantity: 3250,
        nature: 'g',
      }
      const expected = {
        id: 'id-20',
        name: 'ing-20',
        quantity: 3.25,
        nature: 'kg',
      }
      const result = convertBackNature(ingredient)
      expect(result).toEqual(expected)
    })

    it('should return "l" when nature is "ml" and quantity >= 1000', () => {
      const ingredient = {
        id: 'id-21',
        name: 'ing-21',
        quantity: 3250,
        nature: 'ml',
      }
      const expected = {
        id: 'id-21',
        name: 'ing-21',
        quantity: 3.25,
        nature: 'l',
      }
      const result = convertBackNature(ingredient)
      expect(result).toEqual(expected)
    })
  })

  test('flattenAddQuantity should return an item with the quantity added', () => {
    const expected = {
      id: 'id-30',
      name: 'same-name',
      quantity: 3550,
      nature: 'g',
    }
    const result = flattenAddQuantity(ingredientsWithSameNameAndNature)
    expect(result).toEqual(expected)
  })

  describe('removeItem', () => {
    const itemToRemove = {
      id: 'id-07',
      name: 'recipe2-ing3',
      quantity: 200,
      nature: 'ml',
    }
    const list = [
      {
        id: 'id-01',
        name: 'ing1',
        quantity: 700,
        nature: 'g',
      },
      {
        id: 'id-02',
        name: 'recipe2-ing2',
        quantity: 600,
        nature: 'g',
      },
      itemToRemove,
      {
        id: 'id-08',
        name: 'ing4',
        quantity: 1,
        nature: 'kg',
      },
    ]

    it('should return same list without element to remove', () => {
      const expected = [
        {
          id: 'id-01',
          name: 'ing1',
          quantity: 700,
          nature: 'g',
        },
        {
          id: 'id-02',
          name: 'recipe2-ing2',
          quantity: 600,
          nature: 'g',
        },
        {
          id: 'id-08',
          name: 'ing4',
          quantity: 1,
          nature: 'kg',
        },
      ]
      const result = removeItem(list, itemToRemove)
      expect(result).toEqual(expected)
    })
  })
})
