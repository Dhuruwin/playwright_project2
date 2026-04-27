import{test,expect} from '@playwright/test'
import { checkbox } from '../page/checkbox.page'

test.describe('checkbox test',()=>{
    let checkEle:checkbox
    test.beforeEach('to check elements',async({page})=>{
         checkEle =new checkbox(page)
         await checkEle.navigate()

        await expect(page).toHaveURL(process.env.CHECKBOX_URL!)
        await expect(page.getByRole('heading', { name: 'Checkbox Demo', exact: true })).toBeVisible()

        await expect(page.getByRole('heading',{name:'Single Checkbox Demo'})).toBeVisible()
        await expect(checkEle.singlecheckbox).toBeVisible()
        await expect(checkEle.singlecheckbox).toBeEnabled()
        await expect(checkEle.singlecheckbox).not.toBeChecked()

        await expect(page.getByRole('heading',{name:'Disabled Checkbox Demo'})).toBeVisible()
        await expect(checkEle.option1).toBeVisible()
        await expect(checkEle.option1).toBeEnabled()
        await expect(checkEle.option1).not.toBeChecked()

        await expect(checkEle.option2).toBeVisible()
        await expect(checkEle.option2).toBeEnabled()
        await expect(checkEle.option2).not.toBeChecked()

        await expect(checkEle.option3).toBeVisible()
        await expect(checkEle.option3).toBeDisabled()

        await expect(checkEle.option4).toBeVisible()
        await expect(checkEle.option4).toBeDisabled()
               
        await expect(page.getByRole('heading',{name:'Multiple Checkbox Demo'})).toBeVisible()
        await expect(checkEle.checkall).toBeEnabled()
        await expect(checkEle.checkall).toBeVisible()

        await expect(checkEle.multioption1).toBeEnabled()
        await expect(checkEle.multioption1).toBeVisible()
        await expect(checkEle.multioption1).not.toBeChecked()

        await expect(checkEle.multioption2).toBeEnabled()
        await expect(checkEle.multioption2).toBeVisible()
        await expect(checkEle.multioption2).not.toBeChecked()

        await expect(checkEle.multioption3).toBeEnabled()
        await expect(checkEle.multioption3).toBeVisible()
        await expect(checkEle.multioption3).not.toBeChecked()

        await expect(checkEle.multioption4).toBeEnabled()
        await expect(checkEle.multioption4).toBeVisible()
        await expect(checkEle.multioption4).not.toBeChecked()
    })
    test('single checkbox test',async({page})=>{
        await checkEle.singleCheckbox()
        await expect(checkEle.singlecheckbox).toBeChecked()
        await expect(page.getByText('Checked!')).toBeVisible();
        await page.reload()
         await expect(checkEle.singlecheckbox).not.toBeChecked()
        await expect(page.getByText('Checked!')).not.toBeVisible();
    })

    test('disabled checkbox demo',async({page})=>{
        await checkEle.checkOpt1()
        await checkEle.checkOpt2()
        await expect(checkEle.option1).toBeChecked()
        await expect(checkEle.option2).toBeChecked()
        await page.reload()
        await expect(checkEle.option1).not.toBeChecked()
        await expect(checkEle.option2).not.toBeChecked()
    })


    test('multi checkbox test',async({page})=>{
        await checkEle.multicheckbox()
        await expect(checkEle.multioption1).toBeChecked()
        await expect(checkEle.multioption2).toBeChecked()
        await expect(checkEle.multioption3).toBeChecked()
        await expect(checkEle.multioption4).toBeChecked()
        await expect(checkEle.uncheckall).toBeEnabled()
        await expect(checkEle.uncheckall).toBeVisible()
        await checkEle.uncheckallbtn()
        await expect(checkEle.checkall).toBeEnabled()
        await expect(checkEle.checkall).toBeVisible()
        await expect(checkEle.multioption1).not.toBeChecked()
        await expect(checkEle.multioption2).not.toBeChecked()
        await expect(checkEle.multioption3).not.toBeChecked()
        await expect(checkEle.multioption4).not.toBeChecked()

    })
   

})