import { Page,Locator } from "@playwright/test";
export class radioButton{
    readonly page:Page
    readonly male:Locator
    readonly female:Locator
    readonly getvalue:Locator
    readonly message:Locator
    readonly radiobutton1:Locator
    readonly radiobutton2:Locator
    readonly disabledradiobtn:Locator
    readonly Male:Locator
    readonly Female:Locator
    readonly others:Locator
    readonly zerotofive:Locator
    readonly fivetofifteen:Locator
    readonly fifteentofifty:Locator
    readonly getvalues:Locator

    constructor(page:Page){
        this.page=page
        this.male=page.getByRole('radio',{name:'Male'}).first()
        this.female=page.getByRole('radio',{name:'Female'}).first() 
        this.getvalue=page.getByRole('button',{name:'Get value',exact:true})
        this.message=page.locator('p.text-black.radiobutton') //doubt
        this.radiobutton1=page.getByRole('radio',{name:'Radio Button 1'})
        this.radiobutton2=page.getByRole('radio',{name:'Radio Button 2'})
        this.disabledradiobtn=page.getByRole('radio',{name:'Disabled Radio Button'})
        this.Male=page.getByRole('radio',{name:'Male'}).nth(1)
        this.Female=page.getByRole('radio',{name:'Female'}).nth(1)
        this.others=page.getByRole('radio',{name:'Other'})
        this.zerotofive=page.getByRole('radio',{name:'0 to 5'})
        this.fivetofifteen=page.getByRole('radio',{name:'5 to 15'})
        this.fifteentofifty=page.getByRole('radio',{name:'15 to 50'})
        this.getvalues=page.getByRole('button',{name:'Get values',exact:true})
        
    }
    async navigate(){
        await this.page.goto("https://www.testmuai.com/selenium-playground/radiobutton-demo/")
    }
    async selectMale(){
        await this.male.click()
    }
    async selectFemale(){
        await this.female.click()
    }
    async togetValue(){
        await this.getvalue.click()
    }
    async radioBtn1(){
        await this.radiobutton1.click()
    }
    async radiobtn2(){
        await this.radiobutton2.click()
    }
    async SelecTMale(){
        await this.Male.click()
    }
    async SelecTFemale(){
        await this.Female.click()
    }
    async SelectOthers(){
        await this.others.click()
    }
    async zeroTofive(){
        await this.zerotofive.click()
    }
    async fiveTofifteen(){
        await this.fivetofifteen.click()
    }
    async fifteenToFifty(){
        await this.fifteentofifty.click()
    }
    async selectGetvalues(){
        await this.getvalues.click()
    }
}