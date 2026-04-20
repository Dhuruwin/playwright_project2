import {test} from '@playwright/test'

import { login } from '../page/login'

test ('l1page',async({page})=>
{
    
    const logtest=new login(page)
    await logtest.gotoLoginPage()
    await logtest.loginUser('standard_user','secret_sauce')
    await logtest.verifyloginpage()


})