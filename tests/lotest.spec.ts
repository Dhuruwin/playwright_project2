import {test,expect} from '@playwright/test'
import { loginpage } from '../page/loginpaege'

test('loginpagee',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const l1=new loginpage(page)
    await l1.loginUser('standard_user','secret_sauce')
    await l1.loginbutton.click()

    await expect(page).toHaveURL(/inventory.html/);
}

)