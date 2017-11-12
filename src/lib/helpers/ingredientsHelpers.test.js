import { handleIngredientNaturePlural } from './ingredientHelpers'

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
