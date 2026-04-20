import {Page ,Locator} from  '@playwright/test'

export class login{
    readonly Page : Page
    readonly username :Locator
    readonly password : Locator
    readonly loginbtn : Locator

    constructor(p:Page){
        this.Page=p
        this.username=p.locator('#user-name')
        this.password=p.locator('[data-test="password"]')
        this.loginbtn=p.locator('[data-test="login-button"]')
    }

    async gotoLoginPage(){
        await this.Page.goto("https://www.saucedemo.com/")

    }
    async loginUser(user:string,password:string){
        await this.username.fill(user)
        await this.password.fill(password)
        await this.loginbtn.click()

    }
    async verifyloginpage(){
        await this.Page.waitForURL('https://www.saucedemo.com/inventory.html')
    }
}