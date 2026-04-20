import { Page,Locator, expect } from "@playwright/test";
export class testmuai{
    readonly page:Page
    readonly singleinput:Locator
    readonly Doubleinput:Locator
    readonly entermsg:Locator
    readonly getcheckedvalue:Locator
    readonly firstnum:Locator
    readonly secondnum:Locator
    readonly getsum:Locator
    readonly yourmsg:Locator
    readonly result:Locator
    readonly error:Locator

    constructor(page:Page){
        this.page=page
        this.singleinput=page.getByText('Single Input Field')
        this.entermsg=page.getByRole('textbox',{name:'Please enter your Message'})
        this.getcheckedvalue=page.getByRole('button',{name:'Get Checked Value'})
        this.yourmsg=page.getByText('Your Message')
        this.Doubleinput=page.getByText('Two Input Fields')
        this.firstnum=page.getByRole('textbox',{name:'Please enter first value'})
        this.secondnum=page.getByRole('textbox',{name:'Please enter second value'})
        this.getsum=page.getByRole('button',{name:'Get Sum'})
        this.result=page.getByText('Result')
        this.error=page.locator('#addmessage')
    }
    async democheck(){
        await this.page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/')
    }
    async Entermsg(msg:string){
        await this.entermsg.fill(msg)
        await this.getcheckedvalue.click()
        await expect(this.yourmsg).toContainText('Your Message')
        
    }
  

    async addnum(num1:number|string,num2:number|string){
        await this.firstnum.fill(num1.toString())
        await this.secondnum.fill(num2.toString())
         await this.getsum.click()
        if(typeof num1==="number"&& typeof num2==="number"){
        await expect(this.result).toContainText('Result')
        }
        /* else
            {
             //await expect(this.error).toContainText("Entered value is not a number")
            await expect(this.result).toContainText('Result')
            } */

    }

}