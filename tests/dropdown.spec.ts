import{test,expect} from '@playwright/test'
import { dropdown } from '../page/dropdown.page'

test.describe('drop down test',()=>{
    let Dropdown:dropdown
    test.beforeEach('drop down page visiblity check',async({page})=>{
        Dropdown=new dropdown(page)
        await Dropdown.navigate()
        await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/select-dropdown-demo/')
        //await expect(page.getByRole('heading',{name:'Select Option'})).toBeVisible()
        await expect(page.getByText('Select Option', { exact: true })).toBeVisible();
        await expect(page.getByText('Multi Select Option')).toBeVisible();

        //await expect(page.getByRole('combobox',{name:'Please select'})).toBeVisible()
        //await expect(page.getByRole('combobox',{name:'Please select'})).toBeEnabled()
        //await expect(page.ge('heading',{name:'Multi Select Option'})).toBeVisible()
        await expect(Dropdown.firstselected).toBeVisible()
        await expect(Dropdown.firstselected).toBeEnabled()
        await expect(Dropdown.secondselected).toBeEnabled()
        await expect(Dropdown.secondselected).toBeVisible()
    })
        
        test.skip('select day',async({page})=>{
            await Dropdown.SelectDay('Saturday')
            await expect(page.getByText('Day selected :- Saturday')).toBeVisible();
        })
        test('multi option selected',async({page})=>{
            await Dropdown.MultiSelected(['New York','Ohio'])

            await Dropdown.ClickfirstSelect()
            //await expect(page.locator('.genderbutton')).toContainText('New York')
            await expect(page.getByText('First selected option is :')).toContainText('New York');

            await Dropdown.ClickLast()
            //await expect(page.locator('groupradiobutton block break-words')).toContainText('Ohio')
            await expect(page.getByText('Last selected option is :')).toContainText('Ohio');

           
        })

})
    
