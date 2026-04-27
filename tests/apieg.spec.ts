/* import {test,expect} from '@playwright/test'
test.describe('api  testing',async()=>{
  test('get testing',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/posts')
    expect(response.status()).toBe(200)
    const data =await response.json()
    //console.log(`required data is ${data[0]}`)
    console.log(`required data is ${data[0].password}`)
  })
})
 */
import { test, expect } from '@playwright/test';

test.describe('API Testing - 4 HTTP Methods', () => {

  test('GET - Get all posts', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log(data);

    expect(data.length).toBeGreaterThan(0);
  });

  test('POST - Create new post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Playwright API Testing',
        body: 'Learning POST method',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);

    const data = await response.json();
    console.log(data);

    expect(data.title).toBe('Playwright API Testing');
    expect(data.body).toBe('Learning POST method');
    expect(data.userId).toBe(1);
  });

  test('PUT - Update existing post', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 1
      }
    });

    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log(data);

    expect(data.title).toBe('Updated Title');
    expect(data.body).toBe('Updated body content');
  });

  test('DELETE - Delete post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log(data);

    expect(data).toEqual({});
  });

});