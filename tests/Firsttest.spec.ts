import {test,expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { products } from '../page/products'
import { cartPage } from '../page/cartPage'
import { Checkpage } from '../page/checkout'
import { paymentpage } from '../page/payment' 

test.describe('sauce demo test',()=>{

    test.beforeEach(async ({page})=>{
       // test('Login',async({page})=>

    const validuser=new LoginPage(page)
    
    await validuser.gotoLoginpage()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    await expect(page).toHaveTitle('Swag Labs')
    await expect(validuser.username).toBeVisible()
    await expect(validuser.username).toBeEditable()
    await expect(validuser.password).toBeVisible()
    await expect(validuser.password).toBeEditable()
    await expect(validuser.loginbtn).toBeVisible()
    await validuser.Login("standard_user","secret_sauce")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

    })

    //product page
    test('product page test',async({page})=>{
        const productName=new products(page)
    
    //title visble check 
    await expect(page).toHaveTitle('Swag Labs')
//products visbie check
    await expect(productName.productname.nth(0)).toBeVisible()
    await expect(productName.price.nth(0)).toBeVisible()
    await expect(productName.addtocart.nth(0)).toBeVisible()
    
    //method calling for to add product
await productName.checkProductname()

    //method calling to  cancel product
    await expect(productName.remove.nth(0)).toBeVisible()
    await productName.removebtn()
    await expect(productName.addtocart.nth(0)).toBeVisible()
await expect(productName.remove.nth(0)).not.toBeVisible()
    })

//cartpage
test('cartpage checking',async({page})=>{
    const carTpage=new cartPage(page)

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
await expect(carTpage.carticon).toBeVisible()
await carTpage.icon()
await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")
await expect(carTpage.continueShopping).toBeVisible()
await expect(carTpage.checkout).toBeVisible()
await carTpage.checkOutbtn()
await expect(carTpage.page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")
await expect(carTpage.cancel).toBeVisible()
await carTpage.cancelbtn()
await expect(carTpage.page).toHaveURL("https://www.saucedemo.com/cart.html")
await expect(carTpage.continueShopping).toBeVisible()
await carTpage.shopping()
await expect(carTpage.page).toHaveURL("https://www.saucedemo.com/inventory.html")
await carTpage.icon()
await carTpage.checkOutbtn()
await expect(carTpage.page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")


//checkoutpage

})
test('checkoutpage check',async({page})=>{
    
const cheCKoutpage=new Checkpage(page)
await expect(cheCKoutpage.page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")

//first name 

await expect(cheCKoutpage.firstname).toBeVisible()
await expect(cheCKoutpage.firstname).toBeEnabled()
await expect(cheCKoutpage.firstname).toBeEditable()

//lastname 

await expect(cheCKoutpage.lastname).toBeVisible()
await expect(cheCKoutpage.lastname).toBeEnabled()
await expect(cheCKoutpage.lastname).toBeEditable()

//zipcode

await expect(cheCKoutpage.Zipcode).toBeVisible()
await expect(cheCKoutpage.Zipcode).toBeEnabled()
await expect(cheCKoutpage.Zipcode).toBeEditable()

//button visible

await expect(cheCKoutpage.continue).toBeVisible()

//method calling

await cheCKoutpage.checkOutpage("dhurv","r","8765")

await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")


})
test('payment check',async({page})=>{
    const carTpage=new cartPage(page)
    const pay=new paymentpage(page)
    const cheCKoutpage=new Checkpage(page)

await expect(pay.finish).toBeVisible()
await expect(pay.cancel).toBeVisible()

await pay.cancelpayment()
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

await carTpage.icon()
await carTpage.checkOutbtn()
await cheCKoutpage.checkOutpage("dhurv","r","8765") 
await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")

await pay.afterpayment()
await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")


    
})

//payment page



test.skip('invalid login check',async({page})=>
{
    
    const invaliduser=new LoginPage(page)
    await invaliduser.gotoLoginpage()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    await invaliduser.Login("wrong_user","123")
    await expect(invaliduser.errormsg).toBeVisible()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    await expect(invaliduser.username).toBeVisible()
})

})
