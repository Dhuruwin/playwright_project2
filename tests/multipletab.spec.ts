import {test,expect} from '@playwright/test'
test('multiple tabs test',async({browser})=>{
const firstContext=await browser.newContext()
const firstPage=await firstContext.newPage()
const secPage=await firstContext.newPage()
const thirdPage=await firstContext.newPage()
await firstPage.goto('https://the-internet.herokuapp.com/windows')
await expect(firstPage).toHaveURL('https://the-internet.herokuapp.com/windows')
await expect(firstPage.getByRole('link',{name:'Click Here'})).toBeEnabled()
await expect(firstPage.getByRole('link',{name:'Click Here'})).toBeVisible()
await firstPage.getByRole('link',{name:'Click Here'}).click()
//await firstPage.goto('https://the-internet.herokuapp.com/windows/new')
await expect(firstPage).toHaveURL('https://the-internet.herokuapp.com/windows/new')
await expect(firstPage.getByRole('heading', { name: 'New Window' })).toBeVisible();

await secPage.goto('https://the-internet.herokuapp.com/windows')
//await firstPage.goto('https://the-internet.herokuapp.com/windows/new')
await expect(firstPage).toHaveURL('https://the-internet.herokuapp.com/windows/new')
await expect(firstPage.getByRole('heading', { name: 'New Window' })).toBeVisible();

await thirdPage.goto('https://the-internet.herokuapp.com/windows')
//await firstPage.goto('https://the-internet.herokuapp.com/windows/new')
await expect(firstPage).toHaveURL('https://the-internet.herokuapp.com/windows/new')
await expect(firstPage.getByRole('heading', { name: 'New Window' })).toBeVisible();



})
