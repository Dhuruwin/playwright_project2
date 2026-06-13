import { Page,Locator } from "@playwright/test";
export class AlertMsg{
    readonly page:Page
    readonly AlertBtnClick:Locator
    readonly ConfirmBtnClick:Locator
    readonly PromptBtnClick:Locator

    constructor(page:Page){
        this.page=page
        this.AlertBtnClick=page.getByRole('button',{name:'Click Me'}).first()
        this.ConfirmBtnClick=page.getByRole('button',{name:'Click Me'}).nth(1)
        this.PromptBtnClick=page.getByRole('button',{name:'Click Me'}).nth(2)
    }
    async Navigate(){
        await this.page.goto(process.env.ALERT_MSG!)
    }
    async AlerPopupHandle(){
        this.page.on('dialog',async(dialog)=>{
            console.log(dialog.message())
            await dialog.accept()
        })
    }
    async ConfirmAccept(){
        this.page.on('dialog',async(dialog)=>{
            console.log(dialog.message())
            await dialog.accept()
        })
    }
    async ConfirmbtnCancel(){
        this.page.on('dialog',async(dialog)=>{
             console.log(dialog.message())
            await dialog.dismiss()
        })
    }
    async PromptCheck(text:string){
        this.page.on('dialog',async(dialog)=>{
             console.log(dialog.message())
            await dialog.accept(text)
        })
    }
    async AlertMsg(){
       await this.AlertBtnClick.click()
    }
    async ConfirmBox(){
        await this.ConfirmBtnClick.click()
    }
    async PromptBox(){
       await this.PromptBtnClick.click()
    }

}