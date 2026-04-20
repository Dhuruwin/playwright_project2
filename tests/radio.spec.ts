import {test,expect} from '@playwright/test'
import { radioButton } from '../page/radiobtn.page'
test.describe('radio button check',()=>{
    let radioPage:radioButton

   test.beforeEach(async({page})=>{
    radioPage=new radioButton(page)
   

    await radioPage.navigate()
    await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/radiobutton-demo/')
    await expect(radioPage.Male).toBeVisible()
    await expect(radioPage.Male).toBeEnabled()
    await expect(radioPage.female).toBeVisible()
    await expect(radioPage.female).toBeEnabled()
    await expect(radioPage.getvalue).toBeVisible()
    await expect(radioPage.radiobutton1).toBeVisible()
    await expect(radioPage.radiobutton1).toBeEnabled()
    await expect(radioPage.radiobutton2).toBeVisible()
    await expect(radioPage.radiobutton2).toBeEnabled()
    await expect(radioPage.disabledradiobtn).toBeVisible()
    await expect(radioPage.Male).toBeVisible()
    await expect(radioPage.Male).toBeEnabled()
    await expect(radioPage.Female).toBeEnabled()
    await expect(radioPage.Female).toBeVisible()
    await expect(radioPage.others).toBeVisible()
    await expect(radioPage.others).toBeEnabled()
    await expect(radioPage.zerotofive).toBeVisible()
    await expect(radioPage.zerotofive).toBeEnabled()
    await expect(radioPage.fifteentofifty).toBeVisible()
    await expect(radioPage.fifteentofifty).toBeEnabled()
    await expect(radioPage.fivetofifteen).toBeVisible()
    await expect(radioPage.fivetofifteen).toBeEnabled()
    await expect(radioPage.Male).not.toBeChecked()
        await expect(radioPage.Female).not.toBeChecked()
        await expect(radioPage.others).not.toBeChecked()
        await expect(radioPage.zerotofive).not.toBeChecked()
        await expect(radioPage.fivetofifteen).not.toBeChecked()
        await expect(radioPage.fifteentofifty).not.toBeChecked()
    await expect(radioPage.getvalues).toBeVisible()
    })

    test('male button checkon',async({page})=>{
        await expect(radioPage.male).not.toBeChecked()
        await radioPage.selectMale()
        await expect(radioPage.female).not.toBeChecked()
        await expect(radioPage.male).toBeChecked()
        await radioPage.togetValue()
        await expect(radioPage.message).toHaveText("Radio button 'Male' is checked")
        
    })

    test('female button checkon',async({page})=>{
        await expect(radioPage.female).not.toBeChecked()
        await radioPage.selectFemale()
        await expect(radioPage.male).not.toBeChecked()
        await expect(radioPage.female).toBeChecked()
        await radioPage.togetValue()
        await expect(radioPage.message).toHaveText("Radio button 'Female' is checked")
    })

    test('dont click any value',async({page})=>{
        await radioPage.togetValue()
        await expect(radioPage.message).toHaveText("Radio button is Not checked")
    })

    test('first radio button check',async({page})=>{
        await expect(radioPage.radiobutton1).not.toBeChecked()
        await expect(radioPage.radiobutton2).not.toBeChecked()
        await expect(radioPage.disabledradiobtn).toBeDisabled()
        await radioPage.radioBtn1()
        await expect(radioPage.radiobutton1).toBeChecked()
        await expect(radioPage.radiobutton2).not.toBeChecked()
        await expect(radioPage.disabledradiobtn).toBeDisabled()
    })

    test('radiobutton 2 checkon',async({page})=>{
         await expect(radioPage.radiobutton1).not.toBeChecked()
        await expect(radioPage.radiobutton2).not.toBeChecked()
        await expect(radioPage.disabledradiobtn).toBeDisabled()
        await radioPage.radiobtn2()
        await expect(radioPage.radiobutton1).not.toBeChecked()
        await expect(radioPage.radiobutton2).toBeChecked()
        await expect(radioPage.disabledradiobtn).toBeDisabled()

    })

    test('select male button',async({page})=>{
        
        await radioPage.selectMale()
        await expect(radioPage.male).toBeChecked()
        await radioPage.selectGetvalues()
    })

    test('select female button',async({page})=>{
        await radioPage.selectFemale()
        await expect(radioPage.female).toBeChecked()
        await radioPage.selectGetvalues()

    })
    test('select others',async({page})=>{
        await radioPage.SelectOthers()
        await expect(radioPage.others).toBeChecked()
        await radioPage.selectGetvalues()
    })
    test('click zero to five',async({page})=>{
        await radioPage.zeroTofive()
        await expect(radioPage.zerotofive).toBeChecked()
        await radioPage.selectGetvalues()
    })
    test('five to fifteen ',async({page})=>{
        await radioPage.fiveTofifteen()
        await expect(radioPage.fivetofifteen).toBeChecked()
        await radioPage.selectGetvalues()
    })
    test('fifteen to fifty',async({page})=>{
        await radioPage.fifteenToFifty()
        await expect(radioPage.fifteentofifty).toBeChecked()
        await radioPage.selectGetvalues()
    })
})