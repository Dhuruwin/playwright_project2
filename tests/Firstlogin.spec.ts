import {test,expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { InvenTory } from '../page/Inventory'
import { CartPage } from '../page/cartPage'
import { CheckOut } from '../page/checkout'

test('Verify loginpage with username and password',async({page})=>
{
    const user1=new LoginPage(page)
    const user2=new InvenTory(page)
    const user3=new CartPage(page)
    const user4=new CheckOut(page)
    
    await user1.Login('standard_user','secret_sauce')
    await user1.verifyLoginpage()
    await user2.productPage()
    await user2.addTocart()
    await user2.cartIcon()
    await user2.verifyCart()
    await user2.removeBtn()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await user3.cheCoutbtn()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await user3.contShopping()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page).toHaveTitle('product')

    await user4.CheckOutPage('Dhurv','raja',63637)
    await user4.finsih()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await user4.success.toBeVisible('success')


}
)
test('invalid login',async({page})=>
{
    const user1=new LoginPage(page)
    await user1.goto()
    await user1.Login('uhuig','jyfyu')

    await expect(user1.errorMsg).toBeVisible();
    await expect(user1.errorMsg).toContainText('usearname and password  invalid')
    


})