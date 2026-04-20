import {Page,Locator} from '@playwright/test'
export class paymentpage{
    readonly page :Page
    readonly finish :Locator
    readonly cancel : Locator

    constructor(p:Page){
        this.page=p
        this.finish=p.getByRole('button',{name:'Finish'})
        this.cancel=p.getByRole('button',{name:'Cancel'})
    }
    async cancelpayment(){
        await this.cancel.click()
    }

    async afterpayment(){
        await this.finish.click()
    }
    
    

}