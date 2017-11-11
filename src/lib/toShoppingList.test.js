import toShoppingList from './toShoppingList'

describe('toShoppingList', () => {
  const recipes = [
    {
      name: 'recipe1',
      ingredients: [
        {
          id: 'id-01-01',
          name: 'ingredient-1',
          quantity: 700,
          nature: 'g',
        },
        {
          id: 'id-01-02',
          name: 'ingredient-2',
          quantity: 600,
          nature: 'g',
        },
        {
          id: 'id-01-03',
          name: 'ingredient-3',
          quantity: 200,
          nature: 'ml',
        },
        {
          id: 'id-01-04',
          name: 'ingredient-4',
          quantity: 1,
          nature: 'kg',
        },
      ],
    },
    {
      name: 'recipe2',
      ingredients: [
        {
          id: 'id-02-01',
          name: 'ingredient-5',
          quantity: 3,
          nature: 'item',
        },
        {
          id: 'id-02-02',
          name: 'ingredient-3',
          quantity: 2,
          nature: 'kg',
        },
        {
          id: 'id-02-03',
          name: 'ingredient-1',
          quantity: 400,
          nature: 'g',
        },
        {
          id: 'id-02-04',
          name: 'ingredient-7',
          quantity: 4,
          nature: 'box',
        },
      ],
    },
    {
      name: 'recipe3',
      ingredients: [
        {
          id: 'id-03-01',
          name: 'ingredient-7',
          quantity: 30,
          nature: 'g',
        },
        {
          id: 'id-03-02',
          name: 'ingredient-2',
          quantity: 2,
          nature: 'kg',
        },
      ],
    },
    {
      name: 'recipe4',
      ingredients: [
        {
          id: 'id-04-01',
          name: 'ingredient-2',
          quantity: 300,
          nature: 'ml',
        },
        {
          id: 'id-04-02',
          name: 'ingredient-3',
          quantity: 3,
          nature: 'l',
        },
        {
          id: 'id-04-03',
          name: 'ingredient-8',
          quantity: 1,
          nature: 'item',
        },
      ],
    },
  ]

  it('should return shopping list', () => {
    const expected = [
      {
        id: 'id-01-01',
        name: 'ingredient-1',
        quantity: 1.1,
        nature: 'kg',
      },
      {
        id: 'id-01-02',
        name: 'ingredient-2',
        quantity: 2.6,
        nature: 'kg',
      },
      {
        id: 'id-04-01',
        name: 'ingredient-2',
        quantity: 300,
        nature: 'ml',
      },
      {
        id: 'id-01-03',
        name: 'ingredient-3',
        quantity: 3.2,
        nature: 'l',
      },
      {
        id: 'id-02-02',
        name: 'ingredient-3',
        quantity: 2,
        nature: 'kg',
      },
      {
        id: 'id-01-04',
        name: 'ingredient-4',
        quantity: 1,
        nature: 'kg',
      },
      {
        id: 'id-02-01',
        name: 'ingredient-5',
        quantity: 3,
        nature: 'items',
      },
      {
        id: 'id-02-04',
        name: 'ingredient-7',
        quantity: 4,
        nature: 'boxes',
      },
      {
        id: 'id-03-01',
        name: 'ingredient-7',
        quantity: 30,
        nature: 'g',
      },
      {
        id: 'id-04-03',
        name: 'ingredient-8',
        quantity: 1,
        nature: 'item',
      },
    ]

    const result = toShoppingList(recipes)
    expect(result).toEqual(expected)
  })
})
