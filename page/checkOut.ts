import { Page,Locator } from "@playwright/test";
export class Checkpage{
    readonly page :Page
    readonly container : Locator
    readonly firstname : Locator
    readonly lastname : Locator
    readonly Zipcode:Locator
    readonly continue : Locator

    constructor(p:Page){
        this.page=p
         this.container =p.getByText('Checkout: Your Information')
        this.firstname=p.getByPlaceholder("First Name")
        this.lastname=p.getByPlaceholder("Last Name")
        this.Zipcode=p.getByPlaceholder("Zip/Postal Code")
        this.continue=p.getByRole('button',{name:'Continue'})
    }

    async checkOutpage(Firstname:string,Lastname:string,Zipcode:string){
        //await this.container.isVisible
        await this.firstname.fill(Firstname)
        await this.lastname.fill(Lastname)
        await this.Zipcode.fill(Zipcode)
        await this.continue.click()

    }
}