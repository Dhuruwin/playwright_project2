import { test, expect } from "@playwright/test";

test("should download a file", async ({ page }) => {
  // Navigate to the page that triggers the download
  await page.goto("https://the-internet.herokuapp.com/download");
  const downloadPromise = page.waitForEvent("download");
  await page.click("text=hello.txt");
  const download = await downloadPromise;
  //   console.log("Download started:", download.suggestedFilename());
  const fileName = await download.suggestedFilename();
  // Save the downloaded file to a specific path
  await expect(fileName).toBe("hello.txt");
  const filePath = `downloads/${fileName}`;
  await download.saveAs(filePath);
  // Verify that the file has been downloaded
});