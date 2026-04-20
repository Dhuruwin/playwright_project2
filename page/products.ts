import { Page,Locator } from "@playwright/test";
export class products
{
    readonly page : Page
    readonly addtocart : Locator
    readonly price : Locator
    readonly carticon : Locator
    readonly productname : Locator
    readonly remove: Locator
    //readonly continueshopping : Locator

    constructor(p:Page){
        this.page=p
        this.addtocart=p.getByRole('button',{name:'Add to cart'})
        this.price=p.locator('.inventory_item_price')
        this.carticon=p.getByRole('link')
        this.productname=p.getByRole('link')
        this.remove=p.getByRole('button',{name:'Remove'})
        //this.continueshopping=p.getByRole('button',{name:'Continue Shopping'})

    }
    async checkProductname(){
       
        await this.addtocart.nth(0).click()
        //await this.carticon.click()
        //await this.continueshopping.click()
        

    }
    async removebtn(){
        await this.remove.nth(0).click()

    }
    
}