import { Page,Locator } from "@playwright/test";
export class checkbox{
    readonly page:Page
    readonly singlecheckbox:Locator
    readonly option1:Locator
    readonly option2:Locator
    readonly option3:Locator
    readonly option4:Locator
    readonly multioption1:Locator
    readonly multioption2:Locator
    readonly multioption3:Locator
    readonly multioption4:Locator
    readonly checkall:Locator
    readonly uncheckall:Locator

    constructor(page:Page){
        this.page=page
        this.singlecheckbox=page.getByRole('checkbox',{name:'Click on check box'})
        this.option1=page.getByRole('checkbox',{name:'Option 1'}).nth(0)
        this.option2=page.getByRole('checkbox',{name:'Option 2'}).nth(0)
        this.option3=page.getByRole('checkbox',{name:'Option 3'}).nth(0)
        this.option4=page.getByRole('checkbox',{name:'Option 4'}).first()
        this.multioption1=page.getByRole('checkbox',{name:'Option 1'}).nth(1)
        this.multioption2=page.getByRole('checkbox',{name:'Option 2'}).nth(1)
        this.multioption3=page.getByRole('checkbox',{name:'Option 3'}).nth(1)
        this.multioption4=page.getByRole('checkbox',{name:'Option 4'}).nth(1)
        this.checkall=page.getByRole('button',{name:'Check All'})
        this.uncheckall=page.getByRole('button',{name:'Uncheck All'})
    }
    async navigate(){
        await this.page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/")
    }
    async singleCheckbox(){
        await this.singlecheckbox.check()
    }
    async checkOpt1(){
        await this.option1.check()
    }
    async checkOpt2(){
        await this.option2.check()
    }
    
    async multicheckbox(){
        await this.checkall.click()
        await this.multioption1.check()
        await this.multioption2.check()
        await this.multioption3.check()
        await this.multioption4.check()
    }
    async uncheckallbtn(){
        await this.uncheckall.click()
    }
}