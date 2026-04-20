import { Page,Locator } from "@playwright/test";

export class cartPage{
    readonly page:Page
    readonly carticon:Locator
    readonly checkout:Locator
    readonly continueShopping :Locator
    readonly cancel:Locator

    constructor(p:Page){
        this.page=p
        this.carticon=p.locator('#shopping_cart_container')
        this.continueShopping=p.getByRole('button',{name:"Continue Shopping"})
        this.checkout=p.getByRole('button',{name:"Checkout"})
        this.cancel=p.getByRole('button',{name:"Cancel"})

    }
    async icon(){
        await this.carticon.click()
    }
    async shopping(){
        await this.continueShopping.click()
    }
    async checkOutbtn(){
        await this.checkout.click()

    }
    async cancelbtn(){
        await this.cancel.click()
    }
    
}