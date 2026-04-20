import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByText('Swag Labs').click();
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').press('CapsLock');
  await page.locator('[data-test="password"]').press('CapsLock');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="item-0-img-link"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="about-sidebar-link"]').click();
  await page.goto('https://www.saucedemo.com/inventory.html');
});
