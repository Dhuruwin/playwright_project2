import { Page,Locator } from "@playwright/test";
export class dropdown{
    readonly page : Page
    readonly selectoption:Locator
    readonly multiselectoption:Locator
    readonly firstselected:Locator
    readonly secondselected:Locator

    
    constructor(page:Page){
        this.page=page
        this.selectoption=page.locator('#select-demo')
        this.multiselectoption=page.locator('#multi-select')
        this.firstselected=page.getByRole('button',{name:'First Selected'})
        this.secondselected=page.getByRole('button',{name:'Get Last Selected'})
    }
    async navigate(){
        await this.page.goto('https://www.testmuai.com/selenium-playground/select-dropdown-demo/')
        }
    async SelectDay(day:string){
        await this.selectoption.selectOption(day)
    }

    async MultiSelected(place:string[]){
        await this.multiselectoption.selectOption(place)
        
    }
    /* async MultiSelecLast(place:string){
        await this.multiselectoption.selectOption(place)

    } */
    
   
     async ClickfirstSelect(){
        await this.firstselected.click()
        
    }
    async ClickLast(){
        await this.secondselected.click()
       
    } 
}