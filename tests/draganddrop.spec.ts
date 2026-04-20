import{test,expect} from '@playwright/test'
import { dragdrop } from '../page/drag_and_drop.page'
test.describe('drag and drop check',()=>{
    let dragBtn :dragdrop

    test.beforeEach('page check',async({page})=>{
        dragBtn=new dragdrop(page)

        await dragBtn.navigate()
        await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/drag-and-drop-demo/')
        await expect(page.getByText('Drag and Drop (Demo 1)')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Dropped Items List' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Drop here' })).toBeVisible();
        await expect(page.getByText('Drag and Drop (Demo 2)')).toBeVisible();
       await expect(dragBtn.draggable1).toBeVisible()
        await expect(dragBtn.draggable2).toBeVisible()
        await expect(dragBtn.dragdemo2).toHaveText('Drag me to my target')
        await expect(dragBtn.dragdemo2).toBeVisible()
        await expect(dragBtn.dropable).toHaveText('Drop here')
        await expect(dragBtn.dropable).toBeVisible()


    })

    test('drag first text',async({page})=>{
        await dragBtn.drag1()
        await expect(dragBtn.droppeditemlist).toHaveText('Draggable 1')
        await page.reload()
        await expect(dragBtn.droppeditemlist).not.toHaveText('Draggable 1')
    
    })
    test('drag second text',async({page})=>{
        await dragBtn.drag2()
        await expect(dragBtn.droppeditemlist).toHaveText('Draggable 2')
        await page.reload()
        await expect(dragBtn.droppeditemlist).not.toHaveText('Draggable 2')
    })
    test('drag demo2',async({page})=>{
        await dragBtn.dragtoTarget()
        await expect(dragBtn.dropable).toHaveText('Dropped!')
        await page.reload()
        await expect(dragBtn.dropable).toHaveText('Drop here')

    })

})