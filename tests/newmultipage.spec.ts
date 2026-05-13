import {test,expect} from '@playwright/test'
test("checking multi tab",async({browser})=>{
    const firstContext=await browser.newContext()
    const firstPage=await firstContext.newPage()
    const secPage=await firstContext.newPage()


    await firstPage.goto(process.env.MULTITAB_URL!)
    await expect(firstPage).toHaveURL(process.env.MULTITAB_URL!)
    await expect(firstPage.locator('#username')).toBeVisible()
    await expect(firstPage.locator('#password')).toBeVisible()
    await firstPage.locator('#username').fill('practice')
    await firstPage.locator('#password').fill('SuperSecretPassword!')
    await expect(firstPage.getByRole('button',{name:'Login'})).toBeEnabled()
    await expect(firstPage.getByRole('button',{name:'Login'})).toBeVisible()
    await firstPage.getByRole('button',{name:'Login'}).click()
    await expect(firstPage.locator('#flash')).toContainText('You logged into a secure area!')
    await expect(firstPage.getByRole('link', { name: 'Logout' })).toBeVisible()
    await firstPage.getByRole('link', { name: 'Logout' }).click()
     await expect(firstPage.locator('#flash')).toContainText('You logged out of the secure area!')
    

    await secPage .goto(process.env.MULTITAB_URL!)
    //await expect(firstPage.locator('#flash')).toContainText('You logged into a secure area!')


})