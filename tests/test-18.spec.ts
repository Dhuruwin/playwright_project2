import { test, expect } from "@playwright/test";

test("test", async ({ browser }) => {
  const firstContext = await browser.newContext();
  const firstPage = await firstContext.newPage();
 
  await firstPage.goto(process.env.TEST_URL!);
  await firstPage.locator('[data-test="username"]').click();
  await firstPage.locator('[data-test="username"]').fill("standard_user");
  await firstPage.locator('[data-test="username"]').press("Tab");
  await firstPage.locator('[data-test="password"]').fill("secret_sauce");
  await firstPage.locator('[data-test="login-button"]').click();
  await expect(
    firstPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
  ).toBeAttached();

  await secPage.goto("https://www.saucedemo.com/");
  await expect(
    firstPage.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
  ).toBeAttached();
});