import {Page,Locator} from '@playwright/test'
export class CheckOut{
    readonly file:Page
    readonly FirstName :Locator
    readonly LastName:Locator
    readonly ZipCode:Locator
    readonly Continue:Locator
    readonly Cancel :Locator
    readonly Finish:Locator
    readonly successMsg:Locator

    constructor(P:Page){
        this.file=P
        this.FirstName=P.getByPlaceholder('First Name')
        this.LastName=P.getByPlaceholder('Last Name')
        this.ZipCode=P.getByPlaceholder('Zip/Postal Code')
        this.Continue=P.getByRole('button',{name:'Continue'})
        this.Cancel=P.getByRole('button',{name:'Cancel'})
        this.Finish=P.getByRole('button',{name:'Finish'})
        this.successMsg=P.getByText('')
    }
    async CheckOutPage(first:string,last:string,pin:number){
        await this.FirstName.fill(first)
        await this.LastName.fill(last)
        await this.ZipCode.fill(pin)
    }
    async finsih(){
        await this.Finish.click()
    }
    async success(){
        await this.success
    }
    async cancel(){
        await this.Finish.click()
    }
}
