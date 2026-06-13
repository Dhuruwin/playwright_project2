 import {test,expect} from '@playwright/test'
import { AlertMsg } from '../page/DisplayPopupmsg.page'

let popup:AlertMsg

test.describe('Popup message check',()=>{
    test.beforeEach('navigation to webpage',async({page})=>{
       popup=new AlertMsg(page)
     await popup.Navigate()
     await expect(page).toHaveURL(process.env.ALERT_MSG! )
    })

   test('Alert btn click',async({page})=>{
        await popup.AlerPopupHandle()
        
        await popup.AlertMsg()
        await expect(page).toHaveURL(process.env.ALERT_MSG!)
        
        
    })

    test('Confirm box accept',async({page})=>{
        await popup.ConfirmAccept()
        await popup.ConfirmBox()
        await expect(page.locator('#confirm-demo')).toContainText('You pressed OK!')
    })
    test('confirm box cancel',async({page})=>{
        await popup.ConfirmbtnCancel()
        await popup.ConfirmBox()
        await expect(page.locator('#confirm-demo')).toContainText('You pressed Cancel!')

    })
    test('Prompt box',async({page})=>{
        await popup.PromptCheck('Hello')
        await popup.PromptBox()
        await expect(page.locator('#prompt-demo')).toContainText("You have entered 'Hello' !")
    })

})
/* import { test, expect } from "@playwright/test";

test("should open popup", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo",
  );
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("I am an alert box!");
    await dialog.accept();
  });
  await page.getByRole("button", { name: "Click Me" }).first().click();
}); */