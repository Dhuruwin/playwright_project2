import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/radiobutton-demo/');
  await page.getByRole('button', { name: 'Get value', exact: true }).click();
  await page.getByText('Radio button is Not checked').click();
});