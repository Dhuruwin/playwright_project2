import { expect, Locator ,Page } from "@playwright/test";
export class InvenTory{
    readonly file:Page
    readonly addtocart : Locator
    readonly carticon : Locator
    readonly product :Locator
    readonly remove : Locator

    constructor(p:Page){
        this.file=p
        this.addtocart=p.getByRole('button',{name :'Add to cart'})
        this.carticon=p.getByRole('link',{name :'Cart icon'})
        this.product = p.getByText('Sauce Labs Backpack')
        this.remove=p.getByRole('button',{name:'Remove'})

    }
    async productPage(){
        await expect(this.file).toHaveTitle('Swag labs')
    }
    async addTocart(){
        await this.addtocart.click()
    }
    async cartIcon(){
        await this.carticon.click()
    }
    async verifyCart(){
        await expect(this.file).toHaveURL('https://www.saucedemo.com/cart.html')
    }
    async removeBtn(){
        await this.remove.click()
    }



}
/* import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {
    readonly file: Page
    readonly products: Locator
    readonly addToCartBtn: Locator
    readonly removeBtn: Locator
    readonly cartIcon: Locator
    readonly cartBadge: Locator
    readonly sortDropdown: Locator

    constructor(p: Page) {
        this.file = p
        this.products = p.locator('.inventory_item')
        this.addToCartBtn = p.getByRole('button', { name: 'Add to cart' })
        this.removeBtn = p.getByRole('button', { name: 'Remove' })
        this.cartIcon = p.locator('.shopping_cart_link')
        this.cartBadge = p.locator('.shopping_cart_badge')
        this.sortDropdown = p.locator('.product_sort_container')
    }

    // ✅ Validate Inventory Page
    async validateInventoryPage() {
        await expect(this.file).toHaveTitle('Swag Labs')
        await expect(this.products.first()).toBeVisible()
        await expect(this.products).not.toHaveCount(0)
        await expect(this.sortDropdown).toBeVisible()
    }

    // ✅ Add Product
    async addProductToCart() {
        await this.addToCartBtn.first().click()
        await expect(this.removeBtn).toBeVisible()
        await expect(this.cartBadge).toHaveText('1')
    }

    // ✅ Click Cart Icon
    async clickCartIcon() {
        await expect(this.cartIcon).toBeVisible()
        await this.cartIcon.click()
    }
} */