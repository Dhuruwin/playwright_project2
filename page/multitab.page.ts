import {Page,Locator} from '@playwright/test'
export class multitab{
    readonly page:Page
    readonly username:Locator
    readonly password : Locator
    readonly loginbtn:Locator
    readonly logoutbtn:Locator

    constructor(page:Page){
        this.page=page
        this.username=page.getByLabel('username')
        this.password=page.getByLabel('password')
        this.loginbtn=page.getByRole('button',{name:'Login'})
        this.logoutbtn=page.getByRole('button',{name:'Logout'})
    }
    async navigate(){
        await this.page.goto(process.env.MULTITAB_URL)
    }
    async userdetails(user:string,pass:string){
        await this.username.fill(user)
        await this.password.fill(pass)
    }
    async loginclick(){
        await this.loginbtn.click()

    }
    async logoutclick(){
        await this.logoutbtn.click()
    }
}