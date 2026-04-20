import { Page,Locator } from "@playwright/test";
export class LoginPage{
    readonly page :Page
    readonly username : Locator
    readonly password : Locator
    readonly loginbtn : Locator
    readonly errormsg : Locator

    constructor(p:Page){
        this.page=p
        this.username=p.getByPlaceholder('Username')
        this.password=p.getByPlaceholder('Password')
        this.loginbtn=p.getByRole('button',{name:'Login'})
        this.errormsg=p.getByText('Epic sadface')
    }
        
        
        async  gotoLoginpage(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async Login(username : string,password : string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }
    
    
}