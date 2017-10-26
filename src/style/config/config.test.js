import { fontSizeValue, fontSize, spacing } from './index'
import { fontSizeConfig, baseSpacingConfig } from './sizeConfig'

describe('styles config test suite', () => {
  test('fontsize headings values should be in good order', () => {
    expect(fontSizeValue.heading1).toBeGreaterThan(fontSizeValue.heading2)
    expect(fontSizeValue.heading2).toBeGreaterThan(fontSizeValue.heading3)
    expect(fontSizeValue.heading3).toBeGreaterThan(fontSizeValue.heading4)
  })
  test('fontsize body values should be in good order', () => {
    expect(fontSizeValue.bodyHuge).toBeGreaterThan(fontSizeValue.bodyBig)
    expect(fontSizeValue.bodyBig).toBeGreaterThan(fontSizeValue.body)
    expect(fontSizeValue.body).toBeGreaterThan(fontSizeValue.bodySmall)
    expect(fontSizeValue.bodySmall).toBeGreaterThan(fontSizeValue.bodyTiny)
  })
  test('`fontSizeValue` should be equal to the `fontSizeConfig` value from the `sizeConfig` file', () => {
    expect(fontSizeValue.heading1).toEqual(fontSizeConfig.heading1)
    expect(fontSizeValue.heading2).toEqual(fontSizeConfig.heading2)
    expect(fontSizeValue.heading3).toEqual(fontSizeConfig.heading3)
    expect(fontSizeValue.heading4).toEqual(fontSizeConfig.heading4)
    expect(fontSizeValue.bodyHuge).toEqual(fontSizeConfig.bodyHuge)
    expect(fontSizeValue.bodyBig).toEqual(fontSizeConfig.bodyBig)
    expect(fontSizeValue.body).toEqual(fontSizeConfig.body)
    expect(fontSizeValue.bodySmall).toEqual(fontSizeConfig.bodySmall)
    expect(fontSizeValue.bodyTiny).toEqual(fontSizeConfig.bodyTiny)
  })
  test('`fontSize` should be like fontSizeValue but a string with `px`', () => {
    expect(fontSize.heading1).toBe(`${fontSizeConfig.heading1}px`)
    expect(fontSize.body).toBe(`${fontSizeConfig.body}px`)
  })
  test('`fontSizeValue.rem` should be equal to `fontSizeConfig.rem` from the `sizeConfig` file', () => {
    expect(fontSizeValue.rem).toEqual(fontSizeConfig.rem)
  })
  test('`fontSize.rem` should be like fontSizeValue.rem but a string with `px`', () => {
    expect(fontSize.rem.huge).toBe(`${fontSizeConfig.rem.huge}rem`)
    expect(fontSize.rem.big).toBe(`${fontSizeConfig.rem.big}rem`)
    expect(fontSize.rem.base).toBe(`${fontSizeConfig.rem.base}rem`)
    expect(fontSize.rem.small).toBe(`${fontSizeConfig.rem.small}rem`)
    expect(fontSize.rem.tiny).toBe(`${fontSizeConfig.rem.tiny}rem`)
  })
  test('`spacing` should be a string with `px` and a multiple of `baseSpacingConfig`', () => {
    expect(spacing.base).toBe(`${baseSpacingConfig}px`)
    expect(spacing.small).toBe(`${Math.ceil(baseSpacingConfig / 2)}px`)
    expect(spacing.tiny).toBe(`${Math.ceil(baseSpacingConfig / 4)}px`)
    expect(spacing.big).toBe(`${baseSpacingConfig * 2}px`)
    expect(spacing.huge).toBe(`${baseSpacingConfig * 4}px`)
  })
})
