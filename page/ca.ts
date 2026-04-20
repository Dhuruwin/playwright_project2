import {Page,Locator} from '@playwright/test'
export class CartPage{
    readonly file:Page
    readonly checkout:Locator
    readonly continueshopping:Locator

    constructor(p:Page){
        this.file=p
        this.checkout=p.getByRole('button',{name:'Checkout'})
        this.continueshopping=p.getByRole('link')
    }
    async cheCoutbtn(){
        await this.checkout.click()

    }
    async contShopping(){
        await this.continueshopping.click()
        
    }
}