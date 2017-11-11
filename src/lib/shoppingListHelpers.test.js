import { extractIngredients, ingredientHasSameNameAndSameNature, convertNatureDown } from './shoppingListHelpers'

describe('toShoppingList test suite', () => {
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
  ]

  test('extractIngredients should return all the ingredients from the list', () => {
    const result = extractIngredients(recipes)
    expect(result).toEqual(allIngredients)
  })

  test(
    'ingredientHasSameNameAndSameNature should return an array of the ingredients ' +
      'that has the same name and same nature as the ingredient argument',
    () => {
      const expected = [
        ing1,
        {
          id: 'id-05',
          name: 'ing1',
          quantity: 700,
          nature: 'g',
        },
        {
          id: 'id-13',
          name: 'ing1',
          quantity: 30,
          nature: 'g',
        },
      ]
      const result = ingredientHasSameNameAndSameNature(ing1, allIngredients)
      expect(result).toEqual(expected)
    }
  )

  describe('convertNatureDown', () => {
    it('should return nature "g" and quantity * 1000 when nature is "kg"', () => {
      const ing2Expected = {
        id: 'id-02',
        name: 'ing2',
        quantity: 3000,
        nature: 'g',
      }
      const ing2Result = convertNatureDown(ing2)
      expect(ing2Result).toEqual(ing2Expected)
    })

    it('should return nature "ml" and quantity * 1000 when nature is "l"', () => {
      const ing3Expected = {
        id: 'id-03',
        name: 'ing3',
        quantity: 2000,
        nature: 'ml',
      }
      const ing3Result = convertNatureDown(ing3)
      expect(ing3Result).toEqual(ing3Expected)
    })
    it('should return same ingredient when nature is not "kg" nor "l"', () => {
      const ing1Result = convertNatureDown(ing1)
      expect(ing1Result).toEqual(ing1)
      const ing4Result = convertNatureDown(ing4)
      expect(ing4Result).toEqual(ing4)
    })
  })
})
