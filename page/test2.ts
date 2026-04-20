import {Page,Locator} from '@playwright/test'
export class LoginPage{
    readonly file:Page
    readonly Username : Locator
    readonly Password : Locator
    readonly LoginButton : Locator
    readonly errorMsg : Locator

    constructor(p:Page){
        this.file=p
        this.Username=p.getByRole('textbox',{name:'Username'})
        this.Password=p.getByRole('textbox',{name:'Password'})
        this.LoginButton=p.getByRole('button',{name:'Login'})
        this.errorMsg=p.locator('[data-test="error"]')

    }
    async goto(){
        await this.file.goto("https://www.saucedemo.com/")
    }

    async Login(user : string,password:string){
        await this.Username.fill(user)
        await this.Password.fill(password)
        await this.LoginButton.click()
    }
    async verifyLoginpage(){
        await this.file.waitForURL('https://www.saucedemo.com/inventory.html')
    }

}
