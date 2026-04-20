/* import{test,expect} from '@playwright/test'

test('file upload',async({page})=>{
    
}) */
import { test, expect } from "@playwright/test";

test("simple file upload", async ({ page }) => {
  // open website
  await page.goto("https://the-internet.herokuapp.com/upload");

  // create file and name as test-file.txt (keep file in project root)
  await page.setInputFiles("#file-upload", "test-file.txt");

  // click upload
  await page.click("#file-submit");

  // verify
  await expect(page.locator("#uploaded-files")).toHaveText("test-file.txt");
});