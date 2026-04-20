import { Page,Locator } from "@playwright/test";
export class dragdrop{
    readonly page :Page
    readonly draggable1:Locator
    readonly draggable2:Locator
    readonly dropzone:Locator
    readonly droppeditemlist:Locator
    readonly dragdemo2:Locator
    readonly dropable:Locator

    constructor(page:Page){
        this.page =page
        this.draggable1=page.getByText('Draggable 1')
        this.draggable2=page.getByText('Draggable 2')
        this.dropzone=page.locator('#mydropzone')
        this.droppeditemlist=page.locator('#droppedlist')
        this.dragdemo2=page.locator('#draggable')
        this.dropable=page.locator('#droppable')
        
    }
    async navigate(){
        await this.page.goto("https://www.testmuai.com/selenium-playground/drag-and-drop-demo/")
    }
    
    async drag1(){
        await this.draggable1.dragTo(this.dropzone)
        
    }
    async drag2(){
        await this.draggable2.dragTo(this.dropzone)

    }
    async dragtoTarget(){
        await this.dragdemo2.dragTo(this.dropable)
    }
}