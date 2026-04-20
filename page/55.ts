import { Page,Locator } from "@playwright/test";
export class loginpage{
    readonly file:Page
    readonly username : Locator
    readonly password : Locator
    readonly loginbutton : Locator

    constructor(p:Page){
        this.file=p
        this.username=p.getByRole('textbox',{name :'Username'})
        this.password=p.getByRole('textbox',{name:'Password'})
        this.loginbutton=p.getByRole('button',{name:'Login'})
    }
    async loginUser(user:string,pass:string){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginbutton.click()
    }
    async verifyloginpage(){
        await this.file.waitForURL('https://www.saucedemo.com/inventory.html')
    }
}