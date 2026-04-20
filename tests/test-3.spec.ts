import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link', { name: 'Home (current)' })).toBeVisible();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByText('New message ×').click();
  await page.getByRole('dialog', { name: 'New message' }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByText('Log in ×').click();
  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
});