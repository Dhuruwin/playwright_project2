import {test,expect} from '@playwright/test'
import { HomePage } from '../page/Demohome'
test('Validate elements in home page',async ({page})=>{
    const user1=new HomePage(page)

    await user1.goto()
    await user1.HomePagecheck()

    await expect(user1.file).toHaveURL('https://www.demoblaze.com/index.html')

}
)
