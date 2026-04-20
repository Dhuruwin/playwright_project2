 import { Page,Locator } from "@playwright/test";
export class addCart{
    readonly file:Page
    readonly username: Locator
    readonly password : Locator
    readonly loginBtn : Locator
    

    constructor (p:Page){
     this.file=p
     this.username=this.file.getByPlaceholder('username')
     this.password=this.file.getByPlaceholder('password')
     this.loginBtn=this.file.getByRole('button',{name:'Login'})

    }
    async wait(){
        await this.file.goto("https://www.saucedemo.com/")
    }
    async loginpage(user:string,password:string){
        await this.username.fill(user)
        await this.password.fill(password)
        await this.loginBtn.click()

    }
     
} 
