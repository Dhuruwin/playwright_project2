/* import { Page,Locator } from "@playwright/test";
export class inventoryPage{
    readonly file:Page
    readonly AddtoCart : Locator
    readonly cartIcon :Locator
    readonly product : Locator

    constructor (p:Page){
        this.file=p
        this.AddtoCart=this.file.getByRole('button',{name :'Add-to-Cart'})
        this.cartIcon=this.file.getByRole('link',{name:'shopping cart'})
        this.product=this.file.getByText('Sauce Labs Backpack')

    }
    async addToCart(){
        await this.AddtoCart.click()
    }
    async goTocart(){
        await this.cartIcon.click()
    }
} */
import { Page, Locator } from "@playwright/test";

export class InventoryPage {
    readonly page: Page
    readonly addToCartBtn: Locator
    readonly cartIcon: Locator
    readonly product: Locator

    constructor(page: Page) {
        this.page = page
        this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' })
        this.cartIcon = page.getByRole('link', { name: 'shopping cart' })
        this.product = page.getByText('Sauce Labs Backpack')
    }

    async addProductToCart() {
        await this.addToCartBtn.click()
    }

    async goToCart() {
        await this.cartIcon.click()
    }
}