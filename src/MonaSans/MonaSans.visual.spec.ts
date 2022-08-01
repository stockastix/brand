/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: MonaSans', () => {
  test('Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=misc-monasans--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})