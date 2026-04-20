import {test,expect} from '@playwright/test'
import { testmuai } from '../page/testmuai.page'
test.describe('testmuai website  testing',()=>{
 
    //get message
    test('checking demo form',async({page})=>{
const demoform=new testmuai(page)
await demoform.democheck()
await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/simple-form-demo/')
await expect(demoform.singleinput).toBeVisible()
await expect(demoform.entermsg).toBeVisible()
await expect(demoform.entermsg).toBeEnabled()
await expect(demoform.entermsg).toBeEditable()
await demoform.Entermsg("Welcome")
    })

test('get sum of two numbers',async({page})=>{
    const demoform=new testmuai(page)
    await demoform.democheck()

    await expect(demoform.firstnum).toBeEnabled()
    await expect(demoform.firstnum).toBeVisible()
    await expect(demoform.firstnum).toBeEditable()

    await expect(demoform.secondnum).toBeEnabled()
    await expect(demoform.secondnum).toBeVisible()
    await expect(demoform.secondnum).toBeEditable()

    await expect(demoform.getsum).toBeVisible()
    await demoform.addnum(67,"uii")

})

})




