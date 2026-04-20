import { test, expect } from "@playwright/test";
// https://www.testmuai.com/selenium-playground/drag-and-drop-demo/
test("Drag and Drop", async ({ page }) => {
  await page.goto(
    "https://www.testmuai.com/selenium-playground/drag-and-drop-demo/",
  );
  const source = page.getByText("Draggable 1");
  const source1 = page.getByText("Draggable 2");

  const target = page.locator("#mydropzone");
  const dropedlist = page.locator("#droppedlist");
  //   await source.hover();
  //   await page.mouse.down();
  //   await target.hover();
  //   await page.mouse.up();
  await source.click();
  await source.dragTo(target);
  // await source1.dragTo(target);
  //   id="droppedlist"
  // await page.waitForTimeout(5000);
  await expect(dropedlist.filter({ hasText: "Draggable 1" })).toBeVisible();
  // await expect(dropedlist.filter({ hasText: "Draggable 2" })).toBeVisible();

  //   await expect(page.getByText("Draggable 1")).toBeVisible();
});