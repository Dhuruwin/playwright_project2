 import {test , expect} from '@playwright/test'
import { addCart } from '../page/addtocart'


test('user needs to test ',async({page})=>{
    const n1=new addCart(page)


    n1.loginpage('standard_user','secret_sauce')
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    

}) 
