import{test,expect} from '@playwright/test'
import{multitab} from '../page/multitab.page'

test('multi tab test',async({browser})=>{
    const firstContext=await browser.newContext()
    const firstPage=await firstContext.newPage()
    const secondPage=await firstContext.newPage()

    const loginpage=new multitab(firstPage)
    const secloginpage=new multitab(secondPage)
    await loginpage.navigate()
    await expect(loginpage.username).toBeEnabled()
    await expect(loginpage.username).toBeVisible()
    await expect(loginpage.password).toBeEnabled()
    await expect(loginpage.password).toBeVisible()
    await expect(loginpage.loginbtn).toBeEnabled()
    await expect(loginpage.loginbtn).toBeVisible()
    await loginpage.userdetails("practice","SuperSecretPassword!")
    await loginpage.loginclick()
    await expect(firstPage.locator('#flash')).toContainText('You logged into a secure area!')
    await expect(loginpage.logoutbtn).toBeVisible()
    await loginpage.logoutclick()
    await expect(firstPage.locator('#flash')).toContainText('You logged out of the secure area!')

    await secondPage.navigate()
    
    
})