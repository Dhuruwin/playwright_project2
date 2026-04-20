import { Page,Locator } from "@playwright/test";
export class HomePage{
    readonly file:Page
    readonly Home:Locator
    readonly Contact : Locator
    readonly AboutUs : Locator
    readonly Cart : Locator
    readonly Login : Locator
    readonly SignUp : Locator

    constructor(p:Page){
        this.file=p
        this.Home=p.getByRole('link',{name:'Home'})
        this.Contact=p.getByRole('link',{name:'Contact'})
        this.AboutUs=p.getByRole('link',{name:'AboutUs'})
        this.Cart=p.getByRole('link',{name:'Cart'})
        this.Login=p.getByRole('link',{name:'Login'})
        this.SignUp=p.getByRole('link',{name:'SignUp'})
    }
    async goto(){
        await this.file.goto('https://www.demoblaze.com/')
    }
    async HomePagecheck(){
        await this.Home.click()
        await this.file.pause()
        await this.Contact.click()

        await this.AboutUs.click()
        await this.Cart.click()
        await this.Login.click()
        await this.SignUp.click()
    }
}