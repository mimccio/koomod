// @flow
export const findById = (id: ?string, list: Object[]) => list.find((item: { id: string }) => item.id === id)

export const handlePlural = (quantity?: number = 0) => quantity >= 2

export const handleIngredientNaturePlural = (nature?: 'g' | 'kg' | 'ml' | 'l' | 'item' | 'box', quantity?: number) => {
  if (typeof quantity === 'number') {
    if (quantity >= 2 && nature === 'box') return 'boxes'
    if (quantity >= 2 && nature === 'item') return 'items'
  }
  return nature
}
